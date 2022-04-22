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
						<u--text :bold="true" size="30" color="#303133" text="40点" align="left" />
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
	</view>
</template>

<script>
	export default {
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
			pay() {
				console.log(this.money)
				console.log(this.give)
			}
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
