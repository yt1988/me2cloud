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
