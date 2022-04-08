<template>
	<view class="context">
		<view class="left">
			<view style="position: absolute; top: -70rpx;">
				<u-icon name="/static/index/ERCode.png" size="200"></u-icon>
			</view>
		</view>
		<view class="center">
			<view style="position: absolute; top: 20rpx;left: 196rpx;">
				<u--text :bold="true" size="36" color="#030303" :selectable="false" text="我的二维码" />
				<view style="height: 18rpx;"></view>
				<u--text :bold="false" size="24" color="#464646" :selectable="false" text="开门一扫即可" />
			</view>
		</view>
		<view class="right">
			<view style="position: absolute; top: 26rpx; right: 40rpx;">
				<u-icon name="/static/index/scan.png" size="100"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-index-ER",
		data() {
			return {

			};
		}
	}
</script>

<style>
	.context {
		position: relative;
		margin: auto 40rpx;
		margin-top: 80rpx;
		height: 150rpx;
		width: auto;
		border-radius: 80rpx;
		background-color: #c1e5ff;
	}
	.left{
		
	}
	
</style>
