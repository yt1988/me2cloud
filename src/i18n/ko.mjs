// Me2Cloud text: ko. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud｜클라우드 지연 테스트: 우리 집 회선에서 AWS·Azure·Google Cloud 등 360+ 리전 실측",
  seo_desc: "브라우저만으로 AWS, Azure, Google Cloud, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Vultr, Linode, DigitalOcean, Scaleway, OVHcloud, Hetzner의 360+ 리전까지 지연·지터·패킷 손실을 실측합니다. 내 통신사, Wi‑Fi, 저녁 피크까지 포함. 데이터는 브라우저 밖으로 나가지 않습니다.",
  seo_kw: "클라우드 핑, 클라우드 지연 측정, 리전 지연, AWS 핑, Azure 지연, Google Cloud 핑, Naver Cloud 핑, 가장 가까운 리전",
  og_sub: "360+ 리전 · 22개 클라우드 · 브라우저에서 실측",
  unlisted: "비공개 리전",
  share_btn: "결과 공유",
  viewingShared: "공유된 결과를 보는 중입니다. 시작을 누르면 내 회선을 테스트합니다",
  share_h: "테스트 결과 공유",
  share_sub: "이미지와 링크 모두 이 브라우저 안에서 만들어집니다. 어디에도 업로드하지 않습니다.",
  share_loc: "도시와 통신사 표시",
  share_link: "공유 링크",
  share_shortNote: "{k}개 리전의 결과를 {host}에 저장해 짧은 링크를 만듭니다. IP와 사용자 지정 대상은 포함하지 않습니다.", share_shortFail: "짧은 링크를 만들지 못해 전체 링크를 표시합니다.",
  share_len: "{k}개 리전의 결과가 링크 안에 그대로 들어 있습니다({n}자). IP와 사용자 지정 대상은 포함하지 않습니다.",
  share_copyLink: "링크 복사",
  share_copyImg: "이미지 복사",
  share_dl: "이미지 저장",
  share_native: "공유…",
  share_banner: "공유된 결과: {who} · {d}",
  share_anon: "위치 비공개",
  share_viaProxy: "프록시를 거쳐 측정",
  share_mine: "내 회선으로 같은 리전 테스트",
  share_exit: "내 결과로 돌아가기",
  share_bad: "이 공유 링크를 읽을 수 없습니다",
  share_none: "먼저 테스트를 해 주세요",
  share_failed: "브라우저가 막았습니다",
  copiedImg: "이미지를 복사했습니다",
  sharedNoRaw: "공유된 결과에는 통계값만 있고 개별 샘플은 없습니다.",
  card_title: "우리 집에서 각 클라우드까지 얼마나 빠를까",
  card_cta: "당신 집에서 각 클라우드까지 재 보세요",
  card_local: "브라우저에서 실측",
  card_regions: "{n}개 리전 × {k}회",
  card_more: "외 {n}곳",
  sep: ", ",
  allVendors: "모든 클라우드",
  allAreas: "모든 지역",
  noArea: "선택 안 함",
  pickVendor: "먼저 클라우드 선택",
  pickFirst: "테스트할 클라우드를 먼저 고르세요",
  lgLive: "깜빡임 = 측정 중",
  reset: "테스트 데이터 지우기",
  resetHint: "1초간 길게 누르세요. 테스트 결과와 기록만 지우고 설정은 그대로 둡니다.",
  resetDone: "테스트 데이터를 지웠습니다",
  cust_tip: "HTTPS 주소면 무엇이든 됩니다. 작은 정적 파일이나 /ping 경로가 가장 빨리 응답합니다. GET과 HEAD는 자동으로 고릅니다.",
  doc_h: "원리와 자주 묻는 질문",
  rules_sub: "테스트용 호스트를 직접 연결로 두면 프록시가 아닌 내 회선을 잴 수 있습니다. 규칙은 테스트용 호스트에만 적용되고 다른 트래픽에는 영향이 없습니다.",
  rules_remote_h: "추천: 원격 규칙 세트",
  rules_remote_s: "도구가 목록을 받아 오고, 리전이 늘어나도 자동으로 갱신됩니다. 한 번만 추가하면 됩니다.",
  rules_inline_h: "또는 규칙을 직접 붙여넣기({n}개, 설명 포함)",
  rules_inline_only: "이 도구는 원격 규칙 세트를 지원하지 않으니 규칙을 직접 붙여넣으세요({n}개, 설명 포함)",
  rules_custom: "사용자 지정 대상은 원격 세트에 없으니 이것도 추가하세요:",
  rc_detect: "네트워크 확인(Cloudflare, ipify, ident.me)",
  rc_top: "다른 규칙보다 위에 두기",
  rules_json_note: "JSON에는 설명을 넣을 수 없어서 사업자 순서로 나열했습니다.",
  rules_steps: ["규칙을 복사해서 다른 규칙보다 <b>위</b>에 넣어 먼저 매칭되게 하세요.", "설정을 다시 불러옵니다. TUN이나 fake-ip 모드라면 실제 IP 부분도 넣으세요(위에 포함되어 있습니다).", "브라우저의 프록시 확장 기능은 이 페이지에서 끄거나 예외 목록에 추가하세요.", "네트워크 표시 옆의 새로고침 버튼을 눌러, 실제 통신사가 보이면 테스트를 시작하세요."],
  heroT: "우리 집에서 각 클라우드는 얼마나 빠를까?",
  lgMiss: "속 빈 점 = 조건에 안 맞음",
  pxShort: "프록시 감지",
  okShort: "직접 연결",
  unkShort: "네트워크 알 수 없음",
  netDetails: "자세히",
  pl_vendors: "클라우드",
  pl_areas: "지역",
  off: "끔",
  noLoss: "손실 없음",
  m_quickD: "빠르게 한번 훑어보기",
  m_stdD: "추천",
  m_preciseD: "최종 후보를 꼼꼼히 비교",
  startSub: "{n}개 리전 · 약 {t}",
  lastRun: "지난번 {d}: {n}개 리전",
  viz_h: "리전별 등급 분포",
  vizSub: "{n}개 측정",
  viz_empty: "측정이 끝난 리전이 여기 나타납니다",
  needLine: "내 상한",
  picks_sub2: "{n}개 조건 충족({need})",
  grp_other: "대기 중 / 연결 불가",
  jitWarn: "불안정: 지터 ±{j} ms",
  lossWarn: "패킷 손실 {p}%",
  res_h: "전체 리전",
  rules_note_loon: "[Rule] 맨 위에 붙여넣으세요.",
  concHint: "적을수록 정확하고 많을수록 빠릅니다. 클라우드마다 동시에 최대 2개.",
  secTest: "테스트",
  conc: "동시에 테스트할 수",
  timeout: "요청당 시간 제한",
  rtcOpt: "WebRTC 출구 확인(STUN)",
  theme: "테마",
  th_system: "시스템",
  th_light: "라이트",
  th_dark: "다크",
  secData: "데이터",
  copyLink: "설정 링크 복사",
  expCsv: "결과 내보내기(CSV)",
  expJson: "결과 내보내기(JSON)",
  imp: "결과 불러오기(JSON)",
  recheck: "다시 확인",
  rulesBtn: "직접 연결 규칙 받기",
  ip: "공인 IP",
  hide: "IP 숨기기",
  show: "IP 보기",
  isp: "네트워크",
  na: "알 수 없음",
  edge: "가장 가까운 Cloudflare까지",
  checking: "확인 중…",
  peakNow: "피크 시간",
  offPeak: "비피크",
  peakTip: "지금은 {now}, 저녁 피크(20:00–23:00)입니다. 회선이 가장 붐빌 때의 모습이라 가장 참고가 됩니다.",
  offPeakTip: "지금은 {now}. 보통 한산한 시간이니 20:00–23:00에 한 번 더 재 보세요.",
  px_okNote: "출구 IP, 네트워크, 시간대가 일치합니다. 공유기 프록시나 회사망은 드러나지 않을 수도 있으니 위의 네트워크가 실제 통신사인지 확인하세요.",
  px_unknownNote: "Cloudflare 조회가 막혔습니다. 테스트는 되지만 프록시 사용 여부는 알 수 없습니다.",
  r_dc: "출구 네트워크가 {org}, 즉 데이터센터입니다. 가정용 회선이 아니라 거의 확실히 VPN, 프록시, 클라우드 서버입니다.",
  r_warp: "Cloudflare WARP가 켜져 있습니다.", ipHidden: "Safari가 IP를 숨김", px_hiddenNote: "Safari의 'IP 주소 추적 제한'이 이 네트워크 확인의 일부 요청을 추적기로 보고 Apple 릴레이를 거쳐 보냈습니다. 그래서 위의 공인 IP, 네트워크, Cloudflare 지연은 릴레이의 것이고, 위치는 기기 시간대로 표시합니다. 각 클라우드의 측정 주소는 보통 이 목록에 없어 직접 연결되므로 측정 결과에는 영향이 없습니다.", pxRelay: "iCloud 비공개 릴레이", r_relay: "출구가 내 회선이 아니라 iCloud 비공개 릴레이({org})입니다. Safari의 요청은 모두 이것을 거치므로 릴레이의 지연이 측정되고, 직접 연결 규칙으로도 바꿀 수 없습니다. 내 회선을 측정하려면 이 네트워크에서만 끄세요: 설정 → 셀룰러 → 셀룰러 데이터 옵션(Wi-Fi는 네트워크 이름 옆 ⓘ) → 'IP 주소 추적 제한' 끄기. 또는 비공개 릴레이가 적용되지 않는 Chrome이나 Firefox로 측정하세요.",
  r_tz: "기기 시간대는 {a}인데 출구 IP는 {b}에 있습니다.",
  r_rtc: "WebRTC(UDP)는 {a}에서, HTTPS는 {b}에서 나갑니다. 트래픽이 나뉘어 있습니다.",
  r_fam: "{f} 확인은 {a}에서 나가는데, 주 출구는 {b}입니다. 일부 요청이 프록시를 거치고 있습니다. 직결 규칙을 업데이트한 뒤 다시 확인하세요.",
  chkFail: "확인 실패", chkBlocked: "확장 프로그램이나 네트워크가 차단했을 수 있음",
  chk_net: "네트워크 정보 확인 중", chk_ip: "IPv4 / IPv6 확인 중", chk_edge: "가장 가까운 Cloudflare까지 측정 중 {i}/{n}",
  all: "전체",
  none: "비우기",
  custom: "사용자 지정",
  ct_as: "아시아",
  ct_na: "북미",
  ct_eu: "유럽",
  ct_oc: "오세아니아",
  ct_sa: "남미",
  ct_me: "중동",
  ct_af: "아프리카",
  ct_xx: "사용자 지정",
  mode: "대상당 측정 횟수",
  m_quick: "빠르게",
  m_std: "표준",
  m_precise: "정밀",
  secs: "{n}초",
  mins: "{n}분",
  noLimit: "제한 없음",
  maxLat: "지연 상한",
  maxJit: "지터 상한",
  maxLoss: "손실 상한",
  p_game: "게임",
  p_call: "화상 회의",
  p_ssh: "SSH / 원격 데스크톱",
  p_web: "웹사이트 / API",
  p_any: "조건 없이 다 보기",
  p_custom: "사용자 지정",
  start: "테스트 시작",
  stop: "중지",
  again: "다시 테스트",
  running: "테스트 중 {d} / {n}",
  eta: "약 {t} 남음",
  viewing: "{d}의 기록을 보는 중",
  tagPeak: "피크 시간",
  histCurrent: "최근 결과",
  picks_h: "추천 리전",
  picks_closest: "가장 가까운 후보",
  picks_none: "맞는 곳이 없습니다. 조건을 풀거나 다른 클라우드를 테스트해 보세요.",
  anyLat: "지연 무관",
  search: "리전, 도시, 클라우드 검색",
  onlyPass: "조건에 맞는 것만",
  g1: "T0 · 갓",
  g2: "T1 · 최상급",
  g3: "T2 · 상위권",
  g4: "T3 · NPC",
  g5: "T4 · 망함",
  queued: "대기 중",
  chartAria: "샘플별 지연",
  noSamples: "아직 샘플이 없습니다",
  d_med: "중앙값",
  d_avg: "평균",
  d_p90: "P90",
  d_min: "최소",
  d_max: "최대",
  d_jit: "지터",
  d_loss: "손실",
  d_method: "요청 방식",
  d_warm: "워밍업(집계 제외)",
  d_cold: "이 대상은 연결을 유지할 수 없어서 매번 핸드셰이크가 포함됩니다(실제 왕복의 약 3배). 같은 대상끼리만 비교하세요.",
  d_verified: "실제로 클라우드에 도달했음을 확인(CORS 검사 통과)",
  d_notverified: "CORS 검사 실패: 중간 장비가 대신 응답했을 수 있습니다.",
  d_review: "참고: 일반 고객은 이용할 수 없는 전용 리전일 수 있습니다.",
  retest: "따로 20회 측정",
  copyUrl: "주소 복사",
  cust_h: "사용자 지정 대상",
  cust_name_ph: "내 VPS(도쿄)",
  add: "추가",
  del: "삭제",
  cust_err_url: "올바른 주소가 아닙니다.",
  cust_err_https: "https:// 주소를 쓰세요. https 페이지에서 보내는 http 요청은 브라우저가 막습니다.",
  cust_err_dup: "이미 목록에 있습니다.",
  cust_added: "추가했습니다. 다음 테스트부터 포함됩니다.",
  cust_group_ph: "새 그룹 이름",
  cust_geo: "국가는 브라우저에서 판별합니다: 내 네트워크의 /24를 붙여 Google Public DNS로 IP를 찾고(CDN은 내 회선 기준으로 응답), 내장 IP 표와 대조합니다.",
  cust_geo_ing: "판별 중…",
  cust_geo_fail: "알 수 없음",
  cust_cc: "국가/지역",
  cust_auto: "자동",
  cust_rules: "직접 연결 규칙을 따로 추가해야 함",
  ccNames: {CN: "중국 본토", HK: "중국 홍콩", MO: "중국 마카오", TW: "중국 대만"},
  share_customOnly: "공유에는 클라우드 업체 결과만 포함되며 사용자 노드는 공유되지 않습니다. 공유하려면 클라우드 업체도 함께 측정하세요.",
  cust_empty: "아직 사용자 노드가 없습니다. '＋ 추가'로 내 서버나 사이트를 넣으면 같은 그룹이 하나의 제공업체처럼 동작합니다.",
  cust_err_nx: "{h} 도메인이 없습니다. 주소를 확인하세요(이름과 주소가 바뀌지 않았나요?).",
  cust_saved: "저장했습니다.",
  cust_cancel: "취소",
  cust_save: "저장",
  cust_edit: "편집",
  cust_newgroup: "새 그룹",
  cust_nogroup: "그룹 없음",
  cust_group: "그룹",
  log_h: "요청 기록",
  log_note: "아래 요청은 모두 이 브라우저에서 표시된 호스트로 바로 보낸 것입니다. 이 페이지에는 백엔드가 없고 결과를 어디에도 보내지 않습니다. 개발자 도구의 Network 탭에서 직접 확인할 수 있습니다.",
  log_empty: "아직 보낸 요청이 없습니다.",
  failed: "실패",
  rules_h: "직접 연결 규칙: 깨끗한 테스트 결과를 위해",
  copy: "복사",
  copied: "복사했습니다",
  rules_fakeip: "fake-ip 모드: 이 호스트들은 실제 IP로 해석",
  rules_plain: "도메인 목록",
  rules_note_clash: "규칙을 rules: 맨 위에 붙여넣고, fake-ip를 쓴다면 호스트를 dns.fake-ip-filter에도 넣으세요.",
  rules_note_surge: "규칙은 [Rule] 맨 위에. always-real-ip로 이 호스트들은 실제 DNS 응답을 받습니다.",
  rules_note_shadowrocket: "설정 파일 [Rule] 맨 위에 두거나 '설정 → 규칙'에서 하나씩 추가하세요.",
  rules_note_quanx: "[filter_local]의 다른 규칙보다 위에 붙여넣으세요.",
  rules_note_singbox: `route.rules와 dns.rules에 합칩니다. 아웃바운드 "direct"와 DNS 서버 "local"은 설정의 태그와 맞춰야 합니다.`,
  rules_note_xray: `routing.rules에 합칩니다. outboundTag "direct"는 설정의 freedom 아웃바운드와 맞춰야 합니다.`,
  rules_note_omega: "SwitchyOmega 프로필의 '프록시 없이 연결할 주소'에 붙여넣으세요.",
  rules_note_plain: "한 줄에 호스트 하나, 다른 도구용.",
  imported: "결과를 불러왔습니다",
  importErr: "Me2Cloud 결과 파일이 아닙니다",
  foot: "모든 테스트는 브라우저 안에서 실행 · 대상은 {d}에 검증 · 어느 클라우드 업체와도 무관",
  homeL: "현재 지역 리전({c})",
  home_all: "포함",
  home_excl: "제외",
  home_only: "이것만",
  homeTip: "{c}의 리전을 포함하거나, 제외하거나, {c}의 리전만 테스트합니다.",
  lp_title: "{v} 지연 테스트: 우리 집 회선에서 {n}개 리전 실측｜Me2Cloud",
  lp_desc: "내 브라우저에서 {v}의 전체 {n}개 리전의 지연·지터·손실을 실측합니다. 통신사와 저녁 피크까지 포함. 무료, 설치 불필요.",
  lp_h1: "우리 집에서 {v}의 각 리전은 얼마나 빠를까?",
  lp_h2: "테스트하는 {v}의 {n}개 리전",
  lp_intro: "{v}는 {k} 엔드포인트로 측정합니다. 위에서 리전을 고르고 시작을 누르면, 모든 요청이 브라우저에서 {v}로 바로 갑니다.",
  nav_h: "클라우드별 테스트",
  ipTip: "IPv6 모드에서는 IPv6를 지원하지 않는 리전을 따로 표시합니다.",
  ip_no6: "내 네트워크에 쓸 수 있는 IPv6가 없어서 IPv4만 측정할 수 있습니다",
  ip_no6short: "IPv6 없음",
  nov6: "IPv6 미지원",
  grp_nov6: "IPv6 미지원",
  d_nov6: "이 리전에는 테스트할 수 있는 IPv6 대상이 없어 IPv6 모드에서 건너뛰었습니다.",
  d_v6: "IPv6로 테스트했습니다(IPv6 주소가 있는 호스트 사용).",
  d_dual: "이 대상의 호스트는 듀얼 스택입니다. 네트워크에 IPv6가 있으면 IPv4 모드에서도 브라우저가 IPv6를 썼을 수 있습니다.",
  ai_btn: "AI로 사용",
  ai_h: "AI 에이전트에서 사용하기",
  ai_sub: "AI가 내 회선을 잴 수는 없지만, 결과를 해석하고 테스트를 준비하는 데 도움이 됩니다.",
  ai_res_h: "결과를 AI에게 물어보기",
  ai_res_p: "이 요약을 ChatGPT, Claude 등에 붙여넣으세요. 네트워크, 조건, 상위 리전과 마지막에 질문이 들어 있습니다.",
  ai_res_none: "먼저 테스트하세요. 결과 요약이 여기에 나타납니다.",
  ai_q: "질문: 이 결과를 보면 내 용도에는 어떤 클라우드와 리전을 골라야 하나요? 주의할 점은 무엇인가요?",
  ai_link_h: "AI에게 테스트 준비 맡기기",
  ai_link_p: "이 프롬프트에 조건을 덧붙여 AI에게 주면, 클라우드·지역·상한이 설정된 Me2Cloud 링크를 만들어 줍니다.",
  ai_linkPrompt: "{u}을 읽고, 다음 조건에서 고려해야 할 리전을 테스트하는 Me2Cloud 링크를 주세요: (사용자 위치, 용도, 예산을 여기에 적기)",
  ai_dev_h: "개발자와 에이전트용",
  ai_dev_p: "기계가 읽는 파일: 대상 레지스트리, 프록시 규칙 세트, 링크 매개변수와 공유 링크 형식을 담은 llms.txt.",
  ip_h: "IP 버전",
  vendors: {
    aws: {
      kind: "DynamoDB /ping",
      note: "응답에 리전 이름이 들어 있어서 실제로 그 리전에 도달했는지 확인할 수 있습니다."
    },
    oracle: {
      kind: "오브젝트 스토리지",
      note: "GET은 404 때마다 연결을 끊습니다(매번 3–4번 왕복). HEAD는 연결을 재사용합니다."
    },
    vultr: {
      kind: "Looking Glass",
      note: "GET은 약 12 KB 페이지를 받아 50–70 ms 늦어집니다. HEAD는 본문이 없습니다."
    },
    azure: {
      kind: "Cognitive Services",
      note: "CNAME은 <리전>.cloudapp.azure.com으로 이어집니다. 측정값이 매우 안정적입니다."
    },
    gcp: {
      kind: "Storage 리전 엔드포인트(rep)",
      note: "HEAD는 매번 약 1초가 더 걸려서 GET만 씁니다. 리전별 IP(34.1.x)이며 전 세계 Anycast가 아닙니다."
    },
    aliyun: {
      kind: "OSS",
      note: "GET 403에서 연결이 끊깁니다. HEAD는 연결을 재사용합니다."
    },
    tencent: {
      kind: "COS",
      note: "GET 403에서 연결이 끊깁니다. HEAD는 연결을 재사용합니다."
    },
    huawei: {
      kind: "OBS",
      note: "GET과 HEAD 모두 연결을 유지합니다."
    },
    linode: {
      kind: "오브젝트 스토리지",
      note: `예전 speedtest.<DC>.linode.com은 응답하지 않아, 오브젝트 스토리지가 있는 리전만 다룹니다.`
    },
    digitalocean: {
      kind: "Spaces",
      note: `speedtest-<DC>.digitalocean.com은 종료되었습니다. NYC1/NYC2에는 Spaces가 없습니다(뉴욕은 nyc3).`
    },
    ovh: {
      kind: "속도 테스트(proof)",
      note: `proof.ovh.net은 <사이트>.speedtest.network.ovh.net으로 넘어가므로 그 주소를 바로 씁니다.`
    },
    hetzner: {
      kind: "속도 테스트",
      note: `브라우저의 fetch()는 실패합니다(원인 불명, curl은 정상). <img>로는 잴 수 있지만 매번 새 연결이라 값은 약 3번 왕복입니다.`
    },
    ibm: {
      kind: "Cloud Object Storage",
      note: "GET 403에서 연결이 끊깁니다. HEAD는 연결을 재사용합니다."
    },
    scaleway: {
      kind: "오브젝트 스토리지",
      note: "GET과 HEAD 모두 연결을 유지합니다. 듀얼 스택 호스트입니다."
    },
    volcengine: {
      kind: "TOS",
      note: "GET 403에서 연결이 끊깁니다. HEAD는 연결을 재사용합니다."
    },
    baidu: {
      kind: "BOS",
      note: "GET 403에서 연결이 끊깁니다. HEAD는 연결을 재사용합니다."
    },
    ionos: { kind: "로깅 API(리전별)", note: "컴퓨트 위치마다 API 호스트가 하나씩 있습니다. 오브젝트 스토리지는 위치가 적고, 예전 클러스터는 브라우저에서 연결을 유지하지 못합니다." },
    aruba: { kind: "오브젝트 스토리지", note: "HEAD는 모든 리전에서 연결을 재사용합니다. R3-IT의 GET은 연결을 끊습니다." },
    leaseweb: { kind: "오브젝트 스토리지", note: "GET 400은 연결을 끊고 HEAD는 재사용합니다. 공식 문서에 국가만 있어 국가로 표시합니다." },
    gcore: { kind: "오브젝트 스토리지", note: "GET은 연결을 끊고 HEAD는 재사용합니다. Sines와 London-2는 다른 스토리지라서 본문을 끝까지 읽는 CORS GET으로 잽니다." },
    yandex: { kind: "오브젝트 스토리지", note: "GET과 HEAD 모두 연결을 유지합니다. 듀얼 스택, 리전마다 엔드포인트 하나입니다." },
    naver: {
      kind: "오브젝트 스토리지",
      note: "GET 403에서 연결이 끊깁니다. HEAD는 연결을 재사용합니다."
    }
  },
  docs: [
    [
      "내 회선에서 재는 것이 속도 측정 사이트나 Looking Glass보다 믿을 만한 이유",
      `<p>대부분의 '클라우드 속도 측정' 사이트와 각 업체의 Looking Glass는 <b>그들의</b> 서버에서 측정합니다. 데이터센터에 있는 고품질 회선 서버라서, 알 수 있는 건 '데이터센터에서 데이터센터까지'의 속도뿐입니다. 정작 내가 체감하는 부분, 즉 집 인터넷이나 모바일 회선, 통신사 백본, 국제 구간, 오늘 저녁의 혼잡은 잴 수 없습니다.</p>
      <p>Me2Cloud는 모든 요청을 <b>내</b> 브라우저에서 보냅니다. Wi‑Fi, 공유기, 통신사, 통신사가 고른 경로, 저녁 피크까지 전부 결과에 들어갑니다.</p>
      <div class="tblwrap"><table class="cmp"><tr><th></th><th>속도 측정 사이트 / Looking Glass</th><th>PC의 ICMP ping</th><th>Me2Cloud</th></tr>
      <tr><td>어디서 재나</td><td class="n">그들의 데이터센터</td><td class="y">내 회선</td><td class="y">내 회선</td></tr>
      <tr><td>통신사와 저녁 피크 포함</td><td class="n">아니오</td><td class="y">예</td><td class="y">예</td></tr>
      <tr><td>웹·앱과 같은 프로토콜(TCP 443)</td><td class="m">경우에 따라</td><td class="n">아니오, ICMP</td><td class="y">예, HTTPS</td></tr>
      <tr><td>네트워크에서 제한·차단됨</td><td class="m">가끔</td><td class="n">자주</td><td class="y">드묾</td></tr>
      <tr><td>수백 개 리전을 한 번에</td><td class="m">일부</td><td class="n">불가</td><td class="y">가능</td></tr>
      <tr><td>설치 필요</td><td class="y">불필요</td><td class="y">불필요</td><td class="y">불필요</td></tr></table></div>`
    ],
    [
      "한 번씩 어떻게 재나",
      `<ol><li>먼저 <b>워밍업</b> 요청으로 DNS, TCP, TLS를 맺습니다. 이 시간은 보여 주지만 집계에는 넣지 않습니다.</li>
      <li>이어서 <b>같은 연결</b>로 같은 호스트에 5, 10, 20번 요청합니다. 한 번에 왕복 한 번과 업체 서버의 처리 시간만 걸립니다.</li>
      <li>업체마다 연결을 유지한다고 확인한 방식을 씁니다: AWS, Azure, Google Cloud, Huawei Cloud, DigitalOcean, Scaleway는 <code>GET</code>, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Linode, Vultr, OVHcloud, IONOS Cloud, Aruba Cloud, Leaseweb, Gcore, Yandex Cloud는 <code>HEAD</code>(GET은 연결이 끊겨 3배가 됨), Hetzner만 <code>&lt;img&gt;</code>.</li>
      <li>결과는 <b>중앙값</b>(가장 대표적인 값), <b>평균</b>, <b>P90</b>(10번 중 9번은 이 이하), <b>지터</b>(연속 두 번의 차이 평균), <b>손실</b>(시간 초과 비율)입니다.</li>
      <li><b>등급</b>은 중앙값으로 정합니다: T0 갓 ≤ 30 ms, T1 최상급 ≤ 80 ms, T2 상위권 ≤ 150 ms, T3 NPC ≤ 250 ms, 그 이상은 T4 망함. 추천에 쓰는 종합 점수는 '중앙값 + 2 × 지터 + 손실 벌점'이라, 안정적인 60 ms가 들쭉날쭉한 45 ms보다 앞섭니다.</li></ol>`
    ],
    [
      "HTTPS 측정이 ICMP ping보다 체감에 가까운 이유",
      `<ul><li><b>내 트래픽과 같은 길.</b> 웹, API, 443 포트 터널, 게임 로그인, 다운로드는 모두 TCP입니다. 많은 통신사가 ICMP를 따로 줄 세우거나 제한하거나 다른 경로로 보내서, ping은 좋은데 페이지가 느리거나 그 반대인 경우가 흔합니다.</li>
      <li><b>제한에 묻히지 않음.</b> 공유기와 클라우드는 ICMP를 자주 제한·폐기하지만 공개 HTTPS 엔드포인트는 항상 응답합니다.</li>
      <li><b>실제 환경이 반영됨.</b> DNS, IPv4/IPv6 선택, 프록시, 가속 서비스가 브라우저 트래픽에도 적용되므로 실제로 얻는 속도를 잽니다.</li>
      <li><b>대신:</b> 매번 약간의 일정한 서버 처리 시간이 들어갑니다. 실측으로 AWS는 0–5 ms, Alibaba Cloud는 약 8 ms, Huawei Cloud OBS는 약 20 ms. 100 ms가 넘는 거리에서는 무시해도 되지만, 아주 가까운 리전에서는 ping보다 조금 크게 나옵니다.</li></ul>`
    ],
    [
      "언제 잴까: 저녁 피크를 노리세요",
      `<ul><li>가정용 회선은 <b>저녁 20:00–23:00</b>에 가장 붐비고, 해외 구간은 더 심합니다. 낮에는 T1 최상급이던 리전이 밤에는 NPC까지 떨어지기도 합니다.</li>
      <li>낮에 한 번, 피크에 한 번 재 보세요. 저장된 결과에는 '피크 시간' 표시가 붙고, 결과 화면에서 바꿔 가며 비교할 수 있습니다.</li>
      <li>측정 중에는 큰 다운로드, 동영상, 클라우드 동기화를 멈추세요. 유선이 Wi‑Fi보다 정확하고, Wi‑Fi라면 공유기 가까이에서.</li>
      <li>모바일 데이터에서는 신호 세기에 따라 결과가 달라집니다. 실제로 쓸 곳에서 재는 게 가장 좋습니다.</li></ul>`
    ],
    [
      "이럴 때 쓰세요",
      `<ul><li>서버, 게임 서버, CDN 원본을 계약하기 전에 후보 리전을 추릴 때.</li>
      <li>같은 업체의 리전끼리, 또는 같은 도시의 다른 업체를 비교할 때.</li>
      <li>게임, 화상 회의, 원격 데스크톱, SSH에 충분히 안정적인지(지터, 손실) 확인할 때.</li>
      <li>프록시, 가속 서비스, 새 인터넷 요금제가 정말 효과가 있는지 켜고 끄며 비교할 때.</li>
      <li>사용자 지정 대상으로 내 서버나 CDN을 대형 업체와 나란히 비교할 때.</li></ul>`
    ],
    [
      "알 수 없는 것",
      `<ul><li><b>한 곳의 결과일 뿐입니다.</b> 내 회선이지 사용자 회선이 아닙니다. 사용자 몇 명에게도 재 달라고 하고 내보내서 비교하세요.</li>
      <li><b>재는 건 엔드포인트이지, 앞으로 쓸 서버 자체가 아닙니다.</b> 그 리전의 공개 API나 스토리지를 잽니다. 같은 리전의 서버는 보통 같은 네트워크지만 프리미엄 회선(CN2, BGP와 단일 통신사, Lightsail과 EC2 등)은 다를 수 있습니다.</li>
      <li><b>대역폭, UDP, 경로는 재지 않습니다.</b> 왕복 시간만 재며 다운로드 속도, UDP 게임 트래픽, 중간 경로는 모릅니다.</li>
      <li><b>브라우저의 영향.</b> 확장 기능, 프록시, VPN, 무거운 탭은 잡음이 됩니다. 무거운 탭은 닫고 이 페이지를 앞에 두세요.</li>
      <li><b>Hetzner</b>는 브라우저에서 연결을 유지할 수 없어 매번 핸드셰이크가 포함됩니다. 일부 나라에서는 닿지 않는 대상도 있습니다.</li></ul>`
    ],
    [
      "모든 요청은 내 브라우저에서",
      `<ul><li>이 페이지는 Cloudflare에 올린 정적 파일뿐입니다. 백엔드도 가입도 분석 도구도 없고, 결과를 업로드하지 않습니다.</li>
      <li>테스트 요청은 모두 브라우저에서 업체로 바로 갑니다. 위의 <b>요청 기록</b>이나 개발자 도구 Network 탭에서 하나씩 볼 수 있습니다.</li>
      <li>네트워크 정보는 Cloudflare(<code>speed.cloudflare.com/meta</code>, <code>/cdn-cgi/trace</code>)에서 받고, 선택 사항인 WebRTC 확인은 <code>stun.cloudflare.com</code>에 UDP 출구 주소를 묻습니다. 설정에서 끌 수 있습니다.</li>
      <li>IPv4/IPv6 확인은 Cloudflare 외에 <code>ipify.org</code>와 <code>ident.me</code>에도 함께 물어보므로, 그중 하나가 막혀 있어도 IPv6가 없다고 잘못 판단하지 않습니다.</li>
      <li>설정, 사용자 지정 대상, 최근 결과는 이 브라우저의 로컬 저장소에만 있고 '테스트 데이터 지우기'로 결과를 지울 수 있습니다.</li></ul>`
    ],
    [
      "업체에 부담 주지 않기: 제한도 차단도 없이",
      `<p>공개 엔드포인트를 너무 세게 두드리면 업체의 속도 제한이나 WAF에 걸리고 결과도 망가집니다. 그래서 테스트 속도를 일부러 낮췄습니다:</p>
      <ul><li>호스트마다 동시에 요청 1개, 샘플 사이는 250–370 ms 쉼(호스트당 초당 최대 2–3회).</li>
      <li>업체마다 동시에 최대 2개 호스트, 전체 최대 8개(기본 4개).</li>
      <li>한 번 테스트에 호스트당 최대 21번 요청(워밍업 + 20). 연속 모드 없음.</li>
      <li>3번 연속 실패한 호스트는 포기하고 계속 재시도하지 않습니다.</li>
      <li>모두 익명, 쿠키와 Referer 없는 '단순 요청': 사전 요청 없음, 응답은 수백 바이트, 가능하면 HEAD, 큰 파일은 받지 않습니다.</li></ul>
      <p>전체 트래픽은 평범한 웹 페이지 하나를 여는 것보다 적습니다. 모든 대상이 익명 요청에 정상 응답하는 것을 확인했습니다(200, 403, 404 모두 측정에는 문제없음).</p>`
    ],
    [
      "프록시나 VPN을 쓰고 있다면?",
      `<p>트래픽이 프록시를 거치면 브라우저가 재는 건 '나→프록시'와 '프록시→업체'이지 내 회선이 아닙니다. 네트워크 표시는 출구가 데이터센터인지, 시간대와 출구 국가가 다른지, WARP가 켜졌는지, WebRTC와 HTTPS 출구가 다른지 같은 흔한 징후를 확인합니다.</p>
      <p><b>직접 연결 규칙 받기</b>로 테스트용 호스트만 직접 연결하게 하고(Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega, 도메인 목록 지원) 다시 확인하세요. 프록시 자체를 재고 싶다면 그대로 재면 되고, 그게 프록시의 실제 성능입니다.</p>`
    ],
    [
      "그래프 읽는 법",
      `<ul><li>각 행의 막대는 같은 눈금(로그, 2 ms~3초)입니다. 점은 각 샘플, 띠는 샘플의 가운데 절반 범위, 세로선은 중앙값입니다.</li>
      <li>띠가 좁을수록 안정적이고, 띠가 넓거나 점이 흩어지면 지터가 큽니다. 빨간 ×는 손실 횟수입니다.</li>
      <li>행을 펼치면 샘플별 추이, 모든 통계, 사용한 대상이 보입니다. ✓는 조건에 맞는 리전입니다.</li></ul>`
    ]
  ]
};
