// 404路由
const errorPage = {
	path: '*',
	name: '404',
	meta: {
		title: '404-您访问的页面不存在'
	},
	component: () => import('@/components/error/index')
}

// 登录路由
const loginPage = {
	path: '/login',
	name: 'login',
	meta: {
		title: '登录',
		isLogin: true
	},
	component: () => import('@/components/login/index')
}

// 首页路由
const homePage = {
	path: '/',
	meta: {
		title: '首页',
		keepAlive: true
	},
	redirect: {
		name: 'home',
	},
	component: () => import('@/components/layout/index'),
	children: [{
			path: 'home',
			name: 'home',
			meta: {
				title: '首页',
				keepAlive: true
			},
			component: () => import('@/components/home/index')
		},
		{
			path: 'rank',
			name: 'rank',
			meta: {
				title: '排行榜',
				keepAlive: true
			},
			component: () => import('@/components/rank/index')
		},
		{
			path: 'playlist',
			name: 'playlist',
			meta: {
				title: '歌单',
				keepAlive: true
			},
			component: () => import('@/components/playlist/index')
		},
		{
			path: 'player',
			name: 'player',
			meta: {
				title: '歌手',
				keepAlive: true
			},
			component: () => import('@/components/player/index')
		},
		{
			path: 'video',
			name: 'video',
			meta: {
				title: '视频',
				keepAlive: true
			},
			component: () => import('@/components/video/index')
		},
		{
			path: 'mv',
			name: 'mv',
			meta: {
				title: 'MV',
				keepAlive: true
			},
			component: () => import('@/components/mv/index')
		},

	]
}
const routes = [errorPage, loginPage, homePage];

export default routes