// vendored from 1ms.dog/src/egress.js VERSION 2 (662db31) — copy it again, do not edit rules here
// One exit verdict for the whole site. docs/egress-contract.md has the rules; this file implements them.
//
// Every page that says 「直连 / 代理」 calls classify() with the addresses it saw and the two anchors, instead of
// carrying its own regex, time-zone table and quorum. The file is dependency-free so a tool can vendor it:
//
//     cp 1ms.dog/src/egress.js <tool>/src/egress.js
//
// Vendored copies keep this header and add the canonical commit, so `grep VERSION` finds a stale copy.

export const VERSION = "2";

// The two anchors: our own probes, grey-cloud, answering GET /conn with the caller's address.
export const ANCHORS = {
  cn: "https://probe.dog.1msapp.com:9443/conn", // TX.SHA: a mainland domain not in any split-tunnel list
  intl: "https://probe.1ms.dog/conn",          // Tokyo: the same binary, the same answer shape
};

// Which anchor a probe's group is measured against. `udp` (STUN) is evidence only: it says what UDP sees,
// not what a destination sees, so it has no anchor of its own.
export const GROUP_ANCHOR = { cn: "cn", intl: "intl", ai: "intl", web: "intl", stack: "intl", udp: null };

// Data centres and VPN brands: the three tool lists merged. A match is a reading, not proof.
export const DC_RE = /amazon|google|microsoft|azure|digitalocean|vultr|choopa|constant company|linode|akamai|ovh|hetzner|oracle|alibaba|aliyun|tencent|huawei|m247|datacamp|cloudflare|leaseweb|contabo|hostinger|it7|racknerd|colocrossing|psychz|zenlayer|g-core|gcore|hostwinds|scaleway|ionos|kamatera|upcloud|bandwagon|dmit|cogent|quadranet|servers\.com|packet|equinix|fastly|cdn77|datapacket|tzulo|hostdare|greencloud|nexeon|frantech|buyvm|ucloud|kingsoft|baidu cloud|bytedance|volcano|fastnet data|hosting|\bvps\b|data ?cent/i;
export const DC_ASN = new Set([16509, 14618, 15169, 396982, 8075, 8068, 13335, 209242, 54113, 45102, 37963, 45090, 132203, 55990, 14061, 20473, 63949, 16276, 24940, 31898, 9009, 212238, 20940, 19527]);
export const VPN_RE = /mullvad|proton ?vpn|proton ag|\bnordvpn\b|expressvpn|surfshark|private internet access|\bpia\b|windscribe|ipvanish|cyberghost|purevpn|vyprvpn|tunnelbear|hide\.?me|azirevpn|perfect privacy|\bivpn\b|\bovpn\b|airvpn|torguard|hotspot shield|zenmate|privatevpn|ivacy|atlas vpn|mozilla vpn|hide my ass|\bhma\b/i;

// Countries whose AI services refuse a visitor. Kept here so every page agrees.
export const AI_BLOCKED = new Set(["CN", "HK", "MO", "RU", "IR", "KP", "SY", "CU", "BY"]);

// The time zones the CN split-tunnel logic needs, plus the majors. A caller may pass its own `tzCountry`.
export const TZ_CC = {
  "Asia/Shanghai": "CN", "Asia/Chongqing": "CN", "Asia/Urumqi": "CN", "Asia/Harbin": "CN",
  "Asia/Hong_Kong": "HK", "Asia/Macau": "MO", "Asia/Taipei": "TW",
  "Asia/Tokyo": "JP", "Asia/Seoul": "KR", "Asia/Singapore": "SG", "Asia/Kuala_Lumpur": "MY",
  "Asia/Bangkok": "TH", "Asia/Jakarta": "ID", "Asia/Manila": "PH", "Asia/Ho_Chi_Minh": "VN",
  "Asia/Kolkata": "IN", "Asia/Calcutta": "IN", "Asia/Dubai": "AE", "Asia/Tel_Aviv": "IL",
  "Europe/London": "GB", "Europe/Paris": "FR", "Europe/Berlin": "DE", "Europe/Amsterdam": "NL",
  "Europe/Madrid": "ES", "Europe/Rome": "IT", "Europe/Moscow": "RU", "Europe/Warsaw": "PL",
  "Europe/Kyiv": "UA", "Europe/Kiev": "UA", "Europe/Istanbul": "TR", "Europe/Zurich": "CH",
  "Europe/Stockholm": "SE", "Europe/Oslo": "NO", "Europe/Helsinki": "FI", "Europe/Dublin": "IE",
  "America/New_York": "US", "America/Chicago": "US", "America/Denver": "US", "America/Los_Angeles": "US",
  "America/Toronto": "CA", "America/Vancouver": "CA", "America/Sao_Paulo": "BR", "America/Mexico_City": "MX",
  "Australia/Sydney": "AU", "Australia/Melbourne": "AU", "Pacific/Auckland": "NZ",
  "UTC": "UN", "Etc/UTC": "UN", "Etc/GMT": "UN",
};

export const tzCountry = tz => TZ_CC[tz] || null;

// The network an address stands for: ASN when known, else /16 (IPv4) or /64 (IPv6).
export function netOf(ip) {
  if (!ip) return "";
  if (ip.includes(":")) {
    const full = ip.split("::");
    const head = full[0] ? full[0].split(":") : [];
    const tail = full.length > 1 && full[1] ? full[1].split(":") : [];
    const groups = [...head, ...Array(Math.max(0, 8 - head.length - tail.length)).fill("0"), ...tail].slice(0, 4);
    return groups.map(g => g.replace(/^0+(?=.)/, "")).join(":") + "::/64";
  }
  const p = ip.split(".");
  return p.length === 4 ? `${p[0]}.${p[1]}./16` : ip;
}

const mostSeen = list => {
  const n = new Map();
  for (const x of list) n.set(x, (n.get(x) || 0) + 1);
  return [...n].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])))[0]?.[0] ?? null;
};

// answers: [{ id, group, ip, org, asn, family }]
// anchors: { cn: "<ip>", intl: "<ip>" } (missing when a probe could not answer)
// Returns exits in a stable order: direct before proxy, then by how many probes saw them.
export function groupExits(answers) {
  const by = new Map();
  for (const a of answers || []) {
    if (!a || !a.ip || a.ip === "::" || a.ip === "0.0.0.0") continue;
    const key = a.asn ? `as${a.asn}` : netOf(a.ip);
    let e = by.get(key);
    if (!e) by.set(key, e = { key, ip: a.ip, org: "", asn: null, groups: new Set(), seenBy: [], v4: null, v6: null });
    if (a.org && !e.org) e.org = a.org;
    if (a.asn && !e.asn) e.asn = Number(a.asn) || a.asn;
    e.groups.add(a.group);
    e.seenBy.push(a.id);
    if (a.ip.includes(":")) e.v6 ||= a.ip; else e.v4 ||= a.ip;
  }
  return [...by.values()];
}

// Which anchor an exit follows: "cn", "intl", "both", "other" (none, with anchors in hand) or
// "unknown-path" (the anchors that would have said are missing).
export function pathOf(exit, anchors = {}) {
  const want = [...new Set([...exit.groups].map(g => GROUP_ANCHOR[g]).filter(Boolean))];
  const hit = want.filter(a => anchors[a] && anchors[a] === exit.ip);
  if (hit.length === 2) return "both";
  if (hit.length === 1) return hit[0];
  const later = Object.keys(anchors).filter(k => anchors[k] && anchors[k] === exit.ip && !want.includes(k));
  if (later.length) return later[0];
  return want.some(a => anchors[a]) ? "other" : "unknown-path";
}

export function kindOf(exit, { warp = "" } = {}) {
  const org = exit.org || "";
  if (VPN_RE.test(org)) return { kind: "proxy", why: "vpn" };
  // Cloudflare's own ASN is a proxy exit either way; WARP on is the more precise reason, so it comes first.
  if (Number(exit.asn) === 13335 && warp && warp !== "off") return { kind: "proxy", why: "warp" };
  if (DC_ASN.has(Number(exit.asn)) || DC_RE.test(org)) return { kind: "proxy", why: "dc" };
  if (!org && !exit.asn) return { kind: "unknown", why: "no-geo" };
  return { kind: "direct", why: "residential" };
}

// classify(): the one entry point.
//   answers  see groupExits()
//   anchors  { cn, intl } addresses from /conn, each optional
//   warp     "on" | "off" | "" from the page's own trace
//   tz       IANA zone, for the single-exit reasons
//   cc       the exit's country code, when the page knows it
//   mode     "multi" (default) or "single"
export function classify({ answers = [], anchors = {}, warp = "", tz = "", cc = "", rtc = "", mode = "multi" } = {}) {
  const exits = groupExits(answers).map(e => ({
    ...e,
    groups: [...e.groups],
    seenBy: [...new Set(e.seenBy)],
    path: pathOf(e, anchors),
    ...kindOf(e, { warp }),
  }));
  exits.sort((a, b) => (a.kind === "proxy") - (b.kind === "proxy") || b.seenBy.length - a.seenBy.length || String(a.key).localeCompare(String(b.key)));
  const pick = g => exits.find(e => e.groups.includes(g));
  const cnExit = pick("cn"), intlExit = pick("intl") || pick("ai") || pick("web") || pick("stack");
  const reasons = [];

  if (tz && cc) {
    const home = tzCountry(tz);
    const same = home === cc || (home === "CN" && (cc === "HK" || cc === "MO"));
    if (home && cc !== "UN" && !same) reasons.push({ k: "r_tz", home, cc });
  }

  if (mode === "single") {
    const primary = intlExit || cnExit || exits[0] || null;
    if (!primary) return { exits, primary: null, verdict: "unknown", reasons };
    if (primary.kind === "proxy" && primary.why !== "anchor") {
      reasons.unshift({ k: primary.why === "vpn" ? "r_vpn" : primary.why === "warp" ? "r_warp" : "r_dc", org: primary.org, asn: primary.asn });
    }
    const fam4 = exits.find(e => e.v4), fam6 = exits.find(e => e.v6);
    if (fam4 && fam6 && fam4.key !== fam6.key && (fam4.key === primary.key || fam6.key === primary.key)) {
      reasons.push({ k: "r_fam", a: (fam4.key === primary.key ? fam4 : fam6).ip, b: (fam4.key === primary.key ? fam6 : fam4).ip });
    }
    if (rtc && rtc !== primary.ip && (rtc.includes(":") === primary.ip.includes(":"))) reasons.push({ k: "r_rtc", ip: rtc });
    const verdict = primary.kind === "proxy" || reasons.some(r => r.k === "r_tz" || r.k === "r_rtc" || r.k === "r_fam")
      ? "proxy" : primary.kind === "unknown" ? "unknown" : "direct";
    return { exits, primary, verdict, reasons };
  }

  // multi: leak > ai > split > the reference exit's kind
  const udp = exits.find(e => e.groups.includes("udp"));
  const ref = intlExit || cnExit;
  if (udp && udp.kind === "direct" && ref && ref.kind === "proxy") return { exits, verdict: "leak", reasons };
  const any4 = exits.find(e => e.v4 && e.kind !== "unknown"), any6 = exits.find(e => e.v6 && e.kind !== "unknown");
  if (any4 && any6 && any4.kind === "proxy" && any6.kind === "direct") return { exits, verdict: "leak", reasons };
  if (cnExit && intlExit && cnExit.key !== intlExit.key) return { exits, verdict: "split", reasons };
  return { exits, verdict: !ref ? "unknown" : ref.kind === "proxy" ? "proxy" : ref.kind === "unknown" ? "unknown" : "direct", reasons };
}

// The lag page's hint: the device's time zone is somewhere else than the exit. Only a hint.
export function hint({ tz = "", exitCC = "", tzCountry: tzc = tzCountry } = {}) {
  const home = tzc(tz);
  if (!home || !exitCC) return null;
  if (home === exitCC || (home === "CN" && (exitCC === "HK" || exitCC === "MO"))) return null;
  return { home, exit: exitCC };
}
