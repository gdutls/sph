import Vue from "vue";
import App from "./App.vue";
import TypeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
//分页器
import Pagination from "@/components/Pagination";
//全局组件:第一个参数:组件名字  第二个参数:那个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
import "@/mock/mockServe";
import router from "@/router";
import store from "@/store";
import "swiper/css/swiper.css";
//list接口坏了，暂不使用
import { reqGetSearchInfo } from "@/api";

//统一接收api文件夹里面全部请求函数
//统一引入
import * as API from "@/api";
new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount("#app");
