# me2cloud-watch

The Tokyo health check of every Me2Cloud region, on the 1ms.dog server (AWS Lightsail Tokyo). Ports, directories
and the user are assigned in 1ms-shell `docs/processes.md` ("专用服务器"); this file only describes the service.

- **What it does**: every 15 minutes, from minute 7 (`1ms-me2cloud-watch.timer`), one run of
  [vps2cloud](https://github.com/yt1988/vps2cloud) in TCP mode: 3 handshakes per region over IPv4 and IPv6, with no TLS and no ICMP.
  The endpoint list is `https://m2c.1ms.dog/endpoints.json`, fetched at most every 6 hours.
- **What it publishes**: files in `/srv/1ms-data/me2cloud/`, served read-only at `https://data.1ms.dog:2083/me2cloud/`, which the Worker fetches.
  Each file is written to a temporary file and renamed, so a reader never sees half a file.
  - `latest.json`: the last run, with median, p90, jitter, timeout rate (field `loss`, a share of the handshakes) and error per region and IP family.
  - `summary.json`: for each region and family (`v4`, `v6`), these fields:
    - `med`: the last median.
    - `med24` and `med7`: the 24-hour and 7-day medians.
    - `up24` and `up7`: the share of runs that got any answer.
    - `down`: the unix time from which the region has been unreachable, once that has lasted 4 runs (1 hour) in a row.
- **State**: `/var/lib/1ms-me2cloud/`, holding the endpoint list and `history.json` (7 days of medians, about 3 MB).
- **Privacy**: it measures only our own list of cloud endpoints. It never reads or keeps anything about visitors and writes no access log.
- **Limits**:
  - Runs as `1ms-me2cloud` with no capabilities.
  - `MemoryMax=128M`. A run takes about a minute and uses a few tens of MB.
  - Writes only to its state directory and the published directory.

## Deploy

Nothing is compiled on the server. When this directory changes on `main`, `.github/workflows/watch.yml` publishes a
static linux/amd64 build as a release tagged `watch-<short commit>`, marked latest, with `SHA256SUMS`:

```bash
base=https://github.com/yt1988/me2cloud/releases/latest/download
for f in me2cloud-watch 1ms-me2cloud-watch.service 1ms-me2cloud-watch.timer SHA256SUMS; do curl -fsSLO "$base/$f"; done
sha256sum -c SHA256SUMS
```

Or build it on another machine and upload it over SFTP:

```bash
cd server/watch && GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o me2cloud-watch .
```

Upload these files:

- `me2cloud-watch` and the `vps2cloud-linux-amd64` release binary (check it against the release's `checksums.txt`) go to `/opt/1ms/me2cloud/`, the second renamed `vps2cloud`.
- The two unit files go to `/etc/systemd/system/`.

Then start the timer:

```bash
systemctl daemon-reload && systemctl enable --now 1ms-me2cloud-watch.timer
```

## Check

```bash
systemctl list-timers 1ms-me2cloud-watch.timer
```

```bash
systemctl start 1ms-me2cloud-watch && journalctl -u 1ms-me2cloud-watch -n 20 --no-pager
```

```bash
curl -s https://data.1ms.dog:2083/me2cloud/summary.json | head -c 400
```

## vps2cloud release check (by hand, before a release)

1. Upload the candidate binary to `/opt/1ms/me2cloud/rc/`.
2. Run it once: `-m tcp -4 -6 -o json --endpoints /var/lib/1ms-me2cloud/endpoints.json`, adding `-m icmp` with sudo for that run only.
3. Compare the medians with `summary.json` (`med24`). The resident service never has NET_RAW.
