<template>
	<view>
		<my-navbar leftText="我的记录" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
			leftIconSize="40" />
		<view style="margin-top: 40rpx;">
			<u-tabs :list="list" @click="tabsClick" lineWidth="140rpx" lineHeight="4rpx" :activeStyle="activeStyle"
				:scrollable="false"></u-tabs>
		</view>
		<view v-if="index==0">
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36"
				:show="show" iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
			<my-learn-record :show="!show" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" :listIndex="listIndex"></my-learn-record>

		</view>
		<view v-if="index==1">
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36"
				:show="show" iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
			<my-pay-record :show="!show" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" :listIndex="listIndex" @loadmore="loadmore"></my-pay-record>
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
	export default {
		data() {
			return {
				list: [{
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
				page: 0,
				listIndex: 4

			}
		},
		methods: {
			tabsClick(index) {
				console.log(index)

				this.index = index.index
				if (this.index == 2 || this.index == 3) {
					this.show = true
				} else {
					this.show = false
				}
				if (this.index == 0) {
					this.page = 0
					this.listIndex = 4
					this.status = 'loadmore'
				} else if (this.index == 1) {
					this.page = 0
					this.listIndex = 2
					this.status = 'loadmore'
				}
				console.log(this.index)
			},
			loadmore() {
				console.log("loadmore")
				if (this.page >= 3) return;
				this.status = 'loading';
				this.page = ++this.page;
				setTimeout(() => {
					this.listIndex += 4;
					if (this.page >= 3) this.status = 'nomore';
					else this.status = 'loading';
				}, 1000)
			}
		},
		onReachBottom() {
			if (this.page >= 3) return;
			this.status = 'loading';
			this.page = ++this.page;
			setTimeout(() => {
				this.listIndex += 4;
				if (this.page >= 3) this.status = 'nomore';
				else this.status = 'loading';
			}, 1000)
		}

	}
</script>

<style>

</style>
