<template>
	<view>
		<my-navbar leftText="我的记录" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
			leftIconSize="40" />
		<view style="margin-top: 40rpx;">
			<u-tabs :list="tabList" @click="tabsClick" lineWidth="140rpx" lineHeight="4rpx" :activeStyle="activeStyle"
				:scrollable="false"></u-tabs>
		</view>
		<view v-if="index==0">
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36"
				:show="show" iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
			<my-learn-record :show="!show" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" :list="list" @loadmore="loadmore"></my-learn-record>

		</view>
		<view v-if="index==1">
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36"
				:show="show" iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
			<my-pay-record :show="!show" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" :list="list" @loadmore="loadmore"></my-pay-record>
		</view>
		<view v-if="index==2">
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36"
				:show="show" iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
			<!-- <my-learn-record :show="!show"></my-learn-record> -->
		</view>
		<view v-if="index==3">
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36"
				:show="show" iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
			<!-- <my-learn-record :show="!show"></my-learn-record> -->
		</view>

	</view>
</template>

<script>
	import {
		getOrder,
		getLearnRecord
	} from '@/config/api.js'
	export default {
		data() {
			return {
				tabList: [{
						name: '学习记录'
					},
					{
						name: '消费记录'
					},
					{
						name: '活动订单'
					},
					{
						name: '美团核单'
					},
				],

				activeStyle: {
					color: '#35a5ed',
					fontWeight: 'bold'
				},
				index: 0,
				show: false,
				status: 'loadmore',
				loadingText: '努力加载中,先喝杯茶',
				loadmoreText: '上拉或点击加载更多',
				nomoreText: '我也是有底线的',
				size: 0,
				list: [],
				total: 0,
				params: {
					pageNum: 1,
					pageSize: 3
				}

			}
		},
		watch: {
			total: {
				handler(val) {
					console.log('watch handler ----', val)
					if (val == 0) {
						this.show = true
					} else {
						this.show = false
					}
				},
				immediate: true
			}
		},
		methods: {
			async tabsClick(index) {
				console.log(index)
				uni.showLoading({
					title: '加载中'
				})
				this.params.pageNum = 1
				this.index = index.index
				if (this.index == 2 || this.index == 3) {
					await setTimeout(() => {
						uni.showToast({
							icon: 'success'
						})
					}, 1500)
					this.show = true
					this.total = 0
				} else {
					// this.show = false
				}
				if (this.index == 0) {
					const {
						data: order
					} = await getLearnRecord({
						params: this.params,
						custom: {
							auth: true
						}
					})
					await setTimeout(() => {
						uni.showToast({
							icon: 'success'
						})
					}, 1500)
					console.log("getLearnRecord--------", order)
					this.list = order.rows
					this.total = order.total
					this.size = order.rows.length
					if (order.total > 4) {
						this.status = 'loadmore'
					} else {
						this.status = 'nomore'
					}
				} else if (this.index == 1) {

					const {
						data: order
					} = await getOrder({
						params: this.params,
						custom: {
							auth: true
						}
					})
					await setTimeout(() => {
						uni.showToast({
							icon: 'success'
						})
					}, 1500)
					console.log("getOrder------", order)
					this.list = order.rows
					this.total = order.total
					this.size = order.rows.length
					if (order.total > 2) {
						this.status = 'loadmore'
					} else {
						this.status = 'nomore'
					}
				}

			},
			async loadmore() {
				console.log("loadmore")
				if (this.size == this.total) return;
				this.status = 'loading';
				if (this.index == 0) {
					this.params.pageNum++;
					console.log(this.params)
					const {
						data: order
					} = await getLearnRecord({
						params: this.params,
						custom: {
							auth: true
						}
					})

					setTimeout(() => {
						this.list = [...this.list, ...order.rows]
						console.log(this.list)
						this.size += order.rows.length
						if (this.size == this.total) this.status = 'nomore';
						else this.status = 'loading';
					}, 1000)
				} else if (this.index == 1) {
					this.params.pageNum++;
					console.log(this.params)
					const {
						data: order
					} = await getOrder({
						params: this.params,
						custom: {
							auth: true
						}
					})

					setTimeout(() => {
						this.list = [...this.list, ...order.rows]
						console.log(this.list)
						this.size += order.rows.length
						if (this.size == this.total) this.status = 'nomore';
						else this.status = 'loading';
					}, 1000)
				}
			},
			async listInit() {
				const {
					data: order
				} = await getLearnRecord({
					params: this.params,
					custom: {
						auth: true
					}
				})
				console.log("getOrder------")
				console.log(order)
				this.list = order.rows
				this.total = order.total
				if (this.total == 0) {
					await setTimeout(() => {
						uni.showToast({
							icon: 'success'
						})
						this.show = true
					}, 1500)
				} else {
					await setTimeout(() => {
						uni.showToast({
							icon: 'success'
						})
					}, 1500)
				}
				this.size = order.rows.length
				if (order.total > 3) {
					this.status = 'loadmore'
				} else {
					this.status = 'nomore'
				}

			}
		},
		async onReachBottom() {
			console.log("onReachBottom")
			if (this.size == this.total) return;
			this.status = 'loading';

			if (this.index == 0) {
				this.params.pageNum++;
				console.log(this.params)
				const {
					data: order
				} = await getLearnRecord({
					params: this.params,
					custom: {
						auth: true
					}
				})

				setTimeout(() => {
					this.list = [...this.list, ...order.rows]
					console.log(this.list)
					this.size += order.rows.length
					if (this.size == this.total) this.status = 'nomore';
					else this.status = 'loading';
				}, 1000)
			} else if (this.index == 1) {
				this.params.pageNum++;
				console.log(this.params)
				const {
					data: order
				} = await getOrder({
					params: this.params,
					custom: {
						auth: true
					}
				})

				setTimeout(() => {
					this.list = [...this.list, ...order.rows]
					console.log(this.list)
					this.size += order.rows.length
					if (this.size == this.total) this.status = 'nomore';
					else this.status = 'loading';
				}, 1000)
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'
			})
			this.listInit()

		}

	}
</script>

<style>

</style>
