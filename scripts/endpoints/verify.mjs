#!/usr/bin/env node
// Verifies every candidate in candidates.mjs from the command line and writes verify-cli.json.
// DNS goes through Cloudflare DoH because a local fake-ip resolver answers for any name.
// Usage: node verify.mjs [vendor ...]
import { readFile, writeFile } from "node:fs/promises";
import { CANDIDATES } from "./candidates.mjs";

const ORIGIN = "https://ping.1ms.dog", TIMEOUT = 8000, CONC = 12;
const only = process.argv.slice(2);

async function doh(name) {
  const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${name}&type=A`, { headers: { accept: "application/dns-json" } });
  const j = await res.json();
  const ans = j.Answer || [];
  return { rcode: j.Status, cname: ans.filter(a => a.type === 5).map(a => a.data.replace(/\.$/, "")), a: ans.filter(a => a.type === 1).map(a => a.data) };
}

async function probe(url, method) {
  const t0 = performance.now();
  try {
    const res = await fetch(url, { method, redirect: "manual", headers: { Origin: ORIGIN }, signal: AbortSignal.timeout(TIMEOUT) });
    const ms = Math.round(performance.now() - t0);
    const body = method === "GET" ? (await res.text()).slice(0, 160).replace(/\s+/g, " ") : "";
    const h = k => res.headers.get(k) || "";
    return { ok: true, status: res.status, ms, acao: h("access-control-allow-origin"), tao: h("timing-allow-origin"),
      type: h("content-type").split(";")[0], len: +h("content-length") || (method === "GET" ? body.length : null),
      corp: h("cross-origin-resource-policy"), location: h("location"), server: h("server"), body };
  } catch (e) {
    return { ok: false, error: (e.cause?.code || e.name || String(e)).slice(0, 40), ms: Math.round(performance.now() - t0) };
  }
}

async function check(c) {
  const tries = [];
  for (const url of c.urls) {
    const host = new URL(url).hostname;
    const dns = await doh(host).catch(e => ({ rcode: -1, error: String(e) }));
    if (dns.rcode !== 0 || !dns.a?.length) { tries.push({ url, dns, result: "nxdomain" }); continue; }
    const get = await probe(url, "GET"), head = await probe(url, "HEAD");
    tries.push({ url, dns, get, head, result: get.ok || head.ok ? "http" : "unreachable" });
    if (get.ok || head.ok) break;
  }
  if (!tries.length) tries.push({ url: null, result: "no-endpoint" });
  return { ...c, tries };
}

const list = CANDIDATES.filter(c => !only.length || only.includes(c.vendor));
const out = [];
let i = 0;
await Promise.all(Array.from({ length: CONC }, async () => {
  while (i < list.length) { const c = list[i++]; out.push(await check(c)); process.stderr.write("."); }
}));
// a vendor-filtered run replaces only those vendors' rows
const FILE = new URL("./verify-cli.json", import.meta.url);
const prev = only.length ? JSON.parse(await readFile(FILE, "utf8").catch(() => "[]")).filter(r => !only.includes(r.vendor)) : [];
const key = r => CANDIDATES.findIndex(x => x.vendor === r.vendor && x.code === r.code);
const all = [...prev, ...out].sort((a, b) => key(a) - key(b));
await writeFile(FILE, JSON.stringify(all, null, 1));

const sum = {};
for (const r of out) {
  const last = r.tries.at(-1), s = sum[r.vendor] ??= { total: 0, http: 0, nx: 0, down: 0 };
  s.total++; if (last.result === "http") s.http++; else if (last.result === "nxdomain") s.nx++; else s.down++;
}
console.error();
console.table(sum);
