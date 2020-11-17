import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      count: 0,
      x: "",
      user: null
    },
    mutations: {
        setCount: (state, count) => state.count = count,
        setStyle: (state,style) => state.x = style,
        setUser: (state,user) => state.user = user
    },
    getters: {
        getCount: (state) =>
        {
            return state.count
        },
        getStyle: (state) =>
        {
            return state.x
        },
        getUser: (state)=>
        {
          return state.user
        }
    }
  })
  export default store;