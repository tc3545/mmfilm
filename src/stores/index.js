import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
// import like from './likefilm'

Vue.use(Vuex)

export default new Vuex.Store({
  state :{
    likeList:[]
},
  mutations: {
    LIKE_INFO(state,likeList){
      state.likeList = likeList
    }
  },
  actions: {

  },
  modules:{
    city,
    
  }
})
