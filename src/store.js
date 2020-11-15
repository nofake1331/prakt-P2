import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      count: 0,
      x: "",
    },
    mutations: {
        setCount: (state, count) => state.count = count,
        setStyle: (state,style) => state.x = style
    },
    getters: {
        getCount: (state) =>
        {
            return state.count
        },
        getStyle: (state) =>
        {
            return state.x
        }
    }
  })
  export default store;