#!/usr/bin/env node
// Weekly health check of public/endpoints.json, run by .github/workflows/health.yml.
// An endpoint is healthy when its host resolves and answers HTTP (any status, as in the page);
// AWS must also return its "healthy: dynamodb" body. Each failure is retried twice before it counts.
// Writes a Markdown report to the path given as the first argument (default health-report.md)
// and, under GitHub Actions, sets the outputs "failed" and "total".
import { readFile, writeFile, appendFile } from "node:fs/promises";

const OUT = process.argv[2] || "health-report.md", TIMEOUT = 10000, CONC = 8, TRIES = 3;
const reg = JSON.parse(await readFile(new URL("../../public/endpoints.json", import.meta.url), "utf8"));
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function probe(e) {
  const method = e.method === "HEAD" ? "HEAD" : "GET"; // IMG is timed with GET here
  const t0 = performance.now();
  try {
    const res = await fetch(e.url, { method, redirect: "manual", signal: AbortSignal.timeout(TIMEOUT) });
    const body = method === "GET" ? await res.text() : "";
    const ms = Math.round(performance.now() - t0);
    if (e.expect && !body.includes(e.expect)) return { ok: false, why: `HTTP ${res.status}, body lacks "${e.expect}"`, ms };
    return { ok: true, status: res.status, ms };
  } catch (err) {
    return { ok: false, why: (err.cause?.code || err.name || String(err)).slice(0, 60), ms: Math.round(performance.now() - t0) };
  }
}

async function check(e) {
  let r;
  for (let i = 0; i < TRIES; i++) {
    r = await probe(e);
    if (r.ok) break;
    await sleep(3000 * (i + 1));
  }
  return { e, r };
}

const list = reg.endpoints;
const results = [];
let next = 0;
await Promise.all(Array.from({ length: CONC }, async () => {
  while (next < list.length) results.push(await check(list[next++]));
}));

const bad = results.filter(x => !x.r.ok).sort((a, b) => a.e.id.localeCompare(b.e.id));
const perVendor = {};
for (const { e, r } of results) {
  const v = perVendor[e.vendor] ||= { ok: 0, bad: 0 };
  r.ok ? v.ok++ : v.bad++;
}

const lines = [
  `Checked ${list.length} endpoints from a GitHub Actions runner on ${new Date().toISOString().slice(0, 10)}; ${bad.length} failed after ${TRIES} tries.`,
  "",
  "Some regions block or throttle traffic from data-center IPs or from abroad, so a failure here may not affect visitors. Confirm in a browser before removing an endpoint.",
  ""
];
if (bad.length) {
  lines.push("| Endpoint | City | URL | Method | Problem |", "|---|---|---|---|---|");
  for (const { e, r } of bad) lines.push(`| \`${e.id}\` | ${e.city}, ${e.country} | ${e.url} | ${e.method} | ${r.why} |`);
  lines.push("");
}
lines.push("| Vendor | OK | Failed |", "|---|---|---|");
for (const [v, c] of Object.entries(perVendor)) lines.push(`| ${v} | ${c.ok} | ${c.bad} |`);
await writeFile(OUT, lines.join("\n") + "\n");

if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `failed=${bad.length}\ntotal=${list.length}\n`);
console.log(`${list.length - bad.length}/${list.length} healthy; report in ${OUT}`);
for (const { e, r } of bad) console.log(`  ${e.id}: ${r.why}`);
