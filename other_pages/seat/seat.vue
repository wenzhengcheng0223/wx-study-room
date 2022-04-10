<template>
	<view>
		<view style="position: relative;">
			<my-navbar leftText="预定位置" leftIcon="arrow-left" :custom="false" :autoBack="true" leftIconSize="40">
			</my-navbar>
			<view class="container">
				<view style="padding: 40rpx;">
					<view>
						<view>
							<u--text :bold="false" size="26" color="#c2c2c2" text="预约门店" />
						</view>
						<view
							style="display:flex; flex-direction:row; margin-top: 20rpx; justify-content: space-around;">
							<view style="width: 305rpx;">
								<u--text lines="1" :bold="true" size="36" color="#5b5b5b" :text="storeName" />
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
						<view>
							<u--text :bold="false" size="26" color="#c2c2c2" text="预约开始时间" />
						</view>
						<view style="margin-top: 30rpx;">
							<u-icon name="calendar" color="#35a5ed" size="55" :label="label" :bold="true" labelSize="34"
								labelColor="#35a5ed" labelPos="right" fontWeight="bold" space="20rpx"></u-icon>
						</view>
					</view>
					<u-divider></u-divider>
					<view style="display: flex; flex-direction: row; width: 100%; justify-content: space-between;">
						<view style="margin-left: 2rpx;">
							<u-icon name="clock" size="45" label="到点自动延续" :bold="true" labelSize="34" fontWeight="bold"
								labelPos="right" space="20rpx"></u-icon>
						</view>
						<view>
							<u-switch v-model="switchValue" size="60" inactiveColor="rgb(236, 236, 236)"></u-switch>
						</view>
					</view>
				</view>
				<view style="margin-top: 10rpx;">
					<view style="margin-left: 40rpx;">
						<u--text :bold="false" size="26" color="#c2c2c2" text="选择时长" />
					</view>
					<view style="margin-top: 30rpx; width: 100%; padding: 20rpx;">
						<view class="tag-item">
							<view class="" v-for="(item, index) in radios" :key="index" style="margin-left: 30rpx;margin-bottom: 40rpx;">
								<u-tag :text="`${index + 1} 小时`" :plain="!item.checked" type="info" :name="index"
									shape="circle" size="medium" @click="radioClick">
								</u-tag>
							</view>
							<view style="margin-left: 30rpx;">
								<u-tag text="到关店" :plain="!endChecked" type="info" name="end"
									shape="circle" size="medium" @click="endClick">
								</u-tag>
							</view>
						</view>
					</view>
				</view>
				<view style="display: flex; flex-direction: row;margin: 20rpx 40rpx;">
					<view>
						<p>{{orderTotal ==0 ? '请选择': '已选择'}}</p>
					</view>
					<view style="margin-left: 20rpx;">
						<u--text :bold="true" size="30" color="#35a5ed" 
						:text="`${orderHours==0? '': orderHours+'小时'} ${orderTotal%1==0.5? '30分钟': ''}`" />
						
					</view>
					<view style="margin-left: 20rpx;">
						<u-tag text="+1小时"  size="mini" @click="addHours">
						</u-tag>
					</view>
					<view style="margin-left: 20rpx;">
						<u-tag text="+30分钟"  size="mini" @click="addMinutes">
						</u-tag>
					</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			<view style="margin: 40rpx;">
				<u-button color="#35a5ed" size="large" @click="toCheck">
					开始选座
				</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 预约时间戳
			orderTimestamp: {
				type: Number
			},
			//店名
			storeName: {
				type: String
			},
			//店 开放时间
			time: {
				type: String
			},
			//月日
			orderDay: {
				type: String
			}
		},
		data() {
			return {
				label: '',
				switchValue: false,
				radios: [],
				hours: 10, //小时差
				total: 0, //小时差 单位为 30分钟
				orderTotal:0,
				endChecked:false,
				orderHours:0,
			}
		},
		methods: {
			setLabel() {
				var weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				var date = new Date(this.orderTimestamp)
				this.label = uni.$u.date(this.orderTimestamp, "mm月dd日") + " ( " + weekArr[date.getDay()] + ") " + uni.$u.date(this.orderTimestamp, 'hh:MM')

			},
			radioClick(name) {
				this.orderTotal = name+1
				this.orderHours = parseInt(this.orderTotal)
				console.log(this.orderTotal)
				this.endChecked = false
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			endClick(){
				this.orderTotal = this.total
				this.orderHours = parseInt(this.orderTotal)
				this.endChecked = true
				this.radios.map((item, index) => {
					item.checked = false
				})
			},
			addHours(){
				this.orderTotal+=1
				if(this.orderTotal > this.total)
				{
					this.orderTotal -=1
					uni.showToast({
						title: '超过最大可预约时间',
						duration: 2000,
						icon: 'none'
					});
				}
				this.orderHours = parseInt(this.orderTotal)
			},
			addMinutes(){
				this.orderTotal+= 0.5
				if(this.orderTotal > this.total)
				{
					this.orderTotal -= 0.5
					uni.showToast({
						title: '超过最大可预约时间',
						duration: 2000,
						icon: 'none'
					});
				}
				this.orderHours = parseInt(this.orderTotal)
			},
			toCheck(){
				var expiration = new Date(this.orderTimestamp)
				expiration.setHours(expiration.getHours()+parseInt(this.orderTotal))
				this.orderTotal % 1 == 0.5 ? expiration.setMinutes(expiration.getMinutes()+30) : expiration.setMinutes(expiration.getMinutes())
				uni.$u.route('/other_pages/check-seat/check-seat',{
					timestamp: expiration.getTime()
				})
			},
			// 获取关店时间与预定时间的小时差
			setHours(){
				var date = new Date(this.orderTimestamp)
				var now = new Date(new Date(this.orderTimestamp).setHours(23))
				now.setMinutes(0)
				const hours = new Date(now.getTime() - date.getTime())
				this.hours = hours.getUTCHours()
				console.log(hours.getTime())
				const minutes = hours.getMinutes() === 30 ? 0.5 : 0
				this.total = this.hours + minutes
				console.log(this.total)
				for (var i = 0; i < this.hours; i++) {
					if( i > 5 ) break
					this.radios.push({
						checked: false
					})
				}
				
				
			}
		},
		onLoad() {
			this.setLabel()
			this.setHours()
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #FFFFFF;
		// width: 100%;
		margin: 40rpx;
		// padding: 40rpx;
		border-radius: 20rpx;
	}

	.tag-item {
		
		width: 90%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		// background-color: #007AFF;
	}
</style>
