<template>
	<view>
		<my-navbar leftText="我的记录" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
			leftIconSize="40" />
		<view style="margin-top: 40rpx;">
			<u-tabs :list="list" @click="tabsClick" lineWidth="140rpx" lineHeight="4rpx" :activeStyle="activeStyle"
				:scrollable="false"></u-tabs>
		</view>
		<view>
			<u-empty marginTop="140" mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png" textSize="36" :show="show"
				iconSize="240" width="400" height="400" text="记录为空">
			</u-empty>
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
				show: true
			}
		},
		methods: {
			tabsClick(index) {
				console.log(index)
				this.index = index.index
				console.log(this.index)
			}
		}
	}
</script>

<style>

</style>
