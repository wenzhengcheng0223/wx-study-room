import App from './App'
import store from '@/store'
import Vue from 'vue'

import {mapState,mapMutations} from 'vuex'
import uView from 'uview-ui' // 引入全局uView
Vue.use(uView)
uni.$u.config.unit = 'rpx'


Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()


