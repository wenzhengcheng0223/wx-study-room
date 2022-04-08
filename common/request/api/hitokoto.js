export var getHitokoto = (type,encode,length)=>
	uni.request({
		url: 'https://v1.hitokoto.cn/',
		data: {
			c: type,
			encode: encode,
			max_length: length
		},
		method: 'GET'
	})
