import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  state: {
    foodsBest: [],
    foodsWorst: []
  },
  mutations: {
    set_foodsBest:(state, foodsBest) => state.foodsBest = foodsBest,
    set_foodsWorst:(state, foodsWorst) => state.foodsWorst = foodsWorst
  },
  actions: {
    set_foodsBest: ({ commit }, page = 1) => Axios.get(`api/imagesmanager?page=${page}&search_key=Image_rank&search_text=Best`).then( res => commit('set_foodsBest', res.data.result)),
    set_foodsWorst: ({ commit }, page = 1) => Axios.get(`api/imagesmanager?page=${page}&search_key=Image_rank&search_text=Worst`).then( res => commit('set_foodsWorst', res.data.result))
  },
  modules: {
  }
})
