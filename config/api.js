const http = uni.$u.http

/**
 * 临时登陆code获取token
 */
export const login = (params, config = {}) => http.post('/api/wx/login', params, config)

export const phone = (params, config = {}) => http.post('/api/wx/phone', params, config)

export const userInfo = (params, config = {}) => http.post('/api/wx/userInfo', params, config)

export const getBalance = (params) => http.get('/api/wx/user/balance', params)
export const getCard = (params) => http.get('/api/wx/user/card', params)
