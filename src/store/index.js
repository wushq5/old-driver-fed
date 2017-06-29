import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  teacher: null
}

const mutations = {
  setTeacher (state, { teacher }) {
    state.teacher = teacher
  },
  clearTeacher (state) {
    state.teacher = null
  }
}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
