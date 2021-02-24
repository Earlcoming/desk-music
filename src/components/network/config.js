import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 1000 * 8
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
	return config;
}, error => {
	console.log('请求超时!');
	return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(config => {
	return config;
}, error => {
	console.log(error);
});

export default instance