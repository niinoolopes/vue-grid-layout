import { RootState } from '@/types'
import Vue from 'vue'
import Vuex from 'vuex'

import {
  moduleGrid,
  modulePanel
} from './modules'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store<RootState>({
  state,
  getters,
  mutations,
  actions,
  modules: {
    grid: moduleGrid,
    panel: modulePanel
  }
})
