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
