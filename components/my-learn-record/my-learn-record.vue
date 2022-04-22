<template>
	<view v-if="show">
		<view v-for="index in listIndex" :key="index">
			<view class="card-item">
				<view style="display: flex;justify-content: flex-start;align-items: center;">
					<view>
						<u-icon name="/other_pages_mine/static/seat.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="false" size="30" color="#303133" text="V区舒适座·舒适区·V1" align="center" />
					</view>
				</view>
				<view style="display: flex;justify-content: flex-start;align-items: center; margin-top: 40rpx;">
					<view>
						<u-icon name="/other_pages_mine/static/clock.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="false" size="30" color="#303133" text="2022年04月20日13:00—23:00(10小时)"
							align="center" />
					</view>
				</view>
			</view>
		</view>
		<template>
			<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" />
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				default: true,
				type: Boolean,
			},
			status: {
				default: 'loadmore',
				type: String,
			},
			loadingText: {
				default: '努力加载中',
				type: String,
			},
			loadmoreText: {
				default: '轻轻上拉',
				type: String,
			},
			nomoreText: {
				default: '实在没有了',
				type: String,
			},
			listIndex: {
				default: 4,
				type: Number
			}

		},
		data() {
			return {}
		},
		methods: {

		},


	}
</script>

<style lang="scss">
	.card-item {
		margin: auto 40rpx;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		// background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
		background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
		border-radius: 20rpx;
		padding: 50rpx 40rpx;
		box-shadow: 0rpx 0rpx 20rpx 1rpx #d0d0d0;
	}
</style>
