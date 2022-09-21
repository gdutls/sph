//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
import routes from "./routes";
//使用插件
Vue.use(VueRouter);

import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";

export default new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    // y=0代表商品详情路由跳转后滚动条在最上方
    return { y: 0 };
  },
});
