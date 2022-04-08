<template>
	<view class="tabbar-class">
		<u-tabbar
			:value="index"
			@change="change"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
			activeColor="#35a5ed"
			
		>
		<template v-for="(item,key,index) in tabbar">
			<u-tabbar-item :text="item.text" :icon="item.iconPath" @click="click" size="50"></u-tabbar-item>
		</template>
		</u-tabbar>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
		...mapState(['tabbar','index'])
		},
		methods: {
			...mapMutations(['setIndex']),
			change(name){
				this.setIndex(name)
			},
			click(e) {
				console.log(this.tabbar, e);
				uni.switchTab({
					url: this.tabbar[e].pagePath
				})
			}
		}
	}
</script>

<style>
	.tabbar-class{
	}

</style>
