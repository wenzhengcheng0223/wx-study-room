
/**
 * 参数配置文件
 */
module.exports = {
  /**
	 * 应用名
	 */
  name: '祖码农口腔医院预约平台',
  /**
	 * 版本
	 */
  version: '1.0.1',
  /**
	 * 开发环境host
	 */
  devHost: 'https://www.fastmock.site/mock/afd80515f2decda152a5f69295a3dce1',
  /**
	 * 测试环境转发规则
	 */
  devApi: '/dev-api',
  /**
	 * 生产环境host
	 */
  prodHost: 'https://www.fastmock.site/mock/afd80515f2decda152a5f69295a3dce1',
  /**
	 * 生产环境转发规则
	 */
  prodApi: '/prod-api',
  /**
	 * 请求头名称
	 */
  tokenHeadName: 'Authorization',

  /**
	 * 请求头类型
	 */
  tokenTypeName: 'Bearer ',

  /**
	 * 是否开启前端oss直传
	 */
  ossEnable: false,

  /**
	 * 微信公众号appid,填写即代表开启公众号登录
	 */
  wxH5AppId: '',

  /**
	 * 微信公众号授权方式snsapi_base或snsapi_userinfo
	 */
  wxH5scope: 'snsapi_base'
}
