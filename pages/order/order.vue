<template>
	<view style="position: relative;">
		<my-navbar title="预 定 位 置" :custom="false" :autoBack="false"></my-navbar>
		<view class="container">
			<view>
				<view>
					<u--text :bold="true" size="26" color="#c2c2c2" text="预约门店" />
				</view>
				<view style="display:flex; flex-direction:row; margin-top: 20rpx;">
					<view style="width: 305rpx;">
						<u--text lines="1" :bold="true" size="36" color="#5b5b5b" :text="store.roomName" />
					</view>
					<view style="margin-top: 10rpx;padding: auto 0;">
						<u--text :bold="true" size="26" color="#5b5b5b" :text="'('+time+')'" />
					</view>
					<view style="margin-top: 10rpx; margin-left: 20rpx;" @click="changeShowStore()">
						<u--text :bold="true" size="26" color="#35a5ed" text="切换门店" />
					</view>
				</view>
			</view>
			<u-divider></u-divider>
			<view style="margin-top: 40rpx;">
				<u--text :bold="false" size="26" color="#c2c2c2" text="预约开始时间" />
				<view style="margin: 0 auto;text-align: center; width: 100%;margin-top: 20rpx;">
					<image src="/static/order/time.png"></image>
				</view>
				<view style="margin: auto 40rpx;">
					<u-button color="#35a5ed" size="large" @click="clickButton">
						<u-icon name="calendar" color="#ffffff" size="55" label="选择预约时间" :bold="false" labelSize="36"
							labelColor="#ffffff" labelPos="right"></u-icon>
					</u-button>
				</view>
			</view>
		</view>
		<view class="ont-toke" style="margin: auto 40rpx;margin-top: 20rpx;">
			<u--text :bold="false" size="24" color="#353535" align="center" :text='oneToke' />
		</view>
		<my-tabbar></my-tabbar>



		<view style="max-height: 300rpx;">
			<my-action-sheet :list="storeList" :show="showStore" @closeShow="closeShowStore()"></my-action-sheet>
		</view>


		<view>
			<u-popup :show="showTime" @close="close" round="40">
				<view style="margin: 20rpx;">
					<view style="margin: 20rpx auto;">
						<u--text :bold="true" size="34" align="center" text="选择开始时间"></u--text>
					</view>
					<view>
						<u-tabs :current="current" :list="dayList" @click="tabsClick" lineWidth="140rpx"
							lineHeight="4rpx" :activeStyle="activeStyle" :itemStyle="itemStyle" :scrollable="false"
							:inactiveStyle="inactiveStyle"></u-tabs>
						<scroll-view scroll-y="true"
							style="max-height: 600rpx;border-top: 2rpx solid #d5d5d5;border-bottom: 2rpx solid #d5d5d5;">
							<u-cell-group>
								<!-- <view v-if="current"> -->
								<u-cell v-for="(list,indexList) in timeList" :key="indexList">
									<view slot="title" class="time">
										<view class="time-item" v-for="(array,indexArray) in list" :key="indexArray">
											<u-tag size="large" :text="array.time" borderColor="#ffffff" shape="circle"
												:plain="array.checked" color="#000000" type="primary" :name="indexArray"
												@click="radioClick(array)">
											</u-tag>
										</view>
									</view>
								</u-cell>
							</u-cell-group>
						</scroll-view>
						<view style="width: 100%;margin: 40rpx auto;">
							<view style="text-align: center;">
								<span style="font-size: 28rpx; color: #555555;">已选时间：</span>
								<span style="font-size: 34rpx; color: #35a5ed;">{{orderDay}}-{{orderTime}}</span>
							</view>
							<view style="margin-top: 40rpx;">
								<u-button text="确 认" type="primary" size="large" @click="toSeat"></u-button>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex'
	export default {
		data() {
			return {
				time: '08:00-23:00',
				showStore: false,
				showTime: false,
				inactiveStyle: {
					fontSize: '30rpx'
				},
				itemStyle: {
					textAlign: 'center',
					width: '140rpx',
					paddingBottom: ' 20rpx',
					lineHeight: '50rpx'
				},
				activeStyle: {
					color: '#35a5ed',
					fontWeight: 'bold'
				},
				dayList: [],
				timeList: [],
				allTimeList: [],
				orderTime: '',
				orderDay: '',
				orderTimestamp: '',
				current: 0
			}
		},
		methods: {
			closeShowStore() {
				this.showStore = false
			},
			changeShowStore() {
				this.showStore = true;
			},
			closeShowTime() {
				this.showTime = false;
			},
			clickButton() {
				this.showTime = true;
				this.setDayList()
				this.getTimeList(this.dayList[0].timestamp)
				this.orderDay = uni.$u.date(this.dayList[0].timestamp, 'mm月dd日')
				console.log(this.orderDay)
			},
			// 时间标签
			radioClick(array) {
				const that = this
				console.log(array)

				that.timeList.forEach(function(list, index) {
					list.forEach(function(item, key) {
						item.checked = array.time === item.time ? false : true
						if (array.time === item.time) {
							that.orderTime = uni.$u.date(item.timestamp, 'hh:MM')
							that.orderTimestamp = item.timestamp
						}
					})
				})

			},
			getTimeList(timestamp) {

				console.log(uni.$u.date(timestamp, 'yyyy-mm-dd hh:MM:ss'))
				console.log(this.dayList)
				var time = new Date(Date.now()); //设置的时间
				time.setSeconds(0)
				var day = new Date(timestamp); //切换tabs的日期
				this.timeList = []

				if (day.getDate() != time.getDate()) {
					console.log("非当天预约时间")
					time = new Date(timestamp)
					time.setSeconds(0)
					time.setHours(8)
					time.setMinutes(0)
					while (time.getHours() <= 22 && time.getMinutes() !== 30) {
						var a = [];
						for (var i = 0; i < 4; i++) {
							if (time.getHours() == 23 && time.getMinutes() == 0) break;
							a.push({
								time: uni.$u.date(time.valueOf(), 'hh:MM'),
								checked: true,
								timestamp: time.valueOf(),
							})

							time.setMinutes(time.getMinutes() + 30)
						}
						this.timeList.push(a)
						if (time.getHours() == 22 && time.getMinutes() == 30) break;
					}
				} else {
					console.log("当天预约时间")
					console.log(time.toLocaleString())
					if (time.getMinutes() <= 30 && time.getMinutes() >= 0) {
						time.setMinutes(30)
					} else {
						time.setMinutes(0)
						time.setHours(time.getHours() + 1)
					}
					if (time.getHours() < 8) {
						time.setHours(8)
						time.setMinutes(0)
					}
					while (time.getHours() <= 22) {
						var a = [];
						for (var i = 0; i < 4; i++) {
							if (time.getHours() == 23 && time.getMinutes() == 0) break;
							a.push({
								time: uni.$u.date(time.valueOf(), 'hh:MM'),
								checked: true,
								timestamp: time.valueOf(),
							})
							// console.log(time.toLocaleString())
							time.setMinutes(time.getMinutes() + 30)
						}
						this.timeList.push(a)
						if (time.getHours() == 22 && time.getMinutes() == 30) break;
					}
				}
				console.log(this.timeList)

			},
			// tabs 切换
			tabsClick(item) {
				this.current = item.index
				console.log(item, item.timestamp)
				this.getTimeList(item.timestamp)
				this.orderDay = uni.$u.date(item.timestamp, 'mm月dd日')
			},
			setDayList() {
				var weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				var day = new Date(Date.now())
				this.dayList = []
				if (day.getHours() != 22 && day.getMinutes() != 30) {
					this.dayList.push({
						index: 0,
						name: uni.$u.date(day.valueOf(), 'mm月dd日') + '\n' + weekArr[day.getDay()],
						timestamp: day.valueOf()
					})
				}
				day.setHours(day.getHours() + 24)
				this.dayList.push({
					index: 1,
					name: uni.$u.date(day.valueOf(), 'mm月dd日') + "\n" + weekArr[day.getDay()],
					timestamp: day.valueOf()
				})
				day.setHours(day.getHours() + 24)
				this.dayList.push({
					index: 2,
					name: uni.$u.date(day.valueOf(), 'mm月dd日') + "\n" + weekArr[day.getDay()],
					timestamp: day.valueOf()
				})


			},
			close() {
				this.current = 0
				this.showTime = false
			},
			toSeat() {
				if (this.orderTime == '') {
					uni.showToast({
						title: "请选择预约时间",
						icon: 'error'
					})
				} else {
					uni.$u.route('/other_pages/seat/seat', {
						orderTimestamp: this.orderTimestamp,
						storeName: this.store.roomName,
						time: this.time,
						orderDay: this.orderDay
					});
				}

			}

		},
		computed: {
			...mapState(['oneToke', 'store', 'storeList'])
		},
		onReady() {},
		onShow() {}
	}
</script>

<style lang="scss">
	.container {
		background-color: #FFFFFF;
		// width: 100%;
		margin: 40rpx;
		padding: 40rpx;
		border-radius: 20rpx;
	}

	.ont-toke {
		// position: absolute;
		// width: 100%;
		// background-color: #4CD964;
		// margin-top: ;
	}

	.time {
		// margin: auto 40rpx;
		margin-left: 40rpx;
		padding: auto 140rpx;

		.time-item {
			display: inline-block;
			margin: 20rpx auto;
			font-size: 34rpx;
		}
	}
</style>
