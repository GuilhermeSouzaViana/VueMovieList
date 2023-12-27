import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [],
  },
  mutations: {
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    removeMovie(state, index) {
      state.movies.splice(index, 1);
    },
    updateMovie(state, { index, updatedMovie }) {
      state.movies.splice(index, 1, updatedMovie);
    },
  },
  actions: {
    addMovie({ commit }, movie) {
      commit('addMovie', movie);
    },
    removeMovie({ commit }, index) {
      commit('removeMovie', index);
    },
 
  },
});
