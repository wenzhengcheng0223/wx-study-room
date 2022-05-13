<template style="position: relative;">
	<view>
		<my-navbar :custom="false" title=" " :autoBack="false"></my-navbar>
		<view class="container">
			<!-- 头像信息 -->
			<view class="user">
				<u-row>
					<u-col span="2">
						<view class="user-avatar">
							<u-avatar :src="userInfo.avatarUrl" size="112"></u-avatar>
						</view>
					</u-col>
					<u-col span="8">
						<view class="user-info" v-if="isLogin">
							<u--text :bold="false" size="36" :text="userInfo.nickName" />
							<view style="height: 15rpx;"></view>
							<u--text :bold="false" size="26" color="#c2c2c2" :text="userInfo.phone" v-if="isPhone" />
							<view v-else style="padding-right: 80rpx;">
								<u-button type="primary" size="mini" icon="phone" text="获取手机号"
									open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" />
							</view>

						</view>
						<view v-else style="padding-left: 40rpx;" v-else>
							<u-button type="success" @click="getUserInfo" size="normal" icon="weixin-fill"
								text="微信用户一键登录" />
						</view>
					</u-col>
					<u-col span="1" offset="1" textAlign="right">
						<view class="user-icon">
							<u-icon :bold="false" name="/static/mine/setting.png" size="60"></u-icon>
						</view>
					</u-col>
				</u-row>
			</view>
			<!-- 四个宫格区域 -->
			<view class="my-grid">
				<!-- 上面两个 -->
				<view>
					<u-row gutter="0">
						<u-col span="5">
							<view class="grid-item" style="margin-right: 10rpx;" @click="toGrid(0)">
								<view style="height: 25rpx;">
								</view>
								<u-row>
									<u-col span="3">
										<view style="margin-left: 20rpx;margin-top: 4rpx;">
											<u-icon :bold="false" name="/static/mine/vip.png" size="50"></u-icon>
										</view>
									</u-col>
									<u-col span="6">
										<view style="margin-left: 7rpx">
											<u--text :bold="false" align="left" size="36" text="点" />
										</view>
									</u-col>
								</u-row>
								<view style="margin-top: 10rpx;">
									<u-row>
										<u-col span="3">
										</u-col>
										<u-col span="6">
											<view style="margin-left: 7rpx">
												<u--text :bold="false" align="left" color="#666666" size="24"
													:text="account.balance+'点'" />
											</view>
										</u-col>
									</u-row>
								</view>
							</view>
						</u-col>
						<u-col span="1"> </u-col>
						<u-col span="5" justify="end">
							<view class="grid-item" style="margin-left: 10rpx;" @click="toGrid(1)">
								<view style="height: 25rpx;">
								</view>
								<u-row>
									<u-col span="3">
										<view style="margin-left: 20rpx;margin-top: 4rpx;">
											<u-icon :bold="false" name="/static/mine/vipbox.png" size="50"></u-icon>
										</view>
									</u-col>
									<u-col span="6">
										<view style="margin-left: 7rpx">
											<u--text :bold="false" align="left" size="36" text="卡包" />
										</view>
									</u-col>
								</u-row>
								<view style="margin-top: 10rpx;">
									<u-row>
										<u-col span="3">
										</u-col>
										<u-col span="6">
											<view style="margin-left: 7rpx">
												<u--text :bold="false" align="left" color="#666666" size="24"
													:text="account.card.length+'张卡'" />
											</view>
										</u-col>
									</u-row>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
				<!-- 下面两个 -->
				<view style="margin-top: 20rpx;">
					<u-row gutter="0">
						<u-col span="5">
							<view class="grid-item" style="margin-right: 10rpx;" @click="toGrid(2)">
								<view style="height: 25rpx;">
								</view>
								<u-row>
									<u-col span="3">
										<view style="margin-left: 20rpx;margin-top: 4rpx;">
											<u-icon :bold="false" name="/static/mine/save.png" size="50"></u-icon>
										</view>
									</u-col>
									<u-col span="6">
										<view style="margin-left: 7rpx">
											<u--text :bold="false" align="left" size="36" text="储物柜" />
										</view>
									</u-col>
								</u-row>
								<view style="margin-top: 10rpx;">
									<u-row>
										<u-col span="3">
										</u-col>
										<u-col span="6">
											<view style="margin-left: 7rpx">
												<u--text :bold="false" align="left" color="#666666" size="24"
													text="暂未开通" />
											</view>
										</u-col>
									</u-row>
								</view>
							</view>
						</u-col>
						<u-col span="1"> </u-col>
						<u-col span="5" justify="end">
							<view class="grid-item" style="margin-left: 10rpx;" @click="toGrid(3)">
								<view style="height: 25rpx;">
								</view>
								<u-row>
									<u-col span="3">
										<view style="margin-left: 20rpx;margin-top: 4rpx;">
											<u-icon :bold="false" name="/static/mine/mark.png" size="50"></u-icon>
										</view>
									</u-col>
									<u-col span="6">
										<view style="margin-left: 7rpx">
											<u--text :bold="false" align="left" size="36" text="记录" />
										</view>
									</u-col>
								</u-row>
								<view style="margin-top: 10rpx;">
									<u-row>
										<u-col span="3">
										</u-col>
										<u-col span="6">
											<view style="margin-left: 7rpx">
												<u--text :bold="false" align="left" color="#666666" size="24"
													text="学习轨迹" />
											</view>
										</u-col>
									</u-row>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<!-- 排行榜和意见反馈区域 -->
			<view class="rank-save">
				<view class="item" @click="toRank">
					<view class="rank">
						<u-row>
							<u-col span="1">
								<view style="background-color: #ffffff;margin-left: 20rpx;width: 60rpx;">
									<u-icon :bold="false" name="/static/mine/rank.png" size="50"></u-icon>
								</view>
							</u-col>
							<u-col span="7">
								<view style="background-color: #ffffff;margin-left: 35rpx;">
									<u--text :bold="false" size="36" text="排行榜" />
								</view>
							</u-col>
							<u-col span="4">
								<view style="background-color: #ffffff;margin-right: 20rpx;">
									<u--text :bold="false" size="24" color="#666666" align="right" text="每日学习排行榜" />
								</view>
							</u-col>
						</u-row>
					</view>

				</view>
				<view class="item">
					<view class="rank">
						<u-row>
							<u-col span="1">
								<view style="background-color: #ffffff;margin-left: 20rpx;width: 60rpx;">
									<u-icon :bold="false" name="/static/mine/edit.png" size="50"></u-icon>
								</view>
							</u-col>
							<u-col span="7">
								<view style="margin-left: 35rpx;">
									<u--text :bold="false" size="36" text="意见反馈" />
								</view>
							</u-col>
							<u-col span="4">
								<view style="background-color: #ffffff;margin-right: 20rpx;">
									<u--text :bold="false" size="24" color="#666666" align="right" text="问题反馈" />
								</view>
							</u-col>
						</u-row>
					</view>

				</view>
			</view>



		</view>
		<!-- 底部一言区域 -->
		<view class="ont-toke" :style="{top: oneTokeMarginTop +'rpx;' }">
			<u--text :bold="false" size="24" color="#353535" align="center" :text='oneToke' />
		</view>

		<my-tabbar></my-tabbar>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import {
		login,
		phone,
		userInfo,
		getBalance,
		getCard
	} from '@/config/api.js';
	export default {
		data() {
			return {
				oneTokeMarginTop: 0,
				pagePath: [
					'/other_pages_mine/account/account',
					'/other_pages_mine/card_package/card_package',
					'/other_pages_mine/locker/locker',
					'/other_pages_mine/learn_record/learn_record'
				],
				userInfo: {},
				phone: undefined,
				isLogin: false,
				isPhone: false,
				status: false,
				code: undefined
			}
		},
		computed: {
			...mapState(['oneToke', 'account']),

		},
		methods: {
			...mapMutations(['setAccount']),
			setOneTokeMargin() {
				const _this = this
				uni.getSystemInfo({
					success(res) {
						console.log(res.windowWidth)
						_this.oneTokeMarginTop = parseInt((res.windowHeight - 45) * (750 / res.windowWidth))
						console.log(_this.oneTokeMarginTop)
					}
				})
			},
			toRank() {
				console.log(this.isLogin)
				if (this.isLogin == true) {
					uni.navigateTo({
						url: '/other_pages/rank/rank'
					})
				} else {
					uni.$u.toast("请先登录")
				}

			},
			toGrid(num) {
				if (this.isLogin) {
					uni.navigateTo({
						url: this.pagePath[num]
					})
				} else {
					uni.$u.toast("请先登录")
				}

			},
			async toLogin(info) {
				const {
					data
				} = await login({
					code: this.code
				}, {
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
				})
				console.log(data)
				const that = this;
				if (data.token != '') {
					uni.setStorageSync('token', data.token)
					uni.setStorageSync('status', true)
					that.status = true
					userInfo({
						encryptedData: info.encryptedData,
						ivStr: info.iv
					}, {
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						custom: {
							auth: true
						}
					}).then(res => {
						uni.setStorageSync('userInfo', JSON.stringify(info.userInfo))
						uni.setStorageSync('isLogin', true)
						that.userInfo = info.userInfo
						that.isLogin = true
						console.log(res)
						uni.showToast({
							icon: 'success'
						})
					})
					this.getAccount()
				}

				setTimeout(() => {
					uni.hideLoading()
				}, 2000)
			},
			checkLogin() {
				const that = this
				uni.login({
					provider: 'weixin',
					success(res) {
						that.code = res.code
					}
				})

			},
			getUserInfo() {
				const that = this
				that.checkLogin()
				uni.getUserProfile({
					desc: "获取用户信息",
					success(res) {
						uni.showLoading({
							title: "正在登录中"
						})
						that.toLogin(res)

					},
					fail(err) {
						console.log(err)
					}
				})
			},
			getPhoneNumber(e) {
				console.log(e)
				const that = this
				const msg = e.detail.errMsg
				const code = {
					code: e.detail.code
				}
				if (msg == "getPhoneNumber:ok") {
					uni.showLoading({
						title: "正在获取"
					})
					phone(code, {
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						custom: {
							auth: true
						}
					}).then((res) => {

						that.userInfo.phone = res.data.phoneNumber
						uni.setStorageSync('userInfo', JSON.stringify(that.userInfo))
						uni.setStorageSync('isPhone', true)
						that.isPhone = true
						console.log(that.userInfo)
						console.log(res)
						uni.showToast({
							icon: 'success'
						})
					})

				}

			},
			async getAccount() {
				try {
					const {
						data: balance
					} = await
					getBalance({
						custom: {
							auth: true,
							catch: true
						}
					})
					console.log("getAccount-----")
					this.$store.dispatch("getBalance", balance.data.balance)
					console.log(balance)
					const {
						data: card
					} = await getCard({
						custom: {
							auth: true,
							catch: true
						}
					})
					this.$store.dispatch("getCard", card.data)
				} catch (res) {
					if (res.code == 401) {
						uni.clearStorageSync()
						this.initData()
					}
				}

			},
			initData() {
				Object.assign(this, {
					userInfo: {},
					phone: undefined,
					isLogin: false,
					isPhone: false,
					status: false,
					code: undefined
				});
			}

		},
		onShow() {
			console.log("onShow----------")
			var isLogin = uni.getStorageSync('isLogin')
			const that = this
			if (isLogin == true) {
				this.getAccount()
			}
		},
		onReady() {
			console.log("onReady---------")
			this.setOneTokeMargin()
		},
		onLoad() {
			var isLogin = uni.getStorageSync('isLogin')
			const that = this
			if (isLogin == true) {
				// this.getAccount()
				this.userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				this.isLogin = isLogin
				var isPhone = uni.getStorageSync('isPhone')
				if (isPhone != null && isPhone != '') {
					this.isPhone = isPhone
				} else {
					this.isPhone = false
				}

			} else {
				this.userInfo = {}
				this.isLogin = false
			}
			uni.login({
				provider: 'weixin',
				success(res) {
					that.code = res.code
				}
			})
		}
	}
</script>

<style lang="scss">
	.container {
		margin: auto 20rpx;
		margin-top: 20rpx;
		// background-color: #398ADE;
		// height: 300rpx;

	}

	.user {
		.user-avatar {
			// margin-top: 20rpx;
		}

		.user-info {
			// padding-top: 10rpx;
			margin-left: 30rpx;
		}

		.user-icon {}
	}

	.my-grid {
		margin-top: 60rpx;

		// background-color: #4CD964;
		.grid-item {
			// padding: 20rpx auto;
			width: 346rpx;
			height: 150rpx;
			background-color: #ffffff;
			border-radius: 20rpx;
		}
	}

	.rank-save {

		.item {
			margin-top: 20rpx;
			height: 150rpx;
			width: 100%;
			background-color: #ffffff;
			border-radius: 20rpx;
		}

		.rank {
			padding-top: 48rpx;
		}
	}

	.ont-toke {
		position: absolute;
		left: 40rpx;
		right: 40rpx;
		// width: 100%;
		// padding: auto 40rpx;
		// text-align: center;
		// font-size: 24rpx;
		// color: #353535;
		// background-color: #4CD964;
		// margin-top: ;
		// size="24" color="#353535";

	}
</style>
