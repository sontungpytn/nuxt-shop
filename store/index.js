import Vuex from 'vuex'
import * as types from './mutation-types'

export default () => {
  return new Vuex.Store({
    state: {
      user: null,
      listProduct: [],
      lstCategories: [],
      countProducts: 0,
      sellers: []
    },
    actions: {
      async nuxtServerInit({commit, state}, {req, route, redirect}) {
        if (req.session && req.session.user) {
          commit(types.SET_USER, req.session.user)
        } else {
          if (route.path === '/admin') {
            redirect('/admin/login')
          }
        }
      },
      async getProducts({commit}, param) {
        let url = `admin/products?page=${param.page || 1}`
        if (param.search) {
          url += `&search=${param.search}`
        }
        if (param.category) {
          url += `&category=${param.category}`
        }
        const ip = await this.$axios.$get(url)
        commit(types.SET_LIST_PRODUCT, {ip})
      },
      setUser({commit}, user) {
        commit(types.SET_USER, user)
      },
      setSellers({commit}, sellers) {
        commit(types.SET_LIST_SELLER, sellers)
      },
      async getCategories({commit}) {
        let url = `admin/categories`
        const ip = await this.$axios.$get(url)
        console.log('categories ', ip)
        commit(types.SET_LIST_CATEGORY, {ip})
      }
    },
    mutations: {
      [types.SET_USER](state, payload) {
        state.user = payload
      },
      [types.SET_LIST_PRODUCT](state, payload) {
        state.listProduct = payload.ip.data
        state.countProducts = payload.ip.totalProducts
      },
      [types.SET_LIST_CATEGORY](state, payload) {
        state.lstCategories = payload.ip.data
      },
      [types.SET_LIST_SELLER](state, payload) {
        state.sellers = payload
      }
    },
    getters: {
      getListProducts: state => {
        return state.listProduct
      },
      getListCategories: state => {
        return state.lstCategories
      },
      getCountProducts: state => {
        return state.countProducts
      }
    }
  })
}
