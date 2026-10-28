# Me2Cloud

从你自己的浏览器出发，实测 17 家云厂商 360+ 个区域的延迟、抖动和丢包。纯静态站点，部署在 Cloudflare，没有后端。线上地址：https://m2c.1ms.dog

Measure latency, jitter and loss from your own browser to 360+ regions of 17 cloud providers. A static site on Cloudflare with no backend.

## 功能

- **本地实测**：所有请求从访问者的浏览器直接发往厂商端点，测到的是真实的运营商、Wi‑Fi 和晚高峰。
- **361 个验证过的端点**：AWS、Azure、Google Cloud、Oracle、IBM Cloud、阿里云、腾讯云、华为云、火山引擎、百度智能云、Naver Cloud、Vultr、Linode、DigitalOcean、Scaleway、OVHcloud、Hetzner。每家都用实测能复用连接的请求方式（GET / HEAD / img）。
- **IPv4 / IPv6**：默认 IPv4；IPv6 模式改用各厂商带 AAAA 记录的主机，没有 IPv6 端点的区域会在报告里单独列出。
- **网络信息与代理检测**：IP、运营商（ASN）、归属地、到 Cloudflare 的延迟；根据机房 ASN、时区、WARP、WebRTC 出口判断是否走了代理。
- **直连规则**：Clash / Mihomo、Surge、Shadowrocket、Quantumult X、Loon、sing-box、Xray、SwitchyOmega；支持的工具优先用远程规则集。
- **统计与分级**：中位数、平均、P90、抖动、丢包；T0 夯 / T1 顶级 / T2 人上人 / T3 NPC / T4 拉完了。
- **按需求筛选**：游戏、视频会议、SSH、建站等预设；本国区域可选包含、排除或只看。
- **实时图表**、自定义端点、请求记录、历史结果（标记晚高峰）、CSV / JSON 导出导入。
- **分享**：分享链接（结果压缩后放在 `#s=` 里）和分享图都在浏览器本地生成。
- **配合 AI 使用**：结果摘要可直接复制给 AI 助手；`llms.txt` 说明链接参数和分享格式。
- **10 种语言**：en、zh-CN、zh-TW、ja、ko、es、fr、de、pt、ru，每种语言一份预渲染页面，外加每家厂商的落地页（`/aws/`、`/zh-cn/aws/`……）。
- **对厂商友好**：每个主机同时只有 1 个请求、间隔 250 ms 以上，每家厂商最多同时 2 个主机，连续失败 3 次即停止。

## 项目结构

```
src/page.html              页面模板（样式、逻辑、端点注册表 ENDPOINTS 区块）
src/i18n/*.mjs             各语言文案，缺的键回退到 en.mjs
src/brand/                 favicon 源文件
scripts/build.mjs          生成 public/：各语言页面、厂商落地页、app.<hash>.js、endpoints.json、规则集、sitemap、_headers（含 CSP）
scripts/assets.mjs         生成 favicon 和各语言的 og 预览图（public/og/）
scripts/i18n-tool.mjs      检查各语言缺失的键：node scripts/i18n-tool.mjs missing
scripts/dev.mjs            本地预览，套用 _headers：node scripts/dev.mjs → http://localhost:8787
scripts/endpoints/         候选清单、验证、IPv6 检查、注册表生成、每周健康检查
public/                    构建产物，直接部署
.github/workflows/         check.yml（构建是否最新）、health.yml（每周端点健康检查）
```

修改 `src/` 后运行 `node scripts/build.mjs`；`npm test`（`build.mjs --check`）在产物不是最新时失败。

## 更新端点

```bash
node scripts/endpoints/verify.mjs          # 验证全部候选端点（DNS 走 Cloudflare DoH）
node scripts/endpoints/ipv6.mjs            # 检查各主机及 IPv6 备用主机的 AAAA 记录，写入 ipv6.json
node scripts/endpoints/build-registry.mjs  # 写回 src/page.html 的 ENDPOINTS 区块
node scripts/build.mjs                     # 重新生成 public/
```

各厂商的请求方式、档位和说明写在 `scripts/endpoints/build-registry.mjs` 的 `VENDORS` 里，来自浏览器实测。

## 健康检查

`health.yml` 每周一运行 `scripts/endpoints/health.mjs`，逐个探测 `public/endpoints.json` 里的端点（失败重试 3 次）。有失败时创建或更新一个带 `endpoint-health` 标签的 issue，全部恢复后自动关闭。部分区域会屏蔽机房或境外 IP，删除端点前请先在浏览器里确认。

## 部署

```bash
npx wrangler deploy
```

没有 Worker 脚本，所有请求都是静态资源请求，免费且不计量。`wrangler.toml` 关闭了 `*.workers.dev` 地址和预览地址，站点只在绑定的自定义域名上提供：域名在 Cloudflare 控制台的 Workers → 域和路由 里绑定。还没有域名时，可以把 `workers_dev` 改成 `true` 先用 `*.workers.dev` 访问。

## 许可证

MIT
