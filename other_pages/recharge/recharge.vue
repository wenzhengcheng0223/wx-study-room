<template>
	<view>
		<my-navbar leftText="充值" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true"
			leftIconSize="40" />

		<view class="container">
			<view class="cel-head">
				<view>
					<u--text :bold="true" size="30" color="#303133" text="账户余额" align="left" />
				</view>
				<view style="display: flex;">
					<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
					<view style="margin-left: 10rpx;">
						<u--text :bold="true" size="30" color="#303133" :text="account.balance" align="left" />
					</view>
				</view>
			</view>
			<u-divider></u-divider>
			<view class="cel-body">
				<view class="">
					<u--text :bold="false" size="30" color="#303133" text="充值额度" align="left" />
				</view>
				<view>
					<u--text :bold="false" size="24" color="#868686" text="(1元人民币=1点)" align="left" />
				</view>
			</view>
			<view class="cel-foot">
				<!-- 500点 -->
				<view class="left" :class="{active:money == 20}" @click="changeMoney(20,0)">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 5rpx;">
							<u--text :bold="false" size="26" :color="money==20?'#ff0000':'#303133'" text="20"
								align="left" />
						</view>
					</view>
					<view style="margin-top: 5rpx;margin-bottom: 5rpx;">
						<u--text :bold="false" size="24" :color="money==20?'#ff0000':'#868686'" text="￥20.00"
							align="center" />
					</view>
					<view class="item-foot" :class="{footActive:money == 20}">
						<u--text :bold="false" size="20" color="#ffffff" text="赠送0" align="center" />
					</view>
				</view>
				<!-- 1250点 -->
				<view class="center" :class="{active:money == 80}" @click="changeMoney(80,8)">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 5rpx;">
							<u--text :bold="false" size="26" :color="money==80?'#ff0000':'#303133'" text="80"
								align="left" />
						</view>
					</view>
					<view style="margin-top: 5rpx;margin-bottom: 5rpx;">
						<u--text :bold="false" size="24" :color="money==80?'#ff0000':'#868686'" text="￥80.00"
							align="center" />
					</view>
					<view class="item-foot" :class="{footActive:money == 80}">
						<u--text :bold="false" size="20" color="#ffffff" text="赠送8" align="center" />
					</view>
				</view>
				<!-- 2500点 -->
				<view class="right" :class="{active:money == 200}" @click="changeMoney(200,40)">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 5rpx;">
							<u--text :bold="false" size="26" :color="money==200?'#ff0000':'#303133'" text="200"
								align="left" />
						</view>
					</view>
					<view style="margin-top: 5rpx;margin-bottom: 5rpx;">
						<u--text :bold="false" size="24" :color="money==200?'#ff0000':'#868686'" text="￥200.00"
							align="center" />
					</view>
					<view class="item-foot" :class="{footActive:money == 200}">
						<u--text :bold="false" size="20" color="#ffffff" text="赠送40" align="center" />
					</view>
				</view>
			</view>
			<view class="cel-foot">
				<!-- 500点 -->
				<view class="left" :class="{active:money == 500}" @click="changeMoney(500.00,140)">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 5rpx;">
							<u--text :bold="false" size="26" :color="money==500?'#ff0000':'#303133'" text="500"
								align="left" />
						</view>
					</view>
					<view style="margin-top: 5rpx;margin-bottom: 5rpx;">
						<u--text :bold="false" size="24" :color="money==500?'#ff0000':'#868686'" text="￥500.00"
							align="center" />
					</view>
					<view class="item-foot" :class="{footActive:money == 500}">
						<u--text :bold="false" size="20" color="#ffffff" text="赠送140" align="center" />
					</view>
				</view>
				<!-- 1250点 -->
				<view class="center" :class="{active:money == 1250}" @click="changeMoney(1250.00,470)">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 5rpx;">
							<u--text :bold="false" size="26" :color="money==1250?'#ff0000':'#303133'" text="1250"
								align="left" />
						</view>
					</view>
					<view style="margin-top: 5rpx;margin-bottom: 5rpx;">
						<u--text :bold="false" size="24" :color="money==1250?'#ff0000':'#868686'" text="￥1250.00"
							align="center" />
					</view>
					<view class="item-foot" :class="{footActive:money == 1250}">
						<u--text :bold="false" size="20" color="#ffffff" text="赠送470" align="center" />
					</view>
				</view>
				<!-- 2500点 -->
				<view class="right" :class="{active:money == 2500}" @click="changeMoney(2500.00,1100)">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-icon name="/other_pages/static/stamps.png" size="45"></u-icon>
						<view style="margin-left: 5rpx;">
							<u--text :bold="false" size="26" :color="money==2500?'#ff0000':'#303133'" text="2500"
								align="left" />
						</view>
					</view>
					<view style="margin-top: 5rpx;margin-bottom: 5rpx;">
						<u--text :bold="false" size="24" :color="money==2500?'#ff0000':'#868686'" text="￥2500.00"
							align="center" />
					</view>
					<view class="item-foot" :class="{footActive:money == 2500}">
						<u--text :bold="false" size="20" color="#ffffff" text="赠送1100" align="center" />
					</view>
				</view>
			</view>
			<view class="">

			</view>
		</view>

		<view style="margin: auto 40rpx;">
			<u-button text="请选择充值额度" :plain="true" type="primary" @click="click" v-if="money==0"></u-button>
			<u-button v-else :text="'确定支付￥'+money+'.00'" type="primary" @click="pay"></u-button>
		</view>
		<view style="padding: 50rpx auto;margin: 80rpx 40rpx;">
			<u--text :bold="false" size="26" color="#868686" text="温馨提示" align="left" />
			<view style="margin-top: 20rpx; font-size: 22rpx; line-height: 40rpx; color: #868686;">
				<p>1.点是自习室平台.上可用于消费的支付凭证，仅限于该平台预约订座和其他服务使用。</p>
				<p>2.点充值成功后，不能退款，提现或转赠他人。如有问题，请联系店铺，或者点击我的-意见反馈进行反馈。</p>
				<p></p>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		balanceRecharge,
		getBalance
	} from '@/config/api.js'
	export default {
		computed: {
			...mapState(['oneToke', 'account']),
		},
		data() {
			return {
				money: 0.00,
				give: 0
			}
		},
		methods: {
			changeMoney(money, give) {
				this.money = money
				this.give = give
			},
			click() {
				uni.showToast({
					title: "请选择充值额度",
					icon: 'none'
				})
			},
			async pay() {
				console.log(this.money)
				console.log(this.give)
				const that = this
				const params = {
					amountTotal: 0.01,
					description: "账户余额充值: " + this.money + '-赠送:' + this.give,
					rechargeTotal: this.money + this.give
				}
				const {
					data: res
				} = await balanceRecharge(params, {
					custom: {
						auth: true
					}
				})
				console.log(res)
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: res.timeStamp,
					nonceStr: res.nonceStr,
					package: res.packageValue,
					paySign: res.paySign,
					signType: res.signType,
					success(res) {
						console.log('成功支付-------', res)
						uni.showToast({
							icon: 'success'
						}, 2000)
					},
					fail(res) {
						console.log('支付失败-------', res)
						uni.showToast({
							icon: 'error',
							title: "失败"
						}, 2000)
					},
					complete(res) {
						console.log('最终回调--------', res)
						that.getAccount()
					}
				})
			},
			async getAccount() {
				const {
					data: balance
				} = await
				getBalance({
					custom: {
						auth: true
					}
				})
				console.log(balance)
				this.$store.dispatch("getBalance", balance.balance)
				uni.setStorageSync('balance', balance.balance)
			},
		}
	}
</script>

<style lang="scss">
	.container {
		margin: 40rpx;
		padding: 60rpx 40rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
	}

	.cel-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cel-body {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 60rpx;
	}

	.cel-foot {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 40rpx;

		.left {
			border-radius: 10rpx;
			border: 3rpx solid #e1e1e1;
			width: 300rpx;
			padding-top: 10rpx;
		}

		.center {
			border-radius: 10rpx;
			border: 3rpx solid #e1e1e1;
			width: 300rpx;
			margin: auto 20rpx;
			padding-top: 10rpx;
		}

		.right {
			border-radius: 10rpx;
			border: 3rpx solid #e1e1e1;
			width: 300rpx;
			padding-top: 10rpx;
		}

		.active {
			border: 3rpx solid #ff0000;
			background-color: #ff7b7b10;
		}

		.item-foot {
			border-bottom-left-radius: 10rpx;
			border-bottom-right-radius: 10rpx;
			background-color: #e1e1e1;
		}

		.footActive {
			background-color: #ff0000;
		}
	}
</style>
