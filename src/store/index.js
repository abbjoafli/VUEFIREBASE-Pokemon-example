import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import pokemons from './pokemons'
import user from './user'
import createPersistedState from "vuex-persistedstate"; //Denna gör så att vue inte tappar värden när du uppdaterar.

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  store: {
    responsiveNav: false
  },
  modules: {
    pokemons,
    user
  },
  mutations: {
    ...vuexfireMutations
  }
})
