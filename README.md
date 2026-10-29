# qx-scripts

自研去广告改包脚本公开发布位。规则文件（分流/重写订阅）通过 raw 地址引用本仓库脚本。

| 脚本 | 作用 | 引用 URL |
|---|---|---|
| bili-feed-clean.js | B站推荐流去信息流广告（剥离 card_type=cm_v2 / 含 ad_info 卡片，适配 feed/index、feed/rcmd） | `https://raw.githubusercontent.com/tianhuanyun/qx-scripts/main/bili-feed-clean.js` |

适用：Quantumult X `script-response-body` / Surge `http-response`（同一份脚本，两家工具均支持 `$response.body` + `$done({body})`）。
