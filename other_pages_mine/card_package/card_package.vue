<template>
	<view>
		<my-navbar leftText="我的会员卡" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
			leftIconSize="40" />
		<view style="margin: auto 40rpx;">
			<view style="margin-top: 40rpx;">
				<view>
					<u--text :bold="false" size="28" color="#b8b8b8" text="我的会员卡" align="left" />
				</view>
				<view style="margin-top: 40rpx;display: flex ;justify-content: center;">
					<image src="/other_pages_mine/static/card_package.png" mode="aspectFit"></image>
				</view>
				<view style="margin-top: 40rpx;">
					<u--text :bold="true" size="28" color="#9a9a9a" text="您还没有开通过时卡" align="center" />
				</view>
			</view>
		</view>
		<view class="foot-button">
			<view>
				<u-button color="#35a5ed" size="large" @click="toCard" text="开通其他卡"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toCard() {
				uni.navigateTo({
					url: "/other_pages/recharge-card/recharge-card"
				})
			}
		}
	}
</script>

<style lang="scss">
	.foot-button {
		margin-top: 40rpx;
		padding: 40rpx;
	}
</style>
