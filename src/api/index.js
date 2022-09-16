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
