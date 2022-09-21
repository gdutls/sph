import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import home from "./home";
import search from "./search";
import detail from "./detail";
export default new Vuex.Store({
  // 小仓库
  modules: {
    home,
    search,
    detail,
  },
});
