<template>
	<view v-if="show">
		<view v-for="(item,index) in list" :key="index">
			<view class="card-item">
				<view style="display: flex;justify-content: flex-start;align-items: center;">
					<view>
						<u-icon name="/other_pages_mine/static/store.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="false" size="30" color="#303133" :text="item.roomName" align="center" />
					</view>
				</view>
				<view style="display: flex;justify-content: flex-start;align-items: center; margin-top: 40rpx;">
					<view>
						<u-icon name="/other_pages_mine/static/seat.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="false" size="30" color="#303133"
							:text="item.areaName+'·'+'舒适区'+'·'+item.seatNum" align="center" />
					</view>
				</view>
				<view style="display: flex;justify-content: flex-start; margin-top: 40rpx;">
					<view>
						<u-icon name="/other_pages_mine/static/clock.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx; width: 100%;display: flex;">
						<u--text :bold="false" size="30" color="#303133" text="开始时间" align="left" />
						<view style="margin-left: 10rpx;">
							<u--text :bold="false" size="30" color="#303133"
								:text="item.startTime+'('+item.hours+'小时'+')'" align="left" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<template>
			<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText" :isDot="true"
				:nomore-text="nomoreText" fontSize="20" :line="true" loadingIcon="semicircle" marginBottom="30"
				@loadmore="loadmore" />
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
			list: {
				default: [],
				type: Array
			}

		},
		data() {
			return {
				loadingText: '努力加载中,先喝杯茶',
				loadmoreText: '上拉或点击加载更多',
				nomoreText: '我也是有底线的',
			}
		},
		methods: {
			loadmore() {
				if (this.status == 'loadmore') this.$emit('loadmore');
			}
		},


	}
</script>

<style lang="scss">
	.card-item {
		margin: auto 40rpx;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 50rpx 40rpx;
		box-shadow: 0rpx 0rpx 20rpx 1rpx #d0d0d0;
	}
</style>
