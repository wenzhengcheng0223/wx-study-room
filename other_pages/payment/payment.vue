<template>
	<view>
		<my-navbar leftText="确定订单" leftIcon="arrow-left" bgColor="#66a6ff" :custom="false" :autoBack="true"
			titleStyle="color:#ffffff" leftIconColor="#ffffff" leftIconSize="40"></my-navbar>
		<view class="bg-head"></view>
		<view class="payment-common" style="margin-top: -150rpx;">
			<view>
				<u--text :bold="true" size="30" color="#303133"
					:text="store.roomName+'：'+seatItem.seatNum+'号('+price+'点/小时)'" align="left" />
				<view style="display: flex; justify-content: space-between;align-items: center; margin-top: 40rpx;">
					<u--text :bold="true" size="30" color="#fc751e" :text="date+' '+total+'小时'" align="left" />
					<view>
						<u--text :bold="false" size="28" color="#868686" text="重新选座" align="left" />
					</view>
				</view>
				<u-divider></u-divider>
				<view style="display: flex; justify-content: space-between;align-items: center;">
					<u--text :bold="true" size="28" color="#868686" text="座位费(包括预约)" align="left" />
					<view>
						<u--text :bold="true" size="28" color="#fc751e" :text="totalPrice" align="left" />
					</view>
				</view>
			</view>
		</view>
		<view class="payment-common" style="margin-top: 20rpx;">
			<view>
				<view style="display: flex; justify-content: space-between;align-items: center;">
					<u--text :bold="true" size="30" color="#868686" text="账户：15213129735" align="left" />
					<view style="display: flex; flex-direction: row;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 10rpx;">
							<u--text :bold="true" size="30" color="#fedd7f" :text="account.balance" align="left" />
						</view>
						<view style="margin-left: 20rpx;">
							<u--text :bold="true" size="30" color="#fc751e" text="充值" align="left" />
						</view>
					</view>
				</view>
				<u-divider></u-divider>
				<view style="display: flex; justify-content: space-between;align-items: center;">
					<view style="display: flex;flex-direction: row;">
						<view>
							<u-icon name="/other_pages/static/card.png" size="45"></u-icon>
						</view>
						<view style="margin-left: 10rpx;">
							<u--text :bold="true" size="30" color="#868686" text="时卡" align="right" />
						</view>
					</view>
					<view style="border-radius: 40rpx; background-color: #ff0000;padding: 15rpx 20rpx;">
						<u--text :bold="false" size="26" color="#ebebeb" text="限时开卡优惠 >" align="right" />
					</view>
				</view>
				<view style="display: flex; justify-content: space-between;align-items: center; margin-top: 60rpx;">
					<view style="display: flex;flex-direction: row;">
						<view>
							<u--text :bold="true" size="30" color="#868686" text="时卡说明" />
						</view>
						<view style="margin-left: 10rpx; height: 100%;">
							<u-icon name="question-circle" size="45" color="#868686"></u-icon>
						</view>
					</view>
					<view style="display: flex;flex-direction: row;">
						<view style="height: 100%;margin-right: 10rpx;">
							<u--text :bold="true" size="30" color="#868686" text="小计: 实扣" align="left" />
						</view>
						<u--text :bold="true" size="30" color="#303133" :text="totalPrice" align="right" />
					</view>
				</view>
			</view>
		</view>

		<view style="padding: 50rpx auto;margin: 20rpx 40rpx;">
			<u--text :bold="true" size="30" color="#868686" text="预约须知" align="left" />
			<view style="margin-top: 20rpx; font-size: 22rpx; line-height: 40rpx; color: #868686; font-weight: bold;">
				<p>1.请确认门店和时间无错误，预约成功后可以在我的查看预约详情。(每一个用户每天只有2次免费取消预约订单的机会)。</p>
				<p>2.如果到了预约时间用户一直未签到，系统默认扣除订单金额的0.00%</p>
				<p>3.预约即代表你同意《用户服务协议》</p>
			</view>

		</view>

		<view class="foot">
			<view>
				<view style="display: flex;flex-direction: row;">
					<view style="margin-right: 10rpx;">
						<u--text :bold="true" size="30" color="#868686" text="小计" align="left" />
					</view>
					<u--text :bold="true" size="30" color="#303133" :text="totalPrice" align="right" />
				</view>
			</view>
			<view style="border-radius: 50rpx; background-color: #35a5ed; padding: 25rpx 60rpx;" @click="creatOrder">
				<u--text :bold="false" size="30" color="#f9f9f9" text="确定预约" align="left" />
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex'
	import {
		orderSeat
	} from '@/config/api.js'
	export default {
		props: {
			seat: {
				type: String
			},
			start: {
				type: String
			},
			end: {
				type: String
			},
			total: {
				type: Number
			}
		},
		computed: {
			...mapState(['store', 'account'])
		},
		data() {
			return {
				seatItem: {},
				price: undefined,
				totalPrice: undefined,
				date: undefined
			}
		},
		methods: {
			creatOrder() {
				const balance = this.account.balance
				if (balance < this.totalPrice) {
					uni.$u.toast('余额不足，请先充值！')
				} else {}
				this.pay()


			},
			async pay() {
				uni.showLoading({
					title: '正在预定中'
				})
				const params = {
					description: "预定座位" + this.seatItem.areaName + '-' + this.seatItem.seatNum,
					endTime: uni.$u.date(this.end, 'yyyy-mm-dd hh:MM:ss'),
					payMethod: 0,
					hours: this.total,
					roomId: this.store.roomId,
					seatId: this.seatItem.seatId,
					startTime: uni.$u.date(this.start, 'yyyy-mm-dd hh:MM:ss'),
					total: this.totalPrice
				}
				console.log(params)
				const {
					data: res
				} = await orderSeat(params, {
					custom: {
						auth: true
					}
				});
				console.log("res-----", res)
				if (res.code == 200) {
					setTimeout(() => {
						uni.showToast({
							icon: 'success',
							title: '预定成功'
						})
						// uni.switchTab({
						// 	url: '/pages/mine/mine'
						// })
					}, 2000)

				}

			}

		},
		onLoad() {
			console.log('seat详细信息', JSON.parse(this.seat))
			this.seatItem = JSON.parse(this.seat)
			this.price = this.seatItem.seatArea == 0 ? 5 : 8
			this.totalPrice = this.price * this.total
			this.date = uni.$u.date(this.start, 'yyyy年mm月dd日')
		}
	}
</script>

<style lang="scss">
	.bg-head {
		// background-image: linear-gradient( to bottom,#66a6ff 100%, #beeeff 0%);
		background-image: linear-gradient(360deg, #f8f8f8 0%, #9ed0ff 50%, #66a6ff 100%);
		border-bottom-right-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
		height: 200rpx;
	}

	.payment-common {
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding: 50rpx 30rpx;
		margin: auto 40rpx;
	}

	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
		padding: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
