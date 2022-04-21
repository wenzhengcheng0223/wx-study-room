<template>
	<view>
		<my-navbar leftText="我的账户" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
			leftIconSize="40" />
		<view style="margin: auto 40rpx;">
			<view style="margin-top: 140rpx;">
				<view>
					<u--text :bold="false" size="28" color="#303133" text="总余额" align="center" />
				</view>
				<view style="margin-top: 40rpx;display: flex ;justify-content: center;">
					<image src="/other_pages_mine/static/account.png" mode="aspectFit"></image>
				</view>
				<view style="margin-top: 40rpx;display: flex; justify-content: center;width: 100%;align-items: center;">
					<view>
						<u--text :bold="true" size="50" color="#35a5ed" text="40" align="right" />	
					</view>
					<view style="margin-bottom: -12rpx;margin-left: 10rpx;">
						<u--text :bold="true" size="26" color="#35a5ed" text="点" align="left" />
					</view>
				</view>					
			</view>
		</view>
		<view class="foot-button">
			<view>
				<u-button color="#35a5ed" size="large" @click="" text="立即充值"></u-button>
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

		}
	}
</script>

<style lang="scss">
	.foot-button{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 40rpx;
	}
</style>
