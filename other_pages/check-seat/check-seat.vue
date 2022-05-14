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
						<p style="margin:auto 20rpx;margin-right: 40rpx;">可预约:{{noReservedNum}}</p>
						<u-icon name="/other_pages/static/seat-fill.png" size="70"></u-icon>
						<p style="margin:auto 20rpx;">已预约:{{reservedNum}}</p>
					</view>
				</view>
				<!-- 舒适区 -->
				<view class="vip" v-if="seatVip.length>0">
					<u--text :bold="false" size="28" color="#303133" :text="seatVip[0].areaName+'·舒适区'"
						align="center" />
					<view style="margin-top: 40rpx;">
						<view style="display: flex; flex-wrap: wrap; width: 100%;">
							<view v-for="(item,index) in seatVip" :key="index"
								style="margin-left: 60rpx;margin-bottom: 40rpx;">
								<view>
									<u-icon @click="showSeat(item)" v-if="item.status==true"
										name="/other_pages/static/seat.png" size="60"></u-icon>
									<u-icon v-else name="/other_pages/static/seat-fill.png" size="60"></u-icon>
									<view style="height: 10rpx;"></view>
									<u--text :bold="false" size="26" color="#9a9a9a" :text="item.seatNum+'号'"
										align="center" />
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 经济区 -->
				<view class="vip" v-if="seatCom.length>0">
					<u--text :bold="false" size="28" color="#303133" :text="seatCom[0].areaName+'·经济区'"
						align="center" />
					<view style="margin-top: 40rpx;">
						<view style="display: flex; flex-wrap: wrap; width: 100%;">
							<view v-for="(item,index) in seatCom" :key="index"
								style="margin-left: 60rpx;margin-bottom: 40rpx;">
								<u-icon @click="showSeat(item)" v-if="item.status==true"
									name="/other_pages/static/seat.png" size="60"></u-icon>
								<u-icon v-else name="/other_pages/static/seat-fill.png" size="60"></u-icon>
								<view style="height: 10rpx;"></view>
								<u--text :bold="false" size="26" color="#9a9a9a" :text="item.seatNum+'号'"
									align="center" />
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
	<!-- 座位详情弹框 -->
	<view>
		<u-action-sheet :show="show" @close="show = false" title="座位详情" :iconSize="36" :round="40"
			:safeAreaInsetBottom="true">
			<view style="margin-top: 20rpx;"></view>
			<view style="display: flex; justify-content: center; align-items: center;margin-bottom: 20rpx;">
				<u--image src="/other_pages/static/seat-detail.png" mode="aspectFit"></u--image>
			</view>
			<u--text :bold="false" size="28" color="#303133" :text="seat.areaName+' '+seat.seatNum+'号'"
				align="center" />
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
	import {
		getSeat
	} from '@/config/api.js'
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
				show: false,
				seatCom: [], //经济区
				seatVip: [], //舒适区
				reservedNum: 0, //已预约
				noReservedNum: 0, //可预约
				seat: {}
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
					seat: JSON.stringify(this.seat),
					start: uni.$u.date(this.startTimestamp, 'yyyy-mm-dd hh:MM'),
					end: uni.$u.date(this.endTimestamp, 'yyyy-mm-dd hh:MM'),
					total: this.orderTotal
				})
			},
			showSeat(seat) {
				this.show = true
				this.seat = seat
				console.log(seat)
			},
			async setSeat(start, end, id) {
				const params = {
					roomId: id,
					startTime: start,
					endTime: end
				}
				const {
					data: res
				} = await getSeat(params, {
					custom: {
						auth: true
					}
				})
				console.log("所有座位详情", res)
				this.seatCom = res.seatCom
				this.seatVip = res.seatVip
				this.reservedNum = res.reservedNum
				this.noReservedNum = res.noReservedNum
			}
		},
		onLoad() {
			this.date = uni.$u.date(this.startTimestamp, 'mm月dd日')
			this.time = uni.$u.date(this.startTimestamp, 'hh:MM')
			const start = uni.$u.date(this.startTimestamp, 'yyyy-mm-dd hh:MM:ss')
			const end = uni.$u.date(this.endTimestamp, 'yyyy-mm-dd hh:MM:ss')
			console.log(start, end)
			const store = uni.getStorageSync('store')
			this.setSeat(start, end, store.roomId)
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
