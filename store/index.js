import Vue from 'vue'
import Vuex from 'vuex'
import {
	appTabbar
} from './config.js'
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		hasLogin: false,
		isUniverifyLogin: false,
		loginProvider: "",
		openid: null,
		index: 0,
		tabbar: appTabbar,
		oneToke: "眼睛是心灵的窗户。—— 达芬奇",
		//账户信息
		account: {
			balance: 0,
			card: [{}]
		},
		hours: 0,
		store: {},
		storeList: []
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
		setIndex(state, index) {
			state.index = index
		},
		setOneToke(state, oneToke) {
			state.oneToke = oneToke
		},
		setBalance(state, payload) {
			console.log(payload)
			state.account.balance = payload
		},
		setCard(state, payload) {
			console.log(payload)
			state.account.card = payload
		},
		setHours(state, hours) {
			state.hours = hours
		},
		setStore(state, store) {
			state.store = store
		},
		setStoreList(state, storeList) {
			state.storeList = storeList
		}
	},
	getters: {

	},
	actions: {
		// lazy loading openid
		getBalance({
			commit
		}, payload) {

			commit('setBalance', payload)

		},
		getCard({
			commit
		}, payload) {
			commit('setCard', payload)
		}
	}

})
