import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    pokemonId: 1,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPokemonId(state, pokemonId) {
      state.pokemonId = pokemonId;
    },
  },
  actions: {
    setUserAsync(context, user) {
      context.commit('setUser', user);
    },
    setPokemonIdAsync(context, pokemonId) {
      context.commit('setPokemonId', pokemonId);
    },
  },
  modules: {},
});
