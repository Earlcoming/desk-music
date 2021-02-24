<template>
    <div class="music-search">
        <div class="search-icon pointer" @click="showSearch">
            <i class="iconfont iconchangyongicon-"></i>
        </div>
        <div class="line"></div>

        <div class="search-status" v-if="loginStatus">
            <el-avatar :src="userInfo.avatarUrl"></el-avatar>
            <el-dropdown @click="handleClick">
                <span class="el-dropdown-link">
                    {{ userInfo.nickname }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-user">个人主页</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-medal">我的等级</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="login pointer" @click="login" v-else>登录</div>
        <div class="search-list" :class="[open, close]">
            <div class="search-empty" @click="closeSearch"></div>
            <div class="search-body">
                <div class="search-close pointer" @click="closeSearch">
                    <i class="iconfont iconclose"></i>
                </div>
                <div class="saerch-form">
                    <div class="saerch-form-bg"></div>
                    <input
                        type="text"
                        @keyup.enter="search"
                        v-model="searchKeywords"
                        placeholder="请输入关键词并按回车搜索..."
                    />
                </div>
                <div class="search-hot">
                    <div class="search-hot-name">
                        <i class="iconfont iconremen"></i>
                        <span>热门搜索</span>
                    </div>
                    <div class="search-hot-list">
                        <ul>
                            <li><a href="">热门搜索</a></li>
                            <li><a href="">热门搜索</a></li>
                            <li><a href="">热门搜索</a></li>
                            <li><a href="">热门搜索</a></li>
                            <li><a href="">热门搜索</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
    name: "",
    data() {
        return {
            searchKeywords: "",
            open: "",
            close: "",
            userList: [],
        };
    },
    components: {},
    computed: {
        ...mapGetters(["loginStatus", 'userInfo']),
    },
    methods: {
        /* 开搜索列表 */
        showSearch() {
            this.open = "open";
            this.close = "";
        },
        /* 关搜索列表 */
        closeSearch() {
            this.open = "";
            this.close = "close";
        },
        /* 搜索 */
        search() {
            console.log(this.searchKeywords);
        },
        /* 登录,跳转到登录页面 */
        login() {
            this.$router.push({ name: "login" });
        },
        // 用户信息点击
        handleClick() {},
    },
    created() {
        
    },
};
</script>

<style lang="sass" scoped>
.music-search
	display: flex
	align-items: center
	.search-icon
		i
			font-size: 22px
	.line
		width: 1px
		height: 25px
		margin-top: 0
		margin: 0 15px
		background-color: #ccc
	.search-status
		display: flex
		align-items: center
		img
			max-width: 35px
			border-radius: 50%
		.user-name
			margin: 0 5px
		.user-icon
			i
				font-size: 14px
				cursor: pointer
	.search-list
		position: fixed
		left: 0
		right: 0
		bottom: 0
		top: 0
		width: 100%
		height: 100%
		z-index: -10
		opacity: 0
		background-color: rgba(0,0,0,.22)
		backdrop-filter: blur(10px)
		transition: all .3s .1s
		&.open
			opacity: 1
			z-index: 9
			.search-body
				transform: translate(-50%, -50%)
				opacity: 1
		&.close
			opacity: 0
			transition: all .6s .1s
			.search-body
				transition-delay: 0.1s
		.search-empty
			position: absolute
			z-index: 9
			left: 0
			top: 0
			right: 0
			bottom: 0
			width: 100%
			height: 100%
		.search-body
			position: absolute
			z-index: 10
			left: 50%
			top: 50%
			width: 100%
			max-width: 800px
			transform: translate(-50%, -40%)
			transition: all .3s
			transition-delay: .2s
			opacity: 0
			.saerch-form
				min-height: 180px
				display: flex
				justify-content: center
				align-items: center
				position: relative
				overflow: hidden
				border-top-left-radius: 5px
				border-top-right-radius: 5px
				input
					position: absolute
					left: 50%
					right: 50%
					transform: translate(-50%, -50%)
					border: none
					line-height: 35px
					background-color: rgba(255,255,255,.1)
					color: #fff
					width: calc(100% - 4vw)
					padding-left: 20px
					&::-webkit-input-placeholder
						color: #fff
				.saerch-form-bg
					position: absolute
					left: 0
					top: 0
					right: 0
					bottom: 0
					width: 100%
					height: 100%
					background-image: url('../../assets/img/personal.jpg')
					background-repeat: no-repeat
					background-size: cover
					background-position: 50%
					filter: blur(15px)
					transform: scale(1.1)
					&:before
						position: absolute
						left: 0
						top: 0
						right: 0
						bottom: 0
						width: 100%
						height: 100%
						content: ''
						background: linear-gradient(270deg, #f27121, #e94057, #8a2387)
						opacity: .3
			.search-hot
				background-color: #fff
				overflow: hidden
				border-bottom-left-radius: 5px
				border-bottom-right-radius: 5px
				padding: 1.5vw 2vw
				.search-hot-name
					margin-bottom: 1vw
					i
						color: #fa2800
						margin-right: 10px
						font-size: 24px
					span
						font-size: 18px
				.search-hot-list
					ul
						display: flex
						align-items: center
						margin-left: -.5rem
						margin-rigth: -.5rem
						li
							padding: .5rem
							a
								background-color: rgba(0,0,0,.05)
								border-radius: 4px
								padding: .5rem 1rem
								color: lighten(#333, 40%)
								transition: all .3s ease-in
								font-size: 13px
								&:hover
									color: #333
		.search-close
			position: absolute
			left: 50%
			bottom: -45px
			width: 30px
			height: 30px
			border-radius: 50%
			display: flex
			justify-content: center
			align-items: center
			color: #555
			background-color: #fff
			i
				font-size: 22px
				line-height: 1
				display: block
</style>