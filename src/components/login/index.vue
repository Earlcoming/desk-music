<template>
    <div class="login-bg">
        <div class="login-body">
            <el-row>
                <el-col :span="24" class="login-logo">
                    <img src="@/assets/img/logo_black.png" alt="图片" />
                </el-col>
            </el-row>
            <el-form ref="form" :model="ruleForm" size="medium ">
                <el-form-item>
                    <el-input
                        prefix-icon="el-icon-mobile-phone"
                        placeholder="请输入网易云手机号"
                        v-model.number="ruleForm.phone"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-key"
                        autocomplete="off"
                        v-model="ruleForm.password"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" class="login-btn" @click="login"
                        >登录</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: { phone: "", password: "" },
        };
    },
    methods: {
        login() {
            const { phone, password } = this.ruleForm;
            this.$api.mobileLogin(phone, password).then((data) => {
                const d = data.data;
                if (data.data.code === 200) {
                    window.localStorage.setItem("loginStatus", d.loginType);
                    window.localStorage.setItem("cookie", d.cookie);
                    this.getUserInfo(d.profile.userId);
                }
            });
        },
        async getUserInfo(uId) {
            try {
                let res = await this.$api.userInfo(uId);
                if (res.data.code === 200) {
                    window.localStorage.setItem("userInfo", JSON.stringify(res.data.profile));
					setTimeout( ()=> {
						this.$router.push({name: 'home'});
					} ,1000)
                }
            } catch (error){
				console.log(error);
			}
        },
    },
};
</script>
<style lang="sass" scoped>
.login-bg
	background-color: #f5f5f5
	display: flex
	align-items: center
	justify-content: center
	width: 100%
	height: 100%
	.login-body
		width: 400px
		padding: 40px 30px
		background-color: #fff
		border-radius: 5px
		box-shadow: 0 0 10px 3px rgba(0,0,0,.1)
		.login-logo
			text-align: center
			margin-bottom: 30px
			.login-btn
				width: 100%
				display: block
</style>