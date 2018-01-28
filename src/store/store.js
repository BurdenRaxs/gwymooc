import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    userid: '',
    username: 'sdsd',
    logstate: true

  },
  mutations:{
    idstate(state,name){

      state.username = name;
      state.logstate = false;
    }
  }
})

export default store
