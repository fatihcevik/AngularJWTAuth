import Vuex from 'vuex';
import Vue from 'vue-native-core';

import meetups from './modules/meetups';
import threads from './modules/threads';
import auth from './modules/auth';
import categories from './modules/categories'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetups,
    threads,
    auth,
    categories
  },
  state: {
  },
  actions: {
  },
  mutations: {
    setItems(state, { items, resource }) {
      Vue.set(state[resource], 'items', items)
    }
  }
})