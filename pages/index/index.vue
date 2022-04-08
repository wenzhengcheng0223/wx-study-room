<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')">
		<view>
			<view>
				<my-navbar leftText=" " :custom="true" :autoBack="false" :show="show" @changeShow="changeShow">
				</my-navbar>
			</view>
			<view style="padding: 40rpx 40rpx 30rpx 40rpx;">
				<u-swiper :list="swiperList" indicator indicatorMode="line" circular height="280" radius="16">
				</u-swiper>
			</view>
			<view>
				<my-index-card></my-index-card>
			</view>
			<!-- 二维码 -->
			<view>
				<my-index-ER></my-index-ER>
			</view>
			<!-- 热门活动 -->
			<view class="content-hot">
				<view>
					<u--text :bold="true" size="24" color="#6a6a6a" :selectable="false" text="热门活动" />
				</view>
				<view class="hot-list" v-for="(index) in 5" :key="index">
					<view style="margin-bottom: 40rpx;">
						<view class="hot-list-item">
							<u-row gutter="6rpx">
								<u-col span="8">
									<view style="margin-left: 20rpx; margin-top: 30rpx;">
										<u--text :bold="true" size="36" color="#0f0f0f" text="考证2人拼团专享(200+20小时经济型)" />
									</view>
									<view style="margin-right: 320rpx; margin-top: 40rpx;">
										<u-icon name="arrow-right" size="28" label="2人团" labelColor="#3e3e3e"
											labelSize="24" labelPos="left"></u-icon>
									</view>
								</u-col>
								<u-col span="4">
									<view style="margin-right: 100rpx;">
										<u--image src="/static/index/vipCard.png" mode="aspectFit" height="210rpx"
											width="210rpx"></u--image>
									</view>
								</u-col>
							</u-row>
						</view>
						<view>
							<u-icon name="arrow-rightward" size="36" label="查看详情" :bold="true" labelSize="26"
								labelColor="#000000" labelPos="left"></u-icon>
						</view>
					</view>
				</view>

			</view>
			<my-tabbar></my-tabbar>
		</view>
	</page-meta>




	<view style="max-height: 300rpx;">
		<my-action-sheet :show="show" @closeShow="closeShow"></my-action-sheet>
	</view>


</template>

<script>
	import {
		getHitokoto
	} from 'common/request/api/hitokoto.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				show: false
			}
		},
		computed: {
			...mapState(['hasLogin', 'openid','oneToke'])
		},
		onLoad() {
			const that = this
			getHitokoto("k", "json", 20).then(res => {
				res.forEach(function(res) {
					if (res !== null) {
						uni.setStorageSync('hitokoto', JSON.stringify(res.data))
						const data = res.data
						if (data.from_who === null || data.from_who === "佚名") {
							that.setOneToke(data.hitokoto + '—— ' + data.from)
						} else {
							that.setOneToke(data.hitokoto + '—— ' + data.from_who)
						}

					}
				})
			})
			console.log(this.oneToke)
		},
		methods: {
			...mapMutations(['setOpenid','setOneToke']),
			changeShow() {
				this.show = true
				console.log(" index show = " + this.show)

			},
			closeShow() {

				this.show = false;
				console.log("index closeShow " + this.show)
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: $u-bg-color;
	}

	.content-hot {
		margin: auto 40rpx;
		margin-top: 40rpx;

	}

	.hot-list {}

	.hot-list-item {
		// position: relative;
		padding: auto 20rpx;
		margin: 20rpx auto;
		height: 210rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
	}

	.item-image {
		// position: absolute;

	}
</style>
