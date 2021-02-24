import config from './config';

/**
 * 手机登录 
 * phone: 手机号码  password: 密码 
 */
const mobileLogin = (phone, password) => {
	return config({
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
const userInfo = (uid) => {
	return config({
		url: '/user/detail',
		params: {
			uid
		}
	})
}
export default {
	mobileLogin,
	userInfo
}