/*************************************

项目名称：创
更新日期：2025-01-08

**************************************

[rewrite_local]
^https?:\/\/y\.weixinmy\.com\/appstore url script-response-body https://raw.githubusercontent.com/ymmshi/qx/main/yy.js
[mitm]
hostname = y.weixinmy.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const main = /appstore/;


if(main.test($request.url)){
  chxm1023 = {
    "msg" : "恢复成功",
    "code" : 200
  };
}

$done({body : JSON.stringify(chxm1023)});
