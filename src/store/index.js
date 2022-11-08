//https://vuex.vuejs.org/guide/getters.html#method-style-access
import { createStore, createLogger } from 'vuex'
import count from "../store/modules/count"
import mutations from './mutations'
import action from './action'


export default createStore({
  plugins: [createLogger()],
  modules: {
    count
  },
  state() {
    //это уже глобальный state
    return {
      appTitle: 'Vuex working'
    }
  },
  mutations: mutations,
  actions: action,
  getters: {
    upprcaseTitle(state) {
      return state.appTitle.toUpperCase()
    }
  }

})
