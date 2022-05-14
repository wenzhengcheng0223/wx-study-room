<template>
	<view v-if="show">
		<view v-for="(item,index) in list" :key="index">
			<view class="card-item">
				<view style="display: flex;justify-content: space-between;align-items: center;">
					<!-- 店名 -->
					<view style="display: flex;justify-content: flex-start;align-items: center;">
						<u-icon name="/other_pages_mine/static/store.png" size="35"></u-icon>
						<view style="margin-left: 20rpx;">
							<u--text :bold="false" size="30" color="#303133" :text="item.roomName" align="center" />
						</view>
					</view>
					<!-- 订单状态 -->
					<view class="pay-status">
						<view>
							<u-icon name="/other_pages_mine/static/stamps.png" size="28"></u-icon>
						</view>
						<view style="margin-left: 10rpx;">
							<my-pay-status :status="item.payStatus"></my-pay-status>
						</view>
					</view>
				</view>
				<!-- 座位区域 -->
				<view style="display: flex;justify-content: flex-start;align-items: center; margin-top: 40rpx;">
					<view>
						<u-icon name="/other_pages_mine/static/seat.png" size="35"></u-icon>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="false" size="30" color="#303133"
							:text="item.areaName+'·'+'舒适区'+'·'+item.seatNum" align="center" />
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
							<u--text :bold="false" size="30" color="#303133" :text="item.startTime" align="left" />
						</view>
					</view>
				</view>
				<!-- 订单底部按钮 -->
				<view style="display: flex;justify-content: space-between; margin-top: 40rpx;" v-if="item.payStatus==3">
					<view style="width: 100%;">
						<u-button color="#35a5ed" shape="circle" @click="cancel(item)" text="取消订座"></u-button>
					</view>
					<view style="margin-left: 40rpx; width: 100%;">
						<u-button color="#35a5ed" shape="circle" @click="advance(item)" text="提前开始"></u-button>
					</view>
				</view>
			</view>
		</view>
		<template>
			<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText" :isDot="true"
				:nomore-text="nomoreText" @loadmore="loadmore" fontSize="20" :line="true" loadingIcon="semicircle"
				marginBottom="30" />
		</template>
	</view>
</template>

<script>
	import {
		orderSeatConsumed
	} from '@/config/api.js'
	export default {
		props: {
			show: {
				default: true,
				type: Boolean
			},
			status: {
				default: 'loadmore',
				type: String,
			},
			list: {
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
			cancel(item) {
				console.log("cancel", item)
			},
			async advance(item) {
				console.log("advance", item)
				const params = {
					orderId: item.orderId,
					hours: item.hours
				}
				const {
					date: res
				} = await orderSeatConsumed(params, {
					custom: {
						auth: true
					}
				})
				console.log(res)
			},
			loadmore() {
				if (this.status == 'loadmore') this.$emit('loadmore');
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
