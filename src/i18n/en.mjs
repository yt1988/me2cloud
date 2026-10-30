// Me2Cloud text: en. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud: cloud latency test from your own network · AWS, Azure, Google Cloud and 360+ regions",
  seo_desc: "Free latency test from your own browser to 360+ cloud regions of AWS, Azure, Google Cloud, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Vultr, Linode, DigitalOcean, Scaleway, OVHcloud and Hetzner. Median, jitter and loss over your real ISP, Wi-Fi and peak hours. Nothing leaves your browser.",
  seo_kw: "cloud ping, cloud latency test, region latency, AWS ping, Azure latency, Google Cloud ping, Alibaba Cloud ping, Vultr ping, which cloud region is closest",
  og_sub: "360+ regions · 17 providers · measured in your own browser",
  unlisted: "unlisted region",
  share_btn: "Share",
  viewingShared: "Viewing a shared result; press Start to test your own line",
  share_h: "Share your results",
  share_sub: "The image and the link are made right here in your browser. Nothing is uploaded.",
  share_loc: "Show city and ISP",
  share_link: "Share link",
  share_shortNote: "The results of {k} regions are saved on {host} to make this short link. No IP, no custom endpoints.", share_shortFail: "Couldn't make a short link. This is the full link.",
  share_len: "{k} regions are packed into the link itself ({n} characters). No IP, no custom endpoints.",
  share_copyLink: "Copy link",
  share_copyImg: "Copy image",
  share_dl: "Download image",
  share_native: "Share…",
  share_banner: "Shared result · {who} · {d}",
  share_anon: "location hidden",
  share_viaProxy: "measured through a proxy",
  share_mine: "Test the same regions on my network",
  share_exit: "Back to my results",
  share_bad: "This share link could not be read",
  share_none: "Run a test first",
  share_failed: "Your browser blocked it",
  copiedImg: "Image copied",
  sharedNoRaw: "Shared results carry the statistics only, not every sample.",
  card_title: "How fast are the clouds from my place",
  card_cta: "How fast are the clouds from your place?",
  card_local: "measured in the browser",
  card_regions: "{n} regions × {k}",
  card_more: "+{n} more",
  sep: ", ",
  allVendors: "All providers",
  allAreas: "All areas",
  noArea: "none",
  pickVendor: "Choose providers",
  pickFirst: "Choose the providers to test first",
  lgLive: "pulsing = still measuring",
  reset: "Clear test data",
  resetHint: "Hold for 1 second. Test results and history are deleted; settings stay.",
  resetDone: "Test data cleared",
  cust_tip: "Any HTTPS URL works; a tiny static file or a /ping path answers fastest. GET or HEAD is picked automatically.",
  doc_h: "How it works & FAQ",
  rules_sub: "Send the test hosts direct, so the results show your own line instead of the proxy's. The rules only match the test hosts, nothing else.",
  rules_remote_h: "Recommended: remote rule set",
  rules_remote_s: "Your tool fetches the list from us and keeps it up to date when we add regions. Add these lines once.",
  rules_inline_h: "Or paste every rule yourself ({n}, with notes)",
  rules_inline_only: "This tool has no remote rule sets, so paste the rules ({n}, with notes)",
  rules_custom: "Your custom endpoints are not in the remote set; add these too:",
  rc_detect: "Network check (Cloudflare, ipify, ident.me)",
  rc_top: "keep this above your other rules",
  rules_json_note: "JSON has no comments; hosts are listed in provider order.",
  rules_steps: [
    `Copy the lines and put them <b>above</b> your other rules, so they match first.`,
    "Reload the config. In TUN or fake-ip mode keep the real-IP part too (included above).",
    "Turn off browser proxy extensions for this page, or add the list to their bypass list.",
    "Press the refresh button next to your network. When it shows your real ISP, start the test."
  ],
  heroT: "How fast are the clouds from your place?",
  lgMiss: "hollow = does not fit your needs",
  whyS1: "Measured from your own line",
  whyS2: "Your ISP and peak hour included",
  whyS3: "Real HTTPS, same road as your apps",
  whyLink: "Why not a ping site? →",
  pxShort: "Proxy detected",
  okShort: "Direct connection",
  unkShort: "Network unknown",
  netDetails: "Details",
  pl_vendors: "Providers",
  pl_areas: "Areas",
  off: "Off",
  noLoss: "no loss",
  m_quickD: "A fast first look",
  m_stdD: "Recommended",
  m_preciseD: "For the final shortlist",
  startSub: "{n} regions · about {t}",
  lastRun: "Last run {d}: {n} regions",
  viz_h: "Where each region lands",
  vizSub: "{n} measured · {p} fit your needs",
  viz_empty: "Press Start. Every region pops up here the moment it is measured.",
  needLine: "your limit",
  picks_sub2: "{n} regions fit ({need}); these three are the best all-round.",
  grp_other: "Waiting / unreachable",
  jitWarn: "Jumpy: jitter ±{j} ms",
  lossWarn: "{p}% of samples lost",
  res_h: "All regions",
  rules_note_loon: "Paste at the top of [Rule].",
  concHint: "Fewer is more precise, more is faster. Each provider gets at most 2 at a time.",
  secTest: "Test",
  conc: "Endpoints in parallel",
  timeout: "Timeout per request",
  rtcOpt: "WebRTC exit check (STUN)",
  theme: "Theme",
  th_system: "System",
  th_light: "Light",
  th_dark: "Dark",
  secData: "Data",
  copyLink: "Copy setup link",
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
  peakTip: "It is {now}, evening rush (20:00–23:00). Results now show your line at its worst, which is what you want to know.",
  offPeakTip: "It is {now}. Lines are usually quieter now; run it again between 20:00 and 23:00 to see the evening rush.",
  px_okNote: "Exit IP, network and time zone line up. A router-level proxy or a corporate network can still hide itself, so make sure the network above is your real ISP.",
  px_unknownNote: "The Cloudflare lookups were blocked. Tests still work, but nobody can tell whether a proxy is on.",
  r_dc: "Your exit network is {org}, a data center. That is almost always a VPN, proxy or cloud server, not a home line.",
  r_warp: "Cloudflare WARP is on.", ipHidden: "IP hidden by Safari", px_hiddenNote: "Safari's Limit IP Address Tracking treats some of this check's requests as trackers and sends them through Apple's relay, so the public IP, network and Cloudflare latency above belong to the relay, and the location comes from your device's time zone. The cloud test endpoints normally aren't on that list and still go direct, so your results aren't affected.", pxRelay: "iCloud Private Relay", r_relay: "Your exit is iCloud Private Relay ({org}), not your own line. Safari sends every request through it, so the results would be the relay's latency, and direct rules can't change that. To test your own line, turn it off for this network: Settings → Cellular → Cellular Data Options (or the ⓘ next to your Wi-Fi) → turn off Limit IP Address Tracking. Or run the test in Chrome or Firefox, which Private Relay doesn't cover.",
  r_tz: "Your clock says {a}, but your exit IP is in {b}.",
  r_rtc: "WebRTC (UDP) goes out from {a}, HTTPS from {b}: traffic is being split.",
  r_fam: "The {f} check goes out from {a}, but your main exit is {b}: some requests are going through a proxy. Update the direct rules and check again.",
  chkFail: "Check failed", chkBlocked: "maybe blocked by an extension or the network",
  chk_net: "Reading network info", chk_ip: "Checking IPv4 / IPv6", chk_edge: "Timing the nearest Cloudflare {i}/{n}",
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
  maxLat: "Max median",
  maxJit: "Max jitter",
  maxLoss: "Max loss",
  p_game: "Gaming",
  p_call: "Video calls",
  p_ssh: "SSH / remote desktop",
  p_web: "Website / API",
  p_any: "No requirements",
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
  picks_none: "Nothing fits your needs yet. These come closest; loosen a limit or try other providers.",
  anyLat: "any latency",
  search: "Search region, city, provider",
  onlyPass: "Only what fits",
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
  d_cold: "This endpoint cannot keep the connection open, so every sample includes a fresh handshake (≈ 3 × the real round trip). Compare it only with itself.",
  d_verified: "Reached the provider for real (CORS check passed)",
  d_notverified: "CORS check failed: something between you and the provider may have answered instead.",
  d_review: "Heads-up: this may be a dedicated region that regular customers cannot buy.",
  retest: "Re-test × 20",
  copyUrl: "Copy URL",
  cust_h: "Custom endpoints",
  cust_name_ph: "My VPS (Tokyo)",
  add: "Add",
  del: "Remove",
  cust_err_url: "That is not a valid URL.",
  cust_err_https: "Use an https:// URL. Browsers block plain http requests from an https page.",
  cust_err_dup: "Already in the list.",
  cust_added: "Added. It joins the next test.",
  cust_group_ph: "New group name",
  cust_geo: "Countries are found in your browser: the host's IP from Google Public DNS (asked with your network's /24, so CDNs answer for your line), then a built-in IP table.",
  cust_geo_ing: "Locating…",
  cust_geo_fail: "Not found",
  cust_cc: "Country / region",
  cust_auto: "Auto",
  ccNames: {CN: "Mainland China", HK: "Hong Kong, China", MO: "Macao, China", TW: "Taiwan, China"},
  share_customOnly: "Only cloud providers’ results are shared; custom nodes stay private. Include some providers in the test to share.",
  cust_empty: "No custom nodes yet. Add your own servers or sites with “＋ Add”; a group of them works like a provider.",
  cust_err_nx: "{h} doesn't exist. Check the address (are the name and the address swapped?).",
  cust_saved: "Saved.",
  cust_cancel: "Cancel",
  cust_save: "Save",
  cust_edit: "Edit",
  cust_newgroup: "New group",
  cust_nogroup: "No group",
  cust_group: "Group",
  log_h: "Request log",
  log_note: "Every request below went from this browser straight to the host shown. This page has no backend and sends your results nowhere. Check it yourself in the developer tools (Network tab).",
  log_empty: "Nothing sent yet.",
  failed: "failed",
  rules_h: "Bypass rules for a clean test",
  copy: "Copy",
  copied: "Copied",
  rules_fakeip: "fake-ip mode: let these hosts resolve to their real IPs",
  rules_plain: "Plain list",
  rules_note_clash: "Paste the rules at the very top of rules:, and the hosts into dns.fake-ip-filter if you use fake-ip.",
  rules_note_surge: "Put the rules at the top of [Rule]. always-real-ip keeps the real DNS answer for these hosts.",
  rules_note_shadowrocket: "Put the rules at the top of [Rule] in your config, or add them one by one under Config → Rules.",
  rules_note_quanx: "Paste into [filter_local], above your other rules.",
  rules_note_singbox: `Merge into route.rules and dns.rules; outbound "direct" and DNS server "local" must match tags in your config.`,
  rules_note_xray: `Merge into routing.rules; outboundTag "direct" must match a freedom outbound in your config.`,
  rules_note_omega: "Paste into the bypass list (“No proxy for”) of your SwitchyOmega profile.",
  rules_note_plain: "One host per line, for any other tool.",
  imported: "Results imported",
  importErr: "Not a Me2Cloud results file",
  foot: "Everything runs in your browser · Endpoints verified {d} · Not affiliated with any provider",
  docs: [
    [
      "Why testing from your own network beats ping sites and looking glasses",
      `<p>Most "cloud ping" sites and every provider looking glass send the test from <b>their</b> servers, sitting in data centers on premium transit. That tells you how one data center reaches another. It says nothing about the part you actually feel: your home or mobile line, your ISP's backbone, its border links and how crowded they are tonight.</p>
          <p>Me2Cloud sends every request from <b>your</b> browser, so the result includes all of it: Wi-Fi, router, ISP, the route your ISP picks, and the evening rush.</p>
          <div class="tblwrap"><table class="cmp"><tr><th></th><th>Ping sites / looking glass</th><th>ICMP ping on your PC</th><th>Me2Cloud</th></tr>
          <tr><td>Starts from</td><td class="n">their data center</td><td class="y">your network</td><td class="y">your network</td></tr>
          <tr><td>Covers your ISP and peak hour</td><td class="n">no</td><td class="y">yes</td><td class="y">yes</td></tr>
          <tr><td>Same protocol as websites and apps (TCP 443)</td><td class="m">varies</td><td class="n">no, ICMP</td><td class="y">yes, HTTPS</td></tr>
          <tr><td>Throttled or filtered by networks</td><td class="m">sometimes</td><td class="n">often</td><td class="y">rarely</td></tr>
          <tr><td>Hundreds of regions in one click</td><td class="m">some</td><td class="n">no</td><td class="y">yes</td></tr>
          <tr><td>Needs an install</td><td class="y">no</td><td class="y">no</td><td class="y">no</td></tr></table></div>`
    ],
    [
      "How each sample is measured",
      `<ol><li>A <b>warm-up</b> request opens DNS, TCP and TLS. Its time is shown but never counted.</li>
          <li>Then the browser sends 5, 10 or 20 more requests to the same host over the <b>same connection</b>. Each one costs a single round trip plus the provider's processing time.</li>
          <li>Each provider uses the request type we verified keeps the connection open: <code>GET</code> for AWS, Azure, Google Cloud, Huawei Cloud, DigitalOcean and Scaleway; <code>HEAD</code> for Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Linode, Vultr and OVHcloud (their GET closes the connection, which would triple every sample); <code>&lt;img&gt;</code> only for Hetzner.</li>
          <li>We report <b>median</b> (the typical value), <b>average</b>, <b>P90</b> (9 out of 10 samples are at or below it), <b>jitter</b> (average change between consecutive samples) and <b>loss</b> (samples with no answer within the timeout).</li>
          <li>The <b>tier</b> comes from the median: T0 ≤ 30 ms, T1 ≤ 80 ms, T2 ≤ 150 ms, T3 ≤ 250 ms, T4 above that. The overall score used for picks is median + 2 × jitter + loss penalty, so a steady 60 ms beats a jumpy 45 ms.</li></ol>`
    ],
    [
      "Why HTTPS timing is closer to real life than ICMP ping",
      `<ul><li><b>Same road as your traffic.</b> Websites, APIs, SSH tunnels over 443, game logins and downloads all ride TCP. Many ISPs queue, shape or route ICMP separately, so ping can look fine while pages crawl, or the other way round.</li>
          <li><b>Not throttled away.</b> Routers and clouds often rate-limit or drop ICMP. HTTPS to a public endpoint always gets an answer.</li>
          <li><b>Includes your real setup.</b> DNS, IPv4 vs IPv6 choice, proxies and accelerators all apply to browser traffic, so you test what you would actually get.</li>
          <li><b>The catch:</b> each sample also includes a small, steady server processing time. We measured 0–5 ms for AWS, about 8 ms for Alibaba Cloud and about 20 ms for Huawei Cloud OBS. For anything over 100 ms it does not matter; for very nearby regions the number reads a bit higher than ping.</li></ul>`
    ],
    [
      "When to test: hit the evening rush",
      `<ul><li>Residential networks are most crowded from about <b>20:00 to 23:00</b>, and cross-border links even more. A region that is T1 at noon can drop to NPC at night.</li>
          <li>Run once during the day and once at peak. Saved runs are tagged “peak hour”, and you can switch between them in Results.</li>
          <li>Pause big downloads, streaming and cloud sync while testing. Wired beats Wi-Fi; if you must use Wi-Fi, stay near the router.</li>
          <li>On mobile data, results move with signal strength. Test where you will actually use the service.</li></ul>`
    ],
    [
      "Good for",
      `<ul><li>Shortlisting regions before you buy a server, a game host or a CDN origin.</li>
          <li>Comparing regions of one provider, or the same city across providers.</li>
          <li>Checking stability (jitter, loss) for gaming, video calls, remote desktop and SSH.</li>
          <li>Seeing how your proxy, accelerator or new ISP plan really performs, by testing with and without it.</li>
          <li>Testing your own server or CDN next to the big names with a custom endpoint.</li></ul>`
    ],
    [
      "What it cannot tell you",
      `<ul><li><b>One location only.</b> It is your line, not your users'. Ask a few users to run it, or export and compare.</li>
          <li><b>Endpoints, not your future VM.</b> We test each provider's public API or storage endpoint in the region. Servers in the same region usually share the network, but premium routes (for example CN2, BGP vs single-carrier lines, Lightsail vs EC2) can differ.</li>
          <li><b>No bandwidth, no UDP, no route trace.</b> It measures round trips, not download speed, UDP game traffic or the hops in between.</li>
          <li><b>Browser effects.</b> Extensions, proxies, VPNs and a busy tab add noise. Close heavy tabs and keep the page in front.</li>
          <li><b>Hetzner</b> cannot keep a connection open from a browser, so its numbers include a handshake every time. Some endpoints can also be unreachable from a few countries.</li></ul>`
    ],
    [
      "Every request comes from your browser",
      `<ul><li>The page is static files on Cloudflare. There is no backend, no account, no analytics, and results are never uploaded.</li>
          <li>All test requests go directly from your browser to the provider. Open the <b>Request log</b> above or your browser's developer tools (Network tab) to see each one.</li>
          <li>Network info comes from Cloudflare (<code>speed.cloudflare.com/meta</code> and <code>/cdn-cgi/trace</code>), and the optional WebRTC check asks <code>stun.cloudflare.com</code> for your UDP exit address. Turn it off in Settings if you prefer.</li>
      <li>IPv4/IPv6 detection also asks <code>ipify.org</code> and <code>ident.me</code>, two providers outside Cloudflare, so a network that blocks one of them isn't reported as having no IPv6.</li>
          <li>Settings, custom endpoints and the last runs stay in this browser's local storage. “Reset all data” wipes them.</li></ul>`
    ],
    [
      "Gentle on providers: no rate limits, no bans",
      `<p>Hitting public endpoints too hard could trip a provider's rate limiting or WAF and spoil the result. The test is built to stay far below that:</p>
          <ul><li>One request at a time per host, with a 250–370 ms pause between samples (about 2–3 requests per second per host at most).</li>
          <li>At most 2 hosts per provider at once, and at most 8 hosts overall (4 by default).</li>
          <li>At most 21 requests per host per run (warm-up + 20). No continuous mode.</li>
          <li>A host is dropped after 3 failures in a row instead of being retried.</li>
          <li>Anonymous, cookie-less, referrer-less "simple" requests: no preflight, tiny responses (a few hundred bytes), HEAD where possible, and nothing is downloaded in bulk.</li></ul>
          <p>That is less traffic than opening one ordinary web page. Every endpoint was checked to answer anonymous requests normally (status 200, 403 or 404 is all fine for timing).</p>`
    ],
    [
      "Behind a proxy or VPN?",
      `<p>If your traffic goes through a proxy, the browser measures your route to the proxy plus the proxy's route to the provider, not your own line. The network panel looks for the usual signs: an exit network that belongs to a data center, a time zone that does not match the exit country, WARP, or a WebRTC exit that differs from the HTTPS one.</p>
          <p>Use <b>Get bypass rules</b> to send just the test hosts direct (Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega or a plain list), then check again. If you want to measure the proxy itself, leave it on: the numbers are then the proxy's real performance.</p>`
    ],
    [
      "Reading the chart",
      `<ul><li>Each row's strip uses one shared scale (log, 2 ms to 3 s). Dots are samples, the shaded box covers the middle half of the samples, and the bar is the median.</li>
          <li>A narrow box means steady; a wide box or scattered dots means jitter. A red × counts lost samples.</li>
          <li>Click a row to see each sample in order, plus all stats and the endpoint used. ✓ marks a row that fits your needs.</li></ul>`
    ]
  ],
  homeL: "Regions in your country ({c})",
  home_all: "Include",
  home_excl: "Exclude",
  home_only: "Only",
  homeTip: "Include the regions in {c}, leave them out, or test only those.",
  lp_title: "{v} latency test: {n} regions from your own network | Me2Cloud",
  lp_desc: "Test the latency, jitter and loss of all {n} {v} regions from your own browser, over your real ISP and at peak hours. Free, nothing to install.",
  lp_h1: "How fast is {v} from your place?",
  lp_h2: "The {n} {v} regions we test",
  lp_intro: "{v} is measured through its {k} endpoints. Pick the regions above and press Start; every request goes from your browser straight to {v}.",
  nav_h: "Test one provider",
  ipTip: "Regions without IPv6 are marked unsupported in IPv6 mode.",
  ip_no6: "Your network has no working IPv6, so only IPv4 can be tested",
  ip_no6short: "no IPv6",
  nov6: "no IPv6",
  grp_nov6: "No IPv6 endpoint",
  d_nov6: "This region has no IPv6 endpoint we can test, so it was skipped in IPv6 mode.",
  d_v6: "Tested over IPv6 (a host with an IPv6 address).",
  d_dual: "This endpoint’s host is dual-stack: if your network has IPv6, the browser may have used IPv6 even in IPv4 mode.",
  ai_btn: "Use with AI",
  ai_h: "Use it with an AI agent",
  ai_sub: "An assistant cannot measure your line, but it can help you read the results and set up tests.",
  ai_res_h: "Ask an AI about your results",
  ai_res_p: "Copy this summary into ChatGPT, Claude or any assistant. It lists your network, your requirements and the best regions, with a question at the end.",
  ai_res_none: "Run a test first; the summary of your results will appear here.",
  ai_q: "Question: based on these results, which regions and providers should I pick for my use case, and what should I watch out for?",
  ai_link_h: "Let an AI prepare a test",
  ai_link_p: "Give an assistant this prompt plus what you need; it builds a Me2Cloud link with the right providers, areas and limits.",
  ai_linkPrompt: "Read {u} and give me a Me2Cloud link that tests the regions I should consider for: (describe your users, use case and budget here).",
  ai_dev_h: "For developers and agents",
  ai_dev_p: "Machine-readable files: the endpoint registry, the proxy rule sets, and llms.txt with link parameters and the share link format.",
  vendors: {
    aws: {
      kind: "DynamoDB /ping",
      note: `Body is 'healthy: dynamodb.<region>…', so the page can confirm the region.`
    },
    oracle: {
      kind: "Object Storage",
      note: "GET closes the connection after every 404 (each sample ≈ 3–4 RTT); HEAD reuses it."
    },
    vultr: {
      kind: "Looking glass",
      note: "GET returns a ~12 KB page and adds 50–70 ms; HEAD avoids the body."
    },
    azure: {
      kind: "Cognitive Services",
      note: `CNAME chain ends at <region>.cloudapp.azure.com. Very stable samples.`
    },
    gcp: {
      kind: "Storage regional endpoint (rep)",
      note: "HEAD adds a fixed ~1 s, never use it. Per-region IPs (34.1.x), not the global anycast front end."
    },
    aliyun: {
      kind: "OSS",
      note: "GET 403 closes the connection; HEAD reuses it."
    },
    tencent: {
      kind: "COS",
      note: "GET 403 closes the connection; HEAD reuses it."
    },
    huawei: {
      kind: "OBS",
      note: "GET and HEAD both keep the connection alive."
    },
    linode: {
      kind: "Object Storage",
      note: `Legacy speedtest.<dc>.linode.com hosts no longer answer; only regions with an Object Storage cluster are covered.`
    },
    digitalocean: {
      kind: "Spaces",
      note: `speedtest-<dc>.digitalocean.com is gone; NYC1/NYC2 have no Spaces (use nyc3 for New York).`
    },
    ovh: {
      kind: "Speed test (proof)",
      note: `proof.ovh.net hosts redirect to <site>.speedtest.network.ovh.net; the registry uses the targets.`
    },
    hetzner: {
      kind: "Speed test",
      note: `fetch() fails in the browser (cause unclear; curl works); <img> works but opens a new connection each time, so samples ≈ 3 RTT.`
    },
    ibm: {
      kind: "Cloud Object Storage",
      note: "GET 403 closes the connection; HEAD reuses it."
    },
    scaleway: {
      kind: "Object Storage",
      note: "GET and HEAD both keep the connection alive. Dual-stack hosts."
    },
    volcengine: {
      kind: "TOS",
      note: "GET 403 closes the connection; HEAD reuses it."
    },
    baidu: {
      kind: "BOS",
      note: "GET 403 closes the connection; HEAD reuses it."
    },
    naver: {
      kind: "Object Storage",
      note: "GET 403 closes the connection; HEAD reuses it."
    }
  },
  ip_h: "IP version"
};
