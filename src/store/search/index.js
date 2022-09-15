import { reqGetSearchInfo } from "@/api";
const state = {
  SearchList: {},
};
const mutations = {
  GETSEARCHLIST(state, SearchList) {
    state.SearchList = SearchList;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数(空对象)
    // params形参:是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
