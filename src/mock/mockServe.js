import Mock from "mockjs";
//把JSON数据格式引入进来[json数据格式根本没有对外暴露，但是可以引入]
//webpack默认对外暴露的:图片、JSON数据格式
import banner from "./banner.json";
import floor from "./floors.json";
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
