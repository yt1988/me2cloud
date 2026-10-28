// Me2Cloud text: ja. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud｜クラウド遅延テスト：自宅の回線から AWS・Azure・Google Cloud など 360+ リージョンを実測",
  seo_desc: "ブラウザだけで、AWS、Azure、Google Cloud、Oracle、IBM Cloud、Alibaba Cloud、Tencent Cloud、Huawei Cloud、Volcengine、Baidu AI Cloud、Naver Cloud、Vultr、Linode、DigitalOcean、Scaleway、OVHcloud、Hetzner の 360+ リージョンへの遅延・ジッター・パケットロスを実測。あなたのプロバイダ、Wi‑Fi、夜のピークも込み。データはブラウザの外に出ません。",
  seo_kw: "クラウド ping, クラウド 遅延 測定, リージョン 遅延, AWS ping, Azure 遅延, Google Cloud ping, Vultr ping, どのリージョンが近い",
  og_sub: "360+ リージョン · 17 社 · ブラウザで実測",
  unlisted: "非公開リージョン",
  share_btn: "結果を共有",
  viewingShared: "共有された結果を表示中。スタートを押すと自分の回線をテストします",
  share_h: "テスト結果を共有",
  share_sub: "画像もリンクもこのブラウザの中で作ります。どこにもアップロードしません。",
  share_loc: "都市とプロバイダを表示",
  share_link: "共有リンク",
  share_len: "{k} リージョンの結果をリンクそのものに格納（{n} 文字）。IP とカスタム接続先は含みません。",
  share_copyLink: "リンクをコピー",
  share_copyImg: "画像をコピー",
  share_dl: "画像を保存",
  share_native: "共有…",
  share_banner: "共有された結果：{who} · {d}",
  share_anon: "場所は非公開",
  share_viaProxy: "プロキシ経由で測定",
  share_mine: "自分の回線で同じリージョンをテスト",
  share_exit: "自分の結果に戻る",
  share_bad: "この共有リンクは読み取れません",
  share_none: "まずテストしてください",
  share_failed: "ブラウザにブロックされました",
  copiedImg: "画像をコピーしました",
  sharedNoRaw: "共有された結果には統計値だけが入っていて、各サンプルはありません。",
  card_title: "うちから各クラウドまで、どれだけ速い？",
  card_cta: "あなたの家から各クラウドまで測ってみよう",
  card_local: "ブラウザで実測",
  card_regions: "{n} リージョン × {k} 回",
  card_more: "ほか {n} 社",
  sep: "、",
  allVendors: "すべてのクラウド",
  allAreas: "すべての地域",
  noArea: "未選択",
  pickVendor: "まずクラウドを選択",
  pickFirst: "テストするクラウドを選んでください",
  lgLive: "点滅 = 測定中",
  reset: "テストデータを消去",
  resetHint: "1 秒長押し。テスト結果と履歴を削除します。設定はそのままです。",
  resetDone: "テストデータを消去しました",
  cust_tip: "HTTPS の URL なら何でも OK。小さな静的ファイルや /ping パスが一番速く返ります。GET か HEAD かは自動で選びます。",
  doc_h: "しくみとよくある質問",
  rules_sub: "テスト用のホストを直結にすると、プロキシではなく自分の回線を測れます。ルールはテスト用ホストだけに一致し、ほかの通信には影響しません。",
  rules_remote_h: "おすすめ：リモートルールセット",
  rules_remote_s: "ツールがこちらからリストを取得し、リージョン追加時も自動で更新されます。一度追加するだけです。",
  rules_inline_h: "またはルールを直接貼り付け（{n} 件、注釈付き）",
  rules_inline_only: "このツールはリモートルールセット非対応なので、ルールを直接貼り付けてください（{n} 件、注釈付き）",
  rules_custom: "カスタム接続先はリモートセットに入っていないので、これも追加してください：",
  rc_detect: "ネットワーク確認（Cloudflare、ipify、ident.me）",
  rc_top: "ほかのルールより上に置く",
  rules_json_note: "JSON には注釈が書けないので、事業者順に並べています。",
  rules_steps: ["ルールをコピーして、ほかのルールより<b>上</b>に置き、先にマッチさせます。", "設定を再読み込み。TUN や fake-ip モードなら実 IP の部分も入れてください（上に含まれています）。", "ブラウザのプロキシ拡張機能はこのページでオフにするか、直結リストに追加します。", "ネットワーク表示の横の更新ボタンを押し、本来のプロバイダが表示されたらテストを始めます。"],
  heroT: "あなたの家から、各クラウドはどれだけ速い？",
  lgMiss: "白抜き = 条件に合わない",
  whyS1: "自分の回線から測る",
  whyS2: "プロバイダと夜のピークも込み",
  whyS3: "本物の HTTPS、アプリと同じ経路",
  whyLink: "速度テストサイトでは駄目な理由 →",
  pxShort: "プロキシを検出",
  okShort: "直結",
  unkShort: "ネットワーク不明",
  netDetails: "詳細",
  pl_vendors: "クラウド",
  pl_areas: "地域",
  off: "オフ",
  noLoss: "ロスなし",
  m_quickD: "まずざっくり見る",
  m_stdD: "おすすめ",
  m_preciseD: "最終候補をじっくり比較",
  startSub: "{n} リージョン · 約 {t}",
  lastRun: "前回 {d}：{n} リージョン",
  viz_h: "各リージョンはどの段階？",
  vizSub: "{n} 件測定 · {p} 件が条件に合致",
  viz_empty: "スタートを押すと、測り終えたリージョンから次々とここに現れます。",
  needLine: "あなたの上限",
  picks_sub2: "{n} リージョンが条件に合致（{need}）。総合的に一番いい 3 つです。",
  grp_other: "待機中 / 接続不可",
  jitWarn: "不安定：ジッター ±{j} ms",
  lossWarn: "パケットロス {p}%",
  res_h: "すべてのリージョン",
  rules_note_loon: "[Rule] の先頭に貼り付けてください。",
  concHint: "少ないほど正確、多いほど速い。1 社あたり同時に 2 つまで。",
  secTest: "テスト",
  conc: "同時にテストする数",
  timeout: "1 リクエストのタイムアウト",
  rtcOpt: "WebRTC 出口チェック（STUN）",
  theme: "テーマ",
  th_system: "システム",
  th_light: "ライト",
  th_dark: "ダーク",
  secData: "データ",
  copyLink: "設定リンクをコピー",
  expCsv: "結果を書き出し（CSV）",
  expJson: "結果を書き出し（JSON）",
  imp: "結果を読み込み（JSON）",
  recheck: "再チェック",
  rulesBtn: "直結ルールを取得",
  ip: "グローバル IP",
  hide: "IP を隠す",
  show: "IP を表示",
  isp: "ネットワーク",
  na: "不明",
  edge: "最寄りの Cloudflare まで",
  checking: "確認中…",
  peakNow: "ピーク時間帯",
  offPeak: "ピーク外",
  peakTip: "いま {now}、夜のピーク（20:00–23:00）です。回線が一番混む時の姿が見えるので、いちばん参考になります。",
  offPeakTip: "いま {now}。この時間は空いていることが多いので、20:00–23:00 にもう一度測ってみてください。",
  px_okNote: "出口 IP、ネットワーク、タイムゾーンが一致しています。ルーターのプロキシや社内ネットワークは見えないこともあるので、上のネットワークが本来のプロバイダか確認してください。",
  px_unknownNote: "Cloudflare への問い合わせがブロックされました。テストはできますが、プロキシの有無は判断できません。",
  r_dc: "出口ネットワークは {org}、データセンターです。家庭回線ではなく、ほぼ確実に VPN、プロキシ、またはクラウドサーバーです。",
  r_warp: "Cloudflare WARP がオンです。",
  r_tz: "パソコンの時計は{a}なのに、出口 IP は{b}にあります。",
  r_rtc: "WebRTC（UDP）は {a} から、HTTPS は {b} から出ています。通信が振り分けられています。",
  r_fam: "{f} チェックは {a} から出ていますが、メインの出口は {b} です。一部の通信がプロキシを経由しています。直結ルールを更新して再チェックしてください。",
  chkFail: "チェック失敗", chkBlocked: "拡張機能かネットワークでブロックされた可能性",
  chk_net: "ネットワーク情報を取得中", chk_ip: "IPv4 / IPv6 を確認中", chk_edge: "最寄りの Cloudflare までを計測中 {i}/{n}",
  all: "すべて",
  none: "クリア",
  custom: "カスタム",
  ct_as: "アジア",
  ct_na: "北米",
  ct_eu: "ヨーロッパ",
  ct_oc: "オセアニア",
  ct_sa: "南米",
  ct_me: "中東",
  ct_af: "アフリカ",
  ct_xx: "カスタム",
  mode: "1 か所あたりの測定回数",
  m_quick: "クイック",
  m_std: "標準",
  m_precise: "精密",
  secs: "{n} 秒",
  mins: "{n} 分",
  noLimit: "制限なし",
  maxLat: "遅延の上限",
  maxJit: "ジッターの上限",
  maxLoss: "ロスの上限",
  p_game: "ゲーム",
  p_call: "ビデオ会議",
  p_ssh: "SSH / リモートデスクトップ",
  p_web: "Web サイト / API",
  p_any: "条件なし、全部見る",
  p_custom: "カスタム",
  start: "テスト開始",
  stop: "停止",
  again: "もう一度テスト",
  running: "テスト中 {d} / {n}",
  eta: "残り約 {t}",
  viewing: "{d} の履歴を表示中",
  tagPeak: "ピーク時間帯",
  histCurrent: "最新の結果",
  picks_h: "おすすめ",
  picks_closest: "いちばん近い候補",
  picks_none: "条件に完全に合うものはまだありません。近いのはこの 3 つ。条件を少しゆるめるか、ほかのクラウドも試してください。",
  anyLat: "遅延は問わない",
  search: "リージョン、都市、クラウドで検索",
  onlyPass: "条件に合うものだけ",
  g1: "T0 · 神",
  g2: "T1 · 最強",
  g3: "T2 · 勝ち組",
  g4: "T3 · モブ",
  g5: "T4 · 終わってる",
  queued: "待機中",
  chartAria: "各サンプルの遅延",
  noSamples: "まだサンプルがありません",
  d_med: "中央値",
  d_avg: "平均",
  d_p90: "P90",
  d_min: "最小",
  d_max: "最大",
  d_jit: "ジッター",
  d_loss: "ロス",
  d_method: "リクエスト方式",
  d_warm: "ウォームアップ（集計外）",
  d_cold: "この接続先は接続を保てないため、毎回ハンドシェイクを含みます（実際の往復の約 3 倍）。同じ接続先どうしでだけ比べてください。",
  d_verified: "本当にクラウドに届いたことを確認（CORS チェック通過）",
  d_notverified: "CORS チェック失敗：途中の機器が代わりに応答した可能性があります。",
  d_review: "注意：一般のお客さんは契約できない専用リージョンかもしれません。",
  retest: "単独で 20 回測る",
  copyUrl: "URL をコピー",
  cust_h: "カスタム接続先",
  cust_name_ph: "自分の VPS（東京）",
  add: "追加",
  del: "削除",
  cust_err_url: "有効な URL ではありません。",
  cust_err_https: "https:// の URL を使ってください。https のページからの http リクエストはブラウザにブロックされます。",
  cust_err_dup: "すでにリストにあります。",
  cust_added: "追加しました。次のテストから入ります。",
  log_h: "リクエストログ",
  log_note: "下のリクエストはすべて、このブラウザから表示先ホストへ直接送られたものです。このページにはバックエンドがなく、結果をどこにも送りません。開発者ツールの Network タブで確認できます。",
  log_empty: "まだ何も送っていません。",
  failed: "失敗",
  rules_h: "直結ルール：テスト結果をクリーンに",
  copy: "コピー",
  copied: "コピーしました",
  rules_fakeip: "fake-ip モード：これらのホストは実際の IP に解決させる",
  rules_plain: "ドメイン一覧",
  rules_note_clash: "ルールを rules: の一番上に、fake-ip を使うならホストを dns.fake-ip-filter にも追加してください。",
  rules_note_surge: "ルールは [Rule] の一番上へ。always-real-ip でこれらのホストに本物の DNS 応答を返します。",
  rules_note_shadowrocket: "設定ファイルの [Rule] の一番上に置くか、「設定 → ルール」で 1 件ずつ追加してください。",
  rules_note_quanx: "[filter_local] のほかのルールより上に貼り付けてください。",
  rules_note_singbox: `route.rules と dns.rules に統合します。アウトバウンド "direct" と DNS サーバー "local" は設定のタグと一致させてください。`,
  rules_note_xray: `routing.rules に統合します。outboundTag "direct" は設定の freedom アウトバウンドと一致させてください。`,
  rules_note_omega: "SwitchyOmega プロファイルの「プロキシを使わないアドレス」に貼り付けてください。",
  rules_note_plain: "1 行 1 ホスト。ほかのツール向け。",
  imported: "結果を読み込みました",
  importErr: "Me2Cloud の結果ファイルではありません",
  foot: "すべてブラウザ内で実行 · 接続先は {d} に検証 · どのクラウド事業者とも無関係",
  homeL: "現在の地域のリージョン（{c}）",
  home_all: "含める",
  home_excl: "除外",
  home_only: "これだけ",
  homeTip: "{c}のリージョンを含める、除く、または{c}のリージョンだけ測る。",
  lp_title: "{v} 遅延テスト：自宅の回線から {n} リージョンを実測｜Me2Cloud",
  lp_desc: "あなたのブラウザから {v} の全 {n} リージョンの遅延・ジッター・ロスを実測。プロバイダと夜のピークも込み。無料、インストール不要。",
  lp_h1: "あなたの家から、{v} の各リージョンはどれだけ速い？",
  lp_h2: "テストする {v} の {n} リージョン",
  lp_intro: "{v} は {k} の接続先で測ります。上でリージョンを選んでスタートを押すと、すべてのリクエストがブラウザから {v} へ直接届きます。",
  nav_h: "クラウド別にテスト",
  ipTip: "どの IP バージョンで測るか。IPv4 は各社の IPv4 専用ホストを、IPv6 は IPv6 アドレスのあるホストを使い、IPv6 がないリージョンは「IPv6 非対応」と表示します。",
  ip_no6: "あなたのネットワークには使える IPv6 がないので、IPv4 だけ測れます",
  ip_no6short: "IPv6 なし",
  nov6: "IPv6 非対応",
  grp_nov6: "IPv6 非対応",
  d_nov6: "このリージョンにはテストできる IPv6 の接続先がないため、IPv6 モードでは飛ばしました。",
  d_v6: "IPv6 でテストしました（IPv6 アドレスのあるホストを使用）。",
  d_dual: "この接続先のホストはデュアルスタックです。ネットワークに IPv6 があれば、IPv4 モードでもブラウザが IPv6 を使った可能性があります。",
  ai_btn: "AI で使う",
  ai_h: "AI エージェントで使う",
  ai_sub: "AI にあなたの回線は測れませんが、結果を読み解いたりテストを準備したりはできます。",
  ai_res_h: "結果を AI に相談",
  ai_res_p: "この要約を ChatGPT や Claude などに貼り付けてください。ネットワーク、条件、上位のリージョンと、最後に質問が入っています。",
  ai_res_none: "まずテストしてください。結果の要約がここに出ます。",
  ai_q: "質問：この結果から、私の用途にはどのクラウドとリージョンを選ぶべきですか？注意点はありますか？",
  ai_link_h: "AI にテストを準備してもらう",
  ai_link_p: "このプロンプトに条件を書き足して AI に渡すと、クラウド・地域・上限を設定した Me2Cloud のリンクを作ってくれます。",
  ai_linkPrompt: "{u} を読んで、次の条件で検討すべきリージョンをテストする Me2Cloud のリンクをください：（ユーザーの場所、用途、予算をここに書く）",
  ai_dev_h: "開発者とエージェント向け",
  ai_dev_p: "機械可読なファイル：接続先レジストリ、プロキシ用ルールセット、リンクのパラメータと共有リンクの形式を書いた llms.txt。",
  ip_h: "IP バージョン",
  vendors: {
    aws: {
      kind: "DynamoDB /ping",
      note: "応答にリージョン名が入っているので、本当にそのリージョンに届いたか確認できます。"
    },
    oracle: {
      kind: "オブジェクトストレージ",
      note: "GET は 404 のたびに接続を切ります（毎回 3–4 往復）。HEAD は接続を再利用します。"
    },
    vultr: {
      kind: "Looking Glass",
      note: "GET は約 12 KB のページを返し 50–70 ms 遅くなります。HEAD は本文なし。"
    },
    azure: {
      kind: "Cognitive Services",
      note: "CNAME の先は <リージョン>.cloudapp.azure.com。測定値はとても安定しています。"
    },
    gcp: {
      kind: "Storage リージョンエンドポイント（rep）",
      note: "HEAD は毎回約 1 秒余計にかかるので GET だけを使います。リージョンごとの IP（34.1.x）で、グローバルな Anycast ではありません。"
    },
    aliyun: {
      kind: "OSS",
      note: "GET の 403 で接続が切れます。HEAD は接続を再利用します。"
    },
    tencent: {
      kind: "COS",
      note: "GET の 403 で接続が切れます。HEAD は接続を再利用します。"
    },
    huawei: {
      kind: "OBS",
      note: "GET も HEAD も接続を保ちます。"
    },
    linode: {
      kind: "オブジェクトストレージ",
      note: `旧 speedtest.<DC>.linode.com は応答しないため、オブジェクトストレージのあるリージョンだけを対象にしています。`
    },
    digitalocean: {
      kind: "Spaces",
      note: `speedtest-<DC>.digitalocean.com は廃止。NYC1/NYC2 には Spaces がありません（ニューヨークは nyc3）。`
    },
    ovh: {
      kind: "速度テスト（proof）",
      note: `proof.ovh.net は <サイト>.speedtest.network.ovh.net に転送されるので、転送先を直接使います。`
    },
    hetzner: {
      kind: "速度テスト",
      note: `ブラウザの fetch() は失敗します（原因不明、curl は正常）。<img> なら測れますが毎回新しい接続なので、値は約 3 往復分です。`
    },
    ibm: {
      kind: "Cloud Object Storage",
      note: "GET の 403 で接続が切れます。HEAD は接続を再利用します。"
    },
    scaleway: {
      kind: "オブジェクトストレージ",
      note: "GET も HEAD も接続を保ちます。デュアルスタックのホストです。"
    },
    volcengine: {
      kind: "TOS",
      note: "GET の 403 で接続が切れます。HEAD は接続を再利用します。"
    },
    baidu: {
      kind: "BOS",
      note: "GET の 403 で接続が切れます。HEAD は接続を再利用します。"
    },
    naver: {
      kind: "オブジェクトストレージ",
      note: "GET の 403 で接続が切れます。HEAD は接続を再利用します。"
    }
  },
  docs: [
    [
      "自宅の回線から測るほうが、速度テストサイトや Looking Glass より信頼できる理由",
      `<p>多くの「クラウド速度テスト」サイトや各社の Looking Glass は、<b>彼らの</b>サーバーから測ります。データセンターに置かれた高品質回線のサーバーなので、わかるのは「データセンター間」の速さだけ。あなたが実際に体感する部分、つまり自宅の回線やモバイル回線、プロバイダの基幹網、国際回線、そして今夜の混み具合は測れません。</p>
      <p>Me2Cloud はすべてのリクエストを<b>あなたの</b>ブラウザから送ります。Wi‑Fi、ルーター、プロバイダ、プロバイダの経路選び、夜のピークまで、全部が結果に入ります。</p>
      <div class="tblwrap"><table class="cmp"><tr><th></th><th>速度テストサイト / Looking Glass</th><th>PC の ICMP ping</th><th>Me2Cloud</th></tr>
      <tr><td>どこから測る</td><td class="n">彼らのデータセンター</td><td class="y">あなたの回線</td><td class="y">あなたの回線</td></tr>
      <tr><td>プロバイダと夜のピークを含む</td><td class="n">含まない</td><td class="y">含む</td><td class="y">含む</td></tr>
      <tr><td>Web やアプリと同じプロトコル（TCP 443）</td><td class="m">場合による</td><td class="n">いいえ、ICMP</td><td class="y">はい、HTTPS</td></tr>
      <tr><td>ネットワークで制限・遮断される</td><td class="m">ときどき</td><td class="n">よくある</td><td class="y">まれ</td></tr>
      <tr><td>数百リージョンをワンクリックで</td><td class="m">一部</td><td class="n">できない</td><td class="y">できる</td></tr>
      <tr><td>インストールが必要</td><td class="y">不要</td><td class="y">不要</td><td class="y">不要</td></tr></table></div>`
    ],
    [
      "1 回ごとの測り方",
      `<ol><li>まず<b>ウォームアップ</b>のリクエストで DNS、TCP、TLS を確立します。この時間は表示しますが集計には入れません。</li>
      <li>続けて<b>同じ接続</b>で同じホストに 5・10・20 回リクエストします。1 回あたり往復 1 回分と、クラウド側の処理時間だけがかかります。</li>
      <li>各社とも、接続を保てることを確かめた方式を使います：AWS、Azure、Google Cloud、Huawei Cloud、DigitalOcean、Scaleway は <code>GET</code>、Oracle、IBM Cloud、Alibaba Cloud、Tencent Cloud、Volcengine、Baidu AI Cloud、Naver Cloud、Linode、Vultr、OVHcloud は <code>HEAD</code>（GET だと接続が切れて 3 倍になる）、Hetzner だけ <code>&lt;img&gt;</code>。</li>
      <li>結果は<b>中央値</b>（いちばん典型的な値）、<b>平均</b>、<b>P90</b>（10 回中 9 回はこれ以下）、<b>ジッター</b>（連続する 2 回の差の平均）、<b>ロス</b>（タイムアウトの割合）。</li>
      <li><b>段階</b>は中央値で決まります：T0 神 ≤ 30 ms、T1 最強 ≤ 80 ms、T2 勝ち組 ≤ 150 ms、T3 モブ ≤ 250 ms、それ以上は T4 終わってる。おすすめに使う総合スコアは「中央値 + 2 × ジッター + ロスのペナルティ」なので、安定した 60 ms は不安定な 45 ms より上に来ます。</li></ol>`
    ],
    [
      "HTTPS の計測が ICMP ping より体感に近い理由",
      `<ul><li><b>あなたの通信と同じ道。</b>Web、API、443 番のトンネル、ゲームのログイン、ダウンロードはどれも TCP です。多くのプロバイダは ICMP を別扱いで並べたり制限したり経路を変えたりするので、ping は良いのにページが重い、またはその逆がよくあります。</li>
      <li><b>制限で消されない。</b>ルーターやクラウドは ICMP をよく制限・破棄しますが、公開 HTTPS エンドポイントは必ず応答します。</li>
      <li><b>実際の環境が入る。</b>DNS、IPv4/IPv6 の選択、プロキシ、高速化サービスはブラウザの通信にも効くので、実際に得られる速さを測れます。</li>
      <li><b>その代わり：</b>毎回、少しだけ一定のサーバー処理時間が入ります。実測では AWS が 0–5 ms、Alibaba Cloud が約 8 ms、Huawei Cloud OBS が約 20 ms。100 ms を超えるような距離では無視できますが、ごく近いリージョンでは ping より少し大きく出ます。</li></ul>`
    ],
    [
      "いつ測る：夜のピークを狙う",
      `<ul><li>家庭用回線は<b>夜 20:00–23:00</b> がいちばん混み、海外向けはさらに顕著です。昼は T1 最強でも、夜にはモブまで落ちることがあります。</li>
      <li>昼に一度、ピークにもう一度測りましょう。保存された結果には「ピーク時間帯」の印が付き、結果から切り替えて比べられます。</li>
      <li>測定中は大きなダウンロード、動画、クラウド同期を止めてください。有線のほうが Wi‑Fi より正確。Wi‑Fi ならルーターの近くで。</li>
      <li>モバイル回線では電波の強さで結果が変わります。実際に使う場所で測るのがいちばんです。</li></ul>`
    ],
    [
      "こんなときに使えます",
      `<ul><li>サーバー、ゲームサーバー、CDN のオリジンを契約する前に候補リージョンを絞り込む。</li>
      <li>同じ会社のリージョン同士、または同じ都市の別会社を比べる。</li>
      <li>ゲーム、ビデオ会議、リモートデスクトップ、SSH に十分な安定性（ジッター、ロス）があるか確かめる。</li>
      <li>プロキシ、高速化サービス、新しい回線プランが本当に効いているか、オン・オフで測り比べる。</li>
      <li>カスタム接続先で、自分のサーバーや CDN を大手と並べて比べる。</li></ul>`
    ],
    [
      "わからないこと",
      `<ul><li><b>1 か所だけの結果です。</b>あなたの回線であって、ユーザーの回線ではありません。何人かのユーザーにも測ってもらい、書き出して比べましょう。</li>
      <li><b>測るのはエンドポイントで、将来のサーバーそのものではありません。</b>各社のそのリージョンの公開 API やストレージを測ります。同じリージョンのサーバーは通常同じネットワークですが、プレミアム回線（CN2、BGP と単一キャリア、Lightsail と EC2 など）は違うことがあります。</li>
      <li><b>帯域、UDP、経路は測りません。</b>往復時間だけで、ダウンロード速度、UDP のゲーム通信、途中の経路はわかりません。</li>
      <li><b>ブラウザの影響。</b>拡張機能、プロキシ、VPN、重いタブはノイズになります。重いタブは閉じて、このページを前面に。</li>
      <li><b>Hetzner</b> はブラウザから接続を保てないので、毎回ハンドシェイク込みの値です。一部の国では届かない接続先もあります。</li></ul>`
    ],
    [
      "すべてのリクエストはあなたのブラウザから",
      `<ul><li>このページは Cloudflare 上の静的ファイルだけです。バックエンドも登録も解析ツールもなく、結果をアップロードすることはありません。</li>
      <li>テストのリクエストはすべてブラウザからクラウド事業者へ直接送られます。上の<b>リクエストログ</b>か、開発者ツールの Network タブで 1 件ずつ確認できます。</li>
      <li>ネットワーク情報は Cloudflare（<code>speed.cloudflare.com/meta</code> と <code>/cdn-cgi/trace</code>）から取得し、オプションの WebRTC チェックは <code>stun.cloudflare.com</code> に UDP の出口アドレスを問い合わせます。設定でオフにできます。</li>
      <li>IPv4/IPv6 の判定では Cloudflare 以外の <code>ipify.org</code> と <code>ident.me</code> にも同時に問い合わせるので、どれか一つが遮断されていても IPv6 なしと誤判定しません。</li>
      <li>設定、カスタム接続先、最近の結果はこのブラウザのローカルストレージにだけ保存され、「テストデータを消去」で結果を削除できます。</li></ul>`
    ],
    [
      "事業者にやさしく：制限もブロックも受けない",
      `<p>公開エンドポイントに強く当てすぎると、事業者のレート制限や WAF に引っかかり、結果も狂います。そこでテストのペースはかなり控えめにしています：</p>
      <ul><li>1 ホストにつき同時に 1 リクエスト、サンプルの間は 250–370 ms 空けます（1 ホストあたり毎秒最大 2–3 回）。</li>
      <li>1 社あたり同時に最大 2 ホスト、全体で最大 8 ホスト（既定は 4）。</li>
      <li>1 回のテストで 1 ホストあたり最大 21 リクエスト（ウォームアップ + 20）。連続モードはありません。</li>
      <li>3 回続けて失敗したホストは諦め、再試行し続けることはしません。</li>
      <li>すべて匿名で Cookie も Referer もない「シンプルリクエスト」：プリフライトなし、応答は数百バイト、できるだけ HEAD、大きなファイルはダウンロードしません。</li></ul>
      <p>全体の通信量は普通の Web ページを 1 枚開くより少ないくらいです。すべての接続先は匿名リクエストに普通に応答することを確認済みです（200、403、404 のどれでも計測には問題ありません）。</p>`
    ],
    [
      "プロキシや VPN を使っていたら？",
      `<p>通信がプロキシを通ると、ブラウザが測るのは「あなた→プロキシ」と「プロキシ→クラウド」で、あなた自身の回線ではありません。ネットワーク表示では、出口がデータセンター、タイムゾーンと出口の国が違う、WARP がオン、WebRTC と HTTPS の出口が違う、といった典型的な兆候をチェックします。</p>
      <p><b>直結ルールを取得</b>で、テスト用ホストだけを直結にして（Clash / Mihomo、Surge、Shadowrocket、Quantumult X、Loon、sing-box、Xray、SwitchyOmega、ドメイン一覧に対応）、再チェックしてください。プロキシ自体を測りたいなら、そのまま測れば、それがプロキシの本当の実力です。</p>`
    ],
    [
      "グラフの見方",
      `<ul><li>各行のバーは同じ目盛り（対数、2 ms から 3 秒）です。点は各サンプル、帯はサンプルの真ん中半分の範囲、縦線は中央値です。</li>
      <li>帯が細いほど安定、帯が太い・点がばらつくならジッターが大きい。赤い × はロスの回数です。</li>
      <li>行を開くと、各サンプルの推移、すべての統計、使った接続先が見られます。✓ は条件に合うものです。</li></ul>`
    ]
  ]
};
