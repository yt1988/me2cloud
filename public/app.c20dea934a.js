
(function () {
  "use strict";

  /* ENDPOINTS:BEGIN */
  const ENDPOINTS = {"verified":"2026-10-27","vendors":{"aws":{"name":"AWS","method":"GET","cors":true,"tier":"A","kind":"DynamoDB /ping","note":"Body is 'healthy: dynamodb.<region>…', so the page can confirm the region.","regions":37},"oracle":{"name":"Oracle Cloud","method":"HEAD","cors":true,"tier":"A","kind":"Object Storage","note":"GET closes the connection after every 404 (each sample ≈ 3–4 RTT); HEAD reuses it.","regions":54},"vultr":{"name":"Vultr","method":"HEAD","cors":true,"tier":"A","kind":"Looking glass","note":"GET returns a ~12 KB page and adds 50–70 ms; HEAD avoids the body.","regions":33},"azure":{"name":"Microsoft Azure","method":"GET","cors":false,"tier":"B","kind":"Cognitive Services","note":"CNAME chain ends at <region>.cloudapp.azure.com. Very stable samples.","regions":41},"gcp":{"name":"Google Cloud","method":"GET","cors":false,"tier":"B","kind":"Storage regional endpoint (rep)","note":"HEAD adds a fixed ~1 s, never use it. Per-region IPs (34.1.x), not the global anycast front end.","regions":45},"aliyun":{"name":"Alibaba Cloud","method":"HEAD","cors":false,"tier":"B","kind":"OSS","note":"GET 403 closes the connection; HEAD reuses it.","regions":29},"tencent":{"name":"Tencent Cloud","method":"HEAD","cors":false,"tier":"B","kind":"COS","note":"GET 403 closes the connection; HEAD reuses it.","regions":16},"huawei":{"name":"Huawei Cloud","method":"GET","cors":false,"tier":"B","kind":"OBS","note":"GET and HEAD both keep the connection alive.","regions":23},"linode":{"name":"Akamai (Linode)","method":"HEAD","cors":false,"tier":"B","kind":"Object Storage","note":"Legacy speedtest.<dc>.linode.com hosts no longer answer; only regions with an Object Storage cluster are covered.","regions":25},"digitalocean":{"name":"DigitalOcean","method":"GET","cors":false,"tier":"B","kind":"Spaces","note":"speedtest-<dc>.digitalocean.com is gone; NYC1/NYC2 have no Spaces (use nyc3 for New York).","regions":12},"ovh":{"name":"OVHcloud","method":"HEAD","cors":false,"tier":"B","kind":"Speed test (proof)","note":"proof.ovh.net hosts redirect to <site>.speedtest.network.ovh.net; the registry uses the targets.","regions":9},"hetzner":{"name":"Hetzner","method":"IMG","cors":false,"tier":"C","kind":"Speed test","note":"fetch() fails in the browser (cause unclear; curl works); <img> works but opens a new connection each time, so samples ≈ 3 RTT.","regions":6},"ibm":{"name":"IBM Cloud","method":"HEAD","cors":false,"tier":"B","kind":"Cloud Object Storage","note":"GET 403 closes the connection; HEAD reuses it.","regions":10},"scaleway":{"name":"Scaleway","method":"GET","cors":false,"tier":"B","kind":"Object Storage","note":"GET and HEAD both keep the connection alive. Dual-stack hosts.","regions":4},"volcengine":{"name":"Volcengine","method":"HEAD","cors":false,"tier":"B","kind":"TOS","note":"GET 403 closes the connection; HEAD reuses it.","regions":6},"baidu":{"name":"Baidu AI Cloud","method":"HEAD","cors":false,"tier":"B","kind":"BOS","note":"GET 403 closes the connection; HEAD reuses it.","regions":6},"naver":{"name":"Naver Cloud","method":"HEAD","cors":false,"tier":"B","kind":"Object Storage","note":"GET 403 closes the connection; HEAD reuses it.","regions":5}},"endpoints":[{"id":"aws:us-east-1","vendor":"aws","region":"us-east-1","city":"N. Virginia","country":"US","url":"https://dynamodb.us-east-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.us-east-1.api.aws/ping","continent":"na"},{"id":"aws:us-east-2","vendor":"aws","region":"us-east-2","city":"Ohio","country":"US","url":"https://dynamodb.us-east-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.us-east-2.api.aws/ping","continent":"na"},{"id":"aws:us-west-1","vendor":"aws","region":"us-west-1","city":"N. California","country":"US","url":"https://dynamodb.us-west-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.us-west-1.api.aws/ping","continent":"na"},{"id":"aws:us-west-2","vendor":"aws","region":"us-west-2","city":"Oregon","country":"US","url":"https://dynamodb.us-west-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.us-west-2.api.aws/ping","continent":"na"},{"id":"aws:ca-central-1","vendor":"aws","region":"ca-central-1","city":"Montreal","country":"CA","url":"https://dynamodb.ca-central-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ca-central-1.api.aws/ping","continent":"na"},{"id":"aws:ca-west-1","vendor":"aws","region":"ca-west-1","city":"Calgary","country":"CA","url":"https://dynamodb.ca-west-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ca-west-1.api.aws/ping","continent":"na"},{"id":"aws:mx-central-1","vendor":"aws","region":"mx-central-1","city":"Querétaro","country":"MX","url":"https://dynamodb.mx-central-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.mx-central-1.api.aws/ping","continent":"na"},{"id":"aws:sa-east-1","vendor":"aws","region":"sa-east-1","city":"São Paulo","country":"BR","url":"https://dynamodb.sa-east-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.sa-east-1.api.aws/ping","continent":"sa"},{"id":"aws:eu-central-1","vendor":"aws","region":"eu-central-1","city":"Frankfurt","country":"DE","url":"https://dynamodb.eu-central-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-central-1.api.aws/ping","continent":"eu"},{"id":"aws:eu-central-2","vendor":"aws","region":"eu-central-2","city":"Zurich","country":"CH","url":"https://dynamodb.eu-central-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-central-2.api.aws/ping","continent":"eu"},{"id":"aws:eu-west-1","vendor":"aws","region":"eu-west-1","city":"Dublin","country":"IE","url":"https://dynamodb.eu-west-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-west-1.api.aws/ping","continent":"eu"},{"id":"aws:eu-west-2","vendor":"aws","region":"eu-west-2","city":"London","country":"GB","url":"https://dynamodb.eu-west-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-west-2.api.aws/ping","continent":"eu"},{"id":"aws:eu-west-3","vendor":"aws","region":"eu-west-3","city":"Paris","country":"FR","url":"https://dynamodb.eu-west-3.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-west-3.api.aws/ping","continent":"eu"},{"id":"aws:eu-north-1","vendor":"aws","region":"eu-north-1","city":"Stockholm","country":"SE","url":"https://dynamodb.eu-north-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-north-1.api.aws/ping","continent":"eu"},{"id":"aws:eu-south-1","vendor":"aws","region":"eu-south-1","city":"Milan","country":"IT","url":"https://dynamodb.eu-south-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-south-1.api.aws/ping","continent":"eu"},{"id":"aws:eu-south-2","vendor":"aws","region":"eu-south-2","city":"Madrid","country":"ES","url":"https://dynamodb.eu-south-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.eu-south-2.api.aws/ping","continent":"eu"},{"id":"aws:il-central-1","vendor":"aws","region":"il-central-1","city":"Tel Aviv","country":"IL","url":"https://dynamodb.il-central-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.il-central-1.api.aws/ping","continent":"me"},{"id":"aws:me-central-1","vendor":"aws","region":"me-central-1","city":"UAE","country":"AE","url":"https://dynamodb.me-central-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","continent":"me"},{"id":"aws:af-south-1","vendor":"aws","region":"af-south-1","city":"Cape Town","country":"ZA","url":"https://dynamodb.af-south-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.af-south-1.api.aws/ping","continent":"af"},{"id":"aws:ap-east-1","vendor":"aws","region":"ap-east-1","city":"Hong Kong","country":"HK","url":"https://dynamodb.ap-east-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-east-1.api.aws/ping","continent":"as"},{"id":"aws:ap-east-2","vendor":"aws","region":"ap-east-2","city":"Taipei","country":"TW","url":"https://dynamodb.ap-east-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-east-2.api.aws/ping","continent":"as"},{"id":"aws:ap-northeast-1","vendor":"aws","region":"ap-northeast-1","city":"Tokyo","country":"JP","url":"https://dynamodb.ap-northeast-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-northeast-1.api.aws/ping","continent":"as"},{"id":"aws:ap-northeast-2","vendor":"aws","region":"ap-northeast-2","city":"Seoul","country":"KR","url":"https://dynamodb.ap-northeast-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-northeast-2.api.aws/ping","continent":"as"},{"id":"aws:ap-northeast-3","vendor":"aws","region":"ap-northeast-3","city":"Osaka","country":"JP","url":"https://dynamodb.ap-northeast-3.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-northeast-3.api.aws/ping","continent":"as"},{"id":"aws:ap-south-1","vendor":"aws","region":"ap-south-1","city":"Mumbai","country":"IN","url":"https://dynamodb.ap-south-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-south-1.api.aws/ping","continent":"as"},{"id":"aws:ap-south-2","vendor":"aws","region":"ap-south-2","city":"Hyderabad","country":"IN","url":"https://dynamodb.ap-south-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-south-2.api.aws/ping","continent":"as"},{"id":"aws:ap-southeast-1","vendor":"aws","region":"ap-southeast-1","city":"Singapore","country":"SG","url":"https://dynamodb.ap-southeast-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-1.api.aws/ping","continent":"as"},{"id":"aws:ap-southeast-2","vendor":"aws","region":"ap-southeast-2","city":"Sydney","country":"AU","url":"https://dynamodb.ap-southeast-2.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-2.api.aws/ping","continent":"oc"},{"id":"aws:ap-southeast-3","vendor":"aws","region":"ap-southeast-3","city":"Jakarta","country":"ID","url":"https://dynamodb.ap-southeast-3.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-3.api.aws/ping","continent":"as"},{"id":"aws:ap-southeast-4","vendor":"aws","region":"ap-southeast-4","city":"Melbourne","country":"AU","url":"https://dynamodb.ap-southeast-4.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-4.api.aws/ping","continent":"oc"},{"id":"aws:ap-southeast-5","vendor":"aws","region":"ap-southeast-5","city":"Kuala Lumpur","country":"MY","url":"https://dynamodb.ap-southeast-5.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-5.api.aws/ping","continent":"as"},{"id":"aws:ap-southeast-6","vendor":"aws","region":"ap-southeast-6","city":"Auckland","country":"NZ","url":"https://dynamodb.ap-southeast-6.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-6.api.aws/ping","continent":"oc"},{"id":"aws:ap-southeast-7","vendor":"aws","region":"ap-southeast-7","city":"Bangkok","country":"TH","url":"https://dynamodb.ap-southeast-7.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","url6":"https://dynamodb.ap-southeast-7.api.aws/ping","continent":"as"},{"id":"aws:cn-north-1","vendor":"aws","region":"cn-north-1","city":"Beijing","country":"CN","url":"https://dynamodb.cn-north-1.amazonaws.com.cn/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","continent":"as"},{"id":"aws:cn-northwest-1","vendor":"aws","region":"cn-northwest-1","city":"Ningxia","country":"CN","url":"https://dynamodb.cn-northwest-1.amazonaws.com.cn/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","continent":"as"},{"id":"aws:me-west-1","vendor":"aws","region":"me-west-1","city":"?","country":"--","url":"https://dynamodb.me-west-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","review":"Not in AWS's public region list yet, but the endpoint answers.","continent":"xx"},{"id":"aws:sa-west-1","vendor":"aws","region":"sa-west-1","city":"?","country":"--","url":"https://dynamodb.sa-west-1.amazonaws.com/ping","method":"GET","cors":true,"expect":"healthy: dynamodb","tier":"A","fam":"4","review":"Not in AWS's public region list yet, but the endpoint answers.","continent":"xx"},{"id":"oracle:mx-monterrey-1","vendor":"oracle","region":"mx-monterrey-1","city":"Monterrey","country":"MX","url":"https://objectstorage.mx-monterrey-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:ca-toronto-1","vendor":"oracle","region":"ca-toronto-1","city":"Toronto","country":"CA","url":"https://objectstorage.ca-toronto-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:eu-madrid-1","vendor":"oracle","region":"eu-madrid-1","city":"Madrid","country":"ES","url":"https://objectstorage.eu-madrid-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:me-abudhabi-1","vendor":"oracle","region":"me-abudhabi-1","city":"Abu Dhabi","country":"AE","url":"https://objectstorage.me-abudhabi-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"me"},{"id":"oracle:af-casablanca-1","vendor":"oracle","region":"af-casablanca-1","city":"Casablanca","country":"MA","url":"https://objectstorage.af-casablanca-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"af"},{"id":"oracle:ap-seoul-1","vendor":"oracle","region":"ap-seoul-1","city":"Seoul","country":"KR","url":"https://objectstorage.ap-seoul-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:ap-osaka-1","vendor":"oracle","region":"ap-osaka-1","city":"Osaka","country":"JP","url":"https://objectstorage.ap-osaka-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:sa-saopaulo-1","vendor":"oracle","region":"sa-saopaulo-1","city":"São Paulo","country":"BR","url":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"sa"},{"id":"oracle:us-chicago-1","vendor":"oracle","region":"us-chicago-1","city":"Chicago","country":"US","url":"https://objectstorage.us-chicago-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:us-sanjose-1","vendor":"oracle","region":"us-sanjose-1","city":"San Jose","country":"US","url":"https://objectstorage.us-sanjose-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:ap-hyderabad-1","vendor":"oracle","region":"ap-hyderabad-1","city":"Hyderabad","country":"IN","url":"https://objectstorage.ap-hyderabad-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:ca-montreal-1","vendor":"oracle","region":"ca-montreal-1","city":"Montreal","country":"CA","url":"https://objectstorage.ca-montreal-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:me-jeddah-1","vendor":"oracle","region":"me-jeddah-1","city":"Jeddah","country":"SA","url":"https://objectstorage.me-jeddah-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"me"},{"id":"oracle:eu-stockholm-1","vendor":"oracle","region":"eu-stockholm-1","city":"Stockholm","country":"SE","url":"https://objectstorage.eu-stockholm-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:eu-marseille-1","vendor":"oracle","region":"eu-marseille-1","city":"Marseille","country":"FR","url":"https://objectstorage.eu-marseille-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:eu-milan-1","vendor":"oracle","region":"eu-milan-1","city":"Milan","country":"IT","url":"https://objectstorage.eu-milan-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:uk-london-1","vendor":"oracle","region":"uk-london-1","city":"London","country":"GB","url":"https://objectstorage.uk-london-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:eu-frankfurt-1","vendor":"oracle","region":"eu-frankfurt-1","city":"Frankfurt","country":"DE","url":"https://objectstorage.eu-frankfurt-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:eu-madrid-3","vendor":"oracle","region":"eu-madrid-3","city":"Madrid","country":"ES","url":"https://objectstorage.eu-madrid-3.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"eu"},{"id":"oracle:ap-mumbai-1","vendor":"oracle","region":"ap-mumbai-1","city":"Mumbai","country":"IN","url":"https://objectstorage.ap-mumbai-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:il-jerusalem-1","vendor":"oracle","region":"il-jerusalem-1","city":"Jerusalem","country":"IL","url":"https://objectstorage.il-jerusalem-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"me"},{"id":"oracle:me-riyadh-1","vendor":"oracle","region":"me-riyadh-1","city":"Riyadh","country":"SA","url":"https://objectstorage.me-riyadh-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"me"},{"id":"oracle:af-johannesburg-1","vendor":"oracle","region":"af-johannesburg-1","city":"Johannesburg","country":"ZA","url":"https://objectstorage.af-johannesburg-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"af"},{"id":"oracle:eu-amsterdam-1","vendor":"oracle","region":"eu-amsterdam-1","city":"Amsterdam","country":"NL","url":"https://objectstorage.eu-amsterdam-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:me-dubai-1","vendor":"oracle","region":"me-dubai-1","city":"Dubai","country":"AE","url":"https://objectstorage.me-dubai-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"me"},{"id":"oracle:uk-cardiff-1","vendor":"oracle","region":"uk-cardiff-1","city":"Cardiff","country":"GB","url":"https://objectstorage.uk-cardiff-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:eu-paris-1","vendor":"oracle","region":"eu-paris-1","city":"Paris","country":"FR","url":"https://objectstorage.eu-paris-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:us-ashburn-1","vendor":"oracle","region":"us-ashburn-1","city":"Ashburn","country":"US","url":"https://objectstorage.us-ashburn-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:ap-sydney-1","vendor":"oracle","region":"ap-sydney-1","city":"Sydney","country":"AU","url":"https://objectstorage.ap-sydney-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"oc"},{"id":"oracle:us-phoenix-1","vendor":"oracle","region":"us-phoenix-1","city":"Phoenix","country":"US","url":"https://objectstorage.us-phoenix-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:ap-singapore-1","vendor":"oracle","region":"ap-singapore-1","city":"Singapore","country":"SG","url":"https://objectstorage.ap-singapore-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:ap-chuncheon-1","vendor":"oracle","region":"ap-chuncheon-1","city":"Chuncheon","country":"KR","url":"https://objectstorage.ap-chuncheon-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:ap-batam-1","vendor":"oracle","region":"ap-batam-1","city":"Batam","country":"ID","url":"https://objectstorage.ap-batam-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"as"},{"id":"oracle:ap-melbourne-1","vendor":"oracle","region":"ap-melbourne-1","city":"Melbourne","country":"AU","url":"https://objectstorage.ap-melbourne-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"oc"},{"id":"oracle:ap-tokyo-1","vendor":"oracle","region":"ap-tokyo-1","city":"Tokyo","country":"JP","url":"https://objectstorage.ap-tokyo-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:eu-zurich-1","vendor":"oracle","region":"eu-zurich-1","city":"Zurich","country":"CH","url":"https://objectstorage.eu-zurich-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"oracle:sa-vinhedo-1","vendor":"oracle","region":"sa-vinhedo-1","city":"Vinhedo","country":"BR","url":"https://objectstorage.sa-vinhedo-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"sa"},{"id":"oracle:eu-dublin-3","vendor":"oracle","region":"eu-dublin-3","city":"Dublin","country":"IE","url":"https://objectstorage.eu-dublin-3.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"eu"},{"id":"oracle:us-dallas-1","vendor":"oracle","region":"us-dallas-1","city":"Dallas","country":"US","url":"https://objectstorage.us-dallas-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:mx-queretaro-1","vendor":"oracle","region":"mx-queretaro-1","city":"Querétaro","country":"MX","url":"https://objectstorage.mx-queretaro-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"oracle:ap-singapore-2","vendor":"oracle","region":"ap-singapore-2","city":"Singapore","country":"SG","url":"https://objectstorage.ap-singapore-2.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:sa-valparaiso-1","vendor":"oracle","region":"sa-valparaiso-1","city":"Valparaiso","country":"CL","url":"https://objectstorage.sa-valparaiso-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"sa"},{"id":"oracle:us-sanantonio-1","vendor":"oracle","region":"us-sanantonio-1","city":"San Antonio","country":"US","url":"https://objectstorage.us-sanantonio-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:sa-bogota-1","vendor":"oracle","region":"sa-bogota-1","city":"Bogota","country":"CO","url":"https://objectstorage.sa-bogota-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"sa"},{"id":"oracle:us-saltlake-2","vendor":"oracle","region":"us-saltlake-2","city":"Salt Lake City","country":"US","url":"https://objectstorage.us-saltlake-2.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:us-lenexa-1","vendor":"oracle","region":"us-lenexa-1","city":"Lenexa","country":"US","url":"https://objectstorage.us-lenexa-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:ap-delhi-1","vendor":"oracle","region":"ap-delhi-1","city":"Delhi","country":"IN","url":"https://objectstorage.ap-delhi-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"oracle:us-desmoines-1","vendor":"oracle","region":"us-desmoines-1","city":"Des Moines","country":"US","url":"https://objectstorage.us-desmoines-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:us-abilene-1","vendor":"oracle","region":"us-abilene-1","city":"Abilene","country":"US","url":"https://objectstorage.us-abilene-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:ap-kulai-1","vendor":"oracle","region":"ap-kulai-1","city":"Kulai","country":"MY","url":"https://objectstorage.ap-kulai-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"as"},{"id":"oracle:us-shawnee-1","vendor":"oracle","region":"us-shawnee-1","city":"Shawnee","country":"US","url":"https://objectstorage.us-shawnee-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:us-boardman-1","vendor":"oracle","region":"us-boardman-1","city":"Boardman","country":"US","url":"https://objectstorage.us-boardman-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:us-quincy-1","vendor":"oracle","region":"us-quincy-1","city":"Quincy","country":"US","url":"https://objectstorage.us-quincy-1.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"na"},{"id":"oracle:sa-riodejaneiro-2","vendor":"oracle","region":"sa-riodejaneiro-2","city":"Rio de Janeiro","country":"BR","url":"https://objectstorage.sa-riodejaneiro-2.oraclecloud.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","review":"May be a dedicated region; confirm it is publicly orderable.","continent":"sa"},{"id":"vultr:ams","vendor":"vultr","region":"ams","city":"Amsterdam","country":"NL","url":"https://ams-nl-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:atl","vendor":"vultr","region":"atl","city":"Atlanta","country":"US","url":"https://ga-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:blr","vendor":"vultr","region":"blr","city":"Bangalore","country":"IN","url":"https://blr-in-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:bom","vendor":"vultr","region":"bom","city":"Mumbai","country":"IN","url":"https://bom-in-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:cdg","vendor":"vultr","region":"cdg","city":"Paris","country":"FR","url":"https://par-fr-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:del","vendor":"vultr","region":"del","city":"Delhi NCR","country":"IN","url":"https://del-in-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:dfw","vendor":"vultr","region":"dfw","city":"Dallas","country":"US","url":"https://tx-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:ewr","vendor":"vultr","region":"ewr","city":"New Jersey","country":"US","url":"https://nj-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:fra","vendor":"vultr","region":"fra","city":"Frankfurt","country":"DE","url":"https://fra-de-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:hnl","vendor":"vultr","region":"hnl","city":"Honolulu","country":"US","url":"https://hon-hi-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:icn","vendor":"vultr","region":"icn","city":"Seoul","country":"KR","url":"https://sel-kor-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:itm","vendor":"vultr","region":"itm","city":"Osaka","country":"JP","url":"https://osk-jp-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:jnb","vendor":"vultr","region":"jnb","city":"Johannesburg","country":"ZA","url":"https://jnb-za-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"af"},{"id":"vultr:lax","vendor":"vultr","region":"lax","city":"Los Angeles","country":"US","url":"https://lax-ca-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:lhr","vendor":"vultr","region":"lhr","city":"London","country":"GB","url":"https://lon-gb-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:mad","vendor":"vultr","region":"mad","city":"Madrid","country":"ES","url":"https://mad-es-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:man","vendor":"vultr","region":"man","city":"Manchester","country":"GB","url":"https://man-uk-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:mel","vendor":"vultr","region":"mel","city":"Melbourne","country":"AU","url":"https://mel-au-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"oc"},{"id":"vultr:mex","vendor":"vultr","region":"mex","city":"Mexico City","country":"MX","url":"https://mex-mx-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:mia","vendor":"vultr","region":"mia","city":"Miami","country":"US","url":"https://fl-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:mxp","vendor":"vultr","region":"mxp","city":"Milan","country":"IT","url":"https://mxp-it-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:nrt","vendor":"vultr","region":"nrt","city":"Tokyo","country":"JP","url":"https://hnd-jp-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:ord","vendor":"vultr","region":"ord","city":"Chicago","country":"US","url":"https://il-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:sao","vendor":"vultr","region":"sao","city":"São Paulo","country":"BR","url":"https://sao-br-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"46","continent":"sa"},{"id":"vultr:scl","vendor":"vultr","region":"scl","city":"Santiago","country":"CL","url":"https://scl-cl-ping.vultr.com/","method":"HEAD","fallback":"IMG","cors":true,"tier":"A","fam":"4","continent":"sa"},{"id":"vultr:sea","vendor":"vultr","region":"sea","city":"Seattle","country":"US","url":"https://wa-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:sgp","vendor":"vultr","region":"sgp","city":"Singapore","country":"SG","url":"https://sgp-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"as"},{"id":"vultr:sjc","vendor":"vultr","region":"sjc","city":"Silicon Valley","country":"US","url":"https://sjo-ca-us-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"vultr:sto","vendor":"vultr","region":"sto","city":"Stockholm","country":"SE","url":"https://sto-se-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"eu"},{"id":"vultr:syd","vendor":"vultr","region":"syd","city":"Sydney","country":"AU","url":"https://syd-au-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"oc"},{"id":"vultr:tlv","vendor":"vultr","region":"tlv","city":"Tel Aviv","country":"IL","url":"https://tlv-il-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"me"},{"id":"vultr:waw","vendor":"vultr","region":"waw","city":"Warsaw","country":"PL","url":"https://waw-pl-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"46","continent":"eu"},{"id":"vultr:yto","vendor":"vultr","region":"yto","city":"Toronto","country":"CA","url":"https://tor-ca-ping.vultr.com/","method":"HEAD","cors":true,"tier":"A","fam":"4","continent":"na"},{"id":"aliyun:cn-hangzhou","vendor":"aliyun","region":"cn-hangzhou","city":"Hangzhou","country":"CN","url":"https://oss-cn-hangzhou.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-hangzhou.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-shanghai","vendor":"aliyun","region":"cn-shanghai","city":"Shanghai","country":"CN","url":"https://oss-cn-shanghai.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-shanghai.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-nanjing","vendor":"aliyun","region":"cn-nanjing","city":"Nanjing","country":"CN","url":"https://oss-cn-nanjing.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:cn-fuzhou","vendor":"aliyun","region":"cn-fuzhou","city":"Fuzhou","country":"CN","url":"https://oss-cn-fuzhou.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:cn-wuhan-lr","vendor":"aliyun","region":"cn-wuhan-lr","city":"Wuhan","country":"CN","url":"https://oss-cn-wuhan-lr.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:cn-qingdao","vendor":"aliyun","region":"cn-qingdao","city":"Qingdao","country":"CN","url":"https://oss-cn-qingdao.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-qingdao.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-beijing","vendor":"aliyun","region":"cn-beijing","city":"Beijing","country":"CN","url":"https://oss-cn-beijing.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-beijing.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-zhangjiakou","vendor":"aliyun","region":"cn-zhangjiakou","city":"Zhangjiakou","country":"CN","url":"https://oss-cn-zhangjiakou.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-zhangjiakou.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-huhehaote","vendor":"aliyun","region":"cn-huhehaote","city":"Hohhot","country":"CN","url":"https://oss-cn-huhehaote.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-huhehaote.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-wulanchabu","vendor":"aliyun","region":"cn-wulanchabu","city":"Ulanqab","country":"CN","url":"https://oss-cn-wulanchabu.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-wulanchabu.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-shenzhen","vendor":"aliyun","region":"cn-shenzhen","city":"Shenzhen","country":"CN","url":"https://oss-cn-shenzhen.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-shenzhen.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-heyuan","vendor":"aliyun","region":"cn-heyuan","city":"Heyuan","country":"CN","url":"https://oss-cn-heyuan.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-heyuan.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-guangzhou","vendor":"aliyun","region":"cn-guangzhou","city":"Guangzhou","country":"CN","url":"https://oss-cn-guangzhou.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-guangzhou.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-chengdu","vendor":"aliyun","region":"cn-chengdu","city":"Chengdu","country":"CN","url":"https://oss-cn-chengdu.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-chengdu.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:cn-hongkong","vendor":"aliyun","region":"cn-hongkong","city":"Hong Kong","country":"HK","url":"https://oss-cn-hongkong.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://cn-hongkong.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:ap-northeast-1","vendor":"aliyun","region":"ap-northeast-1","city":"Tokyo","country":"JP","url":"https://oss-ap-northeast-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:ap-northeast-2","vendor":"aliyun","region":"ap-northeast-2","city":"Seoul","country":"KR","url":"https://oss-ap-northeast-2.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:ap-southeast-1","vendor":"aliyun","region":"ap-southeast-1","city":"Singapore","country":"SG","url":"https://oss-ap-southeast-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://ap-southeast-1.oss.aliyuncs.com/","continent":"as"},{"id":"aliyun:ap-southeast-3","vendor":"aliyun","region":"ap-southeast-3","city":"Kuala Lumpur","country":"MY","url":"https://oss-ap-southeast-3.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:ap-southeast-5","vendor":"aliyun","region":"ap-southeast-5","city":"Jakarta","country":"ID","url":"https://oss-ap-southeast-5.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:ap-southeast-6","vendor":"aliyun","region":"ap-southeast-6","city":"Manila","country":"PH","url":"https://oss-ap-southeast-6.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:ap-southeast-7","vendor":"aliyun","region":"ap-southeast-7","city":"Bangkok","country":"TH","url":"https://oss-ap-southeast-7.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"aliyun:eu-central-1","vendor":"aliyun","region":"eu-central-1","city":"Frankfurt","country":"DE","url":"https://oss-eu-central-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://eu-central-1.oss.aliyuncs.com/","continent":"eu"},{"id":"aliyun:eu-west-1","vendor":"aliyun","region":"eu-west-1","city":"London","country":"GB","url":"https://oss-eu-west-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"eu"},{"id":"aliyun:us-west-1","vendor":"aliyun","region":"us-west-1","city":"Silicon Valley","country":"US","url":"https://oss-us-west-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://us-west-1.oss.aliyuncs.com/","continent":"na"},{"id":"aliyun:us-east-1","vendor":"aliyun","region":"us-east-1","city":"Virginia","country":"US","url":"https://oss-us-east-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","url6":"https://us-east-1.oss.aliyuncs.com/","continent":"na"},{"id":"aliyun:na-south-1","vendor":"aliyun","region":"na-south-1","city":"Mexico City","country":"MX","url":"https://oss-na-south-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"aliyun:me-east-1","vendor":"aliyun","region":"me-east-1","city":"Dubai","country":"AE","url":"https://oss-me-east-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"me"},{"id":"aliyun:me-central-1","vendor":"aliyun","region":"me-central-1","city":"Riyadh","country":"SA","url":"https://oss-me-central-1.aliyuncs.com/","method":"HEAD","tier":"B","fam":"4","continent":"me"},{"id":"tencent:ap-beijing","vendor":"tencent","region":"ap-beijing","city":"Beijing","country":"CN","url":"https://cos.ap-beijing.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-nanjing","vendor":"tencent","region":"ap-nanjing","city":"Nanjing","country":"CN","url":"https://cos.ap-nanjing.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-shanghai","vendor":"tencent","region":"ap-shanghai","city":"Shanghai","country":"CN","url":"https://cos.ap-shanghai.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-guangzhou","vendor":"tencent","region":"ap-guangzhou","city":"Guangzhou","country":"CN","url":"https://cos.ap-guangzhou.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-chengdu","vendor":"tencent","region":"ap-chengdu","city":"Chengdu","country":"CN","url":"https://cos.ap-chengdu.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-chongqing","vendor":"tencent","region":"ap-chongqing","city":"Chongqing","country":"CN","url":"https://cos.ap-chongqing.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-hongkong","vendor":"tencent","region":"ap-hongkong","city":"Hong Kong","country":"HK","url":"https://cos.ap-hongkong.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-singapore","vendor":"tencent","region":"ap-singapore","city":"Singapore","country":"SG","url":"https://cos.ap-singapore.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-jakarta","vendor":"tencent","region":"ap-jakarta","city":"Jakarta","country":"ID","url":"https://cos.ap-jakarta.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-seoul","vendor":"tencent","region":"ap-seoul","city":"Seoul","country":"KR","url":"https://cos.ap-seoul.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-bangkok","vendor":"tencent","region":"ap-bangkok","city":"Bangkok","country":"TH","url":"https://cos.ap-bangkok.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:ap-tokyo","vendor":"tencent","region":"ap-tokyo","city":"Tokyo","country":"JP","url":"https://cos.ap-tokyo.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"tencent:na-siliconvalley","vendor":"tencent","region":"na-siliconvalley","city":"Silicon Valley","country":"US","url":"https://cos.na-siliconvalley.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"tencent:na-ashburn","vendor":"tencent","region":"na-ashburn","city":"Virginia","country":"US","url":"https://cos.na-ashburn.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"tencent:sa-saopaulo","vendor":"tencent","region":"sa-saopaulo","city":"São Paulo","country":"BR","url":"https://cos.sa-saopaulo.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"sa"},{"id":"tencent:eu-frankfurt","vendor":"tencent","region":"eu-frankfurt","city":"Frankfurt","country":"DE","url":"https://cos.eu-frankfurt.myqcloud.com/","method":"HEAD","tier":"B","fam":"4","continent":"eu"},{"id":"huawei:cn-north-1","vendor":"huawei","region":"cn-north-1","city":"Beijing 1","country":"CN","url":"https://obs.cn-north-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-north-4","vendor":"huawei","region":"cn-north-4","city":"Beijing 4","country":"CN","url":"https://obs.cn-north-4.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-north-9","vendor":"huawei","region":"cn-north-9","city":"Ulanqab","country":"CN","url":"https://obs.cn-north-9.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-east-2","vendor":"huawei","region":"cn-east-2","city":"Shanghai 2","country":"CN","url":"https://obs.cn-east-2.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-east-3","vendor":"huawei","region":"cn-east-3","city":"Shanghai 1","country":"CN","url":"https://obs.cn-east-3.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-east-5","vendor":"huawei","region":"cn-east-5","city":"Qingdao","country":"CN","url":"https://obs.cn-east-5.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-south-1","vendor":"huawei","region":"cn-south-1","city":"Guangzhou","country":"CN","url":"https://obs.cn-south-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-south-4","vendor":"huawei","region":"cn-south-4","city":"Guangzhou-Friendly","country":"CN","url":"https://obs.cn-south-4.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:cn-southwest-2","vendor":"huawei","region":"cn-southwest-2","city":"Guiyang","country":"CN","url":"https://obs.cn-southwest-2.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:ap-southeast-1","vendor":"huawei","region":"ap-southeast-1","city":"Hong Kong","country":"HK","url":"https://obs.ap-southeast-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:ap-southeast-2","vendor":"huawei","region":"ap-southeast-2","city":"Bangkok","country":"TH","url":"https://obs.ap-southeast-2.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:ap-southeast-3","vendor":"huawei","region":"ap-southeast-3","city":"Singapore","country":"SG","url":"https://obs.ap-southeast-3.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:ap-southeast-4","vendor":"huawei","region":"ap-southeast-4","city":"Jakarta","country":"ID","url":"https://obs.ap-southeast-4.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:ap-southeast-5","vendor":"huawei","region":"ap-southeast-5","city":"Manila","country":"PH","url":"https://obs.ap-southeast-5.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"huawei:my-kualalumpur-1","vendor":"huawei","region":"my-kualalumpur-1","city":"Kuala Lumpur","country":"MY","url":"https://obs.my-kualalumpur-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","review":"Returns a 404 HTML page instead of the usual OBS XML.","continent":"as"},{"id":"huawei:af-south-1","vendor":"huawei","region":"af-south-1","city":"Johannesburg","country":"ZA","url":"https://obs.af-south-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"af"},{"id":"huawei:af-north-1","vendor":"huawei","region":"af-north-1","city":"Cairo","country":"EG","url":"https://obs.af-north-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"af"},{"id":"huawei:la-north-2","vendor":"huawei","region":"la-north-2","city":"Mexico City 2","country":"MX","url":"https://obs.la-north-2.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"huawei:na-mexico-1","vendor":"huawei","region":"na-mexico-1","city":"Mexico City 1","country":"MX","url":"https://obs.na-mexico-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"huawei:la-south-2","vendor":"huawei","region":"la-south-2","city":"Santiago","country":"CL","url":"https://obs.la-south-2.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"sa"},{"id":"huawei:sa-brazil-1","vendor":"huawei","region":"sa-brazil-1","city":"São Paulo","country":"BR","url":"https://obs.sa-brazil-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"sa"},{"id":"huawei:tr-west-1","vendor":"huawei","region":"tr-west-1","city":"Istanbul","country":"TR","url":"https://obs.tr-west-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"me"},{"id":"huawei:me-east-1","vendor":"huawei","region":"me-east-1","city":"Riyadh","country":"SA","url":"https://obs.me-east-1.myhuaweicloud.com/","method":"GET","tier":"B","fam":"4","continent":"me"},{"id":"azure:eastus","vendor":"azure","region":"eastus","city":"Virginia","country":"US","url":"https://eastus.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:eastus2","vendor":"azure","region":"eastus2","city":"Virginia","country":"US","url":"https://eastus2.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:centralus","vendor":"azure","region":"centralus","city":"Iowa","country":"US","url":"https://centralus.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:northcentralus","vendor":"azure","region":"northcentralus","city":"Illinois","country":"US","url":"https://northcentralus.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:southcentralus","vendor":"azure","region":"southcentralus","city":"Texas","country":"US","url":"https://southcentralus.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:westcentralus","vendor":"azure","region":"westcentralus","city":"Wyoming","country":"US","url":"https://westcentralus.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:westus","vendor":"azure","region":"westus","city":"California","country":"US","url":"https://westus.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:westus2","vendor":"azure","region":"westus2","city":"Washington","country":"US","url":"https://westus2.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:westus3","vendor":"azure","region":"westus3","city":"Arizona","country":"US","url":"https://westus3.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:canadacentral","vendor":"azure","region":"canadacentral","city":"Toronto","country":"CA","url":"https://canadacentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:canadaeast","vendor":"azure","region":"canadaeast","city":"Quebec City","country":"CA","url":"https://canadaeast.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"azure:brazilsouth","vendor":"azure","region":"brazilsouth","city":"São Paulo","country":"BR","url":"https://brazilsouth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"sa"},{"id":"azure:northeurope","vendor":"azure","region":"northeurope","city":"Dublin","country":"IE","url":"https://northeurope.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:westeurope","vendor":"azure","region":"westeurope","city":"Amsterdam","country":"NL","url":"https://westeurope.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:uksouth","vendor":"azure","region":"uksouth","city":"London","country":"GB","url":"https://uksouth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:ukwest","vendor":"azure","region":"ukwest","city":"Cardiff","country":"GB","url":"https://ukwest.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:francecentral","vendor":"azure","region":"francecentral","city":"Paris","country":"FR","url":"https://francecentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:germanywestcentral","vendor":"azure","region":"germanywestcentral","city":"Frankfurt","country":"DE","url":"https://germanywestcentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:switzerlandnorth","vendor":"azure","region":"switzerlandnorth","city":"Zurich","country":"CH","url":"https://switzerlandnorth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:switzerlandwest","vendor":"azure","region":"switzerlandwest","city":"Geneva","country":"CH","url":"https://switzerlandwest.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:norwayeast","vendor":"azure","region":"norwayeast","city":"Oslo","country":"NO","url":"https://norwayeast.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:swedencentral","vendor":"azure","region":"swedencentral","city":"Gävle","country":"SE","url":"https://swedencentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:polandcentral","vendor":"azure","region":"polandcentral","city":"Warsaw","country":"PL","url":"https://polandcentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:italynorth","vendor":"azure","region":"italynorth","city":"Milan","country":"IT","url":"https://italynorth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:spaincentral","vendor":"azure","region":"spaincentral","city":"Madrid","country":"ES","url":"https://spaincentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"azure:eastasia","vendor":"azure","region":"eastasia","city":"Hong Kong","country":"HK","url":"https://eastasia.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:southeastasia","vendor":"azure","region":"southeastasia","city":"Singapore","country":"SG","url":"https://southeastasia.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:japaneast","vendor":"azure","region":"japaneast","city":"Tokyo","country":"JP","url":"https://japaneast.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:japanwest","vendor":"azure","region":"japanwest","city":"Osaka","country":"JP","url":"https://japanwest.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:koreacentral","vendor":"azure","region":"koreacentral","city":"Seoul","country":"KR","url":"https://koreacentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:australiaeast","vendor":"azure","region":"australiaeast","city":"Sydney","country":"AU","url":"https://australiaeast.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"oc"},{"id":"azure:newzealandnorth","vendor":"azure","region":"newzealandnorth","city":"Auckland","country":"NZ","url":"https://newzealandnorth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"oc"},{"id":"azure:centralindia","vendor":"azure","region":"centralindia","city":"Pune","country":"IN","url":"https://centralindia.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:southindia","vendor":"azure","region":"southindia","city":"Chennai","country":"IN","url":"https://southindia.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:jioindiawest","vendor":"azure","region":"jioindiawest","city":"Jamnagar","country":"IN","url":"https://jioindiawest.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:jioindiacentral","vendor":"azure","region":"jioindiacentral","city":"Nagpur","country":"IN","url":"https://jioindiacentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:indonesiacentral","vendor":"azure","region":"indonesiacentral","city":"Jakarta","country":"ID","url":"https://indonesiacentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:malaysiawest","vendor":"azure","region":"malaysiawest","city":"Kuala Lumpur","country":"MY","url":"https://malaysiawest.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"azure:uaenorth","vendor":"azure","region":"uaenorth","city":"Dubai","country":"AE","url":"https://uaenorth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"me"},{"id":"azure:qatarcentral","vendor":"azure","region":"qatarcentral","city":"Doha","country":"QA","url":"https://qatarcentral.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"me"},{"id":"azure:southafricanorth","vendor":"azure","region":"southafricanorth","city":"Johannesburg","country":"ZA","url":"https://southafricanorth.api.cognitive.microsoft.com/","method":"GET","tier":"B","fam":"4","continent":"af"},{"id":"linode:us-east","vendor":"linode","region":"us-east","city":"Newark","country":"US","url":"https://us-east-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"linode:us-southeast","vendor":"linode","region":"us-southeast","city":"Atlanta","country":"US","url":"https://us-southeast-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"linode:eu-central","vendor":"linode","region":"eu-central","city":"Frankfurt","country":"DE","url":"https://eu-central-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:ap-south","vendor":"linode","region":"ap-south","city":"Singapore","country":"SG","url":"https://ap-south-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"as"},{"id":"linode:gb-lon","vendor":"linode","region":"gb-lon","city":"London 2","country":"GB","url":"https://gb-lon-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:se-sto","vendor":"linode","region":"se-sto","city":"Stockholm","country":"SE","url":"https://se-sto-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:es-mad","vendor":"linode","region":"es-mad","city":"Madrid","country":"ES","url":"https://es-mad-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:in-maa","vendor":"linode","region":"in-maa","city":"Chennai","country":"IN","url":"https://in-maa-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"as"},{"id":"linode:jp-osa","vendor":"linode","region":"jp-osa","city":"Osaka","country":"JP","url":"https://jp-osa-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"as"},{"id":"linode:it-mil","vendor":"linode","region":"it-mil","city":"Milan","country":"IT","url":"https://it-mil-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:us-mia","vendor":"linode","region":"us-mia","city":"Miami","country":"US","url":"https://us-mia-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"linode:id-cgk","vendor":"linode","region":"id-cgk","city":"Jakarta","country":"ID","url":"https://id-cgk-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"as"},{"id":"linode:us-lax","vendor":"linode","region":"us-lax","city":"Los Angeles","country":"US","url":"https://us-lax-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"linode:nl-ams","vendor":"linode","region":"nl-ams","city":"Amsterdam","country":"NL","url":"https://nl-ams-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:au-mel","vendor":"linode","region":"au-mel","city":"Melbourne","country":"AU","url":"https://au-mel-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"oc"},{"id":"linode:in-bom-2","vendor":"linode","region":"in-bom-2","city":"Mumbai 2","country":"IN","url":"https://in-bom-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","review":"Served by cluster in-bom-1.","continent":"as"},{"id":"linode:de-fra-2","vendor":"linode","region":"de-fra-2","city":"Frankfurt 2","country":"DE","url":"https://de-fra-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","review":"Served by cluster de-fra-1.","continent":"eu"},{"id":"linode:sg-sin-2","vendor":"linode","region":"sg-sin-2","city":"Singapore 2","country":"SG","url":"https://sg-sin-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","review":"Served by cluster sg-sin-1.","continent":"as"},{"id":"linode:jp-tyo-3","vendor":"linode","region":"jp-tyo-3","city":"Tokyo 3","country":"JP","url":"https://jp-tyo-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","review":"Served by cluster jp-tyo-1.","continent":"as"},{"id":"linode:us-iad-2","vendor":"linode","region":"us-iad-2","city":"Washington 2","country":"US","url":"https://us-iad-2.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","review":"Cluster us-iad-2 assumed to belong to Washington 2.","continent":"na"},{"id":"linode:br-gru","vendor":"linode","region":"br-gru","city":"São Paulo","country":"BR","url":"https://br-gru-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"sa"},{"id":"linode:us-sea","vendor":"linode","region":"us-sea","city":"Seattle","country":"US","url":"https://us-sea-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"linode:fr-par","vendor":"linode","region":"fr-par","city":"Paris","country":"FR","url":"https://fr-par-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"linode:us-ord","vendor":"linode","region":"us-ord","city":"Chicago","country":"US","url":"https://us-ord-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"linode:us-iad","vendor":"linode","region":"us-iad","city":"Washington","country":"US","url":"https://us-iad-1.linodeobjects.com/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"digitalocean:nyc3","vendor":"digitalocean","region":"nyc3","city":"New York","country":"US","url":"https://nyc3.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"digitalocean:sfo2","vendor":"digitalocean","region":"sfo2","city":"San Francisco","country":"US","url":"https://sfo2.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"digitalocean:sfo3","vendor":"digitalocean","region":"sfo3","city":"San Francisco","country":"US","url":"https://sfo3.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"digitalocean:ams3","vendor":"digitalocean","region":"ams3","city":"Amsterdam","country":"NL","url":"https://ams3.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"digitalocean:sgp1","vendor":"digitalocean","region":"sgp1","city":"Singapore","country":"SG","url":"https://sgp1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"digitalocean:lon1","vendor":"digitalocean","region":"lon1","city":"London","country":"GB","url":"https://lon1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"digitalocean:fra1","vendor":"digitalocean","region":"fra1","city":"Frankfurt","country":"DE","url":"https://fra1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"eu"},{"id":"digitalocean:tor1","vendor":"digitalocean","region":"tor1","city":"Toronto","country":"CA","url":"https://tor1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"digitalocean:blr1","vendor":"digitalocean","region":"blr1","city":"Bangalore","country":"IN","url":"https://blr1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"as"},{"id":"digitalocean:syd1","vendor":"digitalocean","region":"syd1","city":"Sydney","country":"AU","url":"https://syd1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"oc"},{"id":"digitalocean:atl1","vendor":"digitalocean","region":"atl1","city":"Atlanta","country":"US","url":"https://atl1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"digitalocean:ric1","vendor":"digitalocean","region":"ric1","city":"Richmond","country":"US","url":"https://ric1.digitaloceanspaces.com/","method":"GET","tier":"B","fam":"4","continent":"na"},{"id":"hetzner:fsn1","vendor":"hetzner","region":"fsn1","city":"Falkenstein","country":"DE","url":"https://fsn1-speed.hetzner.com/","method":"IMG","tier":"C","fam":"46","continent":"eu"},{"id":"hetzner:nbg1","vendor":"hetzner","region":"nbg1","city":"Nuremberg","country":"DE","url":"https://nbg1-speed.hetzner.com/","method":"IMG","tier":"C","fam":"46","continent":"eu"},{"id":"hetzner:hel1","vendor":"hetzner","region":"hel1","city":"Helsinki","country":"FI","url":"https://hel1-speed.hetzner.com/","method":"IMG","tier":"C","fam":"46","continent":"eu"},{"id":"hetzner:ash","vendor":"hetzner","region":"ash","city":"Ashburn","country":"US","url":"https://ash-speed.hetzner.com/","method":"IMG","tier":"C","fam":"46","continent":"na"},{"id":"hetzner:hil","vendor":"hetzner","region":"hil","city":"Hillsboro","country":"US","url":"https://hil-speed.hetzner.com/","method":"IMG","tier":"C","fam":"46","continent":"na"},{"id":"hetzner:sin","vendor":"hetzner","region":"sin","city":"Singapore","country":"SG","url":"https://sin-speed.hetzner.com/","method":"IMG","tier":"C","fam":"46","continent":"as"},{"id":"ovh:gra","vendor":"ovh","region":"gra","city":"Gravelines","country":"FR","url":"https://proof.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"ovh:rbx","vendor":"ovh","region":"rbx","city":"Roubaix","country":"FR","url":"https://lil1-rbx.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"ovh:sbg","vendor":"ovh","region":"sbg","city":"Strasbourg","country":"FR","url":"https://sxb1-sbg.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"ovh:eri","vendor":"ovh","region":"eri","city":"London","country":"GB","url":"https://lon1-eri.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"eu"},{"id":"ovh:bhs","vendor":"ovh","region":"bhs","city":"Beauharnois","country":"CA","url":"https://ymq1-bhs.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"ovh:vin","vendor":"ovh","region":"vin","city":"Vint Hill","country":"US","url":"https://was1-vin.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"ovh:hil","vendor":"ovh","region":"hil","city":"Hillsboro","country":"US","url":"https://pdx1-hil.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"na"},{"id":"ovh:sgp","vendor":"ovh","region":"sgp","city":"Singapore","country":"SG","url":"https://sin1-sgp.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"as"},{"id":"ovh:syd","vendor":"ovh","region":"syd","city":"Sydney","country":"AU","url":"https://syd1-sy2.speedtest.network.ovh.net/files/","method":"HEAD","tier":"B","fam":"46","continent":"oc"},{"id":"gcp:us-central1","vendor":"gcp","region":"us-central1","city":"Iowa","country":"US","url":"https://storage.us-central1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-central2","vendor":"gcp","region":"us-central2","city":"Oklahoma","country":"US","url":"https://storage.us-central2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-east1","vendor":"gcp","region":"us-east1","city":"South Carolina","country":"US","url":"https://storage.us-east1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-east4","vendor":"gcp","region":"us-east4","city":"Virginia","country":"US","url":"https://storage.us-east4.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-east5","vendor":"gcp","region":"us-east5","city":"Columbus","country":"US","url":"https://storage.us-east5.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-east7","vendor":"gcp","region":"us-east7","city":"Alabama","country":"US","url":"https://storage.us-east7.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"46","continent":"na"},{"id":"gcp:us-south1","vendor":"gcp","region":"us-south1","city":"Dallas","country":"US","url":"https://storage.us-south1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-west1","vendor":"gcp","region":"us-west1","city":"Oregon","country":"US","url":"https://storage.us-west1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-west2","vendor":"gcp","region":"us-west2","city":"Los Angeles","country":"US","url":"https://storage.us-west2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-west3","vendor":"gcp","region":"us-west3","city":"Salt Lake City","country":"US","url":"https://storage.us-west3.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-west4","vendor":"gcp","region":"us-west4","city":"Las Vegas","country":"US","url":"https://storage.us-west4.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:us-west8","vendor":"gcp","region":"us-west8","city":"Phoenix","country":"US","url":"https://storage.us-west8.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:northamerica-northeast1","vendor":"gcp","region":"northamerica-northeast1","city":"Montréal","country":"CA","url":"https://storage.northamerica-northeast1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:northamerica-northeast2","vendor":"gcp","region":"northamerica-northeast2","city":"Toronto","country":"CA","url":"https://storage.northamerica-northeast2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:northamerica-south1","vendor":"gcp","region":"northamerica-south1","city":"Querétaro","country":"MX","url":"https://storage.northamerica-south1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"na"},{"id":"gcp:southamerica-east1","vendor":"gcp","region":"southamerica-east1","city":"São Paulo","country":"BR","url":"https://storage.southamerica-east1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"sa"},{"id":"gcp:southamerica-west1","vendor":"gcp","region":"southamerica-west1","city":"Santiago","country":"CL","url":"https://storage.southamerica-west1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"sa"},{"id":"gcp:europe-west1","vendor":"gcp","region":"europe-west1","city":"Belgium","country":"BE","url":"https://storage.europe-west1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west2","vendor":"gcp","region":"europe-west2","city":"London","country":"GB","url":"https://storage.europe-west2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west3","vendor":"gcp","region":"europe-west3","city":"Frankfurt","country":"DE","url":"https://storage.europe-west3.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west4","vendor":"gcp","region":"europe-west4","city":"Netherlands","country":"NL","url":"https://storage.europe-west4.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west6","vendor":"gcp","region":"europe-west6","city":"Zurich","country":"CH","url":"https://storage.europe-west6.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west8","vendor":"gcp","region":"europe-west8","city":"Milan","country":"IT","url":"https://storage.europe-west8.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west9","vendor":"gcp","region":"europe-west9","city":"Paris","country":"FR","url":"https://storage.europe-west9.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west10","vendor":"gcp","region":"europe-west10","city":"Berlin","country":"DE","url":"https://storage.europe-west10.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-west12","vendor":"gcp","region":"europe-west12","city":"Turin","country":"IT","url":"https://storage.europe-west12.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-central2","vendor":"gcp","region":"europe-central2","city":"Warsaw","country":"PL","url":"https://storage.europe-central2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-north1","vendor":"gcp","region":"europe-north1","city":"Finland","country":"FI","url":"https://storage.europe-north1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-north2","vendor":"gcp","region":"europe-north2","city":"Stockholm","country":"SE","url":"https://storage.europe-north2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:europe-southwest1","vendor":"gcp","region":"europe-southwest1","city":"Madrid","country":"ES","url":"https://storage.europe-southwest1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"eu"},{"id":"gcp:me-central1","vendor":"gcp","region":"me-central1","city":"Doha","country":"QA","url":"https://storage.me-central1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"me"},{"id":"gcp:me-central2","vendor":"gcp","region":"me-central2","city":"Dammam","country":"SA","url":"https://storage.me-central2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"me"},{"id":"gcp:me-west1","vendor":"gcp","region":"me-west1","city":"Tel Aviv","country":"IL","url":"https://storage.me-west1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"me"},{"id":"gcp:africa-south1","vendor":"gcp","region":"africa-south1","city":"Johannesburg","country":"ZA","url":"https://storage.africa-south1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"af"},{"id":"gcp:asia-east1","vendor":"gcp","region":"asia-east1","city":"Taiwan","country":"TW","url":"https://storage.asia-east1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-east2","vendor":"gcp","region":"asia-east2","city":"Hong Kong","country":"HK","url":"https://storage.asia-east2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-northeast1","vendor":"gcp","region":"asia-northeast1","city":"Tokyo","country":"JP","url":"https://storage.asia-northeast1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-northeast2","vendor":"gcp","region":"asia-northeast2","city":"Osaka","country":"JP","url":"https://storage.asia-northeast2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-northeast3","vendor":"gcp","region":"asia-northeast3","city":"Seoul","country":"KR","url":"https://storage.asia-northeast3.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-south1","vendor":"gcp","region":"asia-south1","city":"Mumbai","country":"IN","url":"https://storage.asia-south1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-south2","vendor":"gcp","region":"asia-south2","city":"Delhi","country":"IN","url":"https://storage.asia-south2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-southeast1","vendor":"gcp","region":"asia-southeast1","city":"Singapore","country":"SG","url":"https://storage.asia-southeast1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:asia-southeast2","vendor":"gcp","region":"asia-southeast2","city":"Jakarta","country":"ID","url":"https://storage.asia-southeast2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"as"},{"id":"gcp:australia-southeast1","vendor":"gcp","region":"australia-southeast1","city":"Sydney","country":"AU","url":"https://storage.australia-southeast1.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"oc"},{"id":"gcp:australia-southeast2","vendor":"gcp","region":"australia-southeast2","city":"Melbourne","country":"AU","url":"https://storage.australia-southeast2.rep.googleapis.com/","method":"GET","fallback":"IMG","tier":"B","fam":"4","continent":"oc"},{"id":"ibm:us-south","vendor":"ibm","region":"us-south","city":"Dallas","country":"US","url":"https://s3.us-south.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"ibm:us-east","vendor":"ibm","region":"us-east","city":"Washington","country":"US","url":"https://s3.us-east.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"ibm:ca-tor","vendor":"ibm","region":"ca-tor","city":"Toronto","country":"CA","url":"https://s3.ca-tor.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"ibm:br-sao","vendor":"ibm","region":"br-sao","city":"São Paulo","country":"BR","url":"https://s3.br-sao.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"sa"},{"id":"ibm:eu-gb","vendor":"ibm","region":"eu-gb","city":"London","country":"GB","url":"https://s3.eu-gb.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"eu"},{"id":"ibm:eu-de","vendor":"ibm","region":"eu-de","city":"Frankfurt","country":"DE","url":"https://s3.eu-de.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"eu"},{"id":"ibm:eu-es","vendor":"ibm","region":"eu-es","city":"Madrid","country":"ES","url":"https://s3.eu-es.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"eu"},{"id":"ibm:jp-tok","vendor":"ibm","region":"jp-tok","city":"Tokyo","country":"JP","url":"https://s3.jp-tok.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"ibm:jp-osa","vendor":"ibm","region":"jp-osa","city":"Osaka","country":"JP","url":"https://s3.jp-osa.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"ibm:au-syd","vendor":"ibm","region":"au-syd","city":"Sydney","country":"AU","url":"https://s3.au-syd.cloud-object-storage.appdomain.cloud/","method":"HEAD","tier":"B","fam":"4","continent":"oc"},{"id":"scaleway:fr-par","vendor":"scaleway","region":"fr-par","city":"Paris","country":"FR","url":"https://s3.fr-par.scw.cloud/","method":"GET","tier":"B","fam":"46","continent":"eu"},{"id":"scaleway:nl-ams","vendor":"scaleway","region":"nl-ams","city":"Amsterdam","country":"NL","url":"https://s3.nl-ams.scw.cloud/","method":"GET","tier":"B","fam":"46","continent":"eu"},{"id":"scaleway:pl-waw","vendor":"scaleway","region":"pl-waw","city":"Warsaw","country":"PL","url":"https://s3.pl-waw.scw.cloud/","method":"GET","tier":"B","fam":"46","continent":"eu"},{"id":"scaleway:it-mil","vendor":"scaleway","region":"it-mil","city":"Milan","country":"IT","url":"https://s3.it-mil.scw.cloud/","method":"GET","tier":"B","fam":"46","continent":"eu"},{"id":"volcengine:cn-beijing","vendor":"volcengine","region":"cn-beijing","city":"Beijing","country":"CN","url":"https://tos-cn-beijing.volces.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"volcengine:cn-shanghai","vendor":"volcengine","region":"cn-shanghai","city":"Shanghai","country":"CN","url":"https://tos-cn-shanghai.volces.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"volcengine:cn-guangzhou","vendor":"volcengine","region":"cn-guangzhou","city":"Guangzhou","country":"CN","url":"https://tos-cn-guangzhou.volces.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"volcengine:cn-hongkong","vendor":"volcengine","region":"cn-hongkong","city":"Hong Kong","country":"HK","url":"https://tos-cn-hongkong.volces.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"volcengine:ap-southeast-1","vendor":"volcengine","region":"ap-southeast-1","city":"Johor","country":"MY","url":"https://tos-ap-southeast-1.volces.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"volcengine:ap-southeast-3","vendor":"volcengine","region":"ap-southeast-3","city":"Jakarta","country":"ID","url":"https://tos-ap-southeast-3.volces.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"baidu:bj","vendor":"baidu","region":"bj","city":"Beijing","country":"CN","url":"https://bj.bcebos.com/","method":"HEAD","tier":"B","fam":"46","continent":"as"},{"id":"baidu:bd","vendor":"baidu","region":"bd","city":"Baoding","country":"CN","url":"https://bd.bcebos.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"baidu:su","vendor":"baidu","region":"su","city":"Suzhou","country":"CN","url":"https://su.bcebos.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"baidu:gz","vendor":"baidu","region":"gz","city":"Guangzhou","country":"CN","url":"https://gz.bcebos.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"baidu:fwh","vendor":"baidu","region":"fwh","city":"Wuhan","country":"CN","url":"https://fwh.bcebos.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"baidu:hkg","vendor":"baidu","region":"hkg","city":"Hong Kong","country":"HK","url":"https://hkg.bcebos.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"naver:kr","vendor":"naver","region":"kr","city":"Chuncheon","country":"KR","url":"https://kr.object.ncloudstorage.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"naver:jp","vendor":"naver","region":"jp","city":"Tokyo","country":"JP","url":"https://jp.object.ncloudstorage.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"naver:sg","vendor":"naver","region":"sg","city":"Singapore","country":"SG","url":"https://sg.object.ncloudstorage.com/","method":"HEAD","tier":"B","fam":"4","continent":"as"},{"id":"naver:us","vendor":"naver","region":"us","city":"Silicon Valley","country":"US","url":"https://us.object.ncloudstorage.com/","method":"HEAD","tier":"B","fam":"4","continent":"na"},{"id":"naver:de","vendor":"naver","region":"de","city":"Frankfurt","country":"DE","url":"https://de.object.ncloudstorage.com/","method":"HEAD","tier":"B","fam":"4","continent":"eu"}]};
  /* ENDPOINTS:END */

  const LANGS = [["zh-CN","简体中文"],["zh-TW","繁體中文"],["en","English"],["ja","日本語"],["ko","한국어"],["es","Español"],["fr","Français"],["de","Deutsch"],["pt","Português"],["ru","Русский"]];
  // per-page data written by scripts/build.mjs: language texts (this language + English), language URLs, landing page
  const DATA = JSON.parse(document.getElementById("me2-data").textContent);
  const I18N = DATA.i18n, LANG_PATHS = DATA.paths, PAGE = DATA.page || {};

  const KEY = "me2cloud:v1", RES_KEY = "me2cloud:last", HIST_KEY = "me2cloud:history",
    LANG_KEY = "me2cloud:lang", THEME_KEY = "me2cloud:theme";
  const MODES = { quick: 5, std: 10, precise: 20 };
  // use-case presets: [max median ms, max jitter ms, max loss %]; 0 = no limit
  const PRESETS = { game: [60, 10, 0], call: [150, 30, 1], ssh: [120, 20, 1], web: [250, 50, 2], any: [0, 0, 0] };
  const PRESET_IC = { game: "🎮", call: "📹", ssh: "⌨️", web: "🌐", any: "👀", custom: "🎯" };
  const GRADES = [30, 80, 150, 250];        // median upper bounds for T0…T3; above is T4
  // Politeness toward providers: one request at a time per host, a pause between samples, at most 2 hosts per provider
  // at once, and a host is dropped after 3 failures in a row. See the "Gentle on providers" section of the docs.
  const VENDOR_CAP = 2, GAP_MS = 250, FAIL_STOP = 3, MAX_HIST = 8;
  const CT_ORDER = ["as", "na", "eu", "oc", "sa", "me", "af"];
  const AX_MIN = 2, AX_MAX = 3000, TICKS = [5, 10, 20, 50, 100, 200, 500, 1000, 2000];
  const PEAK = [20, 23];
  const DC_RE = /amazon|google|microsoft|azure|digitalocean|vultr|choopa|constant company|linode|akamai|ovh|hetzner|oracle|alibaba|aliyun|tencent|huawei|m247|datacamp|cloudflare|leaseweb|contabo|hostinger|it7|racknerd|colocrossing|psychz|zenlayer|g-core|gcore|hostwinds|scaleway|ionos|kamatera|upcloud|bandwagon|dmit|cogent|quadranet|servers\.com|packet|equinix|fastly|cdn77|datapacket|tzulo|hostdare|greencloud|nexeon|frantech|buyvm/i;
  const TZ_CC = Object.fromEntries(("Asia/Shanghai:CN Asia/Chongqing:CN Asia/Harbin:CN Asia/Urumqi:CN Asia/Hong_Kong:HK Asia/Macau:MO Asia/Taipei:TW Asia/Tokyo:JP " +
    "Asia/Seoul:KR Asia/Singapore:SG Asia/Kuala_Lumpur:MY Asia/Bangkok:TH Asia/Jakarta:ID Asia/Manila:PH Asia/Ho_Chi_Minh:VN Asia/Saigon:VN " +
    "Asia/Kolkata:IN Asia/Calcutta:IN Asia/Dubai:AE Asia/Riyadh:SA Asia/Qatar:QA Asia/Jerusalem:IL Asia/Tel_Aviv:IL Asia/Karachi:PK " +
    "Europe/London:GB Europe/Dublin:IE Europe/Paris:FR Europe/Berlin:DE Europe/Amsterdam:NL Europe/Brussels:BE Europe/Zurich:CH Europe/Rome:IT " +
    "Europe/Madrid:ES Europe/Lisbon:PT Europe/Stockholm:SE Europe/Oslo:NO Europe/Helsinki:FI Europe/Copenhagen:DK Europe/Warsaw:PL Europe/Vienna:AT " +
    "Europe/Prague:CZ Europe/Moscow:RU Europe/Istanbul:TR Europe/Kiev:UA Europe/Kyiv:UA Europe/Athens:GR Europe/Bucharest:RO Europe/Budapest:HU " +
    "Australia/Sydney:AU Australia/Melbourne:AU Australia/Brisbane:AU Australia/Perth:AU Australia/Adelaide:AU Pacific/Auckland:NZ " +
    "America/New_York:US America/Chicago:US America/Denver:US America/Los_Angeles:US America/Phoenix:US America/Anchorage:US Pacific/Honolulu:US " +
    "America/Toronto:CA America/Vancouver:CA America/Montreal:CA America/Edmonton:CA America/Mexico_City:MX America/Sao_Paulo:BR America/Santiago:CL " +
    "America/Bogota:CO America/Lima:PE America/Argentina/Buenos_Aires:AR Africa/Johannesburg:ZA Africa/Cairo:EG Africa/Lagos:NG Africa/Nairobi:KE")
    .split(" ").map(p => p.split(":")));
  // Bypass rules: w = wildcard on the test hosts only, s = domain suffix (used where a tool has no wildcard rule),
  // d = one host. Tools with wildcards get the narrow form, so unrelated traffic of a provider is never sent direct.
  // scripts/build.mjs turns this list into the remote rule sets under /rules/.
  // direct rules: the hosts the network check calls; the test hosts themselves come from ENDPOINTS
  /* RULES:BEGIN */
  const RULE_SPEC = [
    {"v":"_detect","d":"speed.cloudflare.com"},
    {"v":"_detect","d":"stun.cloudflare.com"},
    {"v":"_detect","d":"ipv4-check-perf.radar.cloudflare.com"},
    {"v":"_detect","d":"ipv6-check-perf.radar.cloudflare.com"},
    {"v":"_detect","d":"api4.ipify.org"},
    {"v":"_detect","d":"api6.ipify.org"},
    {"v":"_detect","d":"v4.ident.me"},
    {"v":"_detect","d":"v6.ident.me"}
  ];
  /* RULES:END */
  const RULE_FORMATS = ["clash", "surge", "shadowrocket", "quanx", "loon", "singbox", "xray", "omega", "plain"];
  const RULE_NAMES = { clash: "Clash / Mihomo", surge: "Surge", shadowrocket: "Shadowrocket", quanx: "Quantumult X", loon: "Loon", singbox: "sing-box", xray: "Xray / v2rayN", omega: "SwitchyOmega", plain: "" };

  const $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const fmt = v => v == null || !isFinite(v) ? "–" : v < 10 ? v.toFixed(1) : String(Math.round(v));
  const caret = '<svg class="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2.5 4l2.5 2.5L7.5 4"/></svg>';

  /* ---------- language ---------- */
  const LANG = document.documentElement.lang || "en";
  const t = (k, v) => {
    let s = (I18N[LANG] || {})[k] ?? I18N.en[k] ?? k;
    if (v) for (const p in v) s = s.split("{" + p + "}").join(v[p]);
    return s;
  };
  let regionNames = null;
  const country = cc => { if (!cc || cc === "--") return ""; try { return regionNames.of(cc); } catch (e) { return cc; } };
  const tierName = g => t("g" + g).split(" · ")[1] || t("g" + g);
  const tierCode = g => "T" + (g - 1);
  function applyLang() {
    try { regionNames = new Intl.DisplayNames([LANG], { type: "region" }); } catch (e) { regionNames = { of: c => c }; }
    $$("[data-i]").forEach(el => { el.textContent = t(el.dataset.i); });
    $$("[data-ph]").forEach(el => { el.placeholder = t(el.dataset.ph); });
    $("#footTxt").textContent = t("foot", { d: ENDPOINTS.verified });
    renderDocs();
  }
  $("#lang").innerHTML = LANGS.filter(([c]) => LANG_PATHS[c]).map(([c, n]) => `<option value="${c}">${n}</option>`).join("");

  /* ---------- state ---------- */
  // nothing is selected at first: the page leads the visitor to pick providers; areas follow the providers
  function defaults() {
    return { v: 2, vendors: [], cts: [], customSel: [], mode: "std", conc: 4, timeout: 4000,
      need: { preset: "web", lat: 250, jit: 50, loss: 2 }, home: "all", ip: "v4", custom: [], onlyPass: false, hideIp: false, rtc: true, ruleFmt: "clash" };
  }
  function sanitize(s) {
    const d = defaults();
    if (!s || typeof s !== "object") return d;
    const o = Object.assign(d, s);
    o.vendors = Array.isArray(o.vendors) ? o.vendors.filter(v => ENDPOINTS.vendors[v]) : d.vendors;
    o.cts = Array.isArray(o.cts) ? o.cts.filter(c => CT_ORDER.includes(c)) : d.cts;
    o.customSel = Array.isArray(o.customSel) ? o.customSel.map(String) : [];
    if (o.exclHome === true) o.home = "excl";
    delete o.exclHome;
    if (!["all", "excl", "only"].includes(o.home)) o.home = "all";
    if (!["v4", "v6"].includes(o.ip)) o.ip = "v4";
    if (!MODES[o.mode]) o.mode = "std";
    o.conc = clamp(+o.conc || 4, 1, 8);
    o.timeout = [3000, 4000, 6000, 8000].includes(+o.timeout) ? +o.timeout : 4000;
    o.need = Object.assign(d.need, o.need || {});
    o.custom = Array.isArray(o.custom) ? o.custom.filter(c => c && typeof c.url === "string" && /^https:\/\//i.test(c.url)).slice(0, 50) : [];
    if (!RULE_FORMATS.includes(o.ruleFmt)) o.ruleFmt = "clash";
    return o;
  }
  function load() { try { return sanitize(JSON.parse(localStorage.getItem(KEY))); } catch (e) { return defaults(); } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  let S = load();

  // setup link: ?vendors=aws,vultr&areas=as,na&mode=quick&need=60,10,0
  (function parseLink() {
    let q; try { q = new URLSearchParams(location.search); } catch (e) { return; }
    let changed = false;
    if (q.get("vendors")) {
      S.vendors = q.get("vendors").split(",").filter(v => ENDPOINTS.vendors[v]);
      S.cts = CT_ORDER.filter(c => ENDPOINTS.endpoints.some(e => S.vendors.includes(e.vendor) && e.continent === c)); changed = true;
    }
    if (q.get("areas")) { S.cts = q.get("areas").split(",").filter(c => CT_ORDER.includes(c)); changed = true; }
    if (MODES[q.get("mode")]) { S.mode = q.get("mode"); changed = true; }
    if (["v4", "v6"].includes(q.get("ip"))) { S.ip = q.get("ip"); changed = true; }
    if (["all", "excl", "only"].includes(q.get("home"))) { S.home = q.get("home"); changed = true; }
    const n = (q.get("need") || "").split(",").map(Number);
    if (n.length === 3 && n.every(x => x >= 0)) { S.need = { preset: "custom", lat: n[0], jit: n[1], loss: n[2] }; changed = true; }
    if (changed) save();
  })();

  const hostOf = u => { try { return new URL(u).hostname; } catch (e) { return u; } };
  // a city in the page language: "Beijing 4" -> "北京 4"; unknown or unlisted names fall back to English or the region code
  const cityName = (c, code) => { if (!c || c === "?") return code; const m = /^(.*?)( \d)?$/.exec(c), C = (I18N[LANG] || {}).cities || {}; return (C[m[1]] || m[1]) + (m[2] || ""); };
  const vnm = v => vtext(v, "name");
  const vtext = (v, k) => (((I18N[LANG] || {}).vendors || {})[v] || {})[k] || (I18N.en.vendors || {})[v]?.[k] || ENDPOINTS.vendors[v]?.[k] || "";
  const vshort = { aws: "AWS", oracle: "OCI", vultr: "VLT", azure: "AZ", gcp: "GCP", aliyun: "ALI", tencent: "TC", huawei: "HWC", linode: "LIN", digitalocean: "DO", ovh: "OVH", hetzner: "HTZ", ibm: "IBM", scaleway: "SCW", volcengine: "VOLC", baidu: "BAI", naver: "NAV", custom: "★" };
  let ALL = [];
  function buildAll() {
    const vend = ENDPOINTS.vendors;
    ALL = ENDPOINTS.endpoints.map(e => Object.assign({}, e, { vname: vnm(e.vendor), cityEn: e.city, city: cityName(e.city, e.region) }))
      .concat(S.custom.map(c => ({ id: "custom:" + c.k, k: String(c.k), vendor: "custom", vname: t("custom"), region: hostOf(c.url), city: c.name, country: "", continent: "xx",
        url: c.url, method: c.method || "AUTO", tier: "?" })));
  }
  // self-hosted flag-icons SVG (MIT): one small file per country, no third-party request
  const flag = (cc, cls) => /^[A-Z]{2}$/.test(cc || "") ? `<img class="${cls || "flag"}" src="/flags/${cc.toLowerCase()}.svg" alt="${esc(country(cc))}" width="20" height="15" loading="lazy">` : "";
  // the visitor's own country: the exit IP's, or the time zone's when a proxy hides it
  const homeCC = () => NET.state !== "done" ? "" : NET.verdict === "warn" && TZ_CC[NET.tz] ? TZ_CC[NET.tz] : NET.cc || "";
  // own-country filter: "excl" leaves those regions out, "only" keeps just them
  const excluded = e => { if (S.home === "all" || e.vendor === "custom" || !homeCC()) return false; const mine = e.country === homeCC(); return S.home === "excl" ? mine : !mine; };
  const selected = () => ALL.filter(e => e.vendor === "custom" ? S.customSel.includes(e.k) : S.vendors.includes(e.vendor) && S.cts.includes(e.continent) && !excluded(e));
  const VIDS = Object.keys(ENDPOINTS.vendors);
  // areas covered by the chosen providers; the area picker only offers these
  const coveredCts = () => CT_ORDER.filter(c => ENDPOINTS.endpoints.some(e => S.vendors.includes(e.vendor) && e.continent === c));
  // picking from "everything selected" narrows to the one clicked; after that, clicks add or remove
  if (PAGE.vendor && ENDPOINTS.vendors[PAGE.vendor] && !/[?&]vendors=/.test(location.search)) { S.vendors = [PAGE.vendor]; S.cts = coveredCts(); }
  const pickToggle = (list, all, x) => list.length === all.length && all.length > 1 ? [x] : list.includes(x) ? list.filter(y => y !== x) : list.concat(x);

  /* ---------- results ---------- */
  // R: id -> { s: samples (ms or null), w: warm-up ms, m: method used, st: queued|running|done|fail|stopped, vf: CORS check }
  let R = new Map(), VIEW = { ts: 0, live: true, peak: false };
  function stats(r) {
    if (r && r.sum) {
      // a shared result carries the summary only
      const u = r.sum, ok = Math.round(u.n * (1 - u.loss));
      return { n: u.n, ok, loss: u.loss, med: u.med, p25: u.p25, p75: u.p75, p90: u.p90, jit: u.jit, score: u.med + 2 * u.jit + u.loss * 1000 };
    }
    const s = r ? r.s : [], ok = s.filter(v => v != null), n = s.length;
    if (!ok.length) return { n, ok: 0, loss: n ? 1 : 0 };
    const a = ok.slice().sort((x, y) => x - y);
    const q = p => { const i = p * (a.length - 1), lo = Math.floor(i), hi = Math.ceil(i); return a[lo] + (a[hi] - a[lo]) * (i - lo); };
    const avg = ok.reduce((x, y) => x + y, 0) / ok.length;
    const sd = Math.sqrt(ok.reduce((x, y) => x + (y - avg) ** 2, 0) / ok.length);
    let jit = 0; for (let i = 1; i < ok.length; i++) jit += Math.abs(ok[i] - ok[i - 1]);
    jit = ok.length > 1 ? jit / (ok.length - 1) : 0;
    const med = q(.5), loss = (n - ok.length) / n;
    return { n, ok: ok.length, loss, min: a[0], max: a[a.length - 1], avg, med, p25: q(.25), p75: q(.75), p90: q(.9), sd, jit, score: med + 2 * jit + loss * 1000 };
  }
  const grade = v => v == null ? 0 : (GRADES.findIndex(g => v <= g) + 1) || 5;
  const meets = st => {
    if (!st || !st.ok) return false;
    const N = S.need;
    return (!N.lat || st.med <= N.lat) && (!N.jit || st.jit <= N.jit) && (!N.loss ? st.loss === 0 : st.loss * 100 <= N.loss);
  };
  const shaky = st => st.ok > 1 && (st.jit > Math.max(10, st.med * .2) || st.loss > 0);

  /* ---------- request log ---------- */
  const LOG = [];
  function logReq(url, method, ms) { LOG.push([Date.now(), method, hostOf(url), ms]); if (LOG.length > 400) LOG.shift(); if (!$("#logDlg").hidden) renderLog(); }
  function renderLog() {
    const tf = new Intl.DateTimeFormat(LANG, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    $("#log").innerHTML = LOG.length ? LOG.slice().reverse().slice(0, 300).map(([ts, m, h, ms]) =>
      `<div class="${ms == null ? "f" : ""}"><span>${tf.format(ts)}</span><span>${m}</span><span>${esc(h)}</span><span>${ms == null ? t("failed") : ms ? fmt(ms) + " ms" : "ok"}</span></div>`).join("")
      : `<div class="note">${esc(t("log_empty"))}</div>`;
  }

  /* ---------- probes ---------- */
  const bust = url => url + (url.includes("?") ? "&" : "?") + "_clp=" + Math.random().toString(36).slice(2, 10);
  async function probeFetch(url, method, timeout, signal) {
    const ctl = new AbortController(), stop = () => ctl.abort();
    const tm = setTimeout(stop, timeout); signal && signal.addEventListener("abort", stop);
    const t0 = performance.now();
    let ms = null;
    try {
      // no-cors + no custom headers: a "simple" request, so the browser sends no preflight, no cookies and no referrer
      await fetch(bust(url), { method, mode: "no-cors", cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer", signal: ctl.signal });
      ms = performance.now() - t0;
    } catch (e) {}
    clearTimeout(tm); signal && signal.removeEventListener("abort", stop);
    logReq(url, method, ms);
    return ms;
  }
  function probeImg(url, timeout, signal) {
    return new Promise(res => {
      const img = new Image(); let done = false; const t0 = performance.now();
      const fin = v => { if (done) return; done = true; clearTimeout(tm); img.onload = img.onerror = null; logReq(url, "IMG", v); res(v); };
      // a non-image answer fires onerror once the response arrives, which is the moment we need
      img.onload = img.onerror = () => fin(performance.now() - t0);
      const tm = setTimeout(() => fin(null), timeout);
      signal && signal.addEventListener("abort", () => fin(null), { once: true });
      img.referrerPolicy = "no-referrer";
      img.src = bust(url);
    });
  }
  const probe = (ep, m, signal) => m === "IMG" ? probeImg(ep.url, S.timeout, signal) : probeFetch(ep.url, m, S.timeout, signal);
  async function corsCheck(ep) {
    try {
      const res = await fetch(bust(ep.url), { method: "GET", mode: "cors", cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer", signal: AbortSignal.timeout(S.timeout) });
      logReq(ep.url, "CORS", 0);
      if (ep.expect) return (await res.text()).includes(ep.expect);
      return res.status > 0;
    } catch (e) { logReq(ep.url, "CORS", null); return false; }
  }

  const urlFor = (e, ip) => ip !== "v6" ? e.url : e.url6 || (e.vendor === "custom" || (e.fam || "").includes("6") ? e.url : null);
  async function runEndpoint(ep, n, signal) {
    const ip = VIEW.ip || "v4", url = urlFor(ep, ip);
    if (!url) { R.set(ep.id, { s: [], w: null, m: ep.method, st: "nov6", ip }); markDirty(ep.id, true); return; }
    ep = Object.assign({}, ep, { url });
    const r = { s: [], w: null, m: ep.method, st: "running", ip };
    R.set(ep.id, r); markDirty(ep.id);
    const gap = () => sleep(GAP_MS + Math.random() * 120);
    let m = ep.method === "AUTO" ? "GET" : ep.method;
    // warm-up: opens DNS + TCP + TLS; shown but never counted
    let w = await probe(ep, m, signal);
    if (w == null && m !== "IMG" && (ep.fallback === "IMG" || ep.method === "AUTO") && !signal.aborted) {
      const wi = await probe(ep, "IMG", signal);
      if (wi != null) { m = "IMG"; w = wi; }
    }
    r.w = w; r.m = m;
    let fails = w == null ? 1 : 0;
    if (ep.method === "AUTO" && m !== "IMG" && w != null) {
      // calibrate: some servers close the connection after every GET; keep the method that reuses it
      const g = [], h = [];
      for (let i = 0; i < 2 && !signal.aborted; i++) { await gap(); g.push(await probe(ep, "GET", signal)); await gap(); h.push(await probe(ep, "HEAD", signal)); }
      const md = a => { const b = a.filter(v => v != null).sort((x, y) => x - y); return b.length ? b[b.length >> 1] : Infinity; };
      m = md(h) < md(g) * 0.85 ? "HEAD" : "GET"; r.m = m;
      r.s.push(...(m === "HEAD" ? h : g).map(v => v == null ? null : Math.round(v * 10) / 10));
      markDirty(ep.id, true);
    }
    while (r.s.length < n && !signal.aborted && fails < FAIL_STOP) {
      await gap();
      if (signal.aborted) break;
      const v = await probe(ep, m, signal);
      if (signal.aborted) break;
      r.s.push(v == null ? null : Math.round(v * 10) / 10);
      fails = v == null ? fails + 1 : 0;
      markDirty(ep.id, true);
    }
    if (!signal.aborted && ep.cors && r.s.some(v => v != null)) r.vf = await corsCheck(ep);
    r.st = signal.aborted ? "stopped" : fails >= FAIL_STOP && !r.s.some(v => v != null) ? "fail" : "done";
    markDirty(ep.id, true);
  }
  // interleave providers so results fill in evenly while each provider only sees VENDOR_CAP hosts at once
  function interleave(list) {
    const by = new Map(); for (const e of list) { if (!by.has(e.vendor)) by.set(e.vendor, []); by.get(e.vendor).push(e); }
    const qs = [...by.values()], out = [];
    while (qs.some(q => q.length)) for (const q of qs) if (q.length) out.push(q.shift());
    return out;
  }
  let RUN = null;
  async function runTests(list, n, conc, keep) {
    if (RUN || !list.length) return;
    const ctl = new AbortController();
    RUN = { ctl, total: list.length, done: 0, t0: performance.now(), n, list };
    if (VIEW.shared) { clearHash(); $("#sharedBar").hidden = true; }
    if (!keep || !VIEW.live) { R = new Map(); VIEW = { ts: Date.now(), live: true, peak: isPeak(new Date()), mode: n, ip: S.ip }; }
    for (const e of list) R.set(e.id, { s: [], w: null, m: e.method, st: "queued" });
    renderAll();
    const queue = interleave(list), active = new Map();
    const worker = async () => {
      while (!ctl.signal.aborted) {
        const i = queue.findIndex(e => (active.get(e.vendor) || 0) < VENDOR_CAP);
        if (i < 0) { if (!queue.length) return; await sleep(60); continue; }
        const ep = queue.splice(i, 1)[0];
        active.set(ep.vendor, (active.get(ep.vendor) || 0) + 1);
        try { await runEndpoint(ep, n, ctl.signal); } finally { active.set(ep.vendor, active.get(ep.vendor) - 1); RUN.done++; saveSoon(); }
      }
    };
    await Promise.all(Array.from({ length: Math.min(conc, list.length) }, worker));
    if (ctl.signal.aborted) for (const e of list) { const r = R.get(e.id); if (r && (r.st === "queued" || r.st === "running")) r.st = "stopped"; }
    RUN = null;
    saveResults();
    renderAll();
  }

  /* ---------- saving ---------- */
  function snapshot() {
    const res = {};
    for (const [id, r] of R) if (r.st !== "queued") res[id] = { s: r.s, w: r.w, m: r.m, st: r.st, vf: r.vf, ip: r.ip };
    return { v: 1, ts: VIEW.ts || Date.now(), peak: !!VIEW.peak, mode: VIEW.mode, ip: VIEW.ip || "v4", net: NET.ok ? { asn: NET.asn, org: NET.org, cc: NET.cc, city: NET.city, colo: NET.colo, proxy: NET.verdict === "warn" } : null, res };
  }
  function saveResults() {
    const snap = snapshot();
    if (!Object.keys(snap.res).length) return;
    try {
      localStorage.setItem(RES_KEY, JSON.stringify(snap));
      const h = loadHist().filter(x => x.ts !== snap.ts); h.unshift(snap);
      localStorage.setItem(HIST_KEY, JSON.stringify(h.slice(0, MAX_HIST)));
    } catch (e) {}
    renderHist();
  }
  // save partial results during a run too, so a reload or a closed tab keeps what was measured
  let saveT = 0;
  function saveSoon() { if (!saveT) saveT = setTimeout(() => { saveT = 0; saveResults(); }, 3000); }
  addEventListener("pagehide", () => { if (RUN) saveResults(); });
  function loadHist() { try { const h = JSON.parse(localStorage.getItem(HIST_KEY)); return Array.isArray(h) ? h : []; } catch (e) { return []; } }
  function applySnapshot(snap, live) {
    R = new Map();
    for (const [id, r] of Object.entries(snap.res || {})) if (r && Array.isArray(r.s)) R.set(id, { s: r.s.map(v => v == null ? null : +v), w: r.w, m: r.m, st: r.st === "running" ? "stopped" : r.st || "done", vf: r.vf, ip: r.ip });
    VIEW = { ts: snap.ts, live, peak: !!snap.peak, mode: snap.mode, ip: snap.ip || "v4" };
  }

  /* ---------- network check ---------- */
  let NET = { ok: false, state: "idle" }, netOpen = false, netRun = 0;
  const isPeak = d => d.getHours() >= PEAK[0] && d.getHours() < PEAK[1];
  // a host in the direct rules, so the WARP flag describes the same path as the tests
  async function getTrace() {
    const u = "https://speed.cloudflare.com/cdn-cgi/trace";
    try {
      const r = await fetch(u, { cache: "no-store", signal: AbortSignal.timeout(6000) });
      const tx = await r.text();
      logReq(u, "GET", 0);
      if (/^ip=/m.test(tx)) return { url: u, data: Object.fromEntries(tx.trim().split("\n").map(l => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)])) };
    } catch (e) { logReq(u, "GET", null); }
    return null;
  }
  async function stunIPs() {
    if (!window.RTCPeerConnection) return null;
    let pc;
    try {
      pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.cloudflare.com:3478" }] });
      pc.createDataChannel("x");
      const ips = new Set();
      const done = new Promise(res => {
        pc.onicecandidate = e => {
          if (!e.candidate) return res();
          const c = e.candidate.candidate || "", p = c.split(" ");
          if (/ typ srflx /.test(c) && p[4]) ips.add(p[4]);
        };
        setTimeout(res, 3500);
      });
      await pc.setLocalDescription(await pc.createOffer());
      await done;
      logReq("https://stun.cloudflare.com", "STUN", 0);
      return [...ips];
    } catch (e) { return null; } finally { try { pc && pc.close(); } catch (e) {} }
  }
  async function checkNetwork() {
    const run = ++netRun;
    // the check takes a few seconds on lossy routes, so the bar names the current step
    const step = (k, v) => { if (run === netRun && NET.state === "checking") { NET.step = t(k, v); renderNet(); } };
    // the bar and open details start over, but on a recheck the bar keeps its rules button and the details keep
    // their fields, so the layout doesn't collapse and re-expand
    NET = { ok: false, state: "checking", recheck: NET.state === "done" };
    step("chk_net");
    const tz = (() => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { return ""; } })();
    // Each family is asked of three providers on separate networks at once (Cloudflare, ipify on Hostwinds, ident.me
    // on Hetzner), so a network that blocks or degrades one of them isn't reported as lacking that family. All hosts
    // are single-stack names (A only / AAAA only) rather than IP literals, so domain rules can send them direct.
    // Cloudflare's root path answers JSON, which filter lists that block /cdn-cgi/trace let through. A second round
    // follows if every provider fails, since lossy routes drop a request now and then. The request log keeps each
    // provider's result, which shows which one a network blocks.
    const RX_IP = /"ip"\s*:\s*"([^"]+)"/, RX_RADAR = /"ip_address"\s*:\s*"([^"]+)"/, RX_TRACE = /^ip=(.*)$/m;
    const IP_SRC = {
      4: [["https://ipv4-check-perf.radar.cloudflare.com/", RX_RADAR], ["https://ipv4-check-perf.radar.cloudflare.com/cdn-cgi/trace", RX_TRACE],
          ["https://api4.ipify.org/?format=json", RX_IP], ["https://v4.ident.me/json", RX_IP]],
      6: [["https://ipv6-check-perf.radar.cloudflare.com/", RX_RADAR], ["https://ipv6-check-perf.radar.cloudflare.com/cdn-cgi/trace", RX_TRACE],
          ["https://api6.ipify.org/?format=json", RX_IP], ["https://v6.ident.me/json", RX_IP]]
    };
    // every answer, not only the first per family, for telling Safari's tracker relay apart from iCloud Private Relay
    const ipSeen = [], ipAll = [];
    const ipOne = (f, u, rx) => { const p = ipOne1(f, u, rx); ipAll.push(p); return p; };
    const ipOne1 = async (f, u, rx) => {
      try {
        const x = await (await fetch(bust(u), { cache: "no-store", credentials: "omit", signal: AbortSignal.timeout(5000) })).text();
        const m = rx.exec(x), ip = m ? m[1].trim() : "";
        // a dual-stack answer from the wrong family doesn't count
        if (ip && (f === 6) === ip.includes(":")) { logReq(u, "GET", 0); ipSeen.push(ip); return { ip, src: new URL(u).hostname }; }
      } catch (e) {}
      logReq(u, "GET", null);
      throw new Error("no ip");
    };
    const ipOf = async f => {
      for (let round = 0; round < 2; round++) {
        try { return await Promise.any(IP_SRC[f].map(([u, rx]) => ipOne(f, u, rx))); } catch (e) {}
      }
      return { ip: "", src: "" };
    };
    // Everything starts at once. The bar shows who and where as soon as /meta answers; the IP checks, WebRTC and the
    // edge timing fill in the verdict afterwards.
    const fams = Promise.all([ipOf(4), ipOf(6)]);
    const rtcP = S.rtc ? stunIPs() : Promise.resolve(null);
    // this site's own Cloudflare trace: a first-party request, which Safari relays only under iCloud Private Relay,
    // never for "Limit IP Address Tracking" (self-hosts off Cloudflare just get nothing here)
    const selfP = fetch("/cdn-cgi/trace", { cache: "no-store", signal: AbortSignal.timeout(5000) }).then(r => r.ok ? r.text() : "")
      .then(x => (RX_TRACE.exec(x) || [])[1] || "").catch(() => "");
    // speed.cloudflare.com/meta adds ASN, network name and city; it needs the default referrer policy (origin only)
    const metaP = fetch("https://speed.cloudflare.com/meta", { cache: "no-store", signal: AbortSignal.timeout(6000) }).then(r => r.ok ? r.json() : null)
      .then(j => { logReq("https://speed.cloudflare.com/meta", "GET", 0); return j; }).catch(() => null);
    // latency to the nearest Cloudflare edge: an empty download, median of 3. It starts once /meta has opened the
    // connection to the same host, so no warm-up is needed; if /meta failed, one uncounted request opens it first
    const edgeU = "https://speed.cloudflare.com/__down?bytes=0";
    const edgeP = metaP.then(async m => {
      const xs = [], warm = m ? 0 : 1;
      for (let i = 0; i < 3 + warm; i++) {
        if (i >= warm) step("chk_edge", { i: i - warm + 1, n: 3 });
        const t0 = performance.now();
        try { await fetch(bust(edgeU), { cache: "no-store", credentials: "omit", signal: AbortSignal.timeout(4000) }); if (i >= warm) xs.push(performance.now() - t0); } catch (e) {}
      }
      if (xs.length) logReq(edgeU, "GET", 0);
      xs.sort((a, b) => a - b);
      return xs.length ? xs[xs.length >> 1] : null;
    });
    const [meta, trace] = await Promise.all([metaP, getTrace()]);
    const tr = trace ? trace.data : {};
    const N = { ok: !!(meta || trace), state: "checking", partial: true, step: NET.step, tz,
      ip: (meta && meta.clientIp) || tr.ip || "", cc: (meta && meta.country) || tr.loc || "", city: meta ? meta.city || "" : "",
      asn: meta ? meta.asn : null, org: meta ? meta.asOrganization : "", colo: (meta && meta.colo && meta.colo.iata) || tr.colo || "",
      http: tr.http || (meta && meta.httpProtocol) || "", warp: tr.warp || "off", recheck: NET.recheck };
    if (run !== netRun) return;
    if (N.ok) { NET = N; renderNet(); }                      // first paint, while the rest finishes
    edgeP.then(() => step("chk_ip"));
    const [edge, [r4, r6], rtc, selfIp] = await Promise.all([edgeP, fams, rtcP, selfP]);
    if (run !== netRun) return;
    N.edge = edge; N.rtc = rtc;
    N.ip4 = r4.ip; N.ip6 = r6.ip; N.src4 = r4.src; N.src6 = r6.src;
    N.has6 = N.ip6 ? true : N.ip4 ? false : null;          // both failed: blocked, so unknown rather than "no IPv6"
    const reasons = [];
    if (N.org && DC_RE.test(N.org)) reasons.push(t("r_dc", { org: esc(N.org) + (N.asn ? " (AS" + N.asn + ")" : "") }));
    if (N.warp && N.warp !== "off") reasons.push(t("r_warp"));
    const tzc = TZ_CC[tz];
    if (tzc && N.cc && tzc !== N.cc && !(tzc === "CN" && ["HK", "MO"].includes(N.cc))) reasons.push(t("r_tz", { a: esc(country(tzc)), b: esc(country(N.cc)) }));
    const fam = x => x.includes(":") ? 6 : 4;
    if (rtc && rtc.length && N.ip) {
      const same = rtc.filter(x => fam(x) === fam(N.ip));
      if (same.length && !same.includes(N.ip)) reasons.push(t("r_rtc", { a: esc(same[0]), b: esc(N.ip) }));
    }
    // the single-stack checks should leave from the same network as the main exit (or, for the other family, the
    // WebRTC exit); compare /16 for IPv4 and /64 for IPv6, since CGNAT pools and temporary IPv6 addresses vary inside that
    const v6g = a => { const [h, tl = ""] = a.toLowerCase().split("::"), H = h ? h.split(":") : [], T = tl ? tl.split(":") : []; return [...H, ...Array(Math.max(0, 8 - H.length - T.length)).fill("0"), ...T].map(g => g.padStart(4, "0")); };
    const netOf = x => fam(x) === 6 ? v6g(x).slice(0, 4).join(":") : x.split(".").slice(0, 2).join(".");
    for (const [f, got] of [[4, N.ip4], [6, N.ip6]]) {
      const ref = N.ip && fam(N.ip) === f ? N.ip : (rtc || []).find(x => fam(x) === f);
      if (got && ref && netOf(got) !== netOf(ref)) reasons.push(t("r_fam", { f: "IPv" + f, a: esc(got), b: esc(ref) }));
    }
    // Apple's relay (Cloudflare, Akamai, Fastly egress) as the main exit comes in two forms. With iCloud Private Relay
    // every Safari request goes through it, the tests included: a warning of its own, since direct rules can't route
    // around it. With only "Limit IP Address Tracking" on, Safari relays just the domains on its tracker list, which
    // can include this check's hosts but hardly the cloud endpoints. One IPv4/IPv6 check (HTTPS too) arriving from
    // outside the relay ranges tells that form apart: the connection is direct and only the check's location is the relay's
    const ua = navigator.userAgent, safari = /AppleWebKit/.test(ua) && !/Chrome|Chromium|CriOS|FxiOS|EdgiOS|Android/.test(ua);
    const RELAY_IP = /^(104\.28\.|146\.75\.|172\.2(2[4-9]|3[01])\.|2a09:bac[0-7]:|2a02:26f7:|2a04:4e41:)/i;
    const viaRelay = N.warp === "off" && (N.asn === 36183 || safari && [13335, 209242, 54113].includes(N.asn));
    const direct = () => [...ipSeen, selfIp].filter(x => x && !RELAY_IP.test(x));
    // the first IP answer per family may well be a relayed one: before calling it Private Relay, wait for the rest
    if (viaRelay && !direct().length) { await Promise.allSettled(ipAll); if (run !== netRun) return; }
    const outside = direct().length > 0;
    N.relay = viaRelay && !outside;
    if (viaRelay && outside) {
      // the relay's city and network say nothing about this connection: show the device's country instead
      N.hidden = true; N.via = (N.org || "") + (N.asn ? " · AS" + N.asn : "");
      const real = f => direct().find(x => x.includes(":") === (f === 6));
      N.ip4 = real(4) || N.ip4; N.ip6 = real(6) || N.ip6;
      N.cc = tzc || ""; N.city = ""; N.org = ""; N.asn = null;
      reasons.length = 0;
    }
    N.reasons = N.relay ? [t("r_relay", { org: esc(N.org || "") + (N.asn ? " (AS" + N.asn + ")" : "") })] : reasons;
    N.verdict = !N.ok ? "unknown" : N.reasons.length ? "warn" : "good";
    N.state = "done"; N.partial = false;
    NET = N; renderNet(); renderCtrl();
  }
  const ICON_EYE = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8 12.1 12.5 8 12.5 1.5 8 1.5 8z"/><circle cx="8" cy="8" r="2"/></svg>';
  const ICON_EYEOFF = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M2 2l12 12M6.6 3.7A6.6 6.6 0 0 1 8 3.5c4.1 0 6.5 4.5 6.5 4.5a11 11 0 0 1-1.9 2.4M10.9 11.7A6 6 0 0 1 8 12.5C3.9 12.5 1.5 8 1.5 8a11.6 11.6 0 0 1 2.8-3.1"/></svg>';
  function renderNet() {
    const N = NET, ck = N.state === "checking", warn = N.verdict === "warn";
    const bar = $("#netbar");
    bar.className = "netbar " + (ck ? "chk" : warn ? "warn" : N.verdict === "good" ? "good" : "");
    const peak = isPeak(new Date());
    const where = [N.city, country(N.cc)].filter(Boolean).join(", ");
    const st = ck ? t("checking") : N.relay ? t("pxRelay") : warn ? t("pxShort") : N.verdict === "good" ? t("okShort") : t("unkShort");
    // IP families that answered, as a plain trailing segment once the check is done (so it doesn't push the rest)
    const fams = [N.ip4 && "IPv4", N.ip6 && "IPv6"].filter(Boolean).join(" + ");
    const ipf = ck || !fams ? "" : ` <span class="m" title="IPv4 ← ${esc(N.src4 || "–")} · IPv6 ← ${esc(N.src6 || "–")}">· ${fams}</span>`;
    bar.innerHTML = `<span class="nb-dot"></span><span class="nb-st">${esc(st)}</span>
      <span class="nb-main">${ck && !N.partial ? `<span class="m">${esc(N.step || "")}</span>` : `${flag(N.cc, "nb-flag")}${esc(where || "–")}${N.org ? ` <span class="m">· ${esc(N.org)}</span>` : ""}${N.hidden ? ` <span class="m">· ${esc(t("ipHidden"))}</span>` : ""}${N.edge != null && !N.hidden ? ` <span class="m">· CF ${esc(N.colo)} ${fmt(N.edge)} ms</span>` : ""}${ipf}${ck ? ` <span class="m">· ${esc(N.step || "")}</span>` : ""}`}</span>
      <span class="nb-acts">
        <span class="pill ${peak ? "warn" : "idle"}" title="${esc(t(peak ? "peakTip" : "offPeakTip", { now: new Intl.DateTimeFormat(LANG, { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()) }))}">${t(peak ? "peakNow" : "offPeak")}</span>
        ${ck && !N.partial && !N.recheck || N.relay ? "" : `<button class="btn sm ${warn ? "warn" : ""}" type="button" data-rules title="${esc(t("rulesBtn"))}"><span>${t("rulesBtn")}</span></button>`}
        <button class="icon-btn sm" type="button" id="recheckBtn" title="${esc(t("recheck"))}" aria-label="${esc(t("recheck"))}"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5v3h-3"/></svg></button>
        <button class="icon-btn sm" type="button" id="netMore" aria-expanded="${netOpen}" title="${esc(t("netDetails"))}" aria-label="${esc(t("netDetails"))}"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="${netOpen ? "M4 10l4-4 4 4" : "M4 6l4 4 4-4"}"/></svg></button>
      </span>`;
    const det = $("#netdet");
    if (ck) {
      // a recheck keeps open details open, with the same fields emptied and the current step as the note
      det.hidden = !netOpen || det.hidden;
      // hold the height the last result needed (wrapped addresses take more lines than the dashes)
      if (!det.hidden) { det.style.minHeight = det.offsetHeight + "px"; det.innerHTML = netDetails({}, N.step || t("checking")); }
      return;
    }
    det.style.minHeight = "";
    det.hidden = !netOpen;
    if (det.hidden) return;
    det.innerHTML = netDetails(N);
  }
  // the details grid; with `pending` every value is a dash and the note shows that text, so the layout stays put
  function netDetails(N, pending) {
    const blur = S.hideIp ? " blur" : "", s = x => x || "&nbsp;";
    // addresses wrap after a colon instead of being cut off (a full IPv6 address doesn't fit a column), one address
    // per line; the tooltip carries the whole value unless addresses are hidden
    const ipx = x => esc(x).replace(/:/g, ":<wbr>"), tip = x => S.hideIp || !x ? "" : ` title="${esc(x)}"`;
    const v4 = N.ip4 || (N.has6 === null ? t("chkFail") : "–"), v6 = N.ip6 || (pending ? "" : N.has6 === null ? t("chkBlocked") : t("ip_no6short"));
    const rtc = N.rtc && N.rtc.length ? N.rtc.join(", ") : "";
    const note = pending != null ? `<div class="note" style="grid-column:1/-1">${esc(pending)}</div>`
      : N.reasons && N.reasons.length ? `<ul class="reasons">${N.reasons.map(r => `<li>${r}</li>`).join("")}</ul>`
      : `<div class="note" style="grid-column:1/-1">${t(N.hidden ? "px_hiddenNote" : N.verdict === "good" ? "px_okNote" : "px_unknownNote")}</div>`;
    return `
      <div class="kv"><span class="lbl">${t("ip")}<button class="eye" type="button" id="eyeBtn" title="${esc(t(S.hideIp ? "show" : "hide"))}">${S.hideIp ? ICON_EYEOFF : ICON_EYE}</button></span><span class="v ip${blur}"${tip(N.ip)}>${N.ip ? ipx(N.ip) : "–"}</span><span class="s">${s(N.ip ? (N.ip.includes(":") ? "IPv6" : "IPv4") : "")}</span></div>
      <div class="kv"><span class="lbl">${t("isp")}</span><span class="v">${esc(N.org || N.via || "–")}</span><span class="s">${s(N.asn ? "AS" + N.asn : N.hidden ? esc(t("ipHidden")) : "")}</span></div>
      <div class="kv"><span class="lbl">${t("edge")}</span><span class="v">${N.edge != null ? fmt(N.edge) + " ms" : "–"}</span><span class="s">${s(esc(N.colo || "") + (N.http ? " · " + esc(N.http) : ""))}</span></div>
      <div class="kv" title="IPv4 ← ${esc(N.src4 || "–")} · IPv6 ← ${esc(N.src6 || "–")}"><span class="lbl">IPv4 / IPv6</span><span class="v ip${blur}"${tip(N.ip4)}>${ipx(v4)}</span><span class="s ip${blur}"${tip(N.ip6)}>${s(ipx(v6))}</span></div>
      <div class="kv"><span class="lbl">WebRTC</span><span class="v ip${blur}"${tip(rtc)}>${rtc ? N.rtc.map(ipx).join("<br>") : "–"}</span><span class="s">${s(esc(N.tz || ""))}</span></div>
      ${note}`;
  }

  /* ---------- controls ---------- */
  const SVG_V = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M4.5 12.5a3 3 0 0 1-.4-6A4.5 4.5 0 0 1 12.7 7a2.8 2.8 0 0 1-.2 5.5z"/></svg>';
  const SVG_A = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6.2"/><path d="M1.8 8h12.4M8 1.8c2 2 2 10.4 0 12.4M8 1.8c-2 2-2 10.4 0 12.4"/></svg>';
  const SVG_M = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M2 13V9M6 13V5M10 13V7M14 13V3"/></svg>';
  // what the pills show: the chosen names themselves ("AWS, Vultr +2"), not a count
  const sumList = (names, total, allLabel) => names.length === total && total > 1 ? allLabel : names.slice(0, 2).join(t("sep")) + (names.length > 2 ? " +" + (names.length - 2) : "");
  const allNone = k => `<span class="lk"><button type="button" data-all="${k}">${t("all")}</button> · <button type="button" data-none="${k}">${t("none")}</button></span>`;
  // own-country filter (all / leave out / only), shown inside the area popover once the country is known
  function homeSection() {
    const cc = homeCC();
    if (!cc) return "";
    return `<section class="pg"><div class="pg-h"><span class="pg-flag">${flag(cc)}<span>${esc(t("homeL", { c: country(cc) }))}</span></span></div>
      <div class="seg" role="group">${["all", "excl", "only"].map(k => `<button type="button" data-home="${k}" aria-pressed="${S.home === k}">${esc(t("home_" + k))}</button>`).join("")}</div>
      <div class="lbl">${esc(t("homeTip", { c: country(cc) }))}</div></section>`;
  }
  // A browser cannot choose the IP version of a request; it follows the host's DNS records. IPv4 mode uses the IPv4-only
  // hosts; IPv6 mode uses a host with an IPv6 address (the endpoint's own, or the provider's dual-stack alternative).
  function ipSection() {
    const no6 = NET.state === "done" && NET.has6 === false;
    return `<section class="pg"><div class="pg-h"><span>${esc(t("ip_h"))}</span></div>
      <div class="seg" role="group">${["v4", "v6"].map(k => `<button type="button" data-ip="${k}" aria-pressed="${S.ip === k}"${k === "v6" && no6 ? " disabled" : ""}>${k === "v4" ? "IPv4" : "IPv6"}</button>`).join("")}</div>
      <div class="lbl">${esc(t(no6 ? "ip_no6" : "ipTip"))}</div></section>`;
  }
  // regions of a provider within the chosen areas (all areas before any is chosen), minus the own-country filter, so
  // the provider and area counts always agree with what a run would measure
  const vCount = v => ALL.filter(e => e.vendor === v && (!S.cts.length || S.cts.includes(e.continent)) && !excluded(e)).length;
  function renderCtrl() {
    if (NET.state === "done" && NET.has6 === false && S.ip === "v6") S.ip = "v4";
    const N = S.need, cov = coveredCts();
    const cSel = S.custom.filter(c => S.customSel.includes(String(c.k)));
    const noV = !S.vendors.length && !cSel.length;
    // providers and custom endpoints share one list; a star marks the custom ones
    const vLabel = sumList(S.vendors.map(v => vnm(v)).concat(cSel.map(c => "★ " + c.name)), VIDS.length + S.custom.length, t("allVendors"));
    $("#plV").classList.toggle("ask", noV);
    $("#plV > summary").innerHTML = `${SVG_V}${noV ? `<span>${t("pickVendor")}</span>` : `<span class="pl-k">${t("pl_vendors")}</span><b>${esc(vLabel)}</b>`}${caret}`;
    // areas are the second step: they only open once a provider is chosen, and only list the areas it covers
    const aOff = !S.vendors.length;
    $("#plA").classList.toggle("off", aOff);
    $("#plA > summary").innerHTML = `${SVG_A}<span class="pl-k">${t("pl_areas")}</span><b>${aOff ? "–" : S.cts.length ? esc(sumList(S.cts.map(c => t("ct_" + c)), cov.length, t("allAreas"))) : t("noArea")}${!aOff && S.home !== "all" && homeCC() ? ` · ${esc(t("home_" + S.home))} ${flag(homeCC())}` : ""}</b>${caret}`;
    $("#plN > summary").innerHTML = `<span>${PRESET_IC[N.preset] || "🎯"}</span><span>${esc(t("p_" + N.preset))}</span><b class="num">${N.lat ? "≤" + N.lat + "ms" : ""}</b>${caret}`;
    $("#plM > summary").innerHTML = `${SVG_M}<span>${esc(t("m_" + S.mode))}</span><b class="num">×${MODES[S.mode]} · ${S.ip === "v6" ? "IPv6" : "IPv4"}</b>${caret}`;
    $("#popV").innerHTML = `<section class="pg"><div class="pg-h"><span>${t("pl_vendors")}</span>${allNone("vendors")}</div>
      <div class="chips">${VIDS.map(v => `<button type="button" class="chip${vCount(v) ? "" : " zero"}" data-v="${v}" aria-pressed="${S.vendors.includes(v)}">${esc(vnm(v))}<span class="c">${vCount(v)}</span></button>`).join("")}</div></section>
      <section class="pg"><div class="pg-h"><span>${t("cust_h")}</span>${S.custom.length > 1 ? allNone("custom") : ""}</div>
      ${S.custom.length ? `<div class="chips">${S.custom.map(c => `<span class="cchip${S.customSel.includes(String(c.k)) ? " on" : ""}" title="${esc(c.url)}"><button type="button" data-ck="${c.k}" aria-pressed="${S.customSel.includes(String(c.k))}">★ ${esc(c.name)}</button><button type="button" class="x" data-del="${c.k}" aria-label="${esc(t("del"))}">×</button></span>`).join("")}</div>` : ""}
      <form class="cform" id="cform" autocomplete="off"><div class="row"><input class="inp" id="cUrl" maxlength="500" placeholder="https://example.com/ping"></div>
      <div class="row"><input class="inp" id="cName" maxlength="40" placeholder="${esc(t("cust_name_ph"))}"><button class="btn ink sm" style="height:32px" type="submit">${t("add")}</button></div>
      <div class="err" id="cErr" hidden></div><div class="note">${t("cust_tip")}</div></form></section>`;
    $("#popA").innerHTML = `<section class="pg"><div class="pg-h"><span>${t("pl_areas")}</span>${allNone("cts")}</div>
      <div class="chips">${cov.map(c => `<button type="button" class="chip" data-c="${c}" aria-pressed="${S.cts.includes(c)}">${esc(t("ct_" + c))}<span class="c">${ALL.filter(e => e.continent === c && S.vendors.includes(e.vendor) && !excluded(e)).length}</span></button>`).join("")}</div></section>` + homeSection();
    $("#popN").innerHTML = `<section class="pg">${Object.keys(PRESETS).map(k => { const [l, j, s] = PRESETS[k];
      return `<button type="button" class="opt" data-p="${k}" aria-pressed="${N.preset === k}"><span class="ic">${PRESET_IC[k]}</span><span class="tx"><b>${esc(t("p_" + k))}</b><span>${l ? "≤" + l + " ms · ±" + j + " · " + (s ? "≤" + s + "%" : t("noLoss")) : t("anyLat")}</span></span></button>`; }).join("")}</section>
      <section class="pg"><div class="pg-h">${PRESET_IC.custom} ${t("p_custom")}</div><div class="need">
        <div><div class="need-l">${t("maxLat")}</div><label class="nin"><input id="nLat" type="number" min="0" inputmode="numeric" value="${N.lat || ""}" placeholder="${esc(t("noLimit"))}"><span>ms</span></label></div>
        <div><div class="need-l">${t("maxJit")}</div><label class="nin"><input id="nJit" type="number" min="0" inputmode="numeric" value="${N.jit || ""}" placeholder="${esc(t("noLimit"))}"><span>ms</span></label></div>
        <div><div class="need-l">${t("maxLoss")}</div><label class="nin"><input id="nLoss" type="number" min="0" max="100" inputmode="numeric" value="${N.loss || ""}" placeholder="0"><span>%</span></label></div></div></section>`;
    $("#popM").innerHTML = `<section class="pg">${Object.keys(MODES).map(k => `<button type="button" class="opt" data-m="${k}" aria-pressed="${S.mode === k}"><span class="ic num" style="font-size:14px;font-weight:600">×${MODES[k]}</span><span class="tx"><b>${esc(t("m_" + k))}</b><span style="font-family:var(--f-ui)">${esc(t("m_" + k + "D"))}</span></span></button>`).join("")}</section>` + ipSection();
    renderRun();
  }
  const dur = s => s < 60 ? t("secs", { n: Math.max(1, s) }) : t("mins", { n: Math.round(s / 60) });
  function estimate(n, k) { return Math.round(n * (k + 1) * (GAP_MS + 60 + 250) / 1000 / Math.max(1, S.conc)); }
  function renderRun() {
    const btn = $("#runBtn"), sel = selected().length;
    if (RUN) {
      btn.className = "go stop";
      btn.innerHTML = `<svg viewBox="0 0 16 16" fill="currentColor"><rect x="4" y="4" width="8" height="8" rx="1.5"/></svg>${t("stop")}`;
      let got = 0; const need = RUN.total * RUN.n;
      for (const e of RUN.list) { const r = R.get(e.id); if (r) got += r.st === "done" || r.st === "fail" ? RUN.n : Math.min(RUN.n, r.s.length); }
      const p = need ? got / need : 0, el = (performance.now() - RUN.t0) / 1000, left = p > .03 ? el / p - el : null;
      $("#bar").hidden = false; $("#bar i").style.width = (p * 100).toFixed(1) + "%";
      // which endpoints are on the wire right now, next to the counter
      const now = RUN.list.filter(e => { const r = R.get(e.id); return r && r.st === "running"; })
        .map(e => `<span class="nowi">${e.vendor === "custom" ? "★" : esc(vshort[e.vendor])} ${esc(e.city)}</span>`);
      $("#runT").innerHTML = `<span class="nowl"><b>${t("running", { d: RUN.done, n: RUN.total })}</b>${now.join("")}</span>${left != null ? `<span>${esc(t("eta", { t: dur(Math.round(left)) }))}</span>` : ""}`;
    } else {
      btn.className = "go"; btn.disabled = !sel;
      btn.innerHTML = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.5 2.8v10.4L13 8z"/></svg>${t(R.size && VIEW.live ? "again" : "start")}`;
      $("#bar").hidden = true;
      const done = [...R.values()].filter(r => r.st === "done").length;
      const last = R.size ? (VIEW.live ? t("lastRun", { n: done, d: fmtTs(VIEW.ts) }) : t(VIEW.shared ? "viewingShared" : "viewing", { d: fmtTs(VIEW.ts) })) + (VIEW.peak ? " · " + t("tagPeak") : "") : "";
      $("#runT").innerHTML = sel ? `<b>${t("startSub", { n: sel, t: dur(estimate(sel, MODES[S.mode])) })}</b>${last ? `<span>${esc(last)}</span>` : ""}` : `<b>${esc(t("pickFirst"))}</b>`;
    }
  }
  const fmtTs = ts => new Intl.DateTimeFormat(LANG, { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }).format(ts);

  /* ---------- results: podium, distribution, tier groups ---------- */
  const pos = v => clamp((Math.log(v) - Math.log(AX_MIN)) / (Math.log(AX_MAX) - Math.log(AX_MIN)), 0, 1) * 100;
  const rankList = () => (VIEW.shared ? ALL.filter(e => R.has(e.id)) : selected()).map(e => { const r = R.get(e.id), st = stats(r); return { e, r, st, pass: meets(st) }; });
  const byScore = (a, b) => a.st.score - b.st.score;
  const dirty = new Set(), fresh = new Set(); let openId = null, dirtyAll = true, lastSort = 0;
  function markDirty(id, isNew) { dirty.add(id); if (isNew) fresh.add(id); schedule(); }
  // rAF for smooth updates; the timeout covers background tabs, where rAF is paused
  let raf = 0, rafT = 0;
  function frame() { cancelAnimationFrame(raf); clearTimeout(rafT); raf = rafT = 0; renderResults(); renderRun(); }
  function schedule() { if (!raf && !rafT) { raf = requestAnimationFrame(frame); rafT = setTimeout(frame, 250); } }
  function renderAll() { dirtyAll = true; lastSort = 0; schedule(); }

  function renderResults() {
    const list = rankList(), ok = list.filter(x => x.st.ok);
    renderPodium(ok);
    renderViz(list);
    renderGroups(list);
    dirty.clear(); fresh.clear(); dirtyAll = false;
  }
  function renderPodium(ok) {
    const pass = ok.filter(x => x.pass), top = (pass.length ? pass : ok).slice().sort(byScore).slice(0, 3);
    $("#resWrap").hidden = !top.length;
    if (!top.length) return;
    $("#podiumT").textContent = t(pass.length ? "picks_h" : "picks_closest");
    $("#podiumS").textContent = pass.length ? t("picks_sub2", { n: pass.length, need: needText() }) : t("picks_none");
    $("#podium").innerHTML = top.map((x, i) => { const g = grade(x.st.med);
      return `<button type="button" class="pd c${g}" data-go="${esc(x.e.id)}"><span class="rk">#${i + 1}</span><span class="ms">${fmt(x.st.med)}<small>ms</small></span>
        <span class="inf"><span class="nm">${esc(x.e.city)}</span><span class="sb"><span class="tg">${tierCode(g)} ${esc(tierName(g))}</span><span>${esc(x.e.vname)}</span><span class="num">±${fmt(x.st.jit)}</span></span></span></button>`; }).join("");
  }
  const needText = () => { const N = S.need; return (N.lat ? "≤" + N.lat + " ms" : t("anyLat")) + (N.jit ? " · ±" + N.jit : ""); };
  // Distribution chart: one lane per provider on the shared log axis, tier bands behind. Each region is a dot at its
  // median with a whisker over the middle half of its samples. Elements are kept between frames, so a dot slides as its
  // median settles, and regions still being measured pulse.
  const spread = id => { let h = 7; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0; return ((h >>> 0) % 5) - 2; };
  let vizKey = "";
  const vizEls = new Map();
  function renderViz(list) {
    const vz = $("#vz");
    const lanes = [...new Set(list.map(x => x.e.vendor))];
    const got = list.filter(x => x.st.ok);
    // nothing chosen yet: no empty chart, the hero leads to the provider picker
    $("#vizCard").hidden = !lanes.length;
    if (!lanes.length) return;
    $("#vizSub").textContent = got.length ? t("vizSub", { n: got.length, p: got.filter(x => x.pass).length }) : "";
    const lh = lanes.length <= 2 ? 84 : lanes.length <= 5 ? 60 : 46;
    const key = [lanes.join(), S.need.lat, LANG, lh].join("|");
    if (key !== vizKey || !vz.firstChild) {
      vizKey = key; vizEls.clear();
      const bands = [AX_MIN].concat(GRADES, AX_MAX);
      let h = `<div class="lanes" style="--lh:${lh}px">`;
      // narrow bands only carry the code; the legend under the axis names every tier
      for (let g = 1; g <= 5; g++) h += `<div class="band b${g}" style="left:${pos(bands[g - 1])}%;width:${pos(bands[g]) - pos(bands[g - 1])}%"><span>${tierCode(g)}</span></div>`;
      if (S.need.lat) h += `<div class="needl" style="left:${pos(S.need.lat)}%"><span>${esc(t("needLine"))} ${S.need.lat}</span></div>`;
      h += lanes.map(v => `<div class="lane" data-v="${v}"><div class="ln"><b class="full">${esc(v === "custom" ? t("custom") : vnm(v))}</b><b class="short">${vshort[v]}</b><span class="lb"></span></div></div>`).join("");
      h += `<div class="vz-empty" hidden><span></span></div></div>`;
      h += `<div class="axis">${TICKS.map(v => `<span style="left:${pos(v)}%">${v >= 1000 ? v / 1000 + "s" : v}</span>`).join("")}</div>`;
      h += `<div class="legend">${[1, 2, 3, 4, 5].map(g => `<span class="c${g}"><i></i>${tierCode(g)} ${esc(tierName(g))} <em>${g < 5 ? "≤" + GRADES[g - 1] : ">" + GRADES[3]} ms</em></span>`).join("")}<span><i class="o"></i>${esc(t("lgMiss"))}</span><span><i class="lv"></i>${esc(t("lgLive"))}</span></div>`;
      vz.innerHTML = h;
    }
    const empty = $(".vz-empty", vz);
    empty.hidden = !!got.length;
    empty.firstChild.textContent = t(lanes.length ? "viz_empty" : "pickFirst");
    for (const v of lanes) {
      const best = got.filter(x => x.e.vendor === v).sort(byScore)[0];
      const lb = $(`.lane[data-v="${v}"] .lb`, vz);
      if (lb) { lb.textContent = best ? `${best.e.city} · ${fmt(best.st.med)} ms` : ""; lb.className = "lb c" + (best ? grade(best.st.med) : 0); }
    }
    const seen = new Set();
    for (const x of got) {
      const lane = $(`.lane[data-v="${x.e.vendor}"]`, vz); if (!lane) continue;
      const id = x.e.id, g = grade(x.st.med), live = x.r.st === "running";
      seen.add(id);
      let el = vizEls.get(id);
      if (!el) {
        el = { wk: document.createElement("i"), dot: document.createElement("i") };
        el.dot.dataset.go = el.dot.dataset.tipid = id;
        lane.append(el.wk, el.dot); vizEls.set(id, el);
      }
      const dy = spread(id) * lh / 10;
      el.wk.className = `wk c${g}`;
      el.wk.style.cssText = `left:${pos(x.st.p25)}%;width:${Math.max(.4, pos(x.st.p75) - pos(x.st.p25))}%;top:calc(50% + ${dy}px)`;
      el.dot.className = `vd c${g}${x.pass ? "" : " miss"}${live ? " live" : ""}${!live && fresh.has(id) ? " new" : ""}`;
      el.dot.style.left = pos(x.st.med) + "%"; el.dot.style.top = `calc(50% + ${dy}px)`;
    }
    for (const [id, el] of vizEls) if (!seen.has(id)) { el.wk.remove(); el.dot.remove(); vizEls.delete(id); }
  }
  const rowEls = new Map();
  function rowHTML(x) {
    const { e, r, st } = x, g = grade(st.med);
    let sp = TICKS.map(v => `<i class="gl" style="left:${pos(v)}%"></i>`).join("");
    if (r && r.st === "running" && !r.s.length) sp += `<i class="runm"></i>`;
    if (st.ok) {
      sp += `<i class="bx" style="left:${pos(st.p25)}%;width:${Math.max(.6, pos(st.p75) - pos(st.p25))}%"></i><i class="md" style="left:${pos(st.med)}%"></i>`;
      sp += r.s.map(v => v == null ? "" : `<i class="d" style="left:${pos(v)}%"></i>`).join("");
    }
    if (st.n && st.ok < st.n) sp += `<span class="x">×${st.n - st.ok}</span>`;
    const flag = st.ok && shaky(st) ? `<span class="r-f" title="${esc(st.loss ? t("lossWarn", { p: Math.round(st.loss * 100) }) : t("jitWarn", { j: fmt(st.jit) }))}">⚠</span>` : `<span></span>`;
    return `<div class="r rg" role="button" tabindex="0" aria-expanded="${openId === e.id}">
      <span class="vb">${vshort[e.vendor] || ""}</span>
      <span class="r-nm"><b>${esc(e.city)}</b><span>${esc(e.region)}${e.country ? " · " + esc(country(e.country)) : ""}</span></span>
      <span class="sp c-sp c${g}" data-tipid="${esc(e.id)}">${sp}</span>
      ${flag}
      <span class="r-v c${st.ok ? g : 0}">${st.ok ? fmt(st.med) + "<small>ms</small>" : r && r.st === "fail" ? "✕" : r && r.st === "nov6" ? `<small>${esc(t("nov6"))}</small>` : "…"}</span></div>`;
  }
  function renderGroups(list) {
    const card = $("#listCard"), box = $("#groups");
    const touched = list.filter(x => x.r);
    card.hidden = !touched.length;
    if (!touched.length) { box.innerHTML = ""; rowEls.clear(); return; }
    const q = $("#q").value.trim().toLowerCase();
    const shown = touched.filter(x => (!q || (x.e.vname + " " + x.e.city + " " + (x.e.cityEn || "") + " " + x.e.region + " " + country(x.e.country)).toLowerCase().includes(q)) && (!S.onlyPass || x.pass));
    // groups: T0…T4 by median, then "waiting / unreachable"
    const nov6 = x => x.r && x.r.st === "nov6";
    const G = [1, 2, 3, 4, 5, 0, -1].map(g => ({ g, items: shown.filter(x => x.st.ok ? grade(x.st.med) === g : g === -1 ? nov6(x) : g === 0 && !nov6(x)) }));
    const now = performance.now();
    const resort = dirtyAll || !RUN || now - lastSort > 1000;
    if (resort) lastSort = now;
    if (box.querySelectorAll(".grp").length !== G.length) box.innerHTML = G.map(({ g }) => `<div class="grp" data-g="${g}"><div class="grp-h"></div><div class="grp-b"></div></div>`).join("");
    for (const { g, items } of G) {
      const el = box.querySelector(`.grp[data-g="${g}"]`);
      el.hidden = !items.length;
      const meds = items.filter(x => x.st.ok).map(x => x.st.med);
      el.firstChild.innerHTML = g > 0 ? `<span class="tg c${g}">${tierCode(g)} · ${esc(tierName(g))}</span><span class="n">${items.length}</span><span class="rng">${meds.length ? fmt(Math.min(...meds)) + "–" + fmt(Math.max(...meds)) + " ms" : ""}</span>`
        : `<span class="tg c0">${esc(t(g === -1 ? "grp_nov6" : "grp_other"))}</span><span class="n">${items.length}</span>`;
      const body = el.lastChild;
      if (!items.length) { body.innerHTML = ""; continue; }
      if (resort) items.sort((a, b) => a.st.ok && b.st.ok ? byScore(a, b) : (a.r.st === "running" ? -1 : 0) - (b.r.st === "running" ? -1 : 0));
      else items.sort((a, b) => (rowEls.get(a.e.id)?.__o ?? 1e9) - (rowEls.get(b.e.id)?.__o ?? 1e9));
      items.forEach((x, i) => {
        let row = rowEls.get(x.e.id);
        if (!row) { row = document.createElement("div"); row.className = "ri"; row.dataset.id = x.e.id; rowEls.set(x.e.id, row); }
        if (dirtyAll || dirty.has(x.e.id) || !row.firstChild || row.__g !== g) {
          row.innerHTML = rowHTML(x) + (openId === x.e.id ? detHTML(x) : "");
          row.classList.toggle("open", openId === x.e.id);
          row.classList.toggle("fail", !!x.r && x.r.st === "fail");
          row.__g = g;
        }
        row.__o = i;
        if (body.children[i] !== row) body.insertBefore(row, body.children[i] || null);
      });
      while (body.children.length > items.length) { const extra = body.lastChild; rowEls.forEach((v, k) => { if (v === extra) rowEls.delete(k); }); extra.remove(); }
    }
    const keep = new Set(shown.map(x => x.e.id));
    for (const [id, el] of rowEls) if (!keep.has(id)) { el.remove(); rowEls.delete(id); }
  }
  function chartSVG(r, st) {
    const W = 600, H = 130, P = { l: 34, r: 8, t: 10, b: 18 }, s = r.s, n = Math.max(2, s.length);
    const mx = Math.max(10, (st.max || 10) * 1.15);
    const X = i => P.l + (W - P.l - P.r) * (s.length > 1 ? i / (n - 1) : .5), Y = v => P.t + (H - P.t - P.b) * (1 - v / mx);
    let path = "", pen = false;
    s.forEach((v, i) => { if (v == null) { pen = false; return; } path += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(v).toFixed(1); pen = true; });
    const ticks = [0, mx / 2, mx].map(v => `<text x="${P.l - 6}" y="${Y(v) + 3}" text-anchor="end">${Math.round(v)}</text><line x1="${P.l}" x2="${W - P.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/>`).join("");
    const dots = s.map((v, i) => v == null ? `<text x="${X(i)}" y="${P.t + 8}" text-anchor="middle" style="fill:var(--bad);font-weight:700">×</text>` : `<circle cx="${X(i)}" cy="${Y(v)}" r="3" fill="currentColor"><title>#${i + 1}: ${fmt(v)} ms</title></circle>`).join("");
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="c${grade(st.med)}" role="img" aria-label="${esc(t("chartAria"))}">${ticks}
      ${st.ok ? `<line x1="${P.l}" x2="${W - P.r}" y1="${Y(st.med)}" y2="${Y(st.med)}" stroke="currentColor" stroke-dasharray="4 4" opacity=".7"/>` : ""}
      <path d="${path}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>${dots}</svg>`;
  }
  function detHTML(x) {
    const { e, r, st } = x, V = ENDPOINTS.vendors[e.vendor];
    const kv = (k, v) => `<div class="kv"><span class="lbl">${t(k)}</span><span class="v">${v}</span></div>`;
    const ms = v => v == null || !isFinite(v) ? "–" : fmt(v) + " ms";
    const lines = [`<span>${esc(e.vname)} · ${t("d_method")} <b>${esc(r ? r.m : e.method)}</b>${r && r.w != null ? " · " + t("d_warm") + " " + fmt(r.w) + " ms" : ""} · <code>${esc(e.url)}</code></span>`];
    if (r && r.m === "IMG") lines.push(`<span class="w">${t("d_cold")}</span>`);
    if (r && r.st === "nov6") lines.push(`<span class="w">${t("d_nov6")}</span>`);
    else if (r && r.ip === "v6") lines.push(`<span>${t("d_v6")}</span>`);
    else if (r && (e.fam || "").includes("6")) lines.push(`<span class="w">${t("d_dual")}</span>`);
    if (r && r.vf === true) lines.push(`<span style="color:var(--pool)">✓ ${t("d_verified")}</span>`);
    if (r && r.vf === false) lines.push(`<span class="w">${t("d_notverified")}</span>`);
    if (e.review) lines.push(`<span class="w">${t("d_review")}</span>`);
    if (e.vendor !== "custom") lines.push(`<span>${esc(vtext(e.vendor, "kind"))} · ${esc(vtext(e.vendor, "note"))}</span>`);
    return `<div class="det">
      <div>${r && r.s.length ? chartSVG(r, st) : `<div class="empty">${t(r && r.sum ? "sharedNoRaw" : "noSamples")}</div>`}</div>
      <div class="dstats">${kv("d_med", ms(st.med))}${kv("d_jit", st.ok > 1 ? "±" + ms(st.jit) : "–")}${kv("d_loss", st.n ? Math.round(st.loss * 100) + "%" : "–")}${kv("d_min", ms(st.min))}${kv("d_avg", ms(st.avg))}${kv("d_p90", ms(st.p90))}</div>
      <div class="dmeta">${lines.join("")}<div class="dbtns"><button class="btn sm" type="button" data-retest="${esc(e.id)}" ${RUN ? "disabled" : ""}>${t("retest")}</button><button class="btn sm" type="button" data-copy="${esc(e.url)}">${t("copyUrl")}</button></div></div>
    </div>`;
  }

  /* ---------- history ---------- */
  function renderHist() {
    const h = loadHist(), sel = $("#hist");
    $("#histWrap").hidden = !h.length;
    sel.innerHTML = `<option value="">${esc(t("histCurrent"))}</option>` + h.map((x, i) => `<option value="${i}">${esc(fmtTs(x.ts))}${x.peak ? " · " + esc(t("tagPeak")) : ""} · ${Object.keys(x.res).length}</option>`).join("");
    sel.value = VIEW.live ? "" : String(h.findIndex(x => x.ts === VIEW.ts));
  }

  /* ---------- bypass rules ---------- */
  // this site's address, for the remote rule sets and the share card; the public one when running locally
  const SITE = /^(localhost|127\.|\[)/.test(location.hostname) ? "https://m2c.1ms.dog" : location.origin;
  const ruleNote = r => r.v === "_detect" ? t("rc_detect") : r.v === "custom" ? "★ " + r.n
    : [vnm(r.v), vtext(r.v, "kind")].filter(Boolean).join(" · ");
  // exact hosts only (every endpoint, IPv6 hosts included, then the network check), so nothing else goes direct;
  // all regions, not just the current selection, so one paste covers any later test
  function ruleItems(withCustom) {
    const items = [], seen = new Set(), add = r => { if (!seen.has(r.d)) { seen.add(r.d); items.push(r); } };
    for (const e of ENDPOINTS.endpoints) for (const u of [e.url, e.url6]) if (u) add({ v: e.vendor, d: hostOf(u) });
    RULE_SPEC.forEach(r => add(Object.assign({}, r)));
    if (withCustom) S.custom.forEach(c => add({ v: "custom", d: hostOf(c.url), n: c.name }));
    return items.map(r => Object.assign(r, { c: ruleNote(r) }));
  }
  function ruleLine(f, { d }) {
    switch (f) {
      case "clash": case "surge": case "shadowrocket": case "loon": return `DOMAIN,${d},DIRECT`;
      case "quanx": return `host, ${d}, direct`;
      default: return d;
    }
  }
  // the DNS side of fake-ip setups: these hosts must resolve to real addresses
  const realIp = (f, items) => f === "clash" ? `dns:\n  fake-ip-filter:\n` + items.map(i => `    - ${i.d}`).join("\n")
    : `[General]\nalways-real-ip = ` + items.map(i => i.d).join(", ");
  function ruleInline(f, items) {
    const hosts = items.map(i => i.d);
    if (f === "singbox") return JSON.stringify({ route: { rules: [{ domain: hosts, outbound: "direct" }] }, dns: { rules: [{ domain: hosts, server: "local" }] } }, null, 2);
    if (f === "xray") return JSON.stringify({ routing: { rules: [{ type: "field", domain: hosts.map(d => "full:" + d), outboundTag: "direct" }] } }, null, 2);
    if (f === "omega") return hosts.join("\n");
    // one comment per provider rather than per host
    const ind = f === "clash" ? "  - " : "", cind = f === "clash" ? "  " : "";
    const body = items.map((i, k) => (k && items[k - 1].c === i.c ? "" : `${cind}# ${i.c}\n`) + ind + ruleLine(f, i)).join("\n");
    const head = { clash: "rules:", surge: "[Rule]", shadowrocket: "[Rule]", loon: "[Rule]", quanx: "[filter_local]" }[f];
    const dns = f === "clash" || f === "surge" || f === "shadowrocket" ? `\n\n# ${t("rules_fakeip")}\n` + realIp(f, items) : "";
    return (head ? head + "\n" : "") + body + dns;
  }
  // remote rule sets: generated by scripts/build.mjs from the same hosts, so they update when regions are added
  function ruleRemote(f) {
    const u = SITE + "/rules/";
    switch (f) {
      case "clash": return `rule-providers:\n  me2cloud:\n    type: http\n    behavior: classical\n    format: yaml\n    url: ${u}clash.yaml\n    path: ./ruleset/me2cloud.yaml\n    interval: 86400\n\nrules:\n  - RULE-SET,me2cloud,DIRECT   # ${t("rc_top")}\n\n# ${t("rules_fakeip")}\n` + realIp(f, ruleItems(false));
      case "surge": return `[Rule]\n# ${t("rc_top")}\nRULE-SET,${u}surge.list,DIRECT,update-interval=86400\n\n# ${t("rules_fakeip")}\n` + realIp(f, ruleItems(false));
      case "shadowrocket": return `[Rule]\n# ${t("rc_top")}\nRULE-SET,${u}surge.list,DIRECT\n\n# ${t("rules_fakeip")}\n` + realIp(f, ruleItems(false));
      case "quanx": return `[filter_remote]\n${u}quanx.list, tag=Me2Cloud, force-policy=direct, update-interval=86400, opt-parser=false, enabled=true`;
      case "loon": return `[Remote Rule]\n${u}loon.list, policy=DIRECT, tag=Me2Cloud, enabled=true`;
      case "singbox": return JSON.stringify({ route: { rule_set: [{ tag: "me2cloud", type: "remote", format: "source", url: u + "singbox.json", download_detour: "direct", update_interval: "1d" }],
        rules: [{ rule_set: "me2cloud", outbound: "direct" }] } }, null, 2);
    }
    return null;
  }
  const codeBox = (text, i) => `<div class="code"><textarea readonly spellcheck="false" rows="${Math.min(16, text.split("\n").length + 1)}" data-ta="${i}">${esc(text)}</textarea><button class="btn sm" type="button" data-copyta="${i}">${t("copy")}</button></div>`;
  function renderRules() {
    const f = S.ruleFmt;
    $("#ruleTabs").innerHTML = RULE_FORMATS.map(x => `<button type="button" role="tab" data-f="${x}" aria-selected="${f === x}">${x === "plain" ? esc(t("rules_plain")) : RULE_NAMES[x]}</button>`).join("");
    const all = ruleItems(true), remote = ruleRemote(f), customs = all.filter(i => i.v === "custom");
    const json = f === "singbox" || f === "xray";
    let h = "";
    if (remote) {
      h += `<section class="rblk"><div class="rblk-h"><b>${t("rules_remote_h")}</b><span class="note">${t("rules_remote_s")}</span></div>${codeBox(remote, 0)}
        ${customs.length ? `<div class="note">${t("rules_custom")}</div>${codeBox(customs.map(i => (json ? "" : "# " + i.c + "\n") + ruleLine(f, i)).join("\n"), 2)}` : ""}</section>`;
      h += `<details class="rblk"><summary>${t("rules_inline_h", { n: all.length })}</summary>${codeBox(ruleInline(f, all), 1)}</details>`;
    } else {
      h += `<section class="rblk"><div class="rblk-h"><b>${t("rules_inline_only", { n: all.length })}</b></div>${codeBox(ruleInline(f, all), 1)}</section>`;
    }
    h += `<div class="note">${esc(t("rules_note_" + f))}${json ? " " + esc(t("rules_json_note")) : ""}</div>`;
    $("#ruleBody").innerHTML = h;
    $("#ruleSteps").innerHTML = ((I18N[LANG] || {}).rules_steps || I18N.en.rules_steps).map(s => `<li>${s}</li>`).join("");
  }
  function openDlg(id) { $$("details.menu[open]").forEach(d => { d.open = false; }); $("#" + id).hidden = false; document.documentElement.style.overflow = "hidden"; $("#" + id + " [data-close]").focus(); }
  function closeDlg() { $$(".scrim").forEach(s => { s.hidden = true; }); document.documentElement.style.overflow = ""; }

  /* ---------- docs ---------- */
  let helpIdx = 0;
  function renderDocs() {
    $$("#helpNav [data-hq]").forEach(b => b.setAttribute("aria-selected", +b.dataset.hq === helpIdx));
    $$("#helpC [data-hqb]").forEach(a => { a.hidden = +a.dataset.hqb !== helpIdx; });
    const sel = $("#helpSel");
    sel.value = helpIdx;
    $$("[data-hstep]").forEach(b => { b.disabled = helpIdx + +b.dataset.hstep < 0 || helpIdx + +b.dataset.hstep >= sel.options.length; });
    $("#helpC").scrollTop = 0;
  }
  function openHelp(i) { helpIdx = clamp(i, 0, $$("#helpNav [data-hq]").length - 1); renderDocs(); openDlg("help"); const b = $(`#helpNav [data-hq="${i}"]`); b && b.scrollIntoView({ block: "nearest", inline: "nearest" }); }

  /* ---------- export / import ---------- */
  function download(name, text, type) {
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }
  const stamp = () => new Date(VIEW.ts || Date.now()).toISOString().slice(0, 16).replace(/[:T]/g, "-");
  function exportCSV() {
    const rows = [["id", "provider", "region", "city", "country", "url", "method", "tier", "samples", "ok", "loss_pct", "min_ms", "median_ms", "avg_ms", "p90_ms", "max_ms", "jitter_ms", "stdev_ms", "fits_needs", "cors_verified", "raw_ms"]];
    for (const x of rankList()) {
      if (!x.r || x.r.st === "queued") continue;
      const s = x.st, f = v => v == null || !isFinite(v) ? "" : (Math.round(v * 10) / 10).toString();
      rows.push([x.e.id, x.e.vname, x.e.region, x.e.city, x.e.country, x.e.url, x.r.m, s.ok ? tierCode(grade(s.med)) : "", s.n, s.ok, f(s.loss * 100), f(s.min), f(s.med), f(s.avg), f(s.p90), f(s.max), f(s.jit), f(s.sd), x.pass ? "yes" : "no", x.r.vf == null ? "" : x.r.vf ? "yes" : "no", x.r.s.map(v => v == null ? "x" : v).join(" ")]);
    }
    download(`me2cloud-${stamp()}.csv`, "﻿" + rows.map(r => r.map(c => /[",\n]/.test(String(c)) ? `"${String(c).replace(/"/g, '""')}"` : c).join(",")).join("\n"), "text/csv");
  }
  function exportJSON() { download(`me2cloud-${stamp()}.json`, JSON.stringify(Object.assign({ tool: "Me2Cloud", verified: ENDPOINTS.verified }, snapshot()), null, 1), "application/json"); }

  /* ---------- share: a link (results packed into the URL) and an image card, both made in this browser ---------- */
  const b64u = bytes => { let s = ""; for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
  const b64d = str => { const s = atob(str.replace(/-/g, "+").replace(/_/g, "/")); const b = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; };
  const zip = async text => new Uint8Array(await new Response(new Blob([text]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer());
  const unzip = bytes => new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
  // whose line it was: the sharer's in a shared view, otherwise this visitor's network check
  function shareLoc() {
    const P = VIEW.shared;
    if (P) return { city: P.l ? P.l[0] : "", cc: P.l ? P.l[1] : "", org: P.l ? P.l[2] : "", proxy: !!P.x };
    return { city: NET.city || "", cc: NET.cc || "", org: NET.org || "", proxy: NET.verdict === "warn" };
  }
  // payload: per provider [region, median, p25, p75, p90, jitter (ms × 10), loss %, samples]; never the IP or custom endpoints
  function sharePayload(withLoc) {
    const r = {}, k = v => Math.round(v * 10), L = shareLoc();
    for (const x of rankList()) {
      if (x.e.vendor === "custom" || !x.st.ok) continue;
      (r[x.e.vendor] = r[x.e.vendor] || []).push([x.e.region, k(x.st.med), k(x.st.p25), k(x.st.p75), k(x.st.p90), k(x.st.jit), Math.round(x.st.loss * 100), x.st.n]);
    }
    return { v: 1, t: Math.round((VIEW.ts || Date.now()) / 60000), p: VIEW.peak ? 1 : 0, k: VIEW.mode || MODES[S.mode], f: VIEW.ip === "v6" ? 6 : 4, x: L.proxy ? 1 : 0, l: withLoc && (L.city || L.org) ? [L.city, L.cc, L.org] : 0, r };
  }
  const shareLink = async withLoc => location.origin + location.pathname + "#s=" + b64u(await zip(JSON.stringify(sharePayload(withLoc))));
  async function loadShared() {
    const m = /(?:^#|&)s=([A-Za-z0-9_-]+)/.exec(location.hash);
    if (!m) return false;
    try {
      const P = JSON.parse(await unzip(b64d(m[1])));
      if (!P || P.v !== 1 || !P.r || typeof P.r !== "object") throw 0;
      const next = new Map();
      for (const [v, rows] of Object.entries(P.r)) for (const row of rows) {
        const [reg, med, p25, p75, p90, jit, loss, n] = row, id = v + ":" + reg;
        if (!ALL.some(e => e.id === id)) continue;
        next.set(id, { s: [], st: "done", m: "", sum: { med: med / 10, p25: p25 / 10, p75: p75 / 10, p90: p90 / 10, jit: jit / 10, loss: loss / 100, n } });
      }
      R = next; VIEW = { ts: P.t * 60000, live: false, peak: !!P.p, mode: P.k, ip: P.f === 6 ? "v6" : "v4", shared: P }; openId = null;
      return true;
    } catch (e) { toast(t("share_bad")); return false; }
  }
  function renderShared() {
    const P = VIEW.shared;
    $("#sharedBar").hidden = !P;
    if (!P) return;
    const who = P.l ? [P.l[0], country(P.l[1]), P.l[2]].filter(Boolean).join(" · ") : t("share_anon");
    $("#sharedT").innerHTML = (P.l ? flag(P.l[1], "nb-flag") : "") + esc(t("share_banner", { who, d: fmtTs(P.t * 60000) }) + (P.f === 6 ? " · IPv6" : "") + (P.p ? " · " + t("tagPeak") : "") + (P.x ? " · " + t("share_viaProxy") : ""));
  }
  const clearHash = () => { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} };
  function exitShared() {
    clearHash(); R = new Map(); VIEW = { ts: 0, live: true };
    try { const last = JSON.parse(localStorage.getItem(RES_KEY)); if (last && last.res) applySnapshot(last, true); } catch (e) {}
    renderShared(); renderAll();
  }
  // run the shared regions' providers and areas on this visitor's own line
  function testSame() {
    const eps = ALL.filter(e => R.has(e.id));
    S.vendors = VIDS.filter(v => eps.some(e => e.vendor === v));
    S.cts = CT_ORDER.filter(c => eps.some(e => e.continent === c));
    save(); exitShared(); renderCtrl();
    runTests(selected(), MODES[S.mode], S.conc);
  }

  let qrLib = null;
  const loadQR = () => qrLib || (qrLib = new Promise((res, rej) => { const s = document.createElement("script"); s.src = "/vendor/qrcode.min.js"; s.onload = () => res(window.qrcode); s.onerror = rej; document.head.appendChild(s); }));
  const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  function logoImage() {
    const th = document.documentElement.getAttribute("data-theme"), dark = th ? th === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    return new Promise(res => { const img = new Image(); img.onload = () => res(img); img.onerror = () => res(null); img.src = dark ? "/assets/logo-dark.svg" : "/assets/logo-light.svg"; });
  }
  // the image card, 1080 × 1350, in the page's current theme; everything is drawn locally on a canvas
  async function drawCard(withLoc) {
    const W = 1080, H = 1350, P = 72, cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    const g = cv.getContext("2d");
    const C = { bg: cssVar("--panel"), fg: cssVar("--fg"), mu: cssVar("--muted"), line: cssVar("--line"), t: [0, 1, 2, 3, 4, 5].map(i => cssVar(i ? "--g" + i : "--muted")) };
    const FF = cssVar("--f-ui"), FN = cssVar("--f-num");
    const font = (w, s, mono) => { g.font = `${w} ${s}px ${mono ? FN : FF}`; };
    const text = (s, x, y, color, align) => { g.fillStyle = color; g.textAlign = align || "left"; g.fillText(s, x, y); };
    const fit = (s, max) => { s = String(s); if (g.measureText(s).width <= max) return s; while (s.length > 1 && g.measureText(s + "…").width > max) s = s.slice(0, -1); return s + "…"; };
    const rr = (x, y, w, h, r) => { g.beginPath(); g.roundRect(x, y, w, h, r); };
    try { await document.fonts.ready; } catch (e) {}
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    const logo = await logoImage();
    if (logo) g.drawImage(logo, P, P - 8, 200, 80);
    font(500, 28, true); g.textBaseline = "middle"; text(fmtTs(VIEW.ts || Date.now()), W - P, P + 32, C.mu, "right"); g.textBaseline = "alphabetic";
    // long titles shrink before they get cut
    let ts = 54; font(700, ts); while (ts > 40 && g.measureText(t("card_title")).width > W - 2 * P) font(700, ts -= 2);
    text(fit(t("card_title"), W - 2 * P), P, 236, C.fg);
    const L = shareLoc(), list = rankList().filter(x => x.st.ok && x.e.vendor !== "custom");
    // two meta lines: whose line it is, then how it was measured
    const where = withLoc ? [L.city, L.org].filter(Boolean).join(" · ") : "";
    const how = [L.proxy ? t("pxShort") : t("okShort"), VIEW.ip === "v6" ? "IPv6" : "IPv4", VIEW.peak ? t("tagPeak") : "", t("card_regions", { n: list.length, k: VIEW.mode || MODES[S.mode] })].filter(Boolean).join("  ·  ");
    font(500, 28); text(fit(where || how, W - 2 * P), P, 288, C.mu);
    if (where) text(fit(how, W - 2 * P), P, 328, C.mu);
    // podium
    const pool = list.filter(x => x.pass).length ? list.filter(x => x.pass) : list, top = pool.slice().sort(byScore).slice(0, 3);
    const cw = (W - 2 * P - 48) / 3, cy = 362, ch = 228;
    top.forEach((x, i) => {
      const cx = P + i * (cw + 24), gr = grade(x.st.med), col = C.t[gr];
      rr(cx, cy, cw, ch, 22); g.strokeStyle = C.line; g.lineWidth = 2; g.stroke();
      g.save(); rr(cx, cy, cw, ch, 22); g.clip(); g.fillStyle = col; g.fillRect(cx, cy + ch - 10, cw, 10); g.restore();
      font(600, 26, true); text("#" + (i + 1), cx + 26, cy + 50, C.mu);
      font(700, 22); text(fit(tierCode(gr) + " " + tierName(gr), cw - 110), cx + cw - 24, cy + 50, col, "right");
      font(700, 76, true); text(fmt(x.st.med), cx + 24, cy + 128, col);
      const mw = g.measureText(fmt(x.st.med)).width;
      font(500, 28, true); text("ms", cx + 30 + mw, cy + 128, C.mu);
      font(700, 32); text(fit(x.e.city, cw - 48), cx + 26, cy + 172, C.fg);
      font(500, 24); text(fit(x.e.vname, cw - 48), cx + 26, cy + 204, C.mu);
    });
    // distribution: up to 6 providers, best first, same log axis and tier bands as the page
    const vs = [...new Set(list.map(x => x.e.vendor))].map(v => ({ v, best: list.filter(x => x.e.vendor === v).sort(byScore)[0] })).sort((a, b) => byScore(a.best, b.best));
    const lanes = vs.slice(0, 6), more = vs.length - lanes.length;
    const lx = P + 196, rx = W - P, y0 = 640, lh = 56, ph = lh * Math.max(1, lanes.length);
    const X = v => lx + (rx - lx) * pos(v) / 100, bands = [AX_MIN].concat(GRADES, AX_MAX);
    for (let k = 1; k <= 5; k++) {
      g.globalAlpha = .1; g.fillStyle = C.t[k]; g.fillRect(X(bands[k - 1]), y0, X(bands[k]) - X(bands[k - 1]), ph); g.globalAlpha = 1;
    }
    lanes.forEach(({ v }, i) => {
      const y = y0 + i * lh + lh / 2;
      if (i) { g.strokeStyle = C.line; g.lineWidth = 1.5; g.setLineDash([6, 6]); g.beginPath(); g.moveTo(lx, y0 + i * lh); g.lineTo(rx, y0 + i * lh); g.stroke(); g.setLineDash([]); }
      font(600, 23); g.textBaseline = "middle"; text(fit(vnm(v), 178), lx - 16, y, C.fg, "right"); g.textBaseline = "alphabetic";
      for (const x of list.filter(z => z.e.vendor === v)) {
        const col = C.t[grade(x.st.med)], cx = X(x.st.med), cyy = y + spread(x.e.id) * lh / 12;
        g.beginPath(); g.arc(cx, cyy, 10, 0, Math.PI * 2);
        g.fillStyle = x.pass ? col : C.bg; g.fill(); g.lineWidth = x.pass ? 3 : 4; g.strokeStyle = x.pass ? C.bg : col; g.stroke();
      }
    });
    // tier labels last, on a chip, so the dots of the first lane don't cover them
    font(700, 20, true);
    for (let k = 1; k <= 5; k++) {
      const tx = X(bands[k - 1]) + 6, tw = g.measureText(tierCode(k)).width;
      g.fillStyle = C.bg; g.globalAlpha = .85; rr(tx - 4, y0 + 6, tw + 8, 24, 5); g.fill(); g.globalAlpha = 1;
      text(tierCode(k), tx, y0 + 24, C.t[k]);
    }
    font(500, 22, true);
    for (const v of [5, 20, 100, 500, 2000]) text(v >= 1000 ? v / 1000 + "s" : String(v), X(v), y0 + ph + 32, C.mu, "center");
    if (more > 0) { font(500, 22); text(t("card_more", { n: more }), lx - 18, y0 + ph + 32, C.mu, "right"); }
    // tier totals sit right above the footer; whatever space is left above them lists the next regions (#4, #5 …)
    const fy0 = H - P - 150, by = fy0 - 96;
    const rest = pool.slice().sort(byScore).filter(x => !top.includes(x)), ry = y0 + ph + 64, rh = 46;
    const nrows = Math.max(0, Math.min(rest.length, Math.floor((by - 28 - ry) / rh), 8));
    for (let i = 0; i < nrows; i++) {
      const x = rest[i], y = ry + i * rh + 32, gr = grade(x.st.med), col = C.t[gr];
      if (i) { g.strokeStyle = C.line; g.lineWidth = 1; g.beginPath(); g.moveTo(P, y - 32); g.lineTo(W - P, y - 32); g.stroke(); }
      font(600, 22, true); text("#" + (i + 4), P, y, C.mu);
      font(700, 26); text(fit(x.e.city, 300), P + 64, y, C.fg);
      font(500, 22); text(fit(x.e.vname, 260), P + 380, y, C.mu);
      font(700, 22); text(tierCode(gr) + " " + tierName(gr), W - P - 150, y, col, "right");
      font(700, 28, true); text(fmt(x.st.med), W - P - 40, y, col, "right");
      font(500, 20, true); text("ms", W - P, y, C.mu, "right");
    }
    const counts = [1, 2, 3, 4, 5].map(k => list.filter(x => grade(x.st.med) === k).length), tot = list.length || 1;
    g.save(); rr(P, by, W - 2 * P, 20, 10); g.clip(); g.fillStyle = C.line; g.fillRect(P, by, W - 2 * P, 20);
    let bx = P; counts.forEach((c, i) => { const w = (W - 2 * P) * c / tot; g.fillStyle = C.t[i + 1]; g.fillRect(bx, by, w, 20); bx += w; }); g.restore();
    font(600, 24); counts.forEach((c, i) => text(fit(`${tierCode(i + 1)} ${tierName(i + 1)} ${c}`, (W - 2 * P) / 5 - 8), P + (W - 2 * P) / 5 * i, by + 54, C.t[i + 1]));
    // footer: invitation, address and a QR code to the site
    const fy = H - P - 150;
    g.strokeStyle = C.line; g.lineWidth = 2; g.beginPath(); g.moveTo(P, fy); g.lineTo(W - P, fy); g.stroke();
    font(700, 36); text(fit(t("card_cta"), W - 2 * P - 200), P, fy + 74, C.fg);
    font(500, 26); text(new URL(SITE).host + "  ·  " + t("card_local"), P, fy + 120, C.mu);
    try {
      const q = (await loadQR())(0, "M"); q.addData(SITE + "/"); q.make();
      const n = q.getModuleCount(), size = 130, m = size / n, qx = W - P - size, qy = fy + 20;
      g.fillStyle = "#ffffff"; rr(qx - 10, qy - 10, size + 20, size + 20, 12); g.fill(); g.fillStyle = "#000000";
      for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) g.fillRect(qx + c * m, qy + r * m, m + .5, m + .5);
    } catch (e) {}
    return cv;
  }
  // Optional short links. A host can announce a shortener with <meta name="shortener" content="https://…">: it takes
  // POST {"url"} and answers {"url"}. With the tag the dialog gives the short link instead of the full one.
  const shortener = () => (document.querySelector('meta[name="shortener"]') || {}).content || "";
  const shortCache = new Map();
  async function shorten(url) {
    if (!shortCache.has(url)) {
      shortCache.set(url, fetch(shortener(), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url }) })
        .then(r => r.ok ? r.json() : null).then(s => s && s.url ? s : null).catch(() => null));
    }
    const s = await shortCache.get(url);
    if (!s) shortCache.delete(url);
    return s;
  }
  let shareCache = null;
  async function refreshShare() {
    const withLoc = $("#shareLoc").checked;
    S.shareLoc = withLoc; save();
    $("#shareImg").classList.add("busy");
    let link = await shareLink(withLoc);
    const n = Object.values(sharePayload(withLoc).r).reduce((a, b) => a + b.length, 0);
    let note = t("share_len", { k: n, n: link.length });
    if (shortener()) {
      $("#shareLink").value = "…";
      const s = await shorten(link);
      if (s) { link = s.url; note = t("share_shortNote", { k: n, host: new URL(s.url).host }); }
      else toast(t("share_shortFail"));
    }
    $("#shareLink").value = link;
    $("#shareLen").textContent = note;
    const cv = await drawCard(withLoc), blob = await new Promise(r => cv.toBlob(r, "image/png"));
    if (shareCache) URL.revokeObjectURL(shareCache.url);
    shareCache = { blob, url: URL.createObjectURL(blob), link, file: new File([blob], `me2cloud-${stamp()}.png`, { type: "image/png" }) };
    $("#shareImg").src = shareCache.url; $("#shareImg").classList.remove("busy");
    $("#shareNative").hidden = !(navigator.canShare && navigator.canShare({ files: [shareCache.file] }));
    $("#shareCopyImg").hidden = !(window.ClipboardItem && navigator.clipboard && navigator.clipboard.write);
  }
  async function openShare() {
    if (!rankList().some(x => x.st.ok && x.e.vendor !== "custom")) { toast(t("share_none")); return; }
    $("#shareLoc").checked = S.shareLoc !== false;    openDlg("shareDlg");
    await refreshShare();
  }

  /* ---------- work with AI: hand the results to an assistant, or let one build a test link ---------- */
  // plain-text summary of the current results, structured so any AI assistant can reason about it
  function aiSummary() {
    const list = rankList().filter(x => x.st.ok), L = shareLoc(), N = S.need;
    const line = (x, i) => `${i + 1}. ${x.e.vname} ${x.e.region} (${x.e.cityEn || x.e.city}${x.e.country ? ", " + x.e.country : ""}): median ${fmt(x.st.med)} ms, jitter ±${fmt(x.st.jit)} ms, loss ${Math.round(x.st.loss * 100)}%, ${tierCode(grade(x.st.med))}${x.pass ? ", fits" : ""}`;
    const best = [...new Set(list.map(x => x.e.vendor))].map(v => list.filter(x => x.e.vendor === v).sort(byScore)[0]).sort(byScore);
    return [
      "Me2Cloud latency results (HTTPS round trips measured in my own browser; median of " + (VIEW.mode || MODES[S.mode]) + " samples per region)",
      "Network: " + [L.city, L.cc, L.org].filter(Boolean).join(", ") + (L.proxy ? " (through a proxy)" : " (direct)") + " · " + (VIEW.ip === "v6" ? "IPv6" : "IPv4") + " · " + new Date(VIEW.ts || Date.now()).toISOString().slice(0, 16).replace("T", " ") + " UTC" + (VIEW.peak ? " (evening peak)" : ""),
      "My requirements: median ≤ " + (N.lat || "any") + " ms, jitter ≤ " + (N.jit || "any") + " ms, loss ≤ " + (N.loss || 0) + "%",
      "Tiers: T0 ≤ 30 ms, T1 ≤ 80, T2 ≤ 150, T3 ≤ 250, T4 above",
      "", "Best regions (" + list.length + " measured):", ...list.slice().sort(byScore).slice(0, 15).map(line),
      "", "Best region of each provider:", ...best.map(line),
      "", t("ai_q")
    ].join("\n");
  }
  function renderAI() {
    const has = rankList().some(x => x.st.ok), base = location.origin;
    const prompt = t("ai_linkPrompt", { u: base + "/llms.txt" });
    $("#aiBody").innerHTML = `
      <section class="ai-sec"><h4>${esc(t("ai_res_h"))}</h4><p>${esc(t(has ? "ai_res_p" : "ai_res_none"))}</p>
        ${has ? `<div class="code"><textarea readonly rows="8" data-ta="ai1">${esc(aiSummary())}</textarea><button class="btn sm" type="button" data-copyai="ai1">${t("copy")}</button></div>` : ""}</section>
      <section class="ai-sec"><h4>${esc(t("ai_link_h"))}</h4><p>${esc(t("ai_link_p"))}</p>
        <div class="code"><textarea readonly rows="3" data-ta="ai2">${esc(prompt)}</textarea><button class="btn sm" type="button" data-copyai="ai2">${t("copy")}</button></div></section>
      <section class="ai-sec"><h4>${esc(t("ai_dev_h"))}</h4><p>${esc(t("ai_dev_p"))}</p>
        <div class="ai-links"><a href="/llms.txt" target="_blank" rel="noopener">llms.txt</a><a href="/endpoints.json" target="_blank" rel="noopener">endpoints.json</a><a href="/rules/clash.yaml" target="_blank" rel="noopener">rules/clash.yaml · surge.list · loon.list · quanx.list · singbox.json</a></div></section>`;
  }

  /* ---------- misc UI ---------- */
  let toastT = 0;
  function toast(msg) { const el = $("#toast"); el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2200); }
  async function copyText(s) {
    try { await navigator.clipboard.writeText(s); }
    catch (e) { const ta = document.createElement("textarea"); ta.value = s; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (x) {} ta.remove(); }
    toast(t("copied"));
  }
  const THEMES = ["system", "light", "dark"];
  function applyTheme() {
    let th = "system"; try { th = localStorage.getItem(THEME_KEY) || "system"; } catch (e) {}
    if (!THEMES.includes(th)) th = "system";
    if (th === "system") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", th);
    $$("#themeSeg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.t === th));
  }
  function renderSettings() { $("#conc").value = S.conc; $("#concV").textContent = S.conc; $("#timeout").value = String(S.timeout); $("#rtc").checked = S.rtc; $("#onlyPass").checked = S.onlyPass; }
  function full() {
    buildAll(); applyLang(); $("#lang").value = LANG; applyTheme(); renderSettings(); renderCtrl(); renderNet(); renderHist(); renderAll();
  }
  function changed() { save(); renderCtrl(); renderAll(); }

  /* ---------- events ---------- */
  $("#helpSel").addEventListener("change", e => { helpIdx = +e.target.value; renderDocs(); });
  $("#lang").addEventListener("change", e => {
    const l = e.target.value;
    try { localStorage.setItem(LANG_KEY, l); } catch (x) {}
    location.href = LANG_PATHS[l] + location.search + location.hash;
  });
  // one popover at a time; taps outside close it (pointerdown, since iOS WebKit fires no click on non-interactive areas)
  document.addEventListener("toggle", e => {
    if (!(e.target.matches && e.target.matches("details.menu") && e.target.open)) return;
    // areas come second: without a provider, send the visitor to the provider picker instead
    if (e.target.id === "plA" && !S.vendors.length) { e.target.open = false; $("#plV").open = true; return; }
    $$("details.menu[open]").forEach(d => { if (d !== e.target) d.open = false; });
  }, true);
  document.addEventListener("pointerdown", e => { if (!e.target.closest("details.menu")) $$("details.menu[open]").forEach(d => { d.open = false; }); });
  document.addEventListener("click", e => {
    const el = e.target.closest("button, [data-go], .r, [data-help]");
    if (!el) return;
    // a provider change resets the areas to everything those providers cover
    if (el.matches("[data-v]")) { S.vendors = pickToggle(S.vendors, VIDS, el.dataset.v); S.cts = coveredCts(); changed(); return; }
    if (el.matches("[data-c]")) { S.cts = pickToggle(S.cts, coveredCts(), el.dataset.c); changed(); return; }
    if (el.matches("[data-ck]")) { S.customSel = pickToggle(S.customSel, S.custom.map(c => String(c.k)), el.dataset.ck); changed(); return; }
    if (el.dataset.all || el.dataset.none) {
      const k = el.dataset.all || el.dataset.none, on = !!el.dataset.all;
      if (k === "vendors") { S.vendors = on ? VIDS.slice() : []; S.cts = coveredCts(); }
      else if (k === "cts") S.cts = on ? coveredCts() : [];
      else S.customSel = on ? S.custom.map(c => String(c.k)) : [];
      changed(); return;
    }
    if (el.matches("[data-p]")) { const p = el.dataset.p; S.need.preset = p; [S.need.lat, S.need.jit, S.need.loss] = PRESETS[p]; changed(); return; }
    if (el.matches("[data-m]")) { S.mode = el.dataset.m; changed(); return; }
    if (el.matches("[data-rules]")) { renderRules(); openDlg("rules"); return; }
    if (el.id === "recheckBtn") { checkNetwork(); return; }
    if (el.id === "netMore") { netOpen = !netOpen; renderNet(); return; }
    if (el.id === "eyeBtn") { S.hideIp = !S.hideIp; save(); renderNet(); return; }
    if (el.matches("[data-f]")) { S.ruleFmt = el.dataset.f; save(); renderRules(); return; }
    if (el.matches("[data-copyta]")) { copyText($(`#ruleBody [data-ta="${el.dataset.copyta}"]`).value); return; }
    if (el.matches("[data-close]")) { closeDlg(); return; }
    if (el.id === "logBtn") { renderLog(); openDlg("logDlg"); return; }
    if (el.id === "aiBtn") { renderAI(); openDlg("aiDlg"); return; }
    if (el.matches("[data-copyai]")) { copyText($(`#aiBody [data-ta="${el.dataset.copyai}"]`).value); return; }
    if (el.matches("[data-retest]")) { const ep = ALL.find(x => x.id === el.dataset.retest); if (ep) runTests([ep], MODES.precise, 1, true); return; }
    if (el.matches("[data-copy]")) { copyText(el.dataset.copy); return; }
    if (el.matches("[data-del]")) { const k = el.dataset.del; S.custom = S.custom.filter(c => String(c.k) !== k); S.customSel = S.customSel.filter(x => x !== k); buildAll(); changed(); $("#plV").open = true; return; }
    if (el.matches("[data-go]")) {
      openId = el.dataset.go; S.onlyPass = false; $("#onlyPass").checked = false; $("#q").value = "";
      renderAll(); setTimeout(() => { const r = rowEls.get(openId); r && r.scrollIntoView({ block: "center", behavior: "smooth" }); }, 300); return;
    }
    if (el.matches("[data-help]")) { e.preventDefault(); openHelp(+el.dataset.help); return; }
    if (el.id === "shareBtn") { openShare(); return; }
    if (el.matches("[data-home]")) { S.home = el.dataset.home; changed(); return; }
    if (el.matches("[data-ip]")) { S.ip = el.dataset.ip; changed(); return; }
    if (el.id === "shareCopyLink") { copyText($("#shareLink").value); return; }
    if (el.id === "shareDl" && shareCache) { const a = document.createElement("a"); a.href = shareCache.url; a.download = shareCache.file.name; document.body.appendChild(a); a.click(); a.remove(); return; }
    if (el.id === "shareCopyImg" && shareCache) { navigator.clipboard.write([new ClipboardItem({ "image/png": shareCache.blob })]).then(() => toast(t("copiedImg")), () => toast(t("share_failed"))); return; }
    if (el.id === "shareNative" && shareCache) { navigator.share({ files: [shareCache.file], title: "Me2Cloud", text: t("card_cta") + " " + shareCache.link }).catch(() => {}); return; }
    if (el.id === "sharedExit") { exitShared(); return; }
    if (el.id === "sharedSame") { testSame(); return; }
    if (el.matches("[data-hq]")) { helpIdx = +el.dataset.hq; renderDocs(); return; }
    if (el.matches("[data-hstep]")) { helpIdx = clamp(helpIdx + +el.dataset.hstep, 0, $("#helpSel").options.length - 1); renderDocs(); return; }
    if (el.classList.contains("r")) { const id = el.parentElement.dataset.id; const prev = openId; openId = openId === id ? null : id; markDirty(id); if (prev) markDirty(prev); return; }
  });
  document.addEventListener("submit", e => {
    if (e.target.id !== "cform") return;
    e.preventDefault();
    const name = $("#cName").value.trim(), raw = $("#cUrl").value.trim(), err = $("#cErr");
    let u; try { u = new URL(raw); } catch (x) { err.textContent = t("cust_err_url"); err.hidden = false; return; }
    if (u.protocol !== "https:") { err.textContent = t("cust_err_https"); err.hidden = false; return; }
    if (S.custom.some(c => c.url === u.href)) { err.textContent = t("cust_err_dup"); err.hidden = false; return; }
    const k = Date.now().toString(36);
    S.custom.push({ k, name: name || u.hostname, url: u.href, method: "AUTO" });
    S.customSel.push(k);
    buildAll(); changed(); $("#plV").open = true; toast(t("cust_added"));
  });
  document.addEventListener("input", e => {
    const k = { nLat: "lat", nJit: "jit", nLoss: "loss" }[e.target.id];
    if (!k) return;
    S.need[k] = Math.max(0, +e.target.value || 0); S.need.preset = "custom"; save();
    $("#plN > summary").innerHTML = `<span>${PRESET_IC.custom}</span><span>${esc(t("p_custom"))}</span><b class="num">${S.need.lat ? "≤" + S.need.lat + "ms" : ""}</b>${caret}`;
    $$("#popN .opt").forEach(b => b.setAttribute("aria-pressed", "false"));
    renderAll();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if ($$(".scrim").some(s => !s.hidden)) closeDlg(); else $$("details.menu[open]").forEach(d => { d.open = false; }); }
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("r")) { e.preventDefault(); e.target.click(); }
  });
  $$(".scrim").forEach(s => s.addEventListener("click", e => { if (e.target === s) closeDlg(); }));

  $("#shareLoc").addEventListener("change", refreshShare);  addEventListener("hashchange", async () => { if (await loadShared()) { renderShared(); renderAll(); } });
  $("#runBtn").addEventListener("click", () => {
    if (RUN) { RUN.ctl.abort(); return; }
    openId = null; runTests(selected(), MODES[S.mode], S.conc);
  });
  $("#q").addEventListener("input", () => renderAll());
  $("#onlyPass").addEventListener("change", e => { S.onlyPass = e.target.checked; save(); renderAll(); });
  $("#conc").addEventListener("input", e => { S.conc = +e.target.value; $("#concV").textContent = S.conc; save(); renderRun(); });
  $("#timeout").addEventListener("change", e => { S.timeout = +e.target.value; save(); });
  $("#rtc").addEventListener("change", e => { S.rtc = e.target.checked; save(); });
  $("#themeSeg").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; try { localStorage.setItem(THEME_KEY, b.dataset.t); } catch (x) {} applyTheme(); });
  $("#hist").addEventListener("change", e => {
    if (RUN) { renderHist(); return; }
    const v = e.target.value;
    if (v === "") { try { const last = JSON.parse(localStorage.getItem(RES_KEY)); if (last) applySnapshot(last, true); } catch (x) {} }
    else { const h = loadHist()[+v]; if (h) applySnapshot(h, false); }
    openId = null; renderAll();
  });
  $("#csvBtn").addEventListener("click", () => { $("#settings").open = false; exportCSV(); });
  $("#jsonBtn").addEventListener("click", () => { $("#settings").open = false; exportJSON(); });
  $("#importFile").addEventListener("change", async e => {
    const f = e.target.files[0]; e.target.value = ""; if (!f) return;
    try { const j = JSON.parse(await f.text()); if (!j || typeof j.res !== "object") throw 0; applySnapshot(j, false); openId = null; renderAll(); toast(t("imported")); }
    catch (x) { toast(t("importErr")); }
    $("#settings").open = false;
  });
  $("#copyLinkBtn").addEventListener("click", () => {
    const u = new URL(location.origin + location.pathname);
    u.searchParams.set("vendors", S.vendors.join(",")); u.searchParams.set("areas", S.cts.join(","));
    u.searchParams.set("mode", S.mode); u.searchParams.set("need", [S.need.lat, S.need.jit, S.need.loss].join(","));
    if (S.ip === "v6") u.searchParams.set("ip", "v6");
    if (S.home !== "all") u.searchParams.set("home", S.home);
    copyText(u.href); $("#settings").open = false;
  });
  let holdT = 0;
  const rb = $("#resetBtn");
  rb.addEventListener("pointerdown", () => {
    rb.classList.add("hold"); $("#resetHint").hidden = false;
    holdT = setTimeout(() => {
      try { [RES_KEY, HIST_KEY].forEach(k => localStorage.removeItem(k)); } catch (e) {}
      R = new Map(); VIEW = { ts: 0, live: true }; openId = null; rb.classList.remove("hold"); $("#settings").open = false; full(); toast(t("resetDone"));
    }, 1000);
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach(ev => rb.addEventListener(ev, () => { clearTimeout(holdT); rb.classList.remove("hold"); }));

  // tooltip for chart dots and strips
  // a missing flag file just disappears
  document.addEventListener("error", e => { if (e.target.matches && e.target.matches("img.flag, img.nb-flag")) e.target.remove(); }, true);
  const tip = $("#tip");
  document.addEventListener("mousemove", e => {
    const el = e.target.closest && e.target.closest("[data-tipid]"); if (!el) { tip.hidden = true; return; }
    const ep = ALL.find(x => x.id === el.dataset.tipid), st = stats(R.get(el.dataset.tipid));
    if (!ep || !st.ok) { tip.hidden = true; return; }
    const g = grade(st.med);
    tip.innerHTML = `<b>${esc(ep.vname)} · ${esc(ep.city)} <span class="c${g}">${tierCode(g)} ${esc(tierName(g))}</span></b><span>${t("d_med")}</span><span class="num">${fmt(st.med)} ms</span><span>${t("d_jit")}</span><span class="num">±${fmt(st.jit)} ms</span><span>${t("d_loss")}</span><span class="num">${Math.round(st.loss * 100)}%</span><span>${t("d_min")} – ${t("d_max")}</span><span class="num">${fmt(st.min)} – ${fmt(st.max)}</span>`;
    tip.hidden = false;
    tip.style.left = clamp(e.clientX + 14, 8, innerWidth - tip.offsetWidth - 8) + "px"; tip.style.top = clamp(e.clientY + 14, 8, innerHeight - tip.offsetHeight - 8) + "px";
  });
  setInterval(() => { if (NET.state === "done") renderNet(); }, 60000);
  addEventListener("beforeunload", e => { if (RUN) { e.preventDefault(); e.returnValue = ""; } });

  try { const last = JSON.parse(localStorage.getItem(RES_KEY)); if (last && last.res) applySnapshot(last, true); } catch (e) {}
  full();
  checkNetwork();
  loadShared().then(ok => { if (ok) { renderShared(); renderAll(); } });
})();
