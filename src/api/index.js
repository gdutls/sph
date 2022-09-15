import requests from "./request";
import mockRequests from "./mockAjax";

export const reqCategoryList = () => {
  return requests({ url: "product/getBaseCategoryList", method: "get" });
};
export const reqGetBannerList = () => mockRequests.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
