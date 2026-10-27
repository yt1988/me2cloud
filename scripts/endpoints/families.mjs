#!/usr/bin/env node
// Which IP families answer for a host: A and/or AAAA records, looked up through Cloudflare DoH (the local resolver may be fake-ip).
// Usage: node scripts/endpoints/families.mjs host1 host2 …     or     node scripts/endpoints/families.mjs --registry
import { readFile } from "node:fs/promises";

export async function families(host) {
  const q = async type => {
    const j = await (await fetch(`https://cloudflare-dns.com/dns-query?name=${host}&type=${type}`, { headers: { accept: "application/dns-json" } })).json();
    return (j.Answer || []).filter(a => a.type === (type === "A" ? 1 : 28)).map(a => a.data);
  };
  const [a, aaaa] = await Promise.all([q("A"), q("AAAA")]);
  return { host, v4: a.length > 0, v6: aaaa.length > 0, a: a[0] || "", aaaa: aaaa[0] || "" };
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  let hosts = process.argv.slice(2);
  if (hosts[0] === "--registry") {
    const E = JSON.parse(await readFile(new URL("../../public/endpoints.json", import.meta.url), "utf8"));
    hosts = [...new Set(E.endpoints.map(e => new URL(e.url).hostname))];
  }
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: 12 }, async () => { while (i < hosts.length) { const h = hosts[i++]; out.push(await families(h).catch(() => ({ host: h, err: true }))); } }));
  for (const r of out.sort((a, b) => hosts.indexOf(a.host) - hosts.indexOf(b.host))) console.log([r.host, r.err ? "ERR" : (r.v4 ? "v4" : "--") + "/" + (r.v6 ? "v6" : "--"), r.aaaa || ""].join("\t"));
}
