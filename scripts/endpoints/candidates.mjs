// Candidate endpoints for every vendor region. verify.mjs checks each one; only verified entries go into endpoints.json.
// Each region: [code, city, country (ISO 3166-1 alpha-2)]. A region may list several candidate URLs; the first that verifies wins.

const AWS = [
  ["us-east-1", "N. Virginia", "US"], ["us-east-2", "Ohio", "US"], ["us-west-1", "N. California", "US"], ["us-west-2", "Oregon", "US"],
  ["ca-central-1", "Montreal", "CA"], ["ca-west-1", "Calgary", "CA"], ["mx-central-1", "Querétaro", "MX"], ["sa-east-1", "São Paulo", "BR"],
  ["eu-central-1", "Frankfurt", "DE"], ["eu-central-2", "Zurich", "CH"], ["eu-west-1", "Dublin", "IE"], ["eu-west-2", "London", "GB"],
  ["eu-west-3", "Paris", "FR"], ["eu-north-1", "Stockholm", "SE"], ["eu-south-1", "Milan", "IT"], ["eu-south-2", "Madrid", "ES"],
  ["il-central-1", "Tel Aviv", "IL"], ["me-central-1", "UAE", "AE"], ["me-south-1", "Bahrain", "BH"], ["af-south-1", "Cape Town", "ZA"],
  ["ap-east-1", "Hong Kong", "HK"], ["ap-east-2", "Taipei", "TW"], ["ap-northeast-1", "Tokyo", "JP"], ["ap-northeast-2", "Seoul", "KR"],
  ["ap-northeast-3", "Osaka", "JP"], ["ap-south-1", "Mumbai", "IN"], ["ap-south-2", "Hyderabad", "IN"], ["ap-southeast-1", "Singapore", "SG"],
  ["ap-southeast-2", "Sydney", "AU"], ["ap-southeast-3", "Jakarta", "ID"], ["ap-southeast-4", "Melbourne", "AU"], ["ap-southeast-5", "Kuala Lumpur", "MY"],
  ["ap-southeast-6", "Auckland", "NZ"], ["ap-southeast-7", "Bangkok", "TH"],
  ["cn-north-1", "Beijing", "CN"], ["cn-northwest-1", "Ningxia", "CN"],
  // in ip-ranges.json but not (yet) public; kept so verification reports them
  ["me-west-1", "?", "--"], ["sa-west-1", "?", "--"], ["us-south-1", "?", "--"]
];

const ORACLE_CC = { us: "US", ca: "CA", mx: "MX", sa: "BR", eu: "EU", uk: "GB", me: "AE", af: "ZA", ap: "AP", il: "IL" };
const ORACLE_COUNTRY = {
  "mx-monterrey-1": "MX", "mx-queretaro-1": "MX", "eu-madrid-1": "ES", "eu-madrid-3": "ES", "me-abudhabi-1": "AE", "me-dubai-1": "AE",
  "af-casablanca-1": "MA", "ap-seoul-1": "KR", "ap-chuncheon-1": "KR", "ap-osaka-1": "JP", "ap-tokyo-1": "JP", "sa-saopaulo-1": "BR",
  "sa-vinhedo-1": "BR", "sa-riodejaneiro-2": "BR", "sa-santiago-1": "CL", "sa-valparaiso-1": "CL", "sa-bogota-1": "CO",
  "ap-hyderabad-1": "IN", "ap-mumbai-1": "IN", "ap-delhi-1": "IN", "me-jeddah-1": "SA", "me-riyadh-1": "SA", "eu-stockholm-1": "SE",
  "eu-marseille-1": "FR", "eu-paris-1": "FR", "eu-milan-1": "IT", "eu-frankfurt-1": "DE", "eu-amsterdam-1": "NL", "eu-zurich-1": "CH",
  "eu-dublin-3": "IE", "eu-jovanovac-1": "RS", "uk-london-1": "GB", "uk-cardiff-1": "GB", "af-johannesburg-1": "ZA",
  "il-jerusalem-1": "IL", "ap-sydney-1": "AU", "ap-melbourne-1": "AU", "ap-singapore-1": "SG", "ap-singapore-2": "SG",
  "ap-batam-1": "ID", "ap-kulai-1": "MY", "ca-toronto-1": "CA", "ca-montreal-1": "CA"
};
const ORACLE_CITY = { sanjose: "San Jose", saopaulo: "São Paulo", abudhabi: "Abu Dhabi", saltlake: "Salt Lake City", sanantonio: "San Antonio",
  desmoines: "Des Moines", riodejaneiro: "Rio de Janeiro", queretaro: "Querétaro" };
const ORACLE = ["mx-monterrey-1", "ca-toronto-1", "eu-madrid-1", "me-abudhabi-1", "af-casablanca-1", "ap-seoul-1", "ap-osaka-1", "sa-saopaulo-1",
  "us-chicago-1", "us-sanjose-1", "ap-hyderabad-1", "ca-montreal-1", "me-jeddah-1", "eu-stockholm-1", "eu-marseille-1", "eu-milan-1",
  "uk-london-1", "eu-frankfurt-1", "eu-madrid-3", "ap-mumbai-1", "il-jerusalem-1", "me-riyadh-1", "af-johannesburg-1", "eu-amsterdam-1",
  "me-dubai-1", "uk-cardiff-1", "eu-paris-1", "us-ashburn-1", "sa-santiago-1", "ap-sydney-1", "us-phoenix-1", "ap-singapore-1",
  "ap-chuncheon-1", "ap-batam-1", "ap-melbourne-1", "ap-tokyo-1", "eu-zurich-1", "sa-vinhedo-1", "eu-dublin-3", "us-dallas-1",
  "mx-queretaro-1", "ap-singapore-2", "sa-valparaiso-1", "us-sanantonio-1", "sa-bogota-1", "us-saltlake-2", "us-lenexa-1", "ap-delhi-1",
  "us-desmoines-1", "us-abilene-1", "ap-kulai-1", "us-shawnee-1", "us-boardman-1", "us-quincy-1", "sa-riodejaneiro-2", "eu-jovanovac-1"]
  .map(id => {
    const word = id.split("-")[1];
    const city = ORACLE_CITY[word] || word.replace(/^./, c => c.toUpperCase());
    return [id, city, ORACLE_COUNTRY[id] || ORACLE_CC[id.split("-")[0]] || "--"];
  });

// Vultr: API region id -> looking-glass host prefix candidates
const VULTR = [
  ["ams", "Amsterdam", "NL", ["ams-nl"]], ["atl", "Atlanta", "US", ["ga-us"]], ["blr", "Bangalore", "IN", ["blr-in"]],
  ["bom", "Mumbai", "IN", ["bom-in"]], ["cdg", "Paris", "FR", ["par-fr"]], ["del", "Delhi NCR", "IN", ["del-in"]],
  ["dfw", "Dallas", "US", ["tx-us"]], ["ewr", "New Jersey", "US", ["nj-us"]], ["fra", "Frankfurt", "DE", ["fra-de"]],
  ["hnl", "Honolulu", "US", ["hon-hi-us", "hnl-us"]], ["icn", "Seoul", "KR", ["sel-kor"]], ["itm", "Osaka", "JP", ["osk-jp", "itm-jp"]],
  ["jnb", "Johannesburg", "ZA", ["jnb-za"]], ["lax", "Los Angeles", "US", ["lax-ca-us"]], ["lhr", "London", "GB", ["lon-gb"]],
  ["mad", "Madrid", "ES", ["mad-es"]], ["man", "Manchester", "GB", ["man-uk", "man-gb"]], ["mel", "Melbourne", "AU", ["mel-au"]],
  ["mex", "Mexico City", "MX", ["mex-mx"]], ["mia", "Miami", "US", ["fl-us"]], ["mxp", "Milan", "IT", ["mil-it", "mxp-it"]],
  ["nrt", "Tokyo", "JP", ["hnd-jp"]], ["ord", "Chicago", "US", ["il-us"]], ["sao", "São Paulo", "BR", ["sao-br"]],
  ["scl", "Santiago", "CL", ["scl-cl"]], ["sea", "Seattle", "US", ["wa-us"]], ["sgp", "Singapore", "SG", ["sgp"]],
  ["sjc", "Silicon Valley", "US", ["sjo-ca-us"]], ["sto", "Stockholm", "SE", ["sto-se"]], ["syd", "Sydney", "AU", ["syd-au"]],
  ["tlv", "Tel Aviv", "IL", ["tlv-il"]], ["waw", "Warsaw", "PL", ["waw-pl"]], ["yto", "Toronto", "CA", ["tor-ca"]]
];

const ALIYUN = [
  ["cn-hangzhou", "Hangzhou", "CN"], ["cn-shanghai", "Shanghai", "CN"], ["cn-nanjing", "Nanjing", "CN"], ["cn-fuzhou", "Fuzhou", "CN"],
  ["cn-wuhan-lr", "Wuhan", "CN"], ["cn-qingdao", "Qingdao", "CN"], ["cn-beijing", "Beijing", "CN"], ["cn-zhangjiakou", "Zhangjiakou", "CN"],
  ["cn-huhehaote", "Hohhot", "CN"], ["cn-wulanchabu", "Ulanqab", "CN"], ["cn-shenzhen", "Shenzhen", "CN"], ["cn-heyuan", "Heyuan", "CN"],
  ["cn-guangzhou", "Guangzhou", "CN"], ["cn-chengdu", "Chengdu", "CN"], ["cn-hongkong", "Hong Kong", "HK"],
  ["ap-northeast-1", "Tokyo", "JP"], ["ap-northeast-2", "Seoul", "KR"], ["ap-southeast-1", "Singapore", "SG"],
  ["ap-southeast-3", "Kuala Lumpur", "MY"], ["ap-southeast-5", "Jakarta", "ID"], ["ap-southeast-6", "Manila", "PH"],
  ["ap-southeast-7", "Bangkok", "TH"], ["eu-central-1", "Frankfurt", "DE"], ["eu-west-1", "London", "GB"],
  ["us-west-1", "Silicon Valley", "US"], ["us-east-1", "Virginia", "US"], ["na-south-1", "Mexico City", "MX"],
  ["me-east-1", "Dubai", "AE"], ["me-central-1", "Riyadh", "SA"], ["ap-south-1", "Mumbai", "IN"]
];

const TENCENT = [
  ["ap-beijing", "Beijing", "CN"], ["ap-nanjing", "Nanjing", "CN"], ["ap-shanghai", "Shanghai", "CN"], ["ap-guangzhou", "Guangzhou", "CN"],
  ["ap-chengdu", "Chengdu", "CN"], ["ap-chongqing", "Chongqing", "CN"], ["ap-hongkong", "Hong Kong", "HK"], ["ap-singapore", "Singapore", "SG"],
  ["ap-jakarta", "Jakarta", "ID"], ["ap-seoul", "Seoul", "KR"], ["ap-bangkok", "Bangkok", "TH"], ["ap-tokyo", "Tokyo", "JP"],
  ["ap-mumbai", "Mumbai", "IN"], ["na-siliconvalley", "Silicon Valley", "US"], ["na-ashburn", "Virginia", "US"],
  ["sa-saopaulo", "São Paulo", "BR"], ["eu-frankfurt", "Frankfurt", "DE"], ["na-toronto", "Toronto", "CA"], ["eu-moscow", "Moscow", "RU"]
];

const HUAWEI = [
  ["cn-north-1", "Beijing 1", "CN"], ["cn-north-4", "Beijing 4", "CN"], ["cn-north-9", "Ulanqab", "CN"], ["cn-east-2", "Shanghai 2", "CN"],
  ["cn-east-3", "Shanghai 1", "CN"], ["cn-east-5", "Qingdao", "CN"], ["cn-south-1", "Guangzhou", "CN"], ["cn-south-4", "Guangzhou-Friendly", "CN"],
  ["cn-southwest-2", "Guiyang", "CN"], ["ap-southeast-1", "Hong Kong", "HK"], ["ap-southeast-2", "Bangkok", "TH"],
  ["ap-southeast-3", "Singapore", "SG"], ["ap-southeast-4", "Jakarta", "ID"], ["ap-southeast-5", "Manila", "PH"],
  ["my-kualalumpur-1", "Kuala Lumpur", "MY"], ["af-south-1", "Johannesburg", "ZA"], ["af-north-1", "Cairo", "EG"],
  ["la-north-2", "Mexico City 2", "MX"], ["na-mexico-1", "Mexico City 1", "MX"], ["la-south-2", "Santiago", "CL"],
  ["sa-brazil-1", "São Paulo", "BR"], ["tr-west-1", "Istanbul", "TR"], ["me-east-1", "Riyadh", "SA"],
  ["eu-west-101", "Dublin", "IE"], ["eu-west-0", "Paris", "FR"], ["ru-moscow-1", "Moscow", "RU"]
];

const AZURE = [
  ["eastus", "Virginia", "US"], ["eastus2", "Virginia", "US"], ["centralus", "Iowa", "US"], ["northcentralus", "Illinois", "US"],
  ["southcentralus", "Texas", "US"], ["westcentralus", "Wyoming", "US"], ["westus", "California", "US"], ["westus2", "Washington", "US"],
  ["westus3", "Arizona", "US"], ["canadacentral", "Toronto", "CA"], ["canadaeast", "Quebec City", "CA"], ["mexicocentral", "Querétaro", "MX"],
  ["brazilsouth", "São Paulo", "BR"], ["brazilsoutheast", "Rio de Janeiro", "BR"], ["chilecentral", "Santiago", "CL"],
  ["northeurope", "Dublin", "IE"], ["westeurope", "Amsterdam", "NL"], ["uksouth", "London", "GB"], ["ukwest", "Cardiff", "GB"],
  ["francecentral", "Paris", "FR"], ["francesouth", "Marseille", "FR"], ["germanywestcentral", "Frankfurt", "DE"], ["germanynorth", "Berlin", "DE"],
  ["switzerlandnorth", "Zurich", "CH"], ["switzerlandwest", "Geneva", "CH"], ["norwayeast", "Oslo", "NO"], ["norwaywest", "Stavanger", "NO"],
  ["swedencentral", "Gävle", "SE"], ["polandcentral", "Warsaw", "PL"], ["italynorth", "Milan", "IT"], ["spaincentral", "Madrid", "ES"],
  ["austriaeast", "Vienna", "AT"], ["belgiumcentral", "Brussels", "BE"], ["denmarkeast", "Copenhagen", "DK"],
  ["eastasia", "Hong Kong", "HK"], ["southeastasia", "Singapore", "SG"], ["japaneast", "Tokyo", "JP"], ["japanwest", "Osaka", "JP"],
  ["koreacentral", "Seoul", "KR"], ["koreasouth", "Busan", "KR"], ["australiaeast", "Sydney", "AU"], ["australiasoutheast", "Melbourne", "AU"],
  ["australiacentral", "Canberra", "AU"], ["australiacentral2", "Canberra", "AU"], ["newzealandnorth", "Auckland", "NZ"],
  ["centralindia", "Pune", "IN"], ["southindia", "Chennai", "IN"], ["westindia", "Mumbai", "IN"], ["jioindiawest", "Jamnagar", "IN"],
  ["jioindiacentral", "Nagpur", "IN"], ["indonesiacentral", "Jakarta", "ID"], ["malaysiawest", "Kuala Lumpur", "MY"],
  ["uaenorth", "Dubai", "AE"], ["uaecentral", "Abu Dhabi", "AE"], ["qatarcentral", "Doha", "QA"], ["israelcentral", "Israel", "IL"],
  ["southafricanorth", "Johannesburg", "ZA"], ["southafricawest", "Cape Town", "ZA"]
];

// Linode: API region id -> legacy speedtest label (only the old core DCs had one) and Object Storage cluster
const LINODE = [
  ["us-east", "Newark", "US", "newark"], ["us-southeast", "Atlanta", "US", "atlanta"], ["us-central", "Dallas", "US", "dallas"],
  ["us-west", "Fremont", "US", "fremont"], ["eu-west", "London", "GB", "london"], ["eu-central", "Frankfurt", "DE", "frankfurt"],
  ["ap-south", "Singapore", "SG", "singapore"], ["ap-northeast", "Tokyo 2", "JP", "tokyo2"], ["ap-southeast", "Sydney", "AU", "syd1"],
  ["ca-central", "Toronto", "CA", "toronto1"], ["ap-west", "Mumbai", "IN", "mumbai1"],
  ["gb-lon", "London 2", "GB"], ["se-sto", "Stockholm", "SE"], ["es-mad", "Madrid", "ES"], ["in-maa", "Chennai", "IN"],
  ["jp-osa", "Osaka", "JP"], ["it-mil", "Milan", "IT"], ["us-mia", "Miami", "US"], ["id-cgk", "Jakarta", "ID"],
  ["us-lax", "Los Angeles", "US"], ["nl-ams", "Amsterdam", "NL"], ["au-mel", "Melbourne", "AU"], ["in-bom-2", "Mumbai 2", "IN"],
  ["de-fra-2", "Frankfurt 2", "DE"], ["sg-sin-2", "Singapore 2", "SG"], ["jp-tyo-3", "Tokyo 3", "JP"], ["us-iad-2", "Washington 2", "US"],
  ["fr-par-2", "Paris 2", "FR"], ["br-gru", "São Paulo", "BR"], ["us-sea", "Seattle", "US"], ["fr-par", "Paris", "FR"],
  ["us-ord", "Chicago", "US"], ["us-iad", "Washington", "US"]
];

const DO = [
  ["nyc1", "New York", "US"], ["nyc2", "New York", "US"], ["nyc3", "New York", "US"], ["sfo2", "San Francisco", "US"], ["sfo3", "San Francisco", "US"],
  ["ams3", "Amsterdam", "NL"], ["sgp1", "Singapore", "SG"], ["lon1", "London", "GB"], ["fra1", "Frankfurt", "DE"], ["tor1", "Toronto", "CA"],
  ["blr1", "Bangalore", "IN"], ["syd1", "Sydney", "AU"], ["atl1", "Atlanta", "US"], ["ric1", "Richmond", "US"]
];

const HETZNER = [["fsn1", "Falkenstein", "DE"], ["nbg1", "Nuremberg", "DE"], ["hel1", "Helsinki", "FI"],
  ["ash", "Ashburn", "US"], ["hil", "Hillsboro", "US"], ["sin", "Singapore", "SG"]];

const OVH = [
  // proof.ovh.net hosts 301 to <site>.speedtest.network.ovh.net; probe the targets directly
  ["gra", "Gravelines", "FR", ["https://proof.ovh.net/files/"]],
  ...[["rbx", "Roubaix", "FR", "lil1-rbx"], ["sbg", "Strasbourg", "FR", "sxb1-sbg"], ["eri", "London", "GB", "lon1-eri"],
    ["bhs", "Beauharnois", "CA", "ymq1-bhs"], ["vin", "Vint Hill", "US", "was1-vin"], ["hil", "Hillsboro", "US", "pdx1-hil"],
    ["sgp", "Singapore", "SG", "sin1-sgp"], ["syd", "Sydney", "AU", "syd1-sy2"]]
    .map(([c, city, cc, h]) => [c, city, cc, [`https://${h}.speedtest.network.ovh.net/files/`]])
];

// regions from gstatic.com/ipranges/cloud.json; the "rep" regional Storage endpoint is served from the region itself
const GCP = [
  ["us-central1", "Iowa", "US"], ["us-central2", "Oklahoma", "US"], ["us-east1", "South Carolina", "US"], ["us-east4", "Virginia", "US"],
  ["us-east5", "Columbus", "US"], ["us-east7", "Alabama", "US"], ["us-south1", "Dallas", "US"], ["us-west1", "Oregon", "US"],
  ["us-west2", "Los Angeles", "US"], ["us-west3", "Salt Lake City", "US"], ["us-west4", "Las Vegas", "US"], ["us-west8", "Phoenix", "US"],
  ["northamerica-northeast1", "Montréal", "CA"], ["northamerica-northeast2", "Toronto", "CA"], ["northamerica-south1", "Querétaro", "MX"],
  ["southamerica-east1", "São Paulo", "BR"], ["southamerica-west1", "Santiago", "CL"],
  ["europe-west1", "Belgium", "BE"], ["europe-west2", "London", "GB"], ["europe-west3", "Frankfurt", "DE"], ["europe-west4", "Netherlands", "NL"],
  ["europe-west6", "Zurich", "CH"], ["europe-west8", "Milan", "IT"], ["europe-west9", "Paris", "FR"], ["europe-west10", "Berlin", "DE"],
  ["europe-west12", "Turin", "IT"], ["europe-west15", "?", "--"], ["europe-central2", "Warsaw", "PL"], ["europe-north1", "Finland", "FI"],
  ["europe-north2", "Stockholm", "SE"], ["europe-southwest1", "Madrid", "ES"],
  ["me-central1", "Doha", "QA"], ["me-central2", "Dammam", "SA"], ["me-west1", "Tel Aviv", "IL"], ["africa-south1", "Johannesburg", "ZA"],
  ["asia-east1", "Taiwan", "TW"], ["asia-east2", "Hong Kong", "HK"], ["asia-northeast1", "Tokyo", "JP"], ["asia-northeast2", "Osaka", "JP"],
  ["asia-northeast3", "Seoul", "KR"], ["asia-south1", "Mumbai", "IN"], ["asia-south2", "Delhi", "IN"], ["asia-southeast1", "Singapore", "SG"],
  ["asia-southeast2", "Jakarta", "ID"], ["asia-southeast3", "Bangkok", "TH"], ["australia-southeast1", "Sydney", "AU"], ["australia-southeast2", "Melbourne", "AU"]
];

const r = (vendor, code, city, cc, urls, note) => ({ vendor, code, city, cc, urls, note });

// more providers (added 2026-10-27): regional object storage endpoints, anonymous requests answer 403/200
const IBM = [["us-south", "Dallas", "US"], ["us-east", "Washington", "US"], ["ca-tor", "Toronto", "CA"], ["br-sao", "São Paulo", "BR"],
  ["eu-gb", "London", "GB"], ["eu-de", "Frankfurt", "DE"], ["eu-es", "Madrid", "ES"], ["jp-tok", "Tokyo", "JP"], ["jp-osa", "Osaka", "JP"], ["au-syd", "Sydney", "AU"]];
const SCALEWAY = [["fr-par", "Paris", "FR"], ["nl-ams", "Amsterdam", "NL"], ["pl-waw", "Warsaw", "PL"], ["it-mil", "Milan", "IT"]];
const VOLC = [["cn-beijing", "Beijing", "CN"], ["cn-shanghai", "Shanghai", "CN"], ["cn-guangzhou", "Guangzhou", "CN"], ["cn-hongkong", "Hong Kong", "HK"],
  ["ap-southeast-1", "Johor", "MY"], ["ap-southeast-3", "Jakarta", "ID"]];
const BAIDU = [["bj", "Beijing", "CN"], ["bd", "Baoding", "CN"], ["su", "Suzhou", "CN"], ["gz", "Guangzhou", "CN"], ["fwh", "Wuhan", "CN"], ["hkg", "Hong Kong", "HK"], ["sin", "Singapore", "SG"]];
const NAVER = [["kr", "Chuncheon", "KR"], ["jp", "Tokyo", "JP"], ["sg", "Singapore", "SG"], ["us", "Silicon Valley", "US"], ["de", "Frankfurt", "DE"]];

export const CANDIDATES = [
  ...AWS.map(([c, city, cc]) => r("aws", c, city, cc, c.startsWith("cn-")
    ? [`https://dynamodb.${c}.amazonaws.com.cn/ping`]
    : [`https://dynamodb.${c}.amazonaws.com/ping`, `https://ec2.${c}.amazonaws.com/ping`])),
  ...ORACLE.map(([c, city, cc]) => r("oracle", c, city, cc, [`https://objectstorage.${c}.oraclecloud.com/`])),
  ...VULTR.map(([c, city, cc, ps]) => r("vultr", c, city, cc, ps.map(p => `https://${p}-ping.vultr.com/`))),
  ...ALIYUN.map(([c, city, cc]) => r("aliyun", c, city, cc, [`https://oss-${c}.aliyuncs.com/`])),
  ...TENCENT.map(([c, city, cc]) => r("tencent", c, city, cc, [`https://cos.${c}.myqcloud.com/`])),
  ...HUAWEI.map(([c, city, cc]) => r("huawei", c, city, cc, [`https://obs.${c}.myhuaweicloud.com/`])),
  ...AZURE.map(([c, city, cc]) => r("azure", c, city, cc, [`https://${c}.api.cognitive.microsoft.com/`])),
  // Object Storage cluster names are "<region>-1", except these (found via DNS); fr-par-2 has no cluster of its own
  ...LINODE.map(([c, city, cc, st]) => {
    const cluster = { "in-bom-2": "in-bom-1", "de-fra-2": "de-fra-1", "sg-sin-2": "sg-sin-1", "jp-tyo-3": "jp-tyo-1", "us-iad-2": "us-iad-2", "fr-par-2": null }[c];
    const obj = cluster === null ? [] : [`https://${cluster || c + "-1"}.linodeobjects.com/`];
    return r("linode", c, city, cc, [...obj, ...(st ? [`https://speedtest.${st}.linode.com/`] : [])]);
  }),
  ...DO.map(([c, city, cc]) => r("digitalocean", c, city, cc, [`https://${c}.digitaloceanspaces.com/`, `https://speedtest-${c}.digitalocean.com/`])),
  ...HETZNER.map(([c, city, cc]) => r("hetzner", c, city, cc, [`https://${c}-speed.hetzner.com/`])),
  ...OVH.map(([c, city, cc, us]) => r("ovh", c, city, cc, us)),
  ...GCP.map(([c, city, cc]) => r("gcp", c, city, cc, [`https://storage.${c}.rep.googleapis.com/`])),
  ...IBM.map(([c, city, cc]) => r("ibm", c, city, cc, [`https://s3.${c}.cloud-object-storage.appdomain.cloud/`])),
  ...SCALEWAY.map(([c, city, cc]) => r("scaleway", c, city, cc, [`https://s3.${c}.scw.cloud/`])),
  ...VOLC.map(([c, city, cc]) => r("volcengine", c, city, cc, [`https://tos-${c}.volces.com/`])),
  ...BAIDU.map(([c, city, cc]) => r("baidu", c, city, cc, [`https://${c}.bcebos.com/`])),
  ...NAVER.map(([c, city, cc]) => r("naver", c, city, cc, [`https://${c}.object.ncloudstorage.com/`]))
];
