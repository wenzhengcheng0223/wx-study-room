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
						<u--text :bold="false" size="26" color="#ffffff" align="center"
							:text="'统计时间:'+year+'.'+month+'.01—'+year+'.'+month+'.'+day" />
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
							<u-avatar :src="rankList[1].avatar" size="100rpx"></u-avatar>
						</view>
						<view style="position: relative;">
							<view style="width: 100%; background-color: #ffffff;">
								<u--text :bold="false" size="26" color="#070707" align="center"
									:text="rankList[1].name" />
							</view>
						</view>
						<view
							style="position:absolute;bottom: 20rpx;left: 30rpx; background-color: #efefef;border-radius: 40rpx;">
							<view
								style="display: flex; justify-content: center; width: 136rpx;margin: auto 20rpx; height: 60rpx;">
								<u--text :bold="true" size="36" color="#4facfe" align="right"
									:text="rankList[1].total" />
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
							<u-avatar :src="rankList[0].avatar" size="100rpx"></u-avatar>
						</view>
						<view style="position: relative;">
							<view style="width: 100%; background-color: #ffffff;">
								<u--text :bold="false" size="26" color="#070707" align="center"
									:text="rankList[0].name" />
							</view>
						</view>
						<view
							style="position:absolute;bottom: 60rpx;left: 30rpx; background-color: #efefef;border-radius: 40rpx;">
							<view
								style="display: flex; justify-content: center; width: 136rpx;margin: auto 20rpx; height: 60rpx;">
								<u--text :bold="true" size="36" color="#4facfe" align="right"
									:text="rankList[0].total" />
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
							<u-avatar :src="rankList[2].avatar" size="100rpx"></u-avatar>
						</view>
						<view style="position: relative;">
							<view style="width: 100%; background-color: #ffffff;">
								<u--text :bold="false" size="26" color="#070707" align="center"
									:text="rankList[2].name" />
							</view>
						</view>
						<view
							style="position:absolute;bottom: 20rpx;left: 30rpx; background-color: #efefef;border-radius: 40rpx;">
							<view
								style="display: flex; justify-content: center; width: 136rpx;margin: auto 20rpx; height: 60rpx;">
								<u--text :bold="true" size="36" color="#4facfe" align="right"
									:text="rankList[2].total" />
								<u--text :bold="false" size="26" color="#4facfe" align="" text="小时" />
							</view>
						</view>
					</view>
				</view>

			</view>
			<view>
				<view class="container-list">
					<view class="list-item" v-for="(item,index) in rankList.slice(3)" :key="index"
						:style="(index % 2 ==0 )?' ':'backgroundColor: #f8f8f8'">
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
										<u-avatar :src="item.avatar" size="80rpx"></u-avatar>

									</view>
								</u-col>
								<u-col span="5">
									<u--text :bold="true" size="32" align="left" color="#000000" :text="item.name">
									</u--text>
								</u-col>
								<u-col span="3">
									<view style="display: flex; justify-content: flex-start;">
										<u--text :bold="true" size="36" color="#4facfe" align="right"
											:text="item.total" />
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
						<u-avatar src="/other_pages/static/rank/head.png" size="80rpx"></u-avatar>
					</u-col>
					<u-col span="9">
						<view style="font-size: 26rpx;">
							<p>P_Peaceful</p>
							<p>累计学习10小时</p>

						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['本店排名', '全国排名'],
				current: 0,
				year: new Date().getFullYear(),
				month: new Date().getMonth() + 1,
				day: new Date().getDate(),
				rankList: [],
				viewHeight: 1400,
			}
		},
		methods: {
			sectionChange(index) {
				this.current = index
			}
		},
		onReady() {
			const _this = this
			uni.getSystemInfo({
				success(res) {
					console.log(res)
					_this.viewHeight = (res.windowHeight - 140) * (750 / res.windowWidth)
				}
			})
			var i = 0;
			for (i = 0; i < 50; i++) {
				this.rankList.push({
					name: '实验bug',
					avatar: '/other_pages/static/rank/head.png',
					total: 320 - i
				})
			}

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

	.foot {
		height: 140rpx;
		width: 100%;
		background-color: #ffffff;
		position: absolute;
		bottom: 0rpx;

	}
</style>
