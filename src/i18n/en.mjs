// Me2Cloud text: en. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  a_lang: "Language",
  a_help: "Help",
  a_settings: "Settings",
  a_close: "Close",
  a_prev: "Previous",
  a_next: "Next",
  seo_title: "Cloud latency test from your own network: AWS, Azure, Google Cloud and 360+ regions | Me2Cloud",
  seo_desc: "Free cloud latency test that runs in your browser. Ping 360+ regions of 22 providers, including AWS, Azure, Google Cloud, Oracle, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Vultr, Linode, DigitalOcean, Hetzner and OVHcloud, and see median latency, jitter and packet loss over your real ISP, Wi-Fi and peak hours. Your results are not uploaded.",
  seo_kw: "cloud latency test, cloud ping test, cloud region ping, AWS ping, Azure latency, Google Cloud ping, Alibaba Cloud ping, Vultr ping, closest cloud region",
  og_sub: "22 providers · 360+ regions · measured in your own browser",
  unlisted: "unlisted region",
  share_btn: "Share",
  share_viaProxy: "tested through a proxy",
  mm_tcp: "TCP handshake",
  mm_https: "HTTPS",
  mm_icmp: "ICMP ping",
  share_bad: "This result link can't be read",
  share_test: "Test my own",
  share_none: "Run a test first, then share",
  sharedNoRaw: "Shared results include the statistics, not every sample.",
  card_title: "How fast the clouds are from my place",
  card_cta: "How fast are the clouds from your place?",
  card_local: "measured in my browser",
  card_regions: "{n} regions × {k} samples",
  card_more: "+{n} more",
  sep: ", ",
  allVendors: "All providers",
  allAreas: "All areas",
  noArea: "No areas",
  pickVendor: "Choose providers",
  pickFirst: "Choose the providers to test",
  lgLive: "pulsing = still testing",
  reset: "Clear test data",
  resetHint: "Hold for 1 second. Deletes test results and history; settings and custom endpoints stay.",
  resetDone: "Test data cleared",
  cust_tip: "Any HTTPS URL works. A tiny static file or a /ping path answers fastest. GET or HEAD is picked for you.",
  doc_h: "How it works & FAQ",
  rules_sub: "Send the test hosts direct, past your proxy, so the results show your own line. The rules match only the test hosts; the rest of your traffic is untouched.",
  rules_remote_h: "Recommended: remote rule set",
  rules_remote_s: "Your proxy app fetches the list from us and updates it when we add regions. You add it once.",
  rules_inline_h: "Or paste all the rules yourself ({n}, with notes)",
  rules_inline_only: "This app has no remote rule sets, so paste the rules ({n}, with notes)",
  rules_custom: "Your custom endpoints aren't in the remote set. Add these too:",
  rc_detect: "Network check (Cloudflare, ipify, ident.me)",
  rc_top: "keep this above your other rules",
  rules_json_note: "JSON has no comments; hosts are listed in provider order.",
  rules_steps: [
    `Copy the rules and put them <b>above</b> your other rules, so they match first.`,
    "Reload the config. In TUN or fake-ip mode, keep the real-IP part too (already included above).",
    "If you use a proxy extension in the browser, turn it off for this page or add these hosts to its bypass list.",
    "Press the refresh button next to your network. Once it shows your real ISP, start the test."
  ],
  heroT: "How fast are the clouds from your place?",
  lgMiss: "hollow = doesn't meet your limits",
  pxShort: "Proxy detected",
  okShort: "Direct connection",
  unkShort: "Network unknown",
  netDetails: "Details",
  egressLink: "Exit IP check",
  lk_ipqs: "IP quality",
  lk_asn: "ASN lookup",
  lk_ipv6: "IPv6 test",
  lk_egress: "See which exit each site uses",
  speedPre: "This measures latency, not bandwidth. For download speed, use the",
  lk_speed: "speed test",
  cli_btn: "Command line",
  cli_h: "Test from your server too",
  cli_sub: "Run this on a VPS, a Linux box or a router to test the same regions from there. It times a TCP handshake by default (ICMP works too), finishes in about a minute, and prints a link that opens the result on this page.",
  cli_more: "More ways",
  cli_install: "Install and run (Linux, macOS, routers)",
  cli_install_s: "Installs vps2cloud to /usr/local/bin (or ~/.local/bin without root) and opens a menu to choose what to test. Type vps2cloud any time to test again.",
  cli_once: "Run once, install nothing",
  cli_wget: "No curl? With wget",
  cli_opts: "Handy options",
  cli_o_pick: "Only some providers and areas (vps2cloud --list shows them all)",
  cli_o_ip: "IPv4 and IPv6 in one run",
  cli_o_cdn: "The nearest edge of each CDN",
  cli_o_icmp: "ICMP ping instead of a TCP handshake",
  cli_o_md: "Save the result as Markdown",
  cli_win: "Windows",
  cli_win_s: "Run in PowerShell: it installs vps2cloud and opens the menu. Or download the program:",
  cli_src: "Source code and all builds",
  lk_cost: "What it costs",
  cdn_h: "CDN",
  cdn_edge: "Nearest edge",
  cdn_note: "Each CDN answers from the edge closest to you.",
  pl_vendors: "Providers",
  pl_areas: "Areas",
  off: "Off",
  noLoss: "no loss",
  m_quickD: "A quick first look",
  m_stdD: "Recommended",
  m_preciseD: "For your final shortlist",
  startSub: "{n} regions · about {t}",
  lastRun: "Last run {d}: {n} regions",
  viz_h: "Where each region lands",
  vizSub: "{n} measured",
  viz_empty: "Regions appear here as they're measured.",
  needLine: "your limit",
  picks_sub2: "{n} meet your limits ({need})",
  grp_other: "Waiting or unreachable",
  jitWarn: "Unsteady: jitter ±{j} ms",
  lossWarn: "{p}% packet loss",
  res_h: "All regions",
  rules_note_loon: "Paste at the top of [Rule].",
  concHint: "Fewer at once is more accurate; more is faster. Each provider gets at most 2 at a time.",
  secTest: "Test",
  conc: "Endpoints at once",
  timeout: "Timeout per request",
  rtcOpt: "WebRTC exit check (STUN)",
  theme: "Theme",
  th_system: "System",
  th_light: "Light",
  th_dark: "Dark",
  secData: "Data",
  copyLink: "Copy a link to these settings",
  expCsv: "Export results (CSV)",
  expJson: "Export results (JSON)",
  imp: "Import results (JSON)",
  recheck: "Check again",
  rulesBtn: "Get bypass rules",
  ip: "Public IP",
  hide: "Hide IP",
  show: "Show IP",
  isp: "Network",
  na: "unknown",
  edge: "To nearest Cloudflare",
  checking: "Checking…",
  peakNow: "Peak hour",
  offPeak: "Off-peak",
  peakTip: "It's {now}, in the evening rush (20:00–23:00). Results now show your line at its busiest, which is what you most need to know.",
  offPeakTip: "It's {now}, when lines are usually quiet. Test again between 20:00 and 23:00 to see how your line holds up at peak.",
  px_okNote: "Your exit IP, network and time zone all match, so this looks like a direct connection. A proxy on your router or a company network can still go unnoticed; just check that the network above is your real ISP.",
  px_unknownNote: "The Cloudflare check was blocked, so we can't tell whether a proxy is on. The test itself still works.",
  r_dc: "Your exit network is {org}, a data center. Home lines don't look like this, so you're most likely on a VPN or proxy, or this device is itself a cloud server.",
  r_warp: "Cloudflare WARP is on.",
  ipHidden: "IP hidden by Safari",
  px_hiddenNote: "Safari's Limit IP Address Tracking treats some of this check's requests as trackers and sends them through Apple's relay. So the public IP, network and Cloudflare latency above belong to the relay, and the location comes from your device's time zone. The cloud test endpoints normally aren't on that tracker list and still go direct, so your results aren't affected.",
  pxRelay: "iCloud Private Relay",
  r_relay: "Your exit is iCloud Private Relay ({org}), not your own line. Safari sends every request through it, so you'd be measuring the relay, and bypass rules can't change that. To test your own line, turn it off for this network: Settings → Cellular → Cellular Data Options (or the ⓘ next to your Wi-Fi) → turn off Limit IP Address Tracking. Or test in Chrome or Firefox, which Private Relay doesn't cover.",
  r_tz: "Your device's time zone is in {a}, but your exit IP is in {b}.",
  r_rtc: "WebRTC (UDP) leaves from {a} and HTTPS from {b}, so your traffic is being split.",
  r_fam: "The {f} check leaves from {a}, but your main exit is {b}, so some requests go through a proxy. Update your bypass rules and check again.",
  chkFail: "Check failed",
  chkBlocked: "possibly blocked by an extension or your network",
  chk_net: "Reading network info",
  chk_ip: "Checking IPv4 / IPv6",
  chk_edge: "Timing the nearest Cloudflare {i}/{n}",
  all: "All",
  none: "None",
  custom: "Custom",
  ct_as: "Asia",
  ct_na: "North America",
  ct_eu: "Europe",
  ct_oc: "Oceania",
  ct_sa: "South America",
  ct_me: "Middle East",
  ct_af: "Africa",
  ct_xx: "Custom",
  mode: "Samples per endpoint",
  m_quick: "Quick",
  m_std: "Standard",
  m_precise: "Precise",
  secs: "{n} s",
  mins: "{n} min",
  noLimit: "any",
  maxLat: "Max latency",
  maxJit: "Max jitter",
  maxLoss: "Max loss",
  p_game: "Gaming",
  p_call: "Video calls",
  p_ssh: "SSH / remote desktop",
  p_web: "Website / API",
  p_any: "No limits, show all",
  p_custom: "Custom",
  start: "Start test",
  stop: "Stop",
  again: "Test again",
  running: "Testing {d} / {n}",
  eta: "about {t} left",
  viewing: "Viewing a saved run from {d}",
  tagPeak: "peak hour",
  histCurrent: "Latest run",
  picks_h: "Our picks for you",
  picks_closest: "Closest matches",
  picks_none: "Nothing meets your limits. Loosen one or try other providers.",
  anyLat: "any latency",
  search: "Search regions, cities, providers",
  onlyPass: "Only matches",
  g1: "T0 · GOATed",
  g2: "T1 · Top tier",
  g3: "T2 · Solid",
  g4: "T3 · NPC",
  g5: "T4 · Cooked",
  queued: "In line",
  chartAria: "Latency of each sample",
  noSamples: "No samples yet",
  d_med: "Median",
  d_avg: "Average",
  d_p90: "P90",
  d_min: "Min",
  d_max: "Max",
  d_jit: "Jitter",
  d_loss: "Loss",
  d_method: "Method",
  d_warm: "warm-up (not counted)",
  d_cold: "This endpoint can't keep the connection open, so every sample includes a new handshake (about 3 × the real round trip). Compare it only with itself.",
  d_verified: "Confirmed it reached the provider (CORS check passed)",
  d_notverified: "CORS check failed: a device between you and the provider may have answered instead.",
  d_review: "Note: this may be a dedicated region that regular customers can't buy.",
  retest: "Test again × 20",
  copyUrl: "Copy URL",
  cust_h: "Custom endpoints",
  cust_name_ph: "My VPS (Tokyo)",
  add: "Add",
  del: "Remove",
  cust_err_url: "That is not a valid URL.",
  cust_err_https: "Use an https:// URL. On an https page, browsers block plain http requests.",
  cust_err_dup: "That's already in the list.",
  cust_added: "Added. It'll be in the next test.",
  cust_group_ph: "New group name",
  cust_geo: "The country is worked out in your browser: we look up the host's IP through Google Public DNS (passing your network's /24, so CDNs answer for your line), then check a built-in IP table.",
  cust_geo_ing: "Locating…",
  cust_geo_fail: "Not found",
  cust_cc: "Country / region",
  cust_auto: "Auto",
  cust_rules: "Needs its own bypass rules",
  share_customOnly: "Only cloud providers' results are shared; your custom endpoints stay private. Add a few providers to the test to share.",
  cust_empty: "No custom endpoints yet. Use “＋ Add” to include your own servers or sites; a group of them shows up like a provider.",
  cust_err_nx: "{h} doesn't exist. Check the address. Did you swap the name and the URL?",
  cust_saved: "Saved.",
  cust_cancel: "Cancel",
  cust_save: "Save",
  cust_edit: "Edit",
  cust_newgroup: "New group",
  cust_nogroup: "No group",
  cust_group: "Group",
  log_h: "Request log",
  log_note: "Every request below went from this browser straight to the host shown. Your results aren't uploaded; only when you press Share is the result stored as a short link. You can check all of this in your browser's developer tools (Network tab).",
  log_empty: "No requests yet.",
  failed: "failed",
  rules_h: "Bypass rules for a clean test",
  copy: "Copy",
  copied: "Copied",
  rules_fakeip: "fake-ip mode: let these hosts resolve to their real IPs",
  rules_plain: "Plain list",
  rules_note_clash: "Paste the rules at the very top of rules:. If you use fake-ip, also add the hosts to dns.fake-ip-filter.",
  rules_note_surge: "Put the rules at the top of [Rule]. always-real-ip keeps the real DNS answer for these hosts.",
  rules_note_shadowrocket: "Put the rules at the top of [Rule] in your config, or add them one by one under Config → Rules.",
  rules_note_quanx: "Paste into [filter_local], above your other rules.",
  rules_note_singbox: `Merge into route.rules and dns.rules; outbound "direct" and DNS server "local" must match tags in your config.`,
  rules_note_xray: `Merge into routing.rules; outboundTag "direct" must match a freedom outbound in your config.`,
  rules_note_omega: "Paste into the bypass list (“No proxy for”) of your SwitchyOmega profile.",
  rules_note_plain: "One host per line, for any other app.",
  imported: "Results imported",
  importErr: "Not a Me2Cloud results file",
  foot: "Everything runs in your browser · Endpoints checked {d} · Not affiliated with any provider",
  docs: [
    [
      "Why test from your own network instead of ping sites and looking glasses",
      `<p>Short answer: only a test from your own network tells you how fast a region feels to you.</p>
          <p>Most "cloud ping" sites and every provider's looking glass run the test from <b>their</b> servers, which sit in data centers on premium links. That shows how fast one data center reaches another. It misses the part you actually feel: your home or mobile line, your ISP's backbone, its international links and how crowded they are tonight.</p>
          <p>Me2Cloud sends every request from <b>your</b> browser, so the result includes all of it: Wi-Fi, router, ISP, the route your ISP picks, and the evening rush.</p>
          <div class="tblwrap"><table class="cmp"><tr><th></th><th>Ping sites / looking glass</th><th>ICMP ping on your computer</th><th>Me2Cloud</th></tr>
          <tr><td>Starts from</td><td class="n">their data center</td><td class="y">your network</td><td class="y">your network</td></tr>
          <tr><td>Includes your ISP and peak hours</td><td class="n">no</td><td class="y">yes</td><td class="y">yes</td></tr>
          <tr><td>Same protocol as websites and apps (TCP 443)</td><td class="m">varies</td><td class="n">no, ICMP</td><td class="y">yes, HTTPS</td></tr>
          <tr><td>Throttled or filtered by networks</td><td class="m">sometimes</td><td class="n">often</td><td class="y">rarely</td></tr>
          <tr><td>Hundreds of regions in one go</td><td class="m">some</td><td class="n">no</td><td class="y">yes</td></tr>
          <tr><td>Needs an install</td><td class="y">no</td><td class="y">no</td><td class="y">no</td></tr></table></div>`
    ],
    [
      "How each sample is measured",
      `<ol><li>A <b>warm-up</b> request sets up DNS, the TCP connection and TLS encryption. Its time is shown but not counted.</li>
          <li>The browser then sends 5, 10 or 20 more requests to the same host over the <b>same connection</b>. Each one costs a single round trip, plus a little processing time on the provider's server.</li>
          <li>Each provider gets the request type we confirmed keeps the connection open: <code>GET</code> for AWS, Azure, Google Cloud, DigitalOcean and Scaleway; <code>HEAD</code> for Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Huawei Cloud, Linode, Vultr, OVHcloud, IONOS Cloud, Aruba Cloud, Leaseweb, Gcore and Yandex Cloud (they close the connection after a GET, which would triple every sample); and a CORS <code>GET</code> for Hetzner, whose page the browser would otherwise cut off, dropping the connection.</li>
          <li>You get the <b>median</b> (the typical value), the <b>average</b>, <b>P90</b> (9 in 10 samples are at or below it), <b>jitter</b> (how much consecutive samples differ, on average) and <b>packet loss</b> (samples with no answer before the timeout).</li>
          <li>The <b>tier</b> comes from the median: T0 GOATed ≤ 30 ms, T1 Top tier ≤ 80 ms, T2 Solid ≤ 150 ms, T3 NPC ≤ 250 ms, and T4 Cooked above that. "Our picks" are ranked by median + 2 × jitter + a loss penalty, so a steady 60 ms beats a jumpy 45 ms.</li></ol>`
    ],
    [
      "Why HTTPS timing is closer to real use than ICMP ping",
      `<ul><li><b>It takes the same road as your traffic.</b> Websites, APIs, tunnels on port 443, game logins and downloads all use TCP. Many ISPs queue, slow down or route ICMP separately, so ping can look fine while pages crawl, or the other way round.</li>
          <li><b>It isn't throttled away.</b> Routers and clouds often limit or drop ICMP. A public HTTPS endpoint always answers.</li>
          <li><b>It includes your real setup.</b> DNS, the choice of IPv4 or IPv6, proxies and accelerators all apply to browser traffic, so you measure what you'd actually get.</li>
          <li><b>The trade-off:</b> each sample also includes a small, steady server processing time. We measured 0–5 ms for AWS, about 8 ms for Alibaba Cloud and about 20 ms for Huawei Cloud OBS. Above 100 ms it doesn't matter; for very close regions the number reads a little higher than ping.</li></ul>`
    ],
    [
      "When to test: during the evening rush",
      `<ul><li>Home networks are busiest from about <b>20:00 to 23:00</b>, and international links even more so. A region that's T1 at noon can drop to NPC at night.</li>
          <li>Test once during the day and once at peak. Runs taken at peak are tagged "peak hour", and you can switch between runs in the results.</li>
          <li>Pause big downloads, streaming and cloud sync while testing. A cable beats Wi-Fi; on Wi-Fi, stay close to the router.</li>
          <li>On mobile data, results change with signal strength. Test where you'll actually use the service.</li></ul>`
    ],
    [
      "What it's good for",
      `<ul><li>Shortlisting regions before you buy a server, a game server or a CDN origin.</li>
          <li>Comparing regions of one provider, or different providers in the same city.</li>
          <li>Checking whether stability (jitter, packet loss) is good enough for gaming, video calls, remote desktop and SSH.</li>
          <li>Seeing how your proxy, accelerator or new internet plan really performs: test once with it, once without.</li>
          <li>Putting your own server or CDN next to the big names with a custom endpoint.</li></ul>`
    ],
    [
      "What it can't tell you",
      `<ul><li><b>It covers one location.</b> It measures your line, not your users'. Ask a few of them to run it, then export and compare.</li>
          <li><b>It tests the provider's public endpoint, not your future server.</b> We test each provider's public API or storage endpoint in the region. Servers in the same region usually share that network, but premium routes (for example CN2, BGP vs single-carrier lines, Lightsail vs EC2) can differ.</li>
          <li><b>No bandwidth, no UDP, no traceroute.</b> It measures round trips, not download speed or UDP game traffic, and it doesn't show the hops in between.<span data-tool="speed" hidden> To measure download speed, use the <a>speed test</a>.</span></li>
          <li><b>The browser adds some noise.</b> Extensions, proxies, VPNs and busy tabs all affect results. Close heavy tabs and keep this page in front.</li>
          <li>A few endpoints may be unreachable from some countries.</li></ul>`
    ],
    [
      "Privacy: tests run from your browser, results stay with you",
      `<ul><li>Your results are not uploaded, and there's no account. Only when you press Share is the result stored at 1ms.dog as a short link with a preview image, so chat apps can show it.</li>
          <li>Every test request goes straight from your browser to the provider. Open the <b>Request log</b> above, or your browser's developer tools (Network tab), to see each one.</li>
          <li>Network info comes from Cloudflare: this site's own <code>/_ms/me</code> answers first, and <code>speed.cloudflare.com/meta</code> and <code>/cdn-cgi/trace</code> have the final say, because they take the same path as the tests. The optional WebRTC check asks <code>stun.cloudflare.com</code> for your UDP exit address; you can turn it off in Settings.</li>
      <li>The IPv4/IPv6 check also asks <code>ipify.org</code> and <code>ident.me</code>, outside Cloudflare, so a network that blocks one of them isn't reported as having no IPv6.</li>
          <li>If the page hits an error, it sends the error message, the page address and your browser version back to this site so we can fix it. Using Share also counts, anonymously, which steps were used. Neither includes your results.</li>
          <li>Settings, custom endpoints and recent runs stay in this browser. Holding "Clear test data" deletes results and history; to remove settings too, clear this site's data in your browser.</li></ul>`
    ],
    [
      "Gentle on providers: no rate limits, no bans",
      `<p>Hitting public endpoints too hard could trigger a provider's rate limits or firewall (WAF) and spoil the result. So the test is kept far below that:</p>
          <ul><li>One request at a time per host, with a 250–370 ms pause between samples (2–3 requests per second per host at most).</li>
          <li>At most 2 hosts per provider at once, and at most 8 hosts in total (4 by default).</li>
          <li>At most 21 requests per host per run (1 warm-up + up to 20). There's no continuous mode.</li>
          <li>A host is dropped after 3 failures in a row, not retried over and over.</li>
          <li>Requests are anonymous: no cookies, no referrer, no preflight. Answers are a few hundred bytes, HEAD is used where possible, and nothing large is downloaded.</li></ul>
          <p>A whole run uses less data than opening an ordinary web page. Every endpoint was checked to answer anonymous requests normally (a 200, 403 or 404 is fine for timing).</p>`
    ],
    [
      "Behind a proxy or VPN?",
      `<p>If your traffic goes through a proxy, the browser measures you-to-proxy plus proxy-to-provider, not your own line. The network panel looks for the usual signs: an exit network in a data center, a time zone that doesn't match the exit country, WARP, or a WebRTC exit that differs from the HTTPS one.</p>
          <p>Use <b>Get bypass rules</b> to send just the test hosts direct (Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega or a plain list), then check again. If it's the proxy you want to measure, leave it on: the numbers then show how the proxy really performs.</p>`
    ],
    [
      "Reading the chart",
      `<ul><li>Every row uses the same scale (logarithmic, 2 ms to 3 s). Dots are samples, the shaded box covers the middle half of them, and the line is the median.</li>
          <li>A narrow box means steady; a wide box or scattered dots mean jitter. A red × counts lost samples.</li>
          <li>Click a row to see each sample in order, all the stats and the endpoint used. ✓ marks a region that meets your limits.</li></ul>`
    ]
  ],
  homeL: "Regions in your country ({c})",
  home_all: "Include",
  home_excl: "Exclude",
  home_only: "Only",
  homeTip: "Include the regions in {c}, leave them out, or test only those.",
  lp_title: "{v} latency test: {n} regions from your own network | Me2Cloud",
  lp_desc: "Test latency, jitter and packet loss to all {n} {v} regions from your own browser, over your real ISP and at peak hours. Free, nothing to install.",
  lp_h1: "How fast is {v} from your place?",
  lp_h2: "The {n} {v} regions we test",
  lp_intro: "{v} is measured through its {k} endpoints. Choose regions above and press Start test; every request goes from your browser straight to {v}.",
  lp_all: "Test all {v} clouds and {n} regions to see which is closest to you",
  nav_h: "Test a single provider",
  ipTip: "In IPv6 mode, regions without IPv6 are marked.",
  ip_no6: "Your network has no working IPv6, so only IPv4 can be tested",
  ip_no6short: "no IPv6",
  nov6: "no IPv6",
  grp_nov6: "No IPv6 endpoint",
  d_nov6: "This region has no IPv6 endpoint to test, so it's skipped in IPv6 mode.",
  d_v6: "Tested over IPv6 (through a host with an IPv6 address).",
  d_dual: "This endpoint's host has both IPv4 and IPv6. If your network has IPv6, the browser may have used it even in IPv4 mode.",
  ai_btn: "Use with AI",
  ai_h: "Use it with an AI assistant",
  ai_sub: "An AI can't test your line for you, but it can help you read the results and set up a test.",
  ai_res_h: "Ask an AI about your results",
  ai_res_p: "Paste this summary into ChatGPT, Claude or any assistant. It includes your network, your limits and the best regions, with a question at the end.",
  ai_res_none: "Run a test first. A summary of your results will show up here.",
  ai_q: "Question: based on these results, which regions and providers should I pick for my use case, and what should I watch out for?",
  ai_link_h: "Let an AI prepare a test",
  ai_link_p: "Send an assistant this prompt along with what you need. It'll build a Me2Cloud link with the right providers, areas and limits.",
  ai_linkPrompt: "Read {u} and give me a Me2Cloud link that tests the regions I should consider. My situation: (where your users are, what it's for, your budget).",
  ai_dev_h: "For developers and agents",
  ai_dev_p: "Machine-readable files: the endpoint list, the proxy rule sets, and llms.txt, which documents the link parameters and the share link format.",
  vendors: {
    aws: {
      kind: "DynamoDB /ping",
      note: `The answer names the region ('healthy: dynamodb.<region>…'), so the page can confirm where the request went.`
    },
    oracle: {
      kind: "Object Storage",
      note: "GET closes the connection after every 404 (each sample ≈ 3–4 round trips); HEAD reuses it."
    },
    vultr: {
      kind: "Looking glass",
      note: "GET returns a ~12 KB page and adds 50–70 ms; HEAD skips the body."
    },
    azure: {
      kind: "Cognitive Services",
      note: `The CNAME chain ends at <region>.cloudapp.azure.com. Samples are very steady.`
    },
    gcp: {
      kind: "Storage regional endpoint (rep)",
      note: "HEAD adds a fixed ~1 s, so only GET is used. Each region has its own IPs (34.1.x), not the global anycast front end."
    },
    aliyun: {
      kind: "OSS",
      note: "A GET that returns 403 closes the connection; HEAD reuses it."
    },
    tencent: {
      kind: "COS",
      note: "A GET that returns 403 closes the connection; HEAD reuses it."
    },
    huawei: {
      kind: "ECS API",
      note: "OBS closes the connection after every anonymous request, so the regional ECS API host is used instead. It answers with JSON, which the browser cuts off on a no-cors request (closing the connection), so the HEAD is sent in CORS mode, which keeps it open."
    },
    linode: {
      kind: "Object Storage",
      note: `The old speedtest.<dc>.linode.com hosts no longer answer, so only regions with an Object Storage cluster are covered.`
    },
    digitalocean: {
      kind: "Spaces",
      note: `speedtest-<dc>.digitalocean.com is gone; NYC1/NYC2 have no Spaces (New York uses nyc3).`
    },
    ovh: {
      kind: "Speed test (proof)",
      note: `proof.ovh.net hosts redirect to <site>.speedtest.network.ovh.net; the endpoint list uses those targets.`
    },
    hetzner: {
      kind: "Speed test",
      note: "The server drops any request with a query string, so the URL is sent as is. Its answer is an HTML page, which the browser cuts off on a no-cors request (closing the connection); a CORS GET receives the whole page before the CORS check fails, so the connection stays open."
    },
    ibm: {
      kind: "Cloud Object Storage",
      note: "A GET that returns 403 closes the connection; HEAD reuses it."
    },
    scaleway: {
      kind: "Object Storage",
      note: "GET and HEAD both keep the connection open. Hosts have IPv4 and IPv6."
    },
    volcengine: {
      kind: "TOS",
      note: "A GET that returns 403 closes the connection; HEAD reuses it."
    },
    baidu: {
      kind: "BOS",
      note: "A GET that returns 403 closes the connection; HEAD reuses it."
    },
    ionos: {
      kind: "Logging API (regional)",
      note: "One API host per compute location; Object Storage covers fewer, and its older clusters can't keep a connection open."
    },
    aruba: {
      kind: "Object Storage",
      note: "HEAD reuses the connection everywhere; GET closes it in R3-IT."
    },
    leaseweb: {
      kind: "Object Storage",
      note: "A GET that returns 400 closes the connection; HEAD reuses it. Labeled by country, as the docs list no cities."
    },
    gcore: {
      kind: "Object Storage",
      note: "GET closes the connection; HEAD reuses it. Sines and London-2 run on a different storage system and use a CORS GET that reads the whole answer."
    },
    yandex: {
      kind: "Object Storage",
      note: "GET and HEAD both keep the connection open. Hosts have IPv4 and IPv6; one endpoint per region."
    },
    naver: {
      kind: "Object Storage",
      note: "A GET that returns 403 closes the connection; HEAD reuses it."
    }
  },
  ip_h: "IP version"
};
