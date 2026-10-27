#!/usr/bin/env node
// Builds endpoints.json from candidates.mjs + verify-cli.json (command-line check) and the browser findings below.
// Usage: node build-registry.mjs
import { readFile, writeFile } from "node:fs/promises";

const VERIFIED = "2026-10-27";

// Browser findings, per vendor (fetch no-cors from an https page, 5 GET + 3 HEAD per endpoint):
//   method   the request that keeps the connection alive, so warm samples ≈ RTT
//   cors     Access-Control-Allow-Origin: * — the page can read status/body to confirm it reached the vendor
//   tier     A: CORS + keep-alive · B: keep-alive, no CORS · C: no reuse possible, warm RTT not measurable
const VENDORS = {
  aws:          { name: "AWS",           method: "GET",  cors: true,  tier: "A", kind: "DynamoDB /ping",
                  note: "Body is 'healthy: dynamodb.<region>…', so the page can confirm the region." },
  oracle:       { name: "Oracle Cloud",  method: "HEAD", cors: true,  tier: "A", kind: "Object Storage",
                  note: "GET closes the connection after every 404 (each sample ≈ 3–4 RTT); HEAD reuses it." },
  vultr:        { name: "Vultr",         method: "HEAD", cors: true,  tier: "A", kind: "Looking glass",
                  note: "GET returns a ~12 KB page and adds 50–70 ms; HEAD avoids the body." },
  azure:        { name: "Microsoft Azure", method: "GET", cors: false, tier: "B", kind: "Cognitive Services",
                  note: "CNAME chain ends at <region>.cloudapp.azure.com. Very stable samples." },
  gcp:          { name: "Google Cloud",  method: "GET",  cors: false, tier: "B", kind: "Storage regional endpoint (rep)",
                  note: "HEAD adds a fixed ~1 s, never use it. Per-region IPs (34.1.x), not the global anycast front end." },
  aliyun:       { name: "Alibaba Cloud", method: "HEAD", cors: false, tier: "B", kind: "OSS",
                  note: "GET 403 closes the connection; HEAD reuses it." },
  tencent:      { name: "Tencent Cloud", method: "HEAD", cors: false, tier: "B", kind: "COS",
                  note: "GET 403 closes the connection; HEAD reuses it." },
  huawei:       { name: "Huawei Cloud",  method: "GET",  cors: false, tier: "B", kind: "OBS",
                  note: "GET and HEAD both keep the connection alive." },
  linode:       { name: "Akamai (Linode)", method: "HEAD", cors: false, tier: "B", kind: "Object Storage",
                  note: "Legacy speedtest.<dc>.linode.com hosts no longer answer; only regions with an Object Storage cluster are covered." },
  digitalocean: { name: "DigitalOcean",  method: "GET",  cors: false, tier: "B", kind: "Spaces",
                  note: "speedtest-<dc>.digitalocean.com is gone; NYC1/NYC2 have no Spaces (use nyc3 for New York)." },
  ovh:          { name: "OVHcloud",      method: "HEAD", cors: false, tier: "B", kind: "Speed test (proof)",
                  note: "proof.ovh.net hosts redirect to <site>.speedtest.network.ovh.net; the registry uses the targets." },
  hetzner:      { name: "Hetzner",       method: "IMG",  cors: false, tier: "C", kind: "Speed test",
                  note: "fetch() fails in the browser (cause unclear; curl works); <img> works but opens a new connection each time, so samples ≈ 3 RTT." },
  ibm:          { name: "IBM Cloud",     method: "HEAD", cors: false, tier: "B", kind: "Cloud Object Storage",
                  note: "GET 403 closes the connection; HEAD reuses it." },
  scaleway:     { name: "Scaleway",      method: "GET",  cors: false, tier: "B", kind: "Object Storage",
                  note: "GET and HEAD both keep the connection alive. Dual-stack hosts." },
  volcengine:   { name: "Volcengine",    method: "HEAD", cors: false, tier: "B", kind: "TOS",
                  note: "GET 403 closes the connection; HEAD reuses it." },
  baidu:        { name: "Baidu AI Cloud", method: "HEAD", cors: false, tier: "B", kind: "BOS",
                  note: "GET 403 closes the connection; HEAD reuses it." },
  naver:        { name: "Naver Cloud",   method: "HEAD", cors: false, tier: "B", kind: "Object Storage",
                  note: "GET 403 closes the connection; HEAD reuses it." }
};

// Per-endpoint exceptions seen in the browser
const FALLBACK_IMG = new Set(["vultr:scl", "gcp:*"]);  // fetch failed at least once; <img> worked
const REVIEW = {
  // answer normally, but may be dedicated/sovereign regions that most customers cannot buy
  ...Object.fromEntries(["us-abilene-1", "us-shawnee-1", "us-boardman-1", "us-quincy-1", "us-lenexa-1", "us-desmoines-1",
    "us-saltlake-2", "us-sanantonio-1", "ap-kulai-1", "ap-batam-1", "eu-madrid-3", "eu-dublin-3", "sa-riodejaneiro-2"]
    .map(c => [`oracle:${c}`, "May be a dedicated region; confirm it is publicly orderable."])),
  "aws:me-west-1": "Not in AWS's public region list yet, but the endpoint answers.",
  "aws:sa-west-1": "Not in AWS's public region list yet, but the endpoint answers.",
  "linode:us-iad-2": "Cluster us-iad-2 assumed to belong to Washington 2.",
  "linode:in-bom-2": "Served by cluster in-bom-1.", "linode:de-fra-2": "Served by cluster de-fra-1.",
  "linode:sg-sin-2": "Served by cluster sg-sin-1.", "linode:jp-tyo-3": "Served by cluster jp-tyo-1.",
  "huawei:my-kualalumpur-1": "Returns a 404 HTML page instead of the usual OBS XML."
};

const CONTINENTS = {
  na: "US CA MX", sa: "BR CL CO AR PE", eu: "GB IE FR DE NL BE CH IT ES PT SE NO FI DK PL AT RS CZ RU",
  as: "CN HK TW JP KR SG IN ID MY TH PH VN", oc: "AU NZ", me: "AE SA QA BH IL TR", af: "ZA EG MA KE NG"
};
const continentOf = cc => Object.keys(CONTINENTS).find(k => CONTINENTS[k].split(" ").includes(cc)) || "xx";

const { CANDIDATES } = await import("./candidates.mjs");
const cli = JSON.parse(await readFile(new URL("./verify-cli.json", import.meta.url), "utf8"));
// IP families and IPv6 alternatives from ipv6.mjs (optional)
const IP6 = JSON.parse(await readFile(new URL("./ipv6.json", import.meta.url), "utf8").catch(() => "{}"));
const byKey = new Map(cli.map(r => [`${r.vendor}:${r.code}`, r]));

const endpoints = [], excluded = [];
for (const c of CANDIDATES) {
  const id = `${c.vendor}:${c.code}`, r = byKey.get(id), last = r?.tries.at(-1);
  if (!last || last.result !== "http") {
    const why = !last ? "not checked" : last.result === "nxdomain" ? "no such host" : last.result === "no-endpoint" ? "no public endpoint"
      : `no response (${last.get?.error || "?"})`;
    excluded.push({ id, city: c.city, tried: c.urls, reason: why });
    continue;
  }
  const v = VENDORS[c.vendor];
  const e = { id, vendor: c.vendor, region: c.code, city: c.city, country: c.cc, url: last.url, method: v.method };
  if (v.method !== "IMG" && (FALLBACK_IMG.has(id) || FALLBACK_IMG.has(`${c.vendor}:*`))) e.fallback = "IMG";
  if (v.cors && last.get?.acao) e.cors = true;
  if (c.vendor === "aws") e.expect = "healthy: dynamodb";
  e.tier = v.tier;
  if (IP6[id]) { e.fam = IP6[id].fam; if (IP6[id].url6) e.url6 = IP6[id].url6; }
  if (REVIEW[id]) e.review = REVIEW[id];
  endpoints.push(e);
}

const vendors = Object.fromEntries(Object.entries(VENDORS).map(([k, v]) => [k, { ...v, regions: endpoints.filter(e => e.vendor === k).length }]));
for (const e of endpoints) e.continent = continentOf(e.country);

// The page is the single source: the registry lives in src/page.html between the ENDPOINTS markers,
// and scripts/build.mjs derives public/endpoints.json from it.
const page = new URL("../../src/page.html", import.meta.url);
const html = await readFile(page, "utf8");
const BEGIN = "/* ENDPOINTS:BEGIN */", END = "/* ENDPOINTS:END */";
const a = html.indexOf(BEGIN), b = html.indexOf(END);
if (a < 0 || b < 0) throw new Error("ENDPOINTS markers not found in src/page.html");
const block = `${BEGIN}\n  const ENDPOINTS = ${JSON.stringify({ verified: VERIFIED, vendors, endpoints })};\n  `;
await writeFile(page, html.slice(0, a) + block + html.slice(b));
await writeFile(new URL("./excluded.json", import.meta.url), JSON.stringify(excluded, null, 1) + "\n");

console.log(`endpoints: ${endpoints.length}   excluded: ${excluded.length}`);
console.table(Object.fromEntries(Object.entries(vendors).map(([k, v]) => [k, { tier: v.tier, method: v.method, cors: v.cors, ok: v.regions,
  excluded: excluded.filter(x => x.id.startsWith(k + ":")).length }])));
for (const x of excluded) console.log("  -", x.id, "·", x.reason);
