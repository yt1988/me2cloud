// The Me2Cloud Worker. Files in ./public are served before it runs, so it only sees paths that are not files. It serves
// the command-line version, vps2cloud (github.com/yt1988/vps2cloud):
//   /i, /i.ps1            its installers (install.sh, install.ps1 of the latest release):
//                         curl -fsSL https://m2c.1ms.dog/i | sh   ·   irm https://m2c.1ms.dog/i.ps1 | iex
//   /v                    the latest vps2cloud release, "0.6.0", asked of GitHub and kept for 10 minutes; a GitHub
//                         outage serves the last version read (kept for a year) rather than failing the install
//   /dl/<tag>/<file>      a file of that release, fetched from GitHub once and then kept (a tag's files never change);
//                         <tag> may be "latest", which redirects to the current tag
//   /tokyo.json           the Tokyo health check of every region (server/watch, on the 1ms.dog server), cut down to
//                         what the page shows and kept for 5 minutes; the server runs every 15
//   /r                    where its share links open (/r#s=…): the home page, which reads the result from the fragment
//   anything else         a bare 404; 1ms-shell puts the shared 1ms.dog 404 page in front of it
// The tool and its installers try these before GitHub, which is often slow or blocked in mainland China.

const REPO = "yt1988/vps2cloud";
const FILE = /^(vps2cloud-[a-z0-9]+-[a-z0-9]+(\.exe)?|checksums\.txt|install\.sh|install\.ps1)$/;
const INSTALLER = { "/i": "install.sh", "/i.ps1": "install.ps1" };
const LATEST_KEY = "https://m2c.1ms.dog/__latest";
// the last version read, kept for a year: when GitHub is unreachable it is served rather than failing the install
const LATEST_STALE_KEY = "https://m2c.1ms.dog/__latest-stale";

export default {
  async fetch(req, _env, ctx) {
    const url = new URL(req.url);
    if (req.method !== "GET" && req.method !== "HEAD") return new Response("Method not allowed\n", { status: 405 });

    // the browser keeps the fragment across the redirect
    if (url.pathname === "/r") return new Response(null, { status: 302, headers: { location: "/", "cache-control": "public, max-age=3600" } });

    if (url.pathname === "/v" || INSTALLER[url.pathname]) {
      const v = await latest(ctx);
      if (INSTALLER[url.pathname]) {
        if (!v) return unavailableInstaller(INSTALLER[url.pathname], req);
        const res = await release(`v${v}`, INSTALLER[url.pathname], req, ctx);
        // a failed download of the installer itself is the same thing to the visitor: say it in the script
        return res.status >= 500 ? unavailableInstaller(INSTALLER[url.pathname], req) : res;
      }
      if (!v) return unavailable(req, "the vps2cloud version is unavailable");
      return new Response(v + "\n", { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=300" } });
    }

    const m = /^\/dl\/(latest|v\d+\.\d+\.\d+)\/([^/]+)$/.exec(url.pathname);
    if (m && FILE.test(m[2])) {
      if (m[1] === "latest") {
        const v = await latest(ctx);
        if (!v) return unavailable(req, "this release file is unavailable");
        return new Response(null, { status: 302, headers: { location: `/dl/v${v}/${m[2]}`, "cache-control": "public, max-age=300" } });
      }
      return release(m[1], m[2], req, ctx);
    }

    if (url.pathname === "/tokyo.json") return tokyo(req, ctx);

    return new Response(req.method === "HEAD" ? null : "Not found\n", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=0, must-revalidate" },
    });
  },
};

// per region and IP family: the 24-hour median and share of runs answered, and since when it has been unreachable
const TOKYO = "https://data.1ms.dog:2083/me2cloud/summary.json";
const TOKYO_KEY = "https://m2c.1ms.dog/__tokyo";
async function tokyo(req, ctx) {
  const cache = caches.default;
  let res = await cache.match(TOKYO_KEY);
  if (!res) {
    let j = null;
    try {
      const up = await fetch(TOKYO, { signal: AbortSignal.timeout(5000) });
      if (up.ok) j = await up.json();
    } catch {}
    if (!j || !j.regions) return new Response("{}", { status: 502, headers: { "content-type": "application/json", "cache-control": "no-store" } });
    const regions = {};
    for (const [id, fams] of Object.entries(j.regions)) {
      regions[id] = {};
      for (const [f, x] of Object.entries(fams)) regions[id][f] = { m: x.med24 ?? null, u: x.up24 ?? null, ...(x.down ? { d: x.down } : {}) };
    }
    res = new Response(JSON.stringify({ time: j.time, regions }), { headers: { "content-type": "application/json", "cache-control": "public, max-age=300" } });
    ctx.waitUntil(cache.put(TOKYO_KEY, res.clone()));
  }
  // kept 5 minutes here; the browser asks again each time, since the zone raises any short max-age to 4 hours
  const out = new Response(req.method === "HEAD" ? null : res.body, { headers: { "content-type": "application/json", "cache-control": "public, max-age=0, must-revalidate" } });
  return out;
}

// the newest release's version, from the redirect GitHub gives for /releases/latest. Kept 10 minutes; the last version
// read is also kept for a year, so a GitHub outage serves that instead of failing the install.
async function latest(ctx) {
  const cache = caches.default;
  const hit = await cache.match(LATEST_KEY);
  if (hit) return (await hit.text()).trim();
  const last = await cache.match(LATEST_STALE_KEY);
  const v = await readLatest();
  if (v) {
    ctx.waitUntil(cache.put(LATEST_KEY, new Response(v, { headers: { "cache-control": "public, max-age=600" } })));
    ctx.waitUntil(cache.put(LATEST_STALE_KEY, new Response(v, { headers: { "cache-control": "public, max-age=31536000" } })));
    return v;
  }
  return last ? (await last.text()).trim() : null;
}

// GitHub's releases are sometimes down for a minute. One retry, a second later, on a 5xx or a network error; a 4xx is
// a real answer and is taken at once.
async function ask(url, init) {
  for (let attempt = 0; ; attempt++) {
    if (attempt) await new Promise(r => setTimeout(r, 1000));
    let res;
    try {
      res = await fetch(url, init);
    } catch {
      if (attempt) return null;
      continue;
    }
    if (res.status < 500 || attempt) return res;
    try { await res.body?.cancel(); } catch {}
  }
}

async function readLatest() {
  const res = await ask(`https://github.com/${REPO}/releases/latest`, { method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(5000) });
  if (!res) return null;
  const tag = (res.headers.get("location") || "").split("/").pop();
  return /^v\d+\.\d+\.\d+$/.test(tag) ? tag.slice(1) : null;
}

// GitHub is the only source of the release list. When it is not answering and no earlier version was kept, say so in
// words: a bare 502 tells the visitor nothing.
function unavailable(req, what) {
  const body = req.method === "HEAD" ? null : `GitHub is not answering right now, so ${what}. Try again in a minute.\n`;
  return new Response(body, {
    status: 503,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store", "retry-after": "60" },
  });
}

// /i and /i.ps1 are run as scripts, so the answer has to be one: a 5xx would make `curl -fsSL … | sh` fail with nothing
// on screen. This says why and stops, in the script's own language. A 200 keeps the message; /v still answers 503, so a
// real outage is still seen by the check.
function unavailableInstaller(file, req) {
  const message = "GitHub is not answering right now, so the vps2cloud installer cannot be fetched. Try again in a minute.";
  const body = req.method === "HEAD" ? null
    : file === "install.ps1" ? `throw "${message}"\n`
    : `#!/bin/sh\necho "${message}" >&2\nexit 1\n`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } });
}

async function release(tag, file, req, ctx) {
  const cache = caches.default;
  const key = new Request(new URL(`/dl/${tag}/${file}`, req.url).toString());
  let res = await cache.match(key);
  if (!res) {
    let up;
    try {
      up = await ask(`https://github.com/${REPO}/releases/download/${tag}/${file}`, { redirect: "follow" });
    } catch {
      up = null;
    }
    if (!up) return unavailable(req, "this release file is unavailable");
    if (!up.ok) return new Response(`${tag}/${file}: GitHub answered ${up.status}\n`, { status: up.status === 404 ? 404 : 502 });
    const text = /\.(txt|sh|ps1)$/.test(file);
    // no content-length: GitHub may send the file compressed, and the body here is already decompressed
    res = new Response(up.body, {
      headers: {
        "content-type": text ? "text/plain; charset=utf-8" : "application/octet-stream",
        "cache-control": "public, max-age=31536000, immutable",
        ...(text ? {} : { "content-disposition": `attachment; filename="${file}"` }),
      },
    });
    ctx.waitUntil(cache.put(key, res.clone()));
  }
  return req.method === "HEAD" ? new Response(null, { headers: res.headers }) : res;
}
