#!/usr/bin/env node
// Builds the site in public/ from src/page.html (template + app code + endpoint and rule data) and src/i18n/*.mjs:
//   index.html, <lang>/index.html          one page per translated language
//   <provider>/, <lang>/<provider>/        a landing page per provider and language
//   app.<hash>.js                          the app code, shared and cached by every page
//   endpoints.json, rules/*                public data: endpoint registry and proxy rule sets
//   sitemap.xml, robots.txt, _headers      SEO and security headers (CSP)
// Usage: node scripts/build.mjs          write the files
//        node scripts/build.mjs --check  exit 1 if anything is out of date, or the app code does not parse (used in CI)
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

// canonical address for SEO tags, sitemap and rule-set headers; self-hosters set SITE_URL=https://your.domain
const SITE = (process.env.SITE_URL || "https://m2c.1ms.dog").replace(/\/+$/, "");
const pub = new URL("../public/", import.meta.url), src = new URL("../src/", import.meta.url);
// language, URL folder, og:locale; the first is the root
const LANGS = [["en", "", "en_US"], ["zh-CN", "zh-cn", "zh_CN"], ["zh-TW", "zh-tw", "zh_TW"], ["ja", "ja", "ja_JP"], ["ko", "ko", "ko_KR"],
  ["es", "es", "es_ES"], ["fr", "fr", "fr_FR"], ["de", "de", "de_DE"], ["pt", "pt", "pt_BR"], ["ru", "ru", "ru_RU"]];

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fill = (s, v) => { for (const k in v) s = s.split("{" + k + "}").join(v[k]); return s; };
const sha = s => createHash("sha256").update(s).digest("base64");
const strip = h => h.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const block = (text, name, decl) => {
  const B = `/* ${name}:BEGIN */`, E = `/* ${name}:END */`, a = text.indexOf(B), b = text.indexOf(E);
  if (a < 0 || b < 0) throw new Error(`${name} markers not found in src/page.html`);
  return JSON.parse(text.slice(a + B.length, b).trim().replace(new RegExp(`^const ${decl} =\\s*`), "").replace(/;$/, ""));
};

// Rule sets carry no policy; the user's config attaches DIRECT. They list exact hosts only: every endpoint
// (IPv6 hosts included) and the network check, with one comment per provider, so nothing else goes direct.
function ruleSets(E, detect) {
  const items = [], seen = new Set(), add = r => { if (!seen.has(r.d)) { seen.add(r.d); items.push(r); } };
  for (const e of E.endpoints) for (const u of [e.url, e.url6]) if (u) add({ v: e.vendor, d: new URL(u).hostname });
  detect.forEach(add);
  const note = r => r.v === "_detect" ? "Me2Cloud network check (Cloudflare, ipify, ident.me)" : [E.vendors[r.v].name, E.vendors[r.v].kind].join(" · ");
  const head = c => `${c} Me2Cloud: hosts used by the latency test, to be sent DIRECT. ${items.length} exact hosts, generated ${E.verified}.\n${c} ${SITE}/ · https://github.com/yt1988/me2cloud\n`;
  const list = (c, line) => items.map((r, k) => (k && note(items[k - 1]) === note(r) ? "" : `${c}# ${note(r)}\n`) + line(r.d)).join("\n") + "\n";
  return {
    "clash.yaml": head("#") + "payload:\n" + list("  ", d => `  - DOMAIN,${d}`),
    "surge.list": head("#") + list("", d => `DOMAIN,${d}`),
    "loon.list": head("#") + list("", d => `DOMAIN,${d}`),
    "quanx.list": head("#") + list("", d => `host, ${d}, direct`),
    "singbox.json": JSON.stringify({ version: 2, rules: [{ domain: items.map(r => r.d) }] }, null, 2) + "\n"
  };
}

async function loadI18n() {
  const out = {};
  for (const f of (await readdir(new URL("i18n/", src))).filter(f => f.endsWith(".mjs")))
    out[f.slice(0, -4)] = (await import(new URL("i18n/" + f, src).href + "?" + Date.now())).default;
  return out;
}

export async function build({ check = false } = {}) {
  const tpl = await readFile(new URL("page.html", src), "utf8");
  const I = await loadI18n();
  const E = block(tpl, "ENDPOINTS", "ENDPOINTS"), spec = block(tpl, "RULES", "RULE_SPEC");
  const langs = LANGS.filter(([l]) => I[l] && I[l].heroT);            // languages with a translation
  const vids = Object.keys(E.vendors);

  // app code: the big inline script becomes a shared, content-hashed file
  const scripts = [...tpl.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  if (scripts.length !== 2) throw new Error("expected the pre-paint script and the app script in src/page.html");
  const prepaint = scripts[0][1], app = scripts[1][1];
  new Function(app);                                                    // must parse
  const appName = `app.${createHash("sha256").update(app).digest("hex").slice(0, 10)}.js`;
  const shell = tpl.replace(scripts[1][0], `<script type="application/json" id="me2-data">{{data}}</script>\n<script src="/${appName}"></script>`);

  const path = (slug, sub) => "/" + (slug ? slug + "/" : "") + (sub ? sub + "/" : "");
  const pages = [];                                                     // { lang, slug, sub, html }
  for (const [lang, slug, locale] of langs) {
    const d = I[lang], en = I.en, T = k => d[k] ?? en[k] ?? k;
    const vn = v => ((d.vendors || {})[v] || {}).name || ((en.vendors || {})[v] || {}).name || E.vendors[v].name;
    const vk = v => ((d.vendors || {})[v] || {}).kind || ((en.vendors || {})[v] || {}).kind || E.vendors[v].kind;
    // Mainland China, Hong Kong, Macao and Taiwan: the language file's names (ccNames), as on the page
    const country = cc => (d.ccNames || en.ccNames || {})[cc] || (() => { try { return new Intl.DisplayNames([lang], { type: "region" }).of(cc); } catch (e) { return cc; } })();
    const city = c => { const m = /^(.*?)( \d)?$/.exec(c), C = d.cities || {}; return (C[m[1]] || (m[1] === "Taiwan" ? country("TW") : m[1])) + (m[2] || ""); };
    for (const sub of ["", ...vids]) {
      const v = sub || null, n = v ? E.endpoints.filter(e => e.vendor === v).length : E.endpoints.length;
      const url = SITE + path(slug, sub);
      const title = v ? fill(T("lp_title"), { v: vn(v), n }) : T("seo_title");
      const desc = v ? fill(T("lp_desc"), { v: vn(v), n }) : T("seo_desc");
      const alts = langs.map(([l, s]) => `<link rel="alternate" hreflang="${l}" href="${SITE + path(s, sub)}">`).join("\n") +
        `\n<link rel="alternate" hreflang="x-default" href="${SITE + path("", sub)}">`;
      const docs = d.docs || en.docs;
      const ld = { "@context": "https://schema.org", "@graph": [
        { "@type": "WebApplication", name: "Me2Cloud", url, applicationCategory: "UtilitiesApplication", operatingSystem: "Any", browserRequirements: "Requires JavaScript",
          description: desc, inLanguage: lang, isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
        { "@type": "FAQPage", mainEntity: docs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: strip(a).slice(0, 600) } })) }] };
      const head = [
        `<title>${esc(title)}</title>`,
        `<meta name="description" content="${esc(desc)}">`,
        `<meta name="keywords" content="${esc(v ? [vn(v), E.vendors[v].name, T("seo_kw")].join(", ") : T("seo_kw"))}">`,
        `<meta name="robots" content="index, follow, max-image-preview:large">`,
        `<meta name="application-name" content="Me2Cloud">`,
        `<meta name="theme-color" content="#f6f6f7" media="(prefers-color-scheme: light)">`,
        `<meta name="theme-color" content="#1c1c1c" media="(prefers-color-scheme: dark)">`,
        `<link rel="canonical" href="${url}">`, alts,
        `<link rel="icon" href="/favicon.ico" sizes="any">`, `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">`, `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
        `<meta property="og:type" content="website">`, `<meta property="og:site_name" content="Me2Cloud">`,
        `<meta property="og:title" content="${esc(title)}">`, `<meta property="og:description" content="${esc(desc)}">`, `<meta property="og:url" content="${url}">`,
        `<meta property="og:image" content="${SITE}/og/${lang.toLowerCase()}.png">`, `<meta property="og:image:width" content="1200">`, `<meta property="og:image:height" content="630">`,
        `<meta property="og:locale" content="${locale}">`,
        `<meta name="twitter:card" content="summary_large_image">`, `<meta name="twitter:title" content="${esc(title)}">`, `<meta name="twitter:description" content="${esc(desc)}">`,
        `<meta name="twitter:image" content="${SITE}/og/${lang.toLowerCase()}.png">`,
        `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`
      ].join("\n");
      // static text: every data-i element and placeholder already in this language, so crawlers read it without JS
      let body = shell
        .replace(/(<(\w+)\b[^>]*\sdata-i="(\w+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, k, inner, close) => open + esc(T(k)) + close)
        .replace(/(<[^>]*\sdata-ph="(\w+)"[^>]*>)/g, (m, el, k) => el.replace(/placeholder="[^"]*"/, `placeholder="${esc(T(k))}"`));
      if (v) body = body.replace(/<h1 data-i="heroT">[^<]*<\/h1>/, `<h1>${esc(fill(T("lp_h1"), { v: vn(v) }))}</h1>`);
      const helpNav = docs.map(([q], i) => `<button type="button" role="tab" data-hq="${i}" aria-selected="${i === 0}">${esc(q)}</button>`).join("");
      const helpSel = docs.map(([q], i) => `<option value="${i}">${i + 1} / ${docs.length} · ${esc(q)}</option>`).join("");
      const helpC = docs.map(([q, a], i) => `<article data-hqb="${i}"${i ? " hidden" : ""}><h2>${esc(q)}</h2><div class="dbody">${a}</div></article>`).join("");
      // landing content: the provider's regions, readable without JS
      let landing = "";
      if (v) {
        const eps = E.endpoints.filter(e => e.vendor === v);
        const groups = ["as", "na", "eu", "oc", "sa", "me", "af", "xx"].map(c => [c, eps.filter(e => e.continent === c)]).filter(([, l]) => l.length);
        landing = `<section class="card lp" id="lpRegions"><h2>${esc(fill(T("lp_h2"), { v: vn(v), n }))}</h2><p>${esc(fill(T("lp_intro"), { v: vn(v), k: vk(v) }))}</p>` +
          groups.map(([c, l]) => `<div class="lp-ct"><h3>${esc(T("ct_" + c))}</h3><ul class="lp-rs">${l.map(e => `<li>${esc(e.city === "?" ? e.region : city(e.city))}${e.country && e.country !== "--" ? " · " + esc(country(e.country)) : ""}<code>${esc(e.region)}</code></li>`).join("")}</ul></div>`).join("") + `</section>`;
      }
      const vendorNav = `<nav class="vlinks" aria-label="${esc(T("nav_h"))}"><b>${esc(T("nav_h"))}</b>${vids.map(x => `<a href="${path(slug, x)}"${x === v ? ' aria-current="page"' : ""}>${esc(vn(x))}</a>`).join("")}</nav>`;
      const paths = Object.fromEntries(langs.map(([l, s]) => [l, path(s, sub)]));
      const data = { lang, paths, page: v ? { vendor: v } : {}, i18n: lang === "en" ? { en } : { [lang]: d, en } };
      const html = body
        .replace("{{lang}}", lang).replace("{{pathsAttr}}", esc(JSON.stringify(paths))).replace("{{rootAttr}}", slug ? "" : " data-root")
        .replace("{{head}}", head).replace("{{helpNav}}", helpNav).replace("{{helpSel}}", helpSel).replace("{{helpC}}", helpC)
        .replace("{{homeHref}}", path(slug, "")).replace("{{homeCur}}", sub ? "" : ' aria-current="page"')
        .replace("{{landing}}", landing).replace("{{vendorNav}}", vendorNav)
        .replace("{{data}}", JSON.stringify(data).replace(/</g, "\\u003c"));
      if (/\{\{\w+\}\}/.test(html)) throw new Error("unfilled placeholder in " + path(slug, sub) + ": " + /\{\{\w+\}\}/.exec(html)[0]);
      pages.push({ file: (slug ? slug + "/" : "") + (sub ? sub + "/" : "") + "index.html", url, lang, slug, sub, html });
    }
  }

  // sitemap with language alternates; robots points at it
  const today = E.verified;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    pages.map(p => `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.sub ? "0.8" : "1.0"}</priority>\n` +
      langs.map(([l, s]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + path(s, p.sub)}"/>`).join("\n") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE + path("", p.sub)}"/>\n  </url>`).join("\n") + "\n</urlset>\n";
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;

  // Security headers. The only inline script is the pre-paint snippet, identical on every page, so one hash covers the site.
  // connect-src and img-src allow any https host: the test itself fetches provider and custom endpoints from the browser.
  const csp = ["default-src 'self'", `script-src 'self' 'sha256-${sha(prepaint)}'`, "style-src 'self' 'unsafe-inline'",
    "font-src 'self'", "img-src 'self' data: blob: https:", "connect-src 'self' https:", "manifest-src 'self'",
    "object-src 'none'", "base-uri 'none'", "form-action 'none'", "frame-ancestors 'none'"].join("; ");
  const headers = `# Generated by scripts/build.mjs
/*
  Content-Security-Policy: ${csp}
  Referrer-Policy: strict-origin-when-cross-origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Cross-Origin-Opener-Policy: same-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()
/app.*
  Cache-Control: public, max-age=31536000, immutable
/assets/*
  Cache-Control: public, max-age=604800
/assets/fonts/*
  ! Cache-Control
  Cache-Control: public, max-age=31536000, immutable
/flags/*
  Cache-Control: public, max-age=2592000
/endpoints.json
  Access-Control-Allow-Origin: *
/llms.txt
  Access-Control-Allow-Origin: *
  Content-Type: text/plain; charset=utf-8
/rules/*
  Content-Type: text/plain; charset=utf-8
  Cache-Control: public, max-age=3600
`;

  const files = {
    [appName]: app,
    "endpoints.json": JSON.stringify({ schema: 1, verified: E.verified, source: "https://github.com/yt1988/me2cloud",
      howTo: "From a browser: fetch(url + '?_=' + random, { method, mode: 'no-cors', cache: 'no-store', credentials: 'omit' }). Send one warm-up request (not counted), then time each request on the reused connection. method IMG means new Image().src = url and timing onerror/onload.",
      vendors: E.vendors, endpoints: E.endpoints }, null, 1) + "\n",
    "sitemap.xml": sitemap, "robots.txt": robots, "_headers": headers
  };
  for (const [name, text] of Object.entries(ruleSets(E, spec))) files["rules/" + name] = text;
  for (const p of pages) files[p.file] = p.html;

  const stale = [];
  for (const [name, text] of Object.entries(files)) {
    const url = new URL(name, pub);
    const current = await readFile(url, "utf8").catch(() => null);
    if (current === text) continue;
    if (check) { stale.push(name); continue; }
    await mkdir(new URL(".", url), { recursive: true });
    await writeFile(url, text);
  }
  // old app bundles and pages of languages that no longer build
  const old = (await readdir(pub)).filter(f => /^app\.[0-9a-f]+\.js$/.test(f) && f !== appName);
  if (check && old.length) stale.push(...old.map(f => f + " (old)"));
  else for (const f of old) await rm(new URL(f, pub));
  if (check && stale.length) { console.error(`Out of date: ${stale.slice(0, 8).join(", ")}${stale.length > 8 ? " …" : ""}. Run: node scripts/build.mjs`); process.exitCode = 1; return; }
  console.log(`${check ? "up to date" : "built"}: ${pages.length} pages (${langs.map(l => l[0]).join(", ")}), ${appName}, endpoints.json (${E.endpoints.length}), ${Object.keys(files).filter(f => f.startsWith("rules/")).length} rule sets, sitemap, _headers`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  await build({ check: process.argv.includes("--check") });
}
