<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')">
		<view>
			<my-navbar leftText="预定位置" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
				leftIconSize="40">
			</my-navbar>
			<view style="margin: auto 40rpx;">
				<!-- 预约情况 -->
				<view style=" width: 100%;">
					<view class="seat-head">
						<u-icon name="/other_pages/static/seat.png" size="70"></u-icon>
						<p style="margin:auto 20rpx;margin-right: 40rpx;">可预约:40</p>
						<u-icon name="/other_pages/static/seat-fill.png" size="70"></u-icon>
						<p style="margin:auto 20rpx;">已预约:10</p>
					</view>
				</view>
				<!-- 舒适区 -->
				<view class="vip">
					<u--text :bold="false" size="28" color="#303133" text="V区舒适区·舒适区" align="center" />
					<view style="margin-top: 40rpx;">
						<view style="display: flex; flex-wrap: wrap; width: 100%;">
							<view v-for="(index) in 10" :key="index" style="margin-left: 60rpx;margin-bottom: 40rpx;"
								@click="show = true">
								<u-icon name="/other_pages/static/seat.png" size="60"></u-icon>
								<!-- <u-icon name="/other_pages/static/seat-fill.png" size="60"></u-icon> -->
								<view style="height: 10rpx;"></view>
								<u--text :bold="false" size="26" color="#9a9a9a" :text="index+1+'号'" align="center" />
							</view>
						</view>
					</view>
				</view>
				<!-- 经济区 -->
				<view class="vip">
					<u--text :bold="false" size="28" color="#303133" text="W区经济座·经济区" align="center" />
					<view style="margin-top: 40rpx;">
						<view style="display: flex; flex-wrap: wrap; width: 100%;">
							<view v-for="(index) in 10" :key="index" style="margin-left: 60rpx;margin-bottom: 40rpx;">
								<u-icon name="/other_pages/static/seat.png" size="60"></u-icon>
								<!-- <u-icon name="/other_pages/static/seat-fill.png" size="60"></u-icon> -->
								<view style="height: 10rpx;"></view>
								<u--text :bold="false" size="26" color="#9a9a9a" :text="index+1+'号'" align="center" />
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 一言区域 -->
			<view style="margin-top: 40rpx; margin-bottom: 350rpx;">
				<u--text :bold="false" size="24" color="#353535" align="center" :text='oneToke' />
			</view>
			<!-- 底部固定浮动区域 -->
			<view class="foot">
				<u--text :bold="true" size="28" color="#303133" :text="store.roomName" align="left" />
				<view style="display: flex; justify-content: space-between; margin: 40rpx auto;">
					<view style="display: flex; flex-direction: row;">
						<view>
							<u--text :bold="true" size="28" color="#35a5ed" text="今天" align="left" />
						</view>
						<view style="margin-left: 10rpx; margin-right: 20rpx;">
							<u--text :bold="true" size="28" color="#b8b8b8" :text="date" align="left" />
						</view>
						<view>
							<u--text :bold="true" size="28" color="#000000" :text="'开始'+time" align="left" />
						</view>
						<view style="margin-left: 20rpx;">
							<u--text :bold="true" size="28" color="#35a5ed" :text="orderTotal+'小时'" align="left" />
						</view>
					</view>
					<view style="margin-right: 20rpx;" @click="back">
						<u--text :bold="true" size="28" color="#ff8215" text="修改" align="left" />
					</view>
				</view>
			</view>
		</view>
	</page-meta>
	<view>
		<u-action-sheet :show="show" @close="show = false" title="座位详情" :iconSize="36" :round="40"
			:safeAreaInsetBottom="true">
			<view style="margin-top: 20rpx;"></view>
			<view style="display: flex; justify-content: center; align-items: center;margin-bottom: 20rpx;">
				<u--image src="/other_pages/static/seat-detail.png" mode="aspectFit"></u--image>
			</view>
			<u--text :bold="false" size="28" color="#303133" text="W区经济座 14号" align="center" />
			<view style="margin: 40rpx 20rpx;">
				<u-button color="#35a5ed" size="large" @click="toPayment" text="确认座位"></u-button>
			</view>
		</u-action-sheet>
	</view>

</template>

<script>
	import {
		mapState,
	} from 'vuex'
	export default {
		props: {
			startTimestamp: {
				type: Number
			},
			endTimestamp: {
				type: Number
			},
			orderTotal: {
				type: Number
			}
		},
		data() {
			return {
				date: '',
				time: '',
				show: false
			}
		},
		computed: {
			...mapState(['oneToke', 'store'])
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			toPayment() {
				uni.$u.route('/other_pages/payment/payment', {

				})
			}
		},
		onLoad() {
			this.date = uni.$u.date(this.startTimestamp, 'mm月dd日')
			this.time = uni.$u.date(this.startTimestamp, 'hh:MM')
		}
	}
</script>

<style lang="scss">
	.seat-head {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		font-weight: 500;
		margin: 40rpx auto;
		color: #4d4d4d;
	}

	.vip {
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding-top: 30rpx;
		margin-bottom: 20rpx;
	}

	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		// height: 200rpx;
		box-shadow: 4rpx -4rpx 16px 2rpx #68686870;
		// border-top: 1rpx solid #b6b6b6;
		padding: 40rpx;
	}
</style>
