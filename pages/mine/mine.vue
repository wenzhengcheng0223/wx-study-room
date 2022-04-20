<template style="position: relative;">
	<view>
		<my-navbar :custom="false" title=" " :autoBack="false"></my-navbar>
		<view class="container">
			<!-- 头像信息 -->
			<view class="user">
				<u-row>
					<u-col span="2">
						<view class="user-avatar">
							<u-avatar src="/static/index/logo.png" size="112"></u-avatar>
						</view>
					</u-col>
					<u-col span="8">
						<view class="user-info">
							<u--text :bold="false" size="36" text="P_Peaceful" />
							<view style="height: 15rpx;"></view>
							<u--text :bold="false" size="26" color="#c2c2c2" text="152****9735" />
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
							<view class="grid-item" style="margin-right: 10rpx;">
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
													:text="vipPoint+'点'" />
											</view>
										</u-col>
									</u-row>
								</view>
							</view>
						</u-col>
						<u-col span="1"> </u-col>
						<u-col span="5" justify="end">
							<view class="grid-item" style="margin-left: 10rpx;">
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
													:text="vipPoint+'张卡'" />
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
							<view class="grid-item" style="margin-right: 10rpx;">
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
							<view class="grid-item" style="margin-left: 10rpx;">
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
				<view class="item">
					<view class="rank" @click="toRank">
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
	} from 'vuex'
	export default {
		data() {
			return {
				oneTokeMarginTop: 0,
				vipPoint: 0,
			}
		},
		computed: {
			...mapState(['oneToke'])
		},
		methods: {
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
			toRank(){
				uni.navigateTo({
					url: '../rank/rank'
				})
			}
		},
		onReady() {
			this.setOneTokeMargin()

		},
		mounted() {
			// const _this = this
			// uni.createSelectorQuery().select(".container").boundingClientRect((data) => {
			// 	console.log(data.height)
			// 	_this.containerHeight = data.height
			// 	_this.oneTokeMarginTop = _this.windowHeight - _this.containerHeight - 30
			// 	console.log("margin-top: "+_this.oneTokeMarginTop)
			// }).exec(function() {

			// })
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
