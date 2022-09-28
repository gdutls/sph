import requests from "./request";
import mockRequests from "./mockAjax";

export const reqCategoryList = () => {
  return requests({ url: "product/getBaseCategoryList", method: "get" });
};
export const reqGetBannerList = () => mockRequests.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");

//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
// export const reqGetSearchInfo = (params) =>
//   requests({ url: "/list", methods: "post", data: params });

// api/list接口崩了，暂时mock数据
export const reqGetSearchInfo = (params) =>
  mockRequests({ url: "/list", methods: "post", data: params });

//获取产品详情信息的接口 url：/api/item/{ skuId } 请求方式：get
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

//将产品添加到购物车中(或者更新某个产品的个数)
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

//获取购物车列表数据接口
//URL: api/cart/cartList  method:get
export const reqCartList = () =>
  requests({ url: "cart/cartList", method: "get" });

//删除购物车产品的接口
//URL:/api/cart/deleteCart/{skuId}  method:DELETE
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

//修改商品的选中状态
//URL:/api/cart/checkCart/{skuld}/{isChecked}   method:get
export const reqUpdateCheckedByid = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

//获取验证码
//URL:/api/user/passport/sendCode/{phone}   method :get

export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

//注册
//url:/api/user/passport/register   method:post    phone code password  data是对象
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data: data, method: "post" });

//登录
//URL:/api/user/passport/login method: post phone password
export const reqUserLogin = (data) =>
  requests({ url: "user/passport/login", data, method: "post" });

//获取用户信息【需要带着用户的token向服务器要用户信息】
// URL:/ api/user/passport/auth/getUserInfo   method : get
export const reqUserInfo = () =>
  requests({ url: "user/passport/auth/getUserInfo", method: "get" });

//退出登录
//URL:/api/user/passport/logout   get
export const reqLogout = () =>
  requests({ url: "/user/passport/logout", method: "get" });

//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList   method:get
export const reqAddressInfo = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

//获取商品清单  接口没数据
//URL：  /api/order/auth/trade   method:get
// export const reqOrderInfo = () =>
//   requests({ url: "/order/auth/trade", method: "get" });

//模拟商品清单
export const reqOrderInfo = () =>
  mockRequests({ url: "/order/auth/trade", method: "get" });

//提交订单的接口
//URL:/api/order/auth/submitorder?tradeNo={tradeNo} method:post
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}    GET
export const reqPayInfo = (orderId) =>
  requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderid}    get
export const reqPayStatus = (orderId) =>
  requests({ url: `/payment/weixin/queryPayStatus/${orderid}`, method: "get" });
