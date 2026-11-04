// The Me2Cloud Worker. Files in ./public are served before it runs, so it only sees paths that are not files. It serves
// the command-line version, vps2cloud (github.com/yt1988/vps2cloud):
//   /i, /i.ps1            its installers (install.sh, install.ps1 of the latest release):
//                         curl -fsSL https://m2c.1ms.dog/i | sh   ·   irm https://m2c.1ms.dog/i.ps1 | iex
//   /v                    the latest vps2cloud release, "0.6.0", asked of GitHub and kept for 10 minutes
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

export default {
  async fetch(req, _env, ctx) {
    const url = new URL(req.url);
    if (req.method !== "GET" && req.method !== "HEAD") return new Response("Method not allowed\n", { status: 405 });

    // the browser keeps the fragment across the redirect
    if (url.pathname === "/r") return new Response(null, { status: 302, headers: { location: "/", "cache-control": "public, max-age=3600" } });

    if (url.pathname === "/v" || INSTALLER[url.pathname]) {
      const v = await latest(ctx);
      if (!v) return new Response("GitHub did not answer\n", { status: 502 });
      if (INSTALLER[url.pathname]) return release(`v${v}`, INSTALLER[url.pathname], req, ctx);
      return new Response(v + "\n", { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=300" } });
    }

    const m = /^\/dl\/(latest|v\d+\.\d+\.\d+)\/([^/]+)$/.exec(url.pathname);
    if (m && FILE.test(m[2])) {
      if (m[1] === "latest") {
        const v = await latest(ctx);
        if (!v) return new Response("GitHub did not answer\n", { status: 502 });
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
  return req.method === "HEAD" ? new Response(null, { headers: res.headers }) : res;
}

// the newest release's version, from the redirect GitHub gives for /releases/latest
async function latest(ctx) {
  const cache = caches.default;
  const hit = await cache.match(LATEST_KEY);
  if (hit) return (await hit.text()).trim();
  const res = await fetch(`https://github.com/${REPO}/releases/latest`, { method: "HEAD", redirect: "manual" });
  const tag = (res.headers.get("location") || "").split("/").pop();
  if (!/^v\d+\.\d+\.\d+$/.test(tag)) return null;
  const v = tag.slice(1);
  ctx.waitUntil(cache.put(LATEST_KEY, new Response(v, { headers: { "cache-control": "public, max-age=600" } })));
  return v;
}

async function release(tag, file, req, ctx) {
  const cache = caches.default;
  const key = new Request(new URL(`/dl/${tag}/${file}`, req.url).toString());
  let res = await cache.match(key);
  if (!res) {
    const up = await fetch(`https://github.com/${REPO}/releases/download/${tag}/${file}`, { redirect: "follow" });
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
