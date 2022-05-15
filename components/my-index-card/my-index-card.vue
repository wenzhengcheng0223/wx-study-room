<template>
	<view>
		<view class="my-card">
			<view class="recharge">
				<view class="my-card-bg" @click="toRecharge">
					<view style="position: absolute; top: 20rpx; left: 20rpx;">
						<u--text :bold="true" size="36" color="#ffffff" :selectable="false" text="余额充值" />
						<view style="height: 10rpx;"></view>
						<u--text :bold="false" size="24" color="#ffffff" :selectable="false" text="充值到余额" />
					</view>
					<view style="position: absolute; bottom: 0px; right: 0px;">
						<u-icon name="/static/index/pay.png" size="104" color="#0ec61b"></u-icon>
					</view>
				</view>
			</view>
			<view class="recharge-right">
				<!-- 卡券套餐 -->
				<view class="pay-card" @click="toCard">
					<view style=" position:absolute; top:28rpx; left: 68rpx;">
						<u-icon name="/static/index/bag.png" size="38"></u-icon>
					</view>
					<view style=" position:absolute; top:20rpx; right: 68rpx;">
						<u--text :bold="true" size="36" color="#ffffff" :selectable="false" text="卡券套餐" />
					</view>
				</view>
				<!-- 美团兑换 -->
				<view class="mt-card">
					<view style=" position:absolute; top:28rpx; left: 68rpx;">
						<u-icon name="/static/index/mt.png" size="38"></u-icon>
					</view>
					<view style=" position:absolute; top:20rpx; right: 68rpx;">
						<u--text :bold="true" size="36" color="#ffffff" :selectable="false" text="美团兑换" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-index-card",
		data() {
			return {

			};
		},
		methods: {
			toRecharge() {
				uni.navigateTo({
					url: "/other_pages/recharge/recharge"
				})
			},
			toCard() {
				uni.navigateTo({
					url: "/other_pages/recharge-card/recharge-card"
				})
			}
		}
	}
</script>

<style lang="scss">
	.my-card {
		position: relative;
		height: 200rpx;
		padding: auto 40rpx;
		padding-top: 0rpx;
		// background-color: #2C405A;
	}

	.recharge {
		position: absolute;
		// top: 20px;
		left: 40rpx;
		// height: 100px;
		// width: 20px;
		// background-color: #ff5500;
	}

	.my-card-bg {
		position: absolute;
		height: 200rpx;
		width: 330rpx;
		border-radius: 10rpx;
		background-color: #0c9d16;
	}

	.recharge-right {
		position: absolute;
		right: 40rpx;
		height: 200rpx;
		width: 330rpx;
	}

	.pay-card {
		position: absolute;
		height: 96rpx;
		width: 330rpx;
		border-radius: 5px;
		background-color: #13bec1;

	}

	.mt-card {
		position: absolute;
		bottom: 0px;
		height: 96rpx;
		width: 330rpx;
		border-radius: 10rpx;
		background-color: #ff7801;
	}
</style>
