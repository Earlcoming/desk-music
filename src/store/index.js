import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loginStatus: null
	},
	getters: {
		loginStatus(state) {
			return state.loginStatus || JSON.parse(window.localStorage.getItem('loginStatus'));
		}
	},
	mutations: {
		
	},
	actions: {},
	modules: {}
})