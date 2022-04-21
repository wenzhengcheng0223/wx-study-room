<template>
	<view v-if="show">
		<view v-for="index in 10" :key="index">
			<view class="card-item">
				<view style="display: flex;justify-content: space-between;align-items: center;">
					<!-- 店名 -->
					<view style="display: flex;justify-content: flex-start;align-items: center;">
						<u-icon name="/other_pages_mine/static/store.png" size="35"></u-icon>
						<view style="margin-left: 20rpx;">
							<u--text :bold="false" size="30" color="#303133" text="MiNa（重庆）大学城店" align="center" />
						</view>
					</view>
					<!-- 订单状态 -->
					<view class="pay-status">
						<view>
							<u-icon name="/other_pages_mine/static/stamps.png" size="28"></u-icon>
						</view>
						<view style="margin-left: 10rpx;">
							<u--text :bold="false" size="25" color="#a686ba" text="未消费" align="center" />
						</view>
					</view>
				</view>
				<!-- 座位区域 -->
				<view style="display: flex;justify-content: flex-start;align-items: center; margin-top: 40rpx;">
					<view>
						<u-icon name="/other_pages_mine/static/seat.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="false" size="30" color="#303133" text="V区舒适座·舒适区·V1" align="center" />
					</view>
				</view>
				<!-- 订座时间 -->
				<view style="display: flex;justify-content: flex-start; margin-top: 40rpx;">
					<view>
						<u-icon name="/other_pages_mine/static/clock.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx; width: 100%;display: flex;">
						<u--text :bold="false" size="30" color="#303133" text="订座时间" align="left" />
						<view style="margin-left: 10rpx;">
							<u--text :bold="false" size="30" color="#303133" text="2022年04月20日 12:00" align="left" />
						</view>
					</view>
				</view>
				<!-- 订单底部按钮 -->
				<view style="display: flex;justify-content: space-between; margin-top: 40rpx;">
					<view style="width: 100%;">
						<u-button color="#35a5ed" shape="circle" @click="cancel" text="取消订座"></u-button>
					</view>
					<view style="margin-left: 40rpx; width: 100%;">
						<u-button color="#35a5ed" shape="circle"  @click="advance" text="提前开始"></u-button>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			show: {
				default: true,
				type: Boolean
			}
		},
		data() {
			return {

			}
		},
		methods: {
			cancel(item){
				console.log("cancel")
			},
			advance(item){
				console.log("advance")
			}
		}
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

	.pay-status {
		margin-left: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f1f1f1;
		border-radius: 20rpx;
		padding: 5rpx 15rpx;
	}
</style>
