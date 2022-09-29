//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
import routes from "./routes";
//使用插件
Vue.use(VueRouter);
//引入store
import store from "@/store";

//对外暴露VueRouter类的实例
let router = new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    // y=0代表商品详情路由跳转后滚动条在最上方
    return { y: 0 };
  },
});

//全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
  //用户登陆了才有token，未登录一定没有token
  let token = store.state.user.token;
  //用户信息
  let name = store.state.user.userInfo.name;
  //用户登陆了
  if (token) {
    //用户已经登录了不能去login[不能去]，重定向回主页
    if (to.path == "/login") next("/home");
    else {
      //登录了，去的不是login[home|search|detail...]
      //如果用户名已有
      if (name) {
        next();
      } else {
        //没有用户信息（刷新页面），派发action让仓库存储用户信息再跳转
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          //token失效了获取不到用户信息，重新登录
          //清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    // 未登录:不能去交易相关、支付相关【pay paysuccess】、个人中心
    //未登录去上面这些路由---登录
    let toPath = to.path;
    if (
      toPath.indexOf("/trade") != -1 ||
      toPath.indexOf("/pay") != -1 ||
      toPath.indexOf("/center") != -1
    ) {
      //把未登录的时候向去而没有去成的信息,存储于地址栏中【路由】
      next("/login?redirect=" + toPath);
    } else {
      //去的不是上面这些路由(home search shopCart)---放行
      next();
    }
  }
});
export default router;
