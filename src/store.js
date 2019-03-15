import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    name: ''
  },
  mutations: {
    setName (state, newName) {
      state.name = newName
    },
    setEmail (state, newEmail) {
      state.email = newEmail
    }
  },
  actions: {

  },
  getters: {
    getEmail: state => { return state.email },
    getName: state => { return state.name }
  }
})
