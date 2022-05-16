const http = uni.$u.http


/**
 * 通过临时登录code 换取用户的openid
 * @param {code} params 
 * @param {*} config 
 */
export const login = (params, config = {}) => http.post('/api/wx/login', params, config)

/**
 * 通过临时code（和登录临时code不一样）获取用户手机号
 * @param {code} params 
 * @param {*} config 
 */
export const phone = (params, config = {}) => http.post('/api/wx/phone', params, config)

/**
 * encryptedData:用户加密信息
 * ivStr:加密算法的初始向量
 * @param {*} encryptedData
 * @param {*} ivStr 
 */
export const userInfo = (params, config = {}) => http.post('/api/wx/userInfo', params, config)

/**
 * 获取用户账户余额
 * @param {*} params 
 */
export const getBalance = (params) => http.get('/api/wx/user/balance', params)

/**
 * 获取用户账户拥有的优惠卡
 * @param {} params 
 */
export const getCard = (params) => http.get('/api/wx/user/card', params)

/**
 * 获取用户所有消费订单
 * @param {*} params 
 */
export const getOrder = (params) => http.get('/api/wx/user/order', params)
/**
 * 获取用户所有已消费订单 
 * @param {*} params 
 */
export const getLearnRecord = (params) => http.get('/api/wx/user/order/paid', params)

/**
 * 获取用户自己的累计学习小时数
 * @param {*} params 
 */
export const getRecordHousrs = (params) => http.get('/api/wx/user/record/mine', params)
/**
 * 获取学习记录排行榜
 * @param {*} params 
 */
export const getRecordRank = (params) => http.get('/api/wx/user/record', params)
/**
 * 获取轮播图
 * @param {*} params 
 */
export const getSwiper = (params) => http.get('/api/wx/common/swiper', params)
/**
 * 获取轮播图
 * @param {*} params 
 */
export const getStore = (params) => http.get('/api/wx/common/store', params)


/**
 * 获取当前时间段的座位详情
 * @param {*} params 
 * @param {*} config 
 */
export const getSeat = (params, config = {}) => http.post('/api/wx/common/seat', params, config)

/**
 * 预定座位
 * @param {*} params 
 * @param {*} config 
 */
export const orderSeat = (params, config = {}) => http.post('/api/wx/pay/order/seat', params, config)

/**
 * 消费座位
 * @param {*} params 
 * @param {*} config 
 */
export const orderSeatConsumed = (params, config = {}) => http.put('/api/wx/pay/order/seat/consumed', params, config)

/**
 * 余额充值
 * @param {*} params 
 * @param {*} config 
 */
export const balanceRecharge = (params, config = {}) => http.post('/api/wx/pay/createOrder/recharge', params, config)

/**
 * 获取所有优惠卡列表
 * @param {*} params 
 * @param {*} config 
 */
export const cardList = (params) => http.get('/api/wx/common/card', params)

/**
 * 购买优惠卡
 * @param {*} params 
 * @param {*} config 
 */
export const payCard = (params, config = {}) => http.post('/api/wx/pay/createOrder/card', params, config)
