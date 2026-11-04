// me2cloud-watch: one run of the Tokyo health check of every Me2Cloud region. A systemd timer starts it every
// 15 minutes. It measures with vps2cloud itself (TCP handshakes only, IPv4 and IPv6), keeps 7 days of medians in
// its state directory, and writes two files into the published directory, each by an atomic rename:
//
//	latest.json   this run: median, p90, jitter and loss per region and IP family
//	summary.json  per region and family: the last median, the 24 h and 7 d medians, the share of runs that got
//	              an answer, and since when it has been unreachable when that has lasted an hour or more
//
// Nothing about visitors is read or kept: the only thing measured is our own list of cloud endpoints.
package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io"
	"math"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"sort"
	"time"
)

var (
	bin      = flag.String("bin", "/opt/1ms/me2cloud/vps2cloud", "vps2cloud binary")
	state    = flag.String("state", "/var/lib/1ms-me2cloud", "state directory (endpoint list, history)")
	out      = flag.String("out", "/srv/1ms-data/me2cloud", "published directory")
	listURL  = flag.String("list", "https://m2c.1ms.dog/endpoints.json", "endpoint list")
	samples  = flag.Int("n", 3, "handshakes per region and family")
	keepDays = flag.Int("days", 7, "days of history kept")
)

const (
	listEvery = 6 * time.Hour // the list changes at most weekly
	downAfter = 4             // runs in a row with no answer at all before a region counts as unreachable (1 hour)
)

// one run of vps2cloud -o json, the fields used here
type v2c struct {
	Version string    `json:"version"`
	Time    time.Time `json:"time"`
	Regions []struct {
		ID      string `json:"id"`
		Family  int    `json:"ip_family"`
		Error   string `json:"error"`
		Results map[string]struct {
			OK      int      `json:"ok"`
			Samples int      `json:"samples"`
			LossPct float64  `json:"loss_pct"`
			Median  *float64 `json:"median_ms"`
			P90     *float64 `json:"p90_ms"`
			Jitter  *float64 `json:"jitter_ms"`
			Error   string   `json:"error"`
		} `json:"results"`
	} `json:"regions"`
}

// history: per "id/4" or "id/6", one value per run in tenths of a millisecond; -1 is a run with no answer.
// A family the region does not have (no IPv6 address) is not recorded at all.
type history struct {
	Times  []int64            `json:"times"`
	Series map[string][]int32 `json:"series"`
}

type fam struct {
	Med     *float64 `json:"med"`               // this run, ms
	Med24   *float64 `json:"med24,omitempty"`   // median of the last 24 h of runs that answered
	Med7    *float64 `json:"med7,omitempty"`    // same over the kept history
	Up24    *float64 `json:"up24,omitempty"`    // % of the last 24 h of runs that got any answer
	Up7     *float64 `json:"up7,omitempty"`     // same over the kept history
	Down    *int64   `json:"down,omitempty"`    // unix time of the first run of the current streak with no answer, once it reaches downAfter runs
	Runs24  int      `json:"runs24,omitempty"`  // runs in the 24 h figures
	Missing bool     `json:"missing,omitempty"` // no answer in this run
}

func main() {
	flag.Parse()
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, "me2cloud-watch:", err)
		os.Exit(1)
	}
}

func run() error {
	list := filepath.Join(*state, "endpoints.json")
	if err := refreshList(list); err != nil {
		// an old copy is good enough; without one there is nothing to measure
		if _, e := os.Stat(list); e != nil {
			return fmt.Errorf("endpoint list: %w", err)
		}
		fmt.Fprintln(os.Stderr, "me2cloud-watch: keeping the old endpoint list:", err)
	}

	cmd := exec.Command(*bin, "-m", "tcp", "-4", "-6", "-n", fmt.Sprint(*samples), "-t", "2s", "-o", "json",
		"--stdout", "--no-link", "-q", "--lang", "en", "--endpoints", list)
	cmd.Env = append(os.Environ(), "V2C_NO_UPDATE=1", "NO_COLOR=1")
	var so, se bytes.Buffer
	cmd.Stdout, cmd.Stderr = &so, &se
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("vps2cloud: %v: %s", err, bytes.TrimSpace(se.Bytes()))
	}
	var r v2c
	if err := json.Unmarshal(so.Bytes(), &r); err != nil {
		return fmt.Errorf("vps2cloud output: %w", err)
	}
	if len(r.Regions) == 0 {
		return errors.New("vps2cloud measured no region")
	}

	h := loadHistory(filepath.Join(*state, "history.json"))
	now := r.Time.Unix()
	h.Times = append(h.Times, now)
	n := len(h.Times)
	type row struct {
		ID     string   `json:"id"`
		Family int      `json:"fam"`
		Med    *float64 `json:"med"`
		P90    *float64 `json:"p90,omitempty"`
		Jit    *float64 `json:"jit,omitempty"`
		Loss   float64  `json:"loss"`
		Error  string   `json:"error,omitempty"`
	}
	var rows []row
	seen := map[string]bool{}
	for _, x := range r.Regions {
		t, ok := x.Results["tcp"]
		if x.Error == "no IPv6" || (!ok && x.Family == 6) {
			continue
		}
		key := fmt.Sprintf("%s/%d", x.ID, x.Family)
		seen[key] = true
		v := int32(-1)
		if ok && t.Median != nil {
			v = int32(math.Round(*t.Median * 10))
		}
		s := h.Series[key]
		for len(s) < n-1 { // a region new to the list: earlier runs did not measure it
			s = append(s, math.MinInt32)
		}
		h.Series[key] = append(s, v)
		e := x.Error
		if e == "" {
			e = t.Error
		}
		rows = append(rows, row{x.ID, x.Family, t.Median, t.P90, t.Jitter, t.LossPct, e})
	}
	// a region dropped from the list (or that lost its IPv6) gets a gap this run, and leaves once its history is gone
	for k, s := range h.Series {
		if !seen[k] {
			h.Series[k] = append(s, math.MinInt32)
		}
	}
	prune(&h, now-int64(*keepDays)*86400)

	if err := writeJSON(filepath.Join(*state, "history.json"), h); err != nil {
		return err
	}
	sort.Slice(rows, func(i, j int) bool {
		if rows[i].ID != rows[j].ID {
			return rows[i].ID < rows[j].ID
		}
		return rows[i].Family < rows[j].Family
	})
	latest := map[string]any{"from": "Tokyo · AWS Lightsail", "mode": "tcp", "samples": *samples, "tool": "vps2cloud " + r.Version,
		"time": r.Time.UTC().Format(time.RFC3339), "regions": rows}
	if err := writeJSON(filepath.Join(*out, "latest.json"), latest); err != nil {
		return err
	}
	return writeJSON(filepath.Join(*out, "summary.json"), summarize(h, now))
}

func summarize(h history, now int64) map[string]any {
	regions := map[string]map[string]fam{}
	day := now - 86400
	for key, s := range h.Series {
		id, f := key[:len(key)-2], key[len(key)-1:]
		var all, last24 []float64
		up7, n7, up24, n24 := 0, 0, 0, 0
		for i, v := range s {
			if v == math.MinInt32 {
				continue
			}
			in24 := h.Times[i] > day
			n7++
			if in24 {
				n24++
			}
			if v >= 0 {
				up7++
				all = append(all, float64(v)/10)
				if in24 {
					up24++
					last24 = append(last24, float64(v)/10)
				}
			}
		}
		if n7 == 0 {
			continue // only gaps left: dropped from the list
		}
		x := fam{Med7: median(all), Med24: median(last24), Up7: pct(up7, n7), Up24: pct(up24, n24), Runs24: n24}
		if v := s[len(s)-1]; v == math.MinInt32 {
			continue // not in this run's list
		} else if v >= 0 {
			m := float64(v) / 10
			x.Med = &m
		} else {
			x.Missing = true
			streak, first := 0, int64(0)
			for i := len(s) - 1; i >= 0 && s[i] == -1; i-- {
				streak, first = streak+1, h.Times[i]
			}
			if streak >= downAfter {
				x.Down = &first
			}
		}
		if regions[id] == nil {
			regions[id] = map[string]fam{}
		}
		regions[id]["v"+f] = x
	}
	return map[string]any{"from": "Tokyo · AWS Lightsail", "mode": "tcp", "time": time.Unix(now, 0).UTC().Format(time.RFC3339),
		"since": time.Unix(h.Times[0], 0).UTC().Format(time.RFC3339), "runs": len(h.Times), "regions": regions}
}

func median(v []float64) *float64 {
	if len(v) == 0 {
		return nil
	}
	sort.Float64s(v)
	m := v[len(v)/2]
	if len(v)%2 == 0 {
		m = (v[len(v)/2-1] + v[len(v)/2]) / 2
	}
	m = math.Round(m*10) / 10
	return &m
}

func pct(a, b int) *float64 {
	if b == 0 {
		return nil
	}
	p := math.Round(float64(a)*1000/float64(b)) / 10
	return &p
}

func prune(h *history, before int64) {
	cut := 0
	for cut < len(h.Times) && h.Times[cut] < before {
		cut++
	}
	if cut == 0 {
		return
	}
	h.Times = h.Times[cut:]
	for k, s := range h.Series {
		if len(s) > cut {
			s = s[cut:]
		} else {
			s = nil
		}
		gone := true
		for _, v := range s {
			gone = gone && v == math.MinInt32
		}
		if gone {
			delete(h.Series, k)
		} else {
			h.Series[k] = s
		}
	}
}

func loadHistory(p string) history {
	h := history{Series: map[string][]int32{}}
	if b, err := os.ReadFile(p); err == nil {
		if json.Unmarshal(b, &h) != nil || h.Series == nil {
			fmt.Fprintln(os.Stderr, "me2cloud-watch: history unreadable, starting over")
			h = history{Series: map[string][]int32{}}
		}
	}
	// every series is as long as the run list: a broken file is not worth keeping
	for k, s := range h.Series {
		if len(s) != len(h.Times) {
			delete(h.Series, k)
		}
	}
	return h
}

func refreshList(p string) error {
	if st, err := os.Stat(p); err == nil && time.Since(st.ModTime()) < listEvery {
		return nil
	}
	req, _ := http.NewRequest("GET", *listURL, nil)
	req.Header.Set("User-Agent", "me2cloud-watch (+https://m2c.1ms.dog)")
	res, err := (&http.Client{Timeout: 20 * time.Second}).Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()
	if res.StatusCode != 200 {
		return fmt.Errorf("%s: HTTP %d", *listURL, res.StatusCode)
	}
	b, err := io.ReadAll(io.LimitReader(res.Body, 8<<20))
	if err != nil {
		return err
	}
	var check struct {
		Endpoints []json.RawMessage `json:"endpoints"`
	}
	if json.Unmarshal(b, &check) != nil || len(check.Endpoints) < 100 {
		return errors.New("endpoint list looks wrong, not used")
	}
	return writeFile(p, b)
}

func writeJSON(p string, v any) error {
	b, err := json.Marshal(v)
	if err != nil {
		return err
	}
	return writeFile(p, append(b, '\n'))
}

// writeFile replaces p in one step: readers see the old file or the new one, never half of it
func writeFile(p string, b []byte) error {
	tmp, err := os.CreateTemp(filepath.Dir(p), "."+filepath.Base(p)+".*")
	if err != nil {
		return err
	}
	defer os.Remove(tmp.Name())
	if _, err = tmp.Write(b); err == nil {
		err = tmp.Chmod(0o644)
	}
	if err == nil {
		err = tmp.Sync()
	}
	if e := tmp.Close(); err == nil {
		err = e
	}
	if err != nil {
		return err
	}
	return os.Rename(tmp.Name(), p)
}
