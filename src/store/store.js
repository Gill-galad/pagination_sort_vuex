import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    GET_POSTS_FROM_API({ commit }) {
      return axios("http://jsonplaceholder.typicode.com/posts", {
        method: "GET"
      }).then(response => {
        commit("SET_POSTS_TO_VUEX", response.data);
      });
    }
  },
  mutations: {
    SET_POSTS_TO_VUEX: (state, posts) => {
      state.posts = posts;
    }
  },
  getters: {
    POSTS(state) {
      return state.posts;
    }
  }
});
export default store;
