/*************************************

项目名称：尽简衣橱
更新日期：2025-01-08

**************************************

[rewrite_local]
^https?:\/\/closet\.jinjian\.tech\/api\/v3.1\/(users\/profile|apple_app_store\/resolve_receipt|payments\/orders\/sync_from_apple_app_store) url script-response-body https://raw.githubusercontent.com/ymmshi/qx/refs/heads/main/jjyc.js

[mitm]
hostname = closet.jinjian.tech

*************************************/


var chxm1023 = JSON.parse($response.body);
const user = /users\/profile/;
const receipt = /apple_app_store\/resolve_receipt/;
const payments = /payments\/orders\/sync_from_apple_app_store/;

if(user.test($request.url)){
  chxm1023.data.premium_profile = {
    "apple_app_store_is_auto_renew" : true,
    "type_text" : "永久会员",
    "expired_at": "9999-10-29T10:11:49.000Z",
    "type" : "studio.2players.wardrobe.pro.lifetime",
    "show_subscription_management" : false,
    "apple_app_store_is_receipt_bound" : true
  };
}

if(receipt.test($request.url)){
  chxm1023.data = {
    ...chxm1023.data,
    "type_text" : "永久会员",
    "expired_at": "9999-10-29T10:11:49.000Z",
    "apple_app_store_auto_renew" : true,
    "type" : "studio.2players.wardrobe.pro.lifetime"
  };
}

if(payments.test($request.url)){
  chxm1023 = {
    "message" : "恢复成功",
    "status" : "success"
  };
}

$done({body : JSON.stringify(chxm1023)});
