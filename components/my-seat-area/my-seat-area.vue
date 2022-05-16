<template>
	<view>
		<u--text v-if="areaNum==0" :bold="true" size="28" color="#35a5ed" text="经济区" align="center" />
		<u--text v-else-if="areaNum==1" :bold="true" size="28" color="#35a5ed" text="舒适区" align="center" />
	</view>
</template>

<script>
	export default {
		props: {
			areaNum: {
				type: Number
			}
		},
		name: "my-seat-area",
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
