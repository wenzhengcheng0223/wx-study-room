<template>
	<view>
		<my-navbar leftText="预定位置" leftIcon="arrow-left" :custom="false" bgColor="#ffffff" :autoBack="true" leftIconSize="40">
		</my-navbar>
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			startTimestamp:{
				type : Number
			},
			endTimestamp:{
				type : Number
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
		}
	}
</script>

<style>

</style>
