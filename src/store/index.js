import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
export default new Vuex.Store({
  // 小仓库
  modules: {
    home,
    search,
    detail,
    shopcart,
  },
});
