import requests from "./request";
import mockRequests from "./mockAjax";

export const reqCategoryList = () => {
  return requests({ url: "product/getBaseCategoryList", method: "get" });
};
export const reqGetBannerList = () => mockRequests.get("/banner");
