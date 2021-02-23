import config from './config';

/**
 * 手机登录 
 * phone: 手机号码  password: 密码 
 */
export const mobileLogin = (phone, password) => {
	config.get({
		url: '/login/cellphone',
		params: {
			phone,
			password
		}
	})
}

/**
 * 获取用户详情
 * uid : 用户 id
 */
export const userInfo = (uid) => {
	config.get({
		url: '/user/detail',
		params: {
			uid
		}
	})
}