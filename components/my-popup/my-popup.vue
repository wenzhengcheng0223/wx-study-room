<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name: "my-popup",
		
		data() {
			return {
				dayList: [],
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
				timeList:[],
				current:false,
				allTimeList:[]
			};
		},
		methods: {
			close() {
				this.$emit('closeTime')
			},
			
			
		},
		onReady() {
			this.setDayList()
			this.getTimeList()
		}
	}
</script>

<style lang="scss">
	.time {
	
		.time-item {
			display: inline-block;
			margin: 20rpx auto;
			font-size: 34rpx;
		}
	}
</style>
