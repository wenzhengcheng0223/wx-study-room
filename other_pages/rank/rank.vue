<template>
	<view>
		<my-navbar title="排行榜" leftIcon="arrow-left" bgColor="#4facfe" :custom="false" :autoBack="true"
			titleStyle="color:#ffffff" leftIconColor="#ffffff" leftIconSize="40"></my-navbar>
		<scroll-view scroll-y="true" :style="{height: viewHeight +'rpx'}">
			<view style="background-image: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);position: relative;">
				<view class="container">
					<view style="margin: auto 180rpx;padding-top: 50rpx;">
						<u-subsection bgColor="#ffffff80" :list="list" :current="current" fontSize="24"
							@change="sectionChange"></u-subsection>

					</view>
					<view style="margin-top: 20rpx;">
						<u--text :bold="false" size="26" color="#ffffff" align="center" text="排行榜更新延迟在24小时之内" />
					</view>
				</view>
				<view class="top">
					<!-- 第二名 -->
					<view class="two">
						<view style="padding: 0;margin-left: 95rpx;margin-bottom: -10rpx;">
							<u-icon name="/other_pages/static/rank/two.png" size="50rpx"></u-icon>
						</view>
						<view
							style="border: 4rpx solid #dedfdf; width: 100rpx; height: 100rpx;border-radius: 100%;margin-left: 65rpx;">
							<u-avatar :src="rankList[1].user.avatarUrl" size="100rpx"></u-avatar>
						</view>
						<view style="position: relative;">
							<view style="width: 100%; background-color: #ffffff;">
								<u--text :bold="false" size="26" color="#070707" align="center"
									:text="rankList[1].user.nickname" />
							</view>
						</view>
						<view
							style="position:absolute;bottom: 20rpx;left: 30rpx; background-color: #efefef;border-radius: 40rpx;">
							<view
								style="display: flex; justify-content: center; width: 136rpx;margin: auto 20rpx; height: 60rpx;">
								<u--text :bold="true" size="36" color="#4facfe" align="right"
									:text="rankList[1].hours" />
								<u--text :bold="false" size="26" color="#4facfe" align="" text="小时" />
							</view>
						</view>
					</view>
					<!-- 第一名 -->
					<view class="one">
						<view style="padding: 0;margin-left: 95rpx;margin-bottom: -10rpx;">
							<u-icon name="/other_pages/static/rank/one.png" size="50rpx"></u-icon>
						</view>
						<view
							style="border: 4rpx solid #dedfdf; width: 100rpx; height: 100rpx;border-radius: 100%;margin-left: 65rpx;">
							<u-avatar :src="rankList[0].user.avatarUrl" size="100rpx"></u-avatar>
						</view>
						<view style="position: relative;">
							<view style="width: 100%; background-color: #ffffff;">
								<u--text :bold="false" size="26" color="#070707" align="center"
									:text="rankList[0].user.nickname" />
							</view>
						</view>
						<view
							style="position:absolute;bottom: 60rpx;left: 30rpx; background-color: #efefef;border-radius: 40rpx;">
							<view
								style="display: flex; justify-content: center; width: 136rpx;margin: auto 20rpx; height: 60rpx;">
								<u--text :bold="true" size="36" color="#4facfe" align="right"
									:text="rankList[0].hours" />
								<u--text :bold="false" size="26" color="#4facfe" align="" text="小时" />
							</view>
						</view>
					</view>
					<!-- 第三名 -->
					<view class="three">
						<view style="padding: 0;margin-left: 95rpx;margin-bottom: -10rpx;">
							<u-icon name="/other_pages/static/rank/three.png" size="50rpx"></u-icon>
						</view>
						<view
							style="border: 4rpx solid #dedfdf; width: 100rpx; height: 100rpx;border-radius: 100%;margin-left: 65rpx;">
							<u-avatar :src="rankList[2].user.avatarUrl" size="100rpx"></u-avatar>
						</view>
						<view style="position: relative;">
							<view style="width: 100%; background-color: #ffffff;">
								<u--text :bold="false" size="26" color="#070707" align="center"
									:text="rankList[2].user.nickname" />
							</view>
						</view>
						<view
							style="position:absolute;bottom: 20rpx;left: 30rpx; background-color: #efefef;border-radius: 40rpx;">
							<view
								style="display: flex; justify-content: center; width: 136rpx;margin: auto 20rpx; height: 60rpx;">
								<u--text :bold="true" size="36" color="#4facfe" align="right"
									:text="rankList[2].hours" />
								<u--text :bold="false" size="26" color="#4facfe" align="" text="小时" />
							</view>
						</view>
					</view>
				</view>

			</view>
			<view>
				<view class="container-list">
					<view class="list-item" :class="{activeItem:index%2==0}" v-for="(item,index) in rankList.slice(3)"
						:key="index">
						<view>
							<u-row>
								<u-col span="2">
									<view style="">
										<u--text :bold="true" size="32" align="center" color="#000000" :text="index+4">
										</u--text>
									</view>
								</u-col>
								<u-col span="2">
									<view style="margin-left: -10rpx;">
										<u-avatar :src="item.user.avatarUrl" size="80rpx"></u-avatar>
									</view>
								</u-col>
								<u-col span="5">
									<u--text :bold="true" size="32" align="left" color="#000000"
										:text="item.user.nickname">
									</u--text>
								</u-col>
								<u-col span="3">
									<view style="display: flex; justify-content: flex-start;">
										<u--text :bold="true" size="36" color="#4facfe" align="right"
											:text="item.hours" />
										<u--text :bold="false" size="26" color="#4facfe" align="left" text="小时" />
									</view>
								</u-col>
							</u-row>
						</view>
					</view>

				</view>
			</view>
			<view style="height: 100rpx;">

			</view>
		</scroll-view>

		<view class="foot">
			<view style="margin: 30rpx 80rpx;">
				<u-row>
					<u-col span="3">
						<u-avatar :src="userInfo.avatarUrl" size="90rpx"></u-avatar>
					</u-col>
					<u-col span="9">
						<view style="font-size: 26rpx;">
							<p>{{userInfo.nickName}}</p>
							<p>累计学习 {{hours}} 小时</p>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex';
	import {
		getRecordHousrs,
		getRecordRank
	} from '@/config/api.js'
	export default {
		computed: {
			...mapState(['hours'])
		},
		data() {
			return {
				list: ['全国排名'],
				current: 0,
				year: new Date().getFullYear(),
				month: new Date().getMonth() + 1,
				day: new Date().getDate(),
				rankList: [],
				viewHeight: 1400,
				userInfo: {}
			}
		},
		methods: {
			sectionChange(index) {
				this.current = index
			},
			async getHours() {
				const {
					data: res
				} = await getRecordHousrs({
					custom: {
						auth: true
					}
				})
				console.log(res)
				this.$store.commit('setHours', res.hours)
			},
			async getRank() {
				const {
					data: res
				} = await getRecordRank({
					custom: {
						auth: true
					}
				})
				console.log(res)
				this.rankList = res
			}
		},
		onReady() {
			const that = this
			uni.getSystemInfo({
				success(res) {
					console.log(res)
					that.viewHeight = (res.windowHeight - 140) * (750 / res.windowWidth)
				}
			})

		},
		created() {
			const userInfo = uni.getStorageSync('userInfo')
			this.userInfo = JSON.parse(userInfo)
			console.log(this.userInfo)
			this.getHours()
			this.getRank()
		}
	}
</script>

<style lang="scss">
	.container {
		// background-color: #4CD964;
		margin: auto 20rpx;
		height: 440rpx;
	}

	.top {
		display: flex;
		justify-content: space-around;
		margin: auto 20rpx;
		position: absolute;
		bottom: -80rpx;

		// background-color: #005500;
		.two {
			position: absolute;
			bottom: 0rpx;
			left: 0rpx;
			border-radius: 20rpx 0rpx 0rpx 20rpx;
			// box-shadow:0px -10rpx 20rpx 0rpx #a8aaab;
			background-color: #ffffff;
			width: 236rpx;
			height: 280rpx;
			z-index: 1;
			// text-align: center;
			// align-items: center;
		}

		.one {
			position: absolute;
			bottom: 0rpx;
			left: 236rpx;
			border-radius: 20rpx 20rpx 0rpx 0rpx;
			box-shadow: 0px -6px 10px -1px darkgrey;
			background-color: #ffffff;
			width: 236rpx;
			height: 320rpx;
			z-index: 2;
		}

		.three {
			position: absolute;
			bottom: 0rpx;
			left: 470rpx;
			border-radius: 0rpx 20rpx 20rpx 0rpx;
			// box-shadow:0px 0px 10px #ccced0;
			background-color: #ffffff;
			width: 240rpx;
			height: 280rpx;
			z-index: 1;
		}
	}

	.container-list {
		border-radius: 20rpx;
		margin: auto 20rpx;
		padding: auto 20rpx;
		margin-top: 100rpx;
		background-color: #ffffff;
		// height: 400rpx;
		// margin-bottom: 100rpx;

	}

	.list-item {
		padding-top: 20rpx;
		height: 100rpx;

		// background-color: #398ADE;


	}

	.activeItem {
		background-color: #f1f1f1;
	}

	.foot {
		height: 140rpx;
		width: 100%;
		background-color: #ffffff;
		position: absolute;
		bottom: 0rpx;

	}
</style>
