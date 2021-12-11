import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    article: [],

  },

  actions: {

  },
  mutations: {
    mutGetAllArticles(state, articles) {
      state.article = articles
    },
    mutGetAllArticlesPush(state, articles) {
      state.article.push(...articles)
      console.log(state.article)
    },
  },
  getters: {
    getAllArticles: state => state.article,
  },
})

export default store
