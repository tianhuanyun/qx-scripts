// B站推荐流去信息流广告（自托管 · 2026-10-29）
// 适配: Quantumult X script-response-body / Surge http-response（同一份脚本）
// 原理: 广告卡与内容同接口下发（app.bilibili.com/x/v2/feed/index|rcmd），
//       广告卡特征 card_type==='cm_v2' 或含 ad_info 键 —— mitmproxy 抓包实证（9卡中1卡广告）
//       剥离后首页渲染正常（MacBook/京东信息流广告实测消失）
let body = null;
try { body = JSON.parse($response.body); } catch (e) { $done({}); }
if (body && body.data && Array.isArray(body.data.items)) {
  body.data.items = body.data.items.filter(
    (it) => !(it && (it.card_type === 'cm_v2' || it.ad_info))
  );
  $done({ body: JSON.stringify(body) });
} else {
  $done({});
}
