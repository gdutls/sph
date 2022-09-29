import Vue from "vue";
import App from "./App.vue";
import TypeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
//分页器
import Pagination from "@/components/Pagination";
import { Button, MessageBox } from "element-ui";
//全局组件:第一个参数:组件名字  第二个参数:那个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
//element-ui 注册全局组件
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import "@/mock/mockServe";
import router from "@/router";
import store from "@/store";
import "swiper/css/swiper.css";
//list接口坏了，暂不使用
import { reqGetSearchInfo } from "@/api";

//统一接收api文件夹里面全部请求函数
//统一引入
import * as API from "@/api";
import atm from "@/assets/1.gif";
//图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: atm,
});
//引入表单验证插件
import "@/plugins/validate";
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
