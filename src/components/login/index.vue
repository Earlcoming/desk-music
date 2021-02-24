<template>
    <div class="login-bg">
        <div class="login-body">
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
        login() {},
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
</style>