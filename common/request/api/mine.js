export function	getOneToke() {
	console.log("mine onLoad")
	var data = null
	uni.getStorage({
		key: 'hitokoto',
		success(res) {
			data = JSON.parse(res.data)
			console.log(data)
			if(data.from_who === null){
				var reData =  data.hitokoto+'——'+data.from
				console.log(reData)
				return reData
			}
			var reData = data.hitokoto+'——'+data.from_who
			console.log(reData)
			return reData.toString()
		}
	})
}
