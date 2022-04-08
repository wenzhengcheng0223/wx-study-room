
import Vue from 'vue'
import Vuex from 'vuex'
import {appTabbar} from './config.js'
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		hasLogin: false,
		isUniverifyLogin: false,
		loginProvider: "",
		openid: null,
		index: 0,
		tabbar: appTabbar,
		oneToke: "眼睛是心灵的窗户。—— 达芬奇"
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setIndex(state, index){
			state.index = index
		},
		setOneToke(state, oneToke){
			state.oneToke = oneToke
		}
	},
	getters: {

	},
	actions: {
		// lazy loading openid
		
	}
	
})

