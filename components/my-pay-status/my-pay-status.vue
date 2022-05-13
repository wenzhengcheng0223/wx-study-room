<template>
	<view>
		<u--text v-if="status==0" :bold="false" size="25" color="#a686ba" text="未付款" align="center" />
		<u--text v-else-if="status==1" :bold="false" size="25" color="#a686ba" text="已付款" align="center" />
		<u--text v-else-if="status==2" :bold="false" size="25" color="#a686ba" text="已取消" align="center" />
		<u--text v-else-if="status==3" :bold="false" size="25" color="#a686ba" text="未消费" align="center" />
		<u--text v-else-if="status==4" :bold="false" size="25" color="#a686ba" text="已消费" align="center" />
	</view>
</template>

<script>
	export default {
		name: "my-pay-status",
		props: {
			status: {
				type: Number
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
