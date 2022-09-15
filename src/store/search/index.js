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
//计算属性
//项目当中getters主要为了简化仓库中的数据
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  //当前形参state，当前仓库中的state，并非大仓库中的那个state,而是当前小仓库
  goodsList(state) {
    //空数组是为了防止没网遍历undefined出错
    return state.SearchList.goodsList || [];
  },
  trademarkList(state) {
    return state.SearchList.trademarkList;
  },
  attrsList(state) {
    return state.SearchList.attrsList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
