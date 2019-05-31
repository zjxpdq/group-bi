import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  }
})
