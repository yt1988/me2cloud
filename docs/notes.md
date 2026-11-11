# Design notes

Technical reasons behind choices the code does not explain, and what was measured.

- **Timeout rate, not packet loss.** A browser request or TCP handshake that does not finish in time is not
  necessarily a lost packet: the endpoint may be slow or blocking, or the browser may still be queueing the
  request. So the page says "timeout rate".
  - Only a vps2cloud result measured with ICMP says "packet loss", since an echo with no reply is a lost packet. The
    share link carries the mode, and the page picks the word from it.
  - Labels may use a shorter form that fits at 375 px ("Max timeouts"); sentences use the full term.
  - The field names (`loss`, `loss_pct`, `need=`) did not change, so old links keep working.
- **The watcher measures TCP handshakes only.** HTTPS requests like the browser's would cost about ten times the
  traffic: TCP for 392 regions over both IP families every 15 minutes is about 2 GB a month. ICMP would need NET_RAW
  for a resident service. The page uses only the 24-hour median, the share of runs that answered, and
  "unreachable since". That mark appears after 4 runs (1 hour) with no answer. The server's latency is not the
  visitor's, and the page says so.
- **IPv6 entries follow the watcher, but only on a refusal.** `scripts/endpoints/ipv6.mjs` drops the IPv6 entry of a
  host whose IPv6 connection is refused. A timeout is not enough, since it may be the route.
- **`/tokyo.json` answers browsers with `max-age=0, must-revalidate`.** The Worker keeps the cut-down summary 5
  minutes in its own cache. A Cloudflare zone with a Browser Cache TTL raises any shorter `max-age` (300, say) to
  that TTL, 4 hours on 1ms.dog. `max-age=0, must-revalidate` is left alone. The page also asks with
  `cache: "no-cache"`.
- **Route Trace link only fills in the target.** The link passes the endpoint host as `?t=`. The trace starts only
  when the visitor presses start, because the target is sent to a third party (Globalping). Custom endpoints get no
  link.
- **No bandwidth, UDP or traceroute in the page.** A static page cannot measure upload reliably without endpoints of
  its own. no-cors downloads can be timed but not read.
- **The page does not jump while it tests (layout shift).** 2026-11-11, from the shell's weekly smoke: the home page
  scored CLS 0.68. Measured with `PerformanceObserver({ type: "layout-shift", buffered: true })`, one entry made up
  almost all of it (0.62, at ~630 ms): the region chart is drawn by the app after the first paint, so the card went
  from 71 px (header only) to 1420 px (28 provider and CDN lanes plus axis and legend) and the centred "no results
  yet" hint travelled down the page. The test run itself did not move anything — the rows and podium slots are drawn
  when Start is pressed.
  - The chart's height is now reserved before the first paint. The pre-paint script turns the visitor's saved picks
    (or `?vendors=`, or the build's default of every provider and CDN) into the same lane count `renderViz` will draw,
    using the same `lh` rule (84/60/46 px) plus 94 px of padding, axis and legend, and sets `--viz-h`; `.viz` carries
    it as `min-height`. `renderViz` updates the same variable when the picks change on the page.
  - A share link (`#s=`) is decoded after the first paint, so the chart draws nothing until then (no lanes from the
    picks that would be replaced) and one lane is reserved. What is left on a share link (~0.14) is the share banner
    and the podium appearing above the chart, not the chart.
  - The progress row keeps its height too: the bar row stays in the layout while hidden, and the "which endpoints are
    on the wire" chips sit on one line (clipped on a phone) instead of wrapping, so starting, finishing or the chips
    changing never moves the cards below the hero.
  - Measured after the change: CLS 0 on the home page at 1280 px and at 375 px, with and without a click on Start;
    0.02 at 375 px before the progress-row part of the fix.
