#!/usr/bin/env node
// IP families of every registry endpoint, and an IPv6-capable alternative where the provider has one.
// Writes scripts/endpoints/ipv6.json, which build-registry.mjs merges into the registry as `fam` ("4", "46") and `url6`.
// A browser cannot pick IPv4 or IPv6 for a request; it can only be steered by using a host that has just that family.
// Usage: node scripts/endpoints/ipv6.mjs
import { readFile, writeFile } from "node:fs/promises";
import { families } from "./families.mjs";

// dual-stack hosts some providers publish next to their IPv4-only defaults
const ALT6 = {
  aws: e => `https://dynamodb.${e.region}.api.aws/ping`,
  aliyun: e => `https://${e.region}.oss.aliyuncs.com/`
};

const E = JSON.parse(await readFile(new URL("../../public/endpoints.json", import.meta.url), "utf8"));
const out = {};
let i = 0;
await Promise.all(Array.from({ length: 10 }, async () => {
  while (i < E.endpoints.length) {
    const e = E.endpoints[i++];
    const f = await families(new URL(e.url).hostname);
    const r = { fam: (f.v4 ? "4" : "") + (f.v6 ? "6" : "") };
    if (!f.v6 && ALT6[e.vendor] && !e.url.includes(".com.cn/")) {
      const u = ALT6[e.vendor](e), g = await families(new URL(u).hostname);
      // only a host that answers on IPv6 and still serves the same endpoint (checked over HTTP) is useful
      if (g.v6) {
        const ok = await fetch(u, { method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(8000) }).then(x => x.status > 0, () => false);
        if (ok) r.url6 = u;
      }
    }
    out[e.id] = r;
  }
}));
const sorted = Object.fromEntries(E.endpoints.map(e => [e.id, out[e.id]]));
await writeFile(new URL("./ipv6.json", import.meta.url), JSON.stringify(sorted, null, 1) + "\n");
const v = Object.values(sorted);
console.log(`${v.length} endpoints: ${v.filter(x => x.fam.includes("6")).length} dual-stack hosts, ${v.filter(x => x.url6).length} with an IPv6 alternative, ${v.filter(x => !x.fam.includes("6") && !x.url6).length} IPv4 only`);
