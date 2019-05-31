import {
  getMenuByRouter,
  getBreadCrumbList
} from '@/utils/index'
import routerList from '@/router/router'

export default {
  state: {
    breadCrumbList: [],
    minWindows: false
  },
  getters: {
    menuList: () => getMenuByRouter(routerList)
  },
  mutations: {
    setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route)
    },
    PUT_MIN_WINDOWS (state, status) {
      state.minWindows = status
    }
  },
  actions: {
    putMinWindows ({commit}, status) {
      commit('PUT_MIN_WINDOWS', status)
    }
  }
}
