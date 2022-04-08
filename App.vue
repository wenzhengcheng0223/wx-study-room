<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
<script>
	   
	export default {
		onLaunch: function() {
			const that = this
			console.log('App Launch')
			uni.hideTabBar({
				animation: false
			})
			// getHitokoto("k", "json",20).then(res => {
			// 	res.forEach(function(res) {
			// 		if (res !== null) {
			// 			uni.setStorageSync('hitokoto',JSON.stringify(res.data))
			// 			const data = res.data
			// 			if(data.from_who === null || data.from_who === "佚名"){
			// 				that.setOneToke(data.hitokoto+'—— '+data.from)
			// 			}else{
			// 				that.setOneToke(data.hitokoto+'—— '+data.from_who)
			// 			}
						
			// 		}
			// 	})
			// })
			// console.log(this.oneToke)

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}

	}
</script>

<style>
	/*每个页面公共css */
</style>
