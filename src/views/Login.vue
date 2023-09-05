<template>
  <div class="login-container">
    <el-form :model="ruleForm" :rules="rules2" status-icon ref="ruleForm" label-position="left" label-width="0px"
      class="demo-ruleForm login-page">
      <h3 class="title">Dmartech</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!-- <el-checkbox 
                v-model="checked"
                class="rememberme"
            >记住密码</el-checkbox> -->
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                logining: false,
                ruleForm: {
                    username: "wei.han",
                    password: "Tljjrcibhqr5@",
                },
                rules2: {
                    username: [{
                        required: true,
                        message: "输入账号",
                        trigger: "blur"
                    }],
                    password: [{
                        required: true,
                        message: "输入密码",
                        trigger: "blur"
                    }],
                },
                checked: false,
            };
        },
        methods: {
            handleSubmit(event) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        // 暂停2s 模拟登录效果
                        let that = this;
                        setTimeout(() => {
                            if (
                                that.ruleForm.username === "wei.han" &&
                                that.ruleForm.password === "Tljjrcibhqr5@"
                            ) {
                                that.logining = false;
                                sessionStorage.setItem("username", that.ruleForm.username);
                                sessionStorage.setItem("password", that.ruleForm.password);
                                that.$router.push({
                                    path: "/"
                                });
                            } else {
                                that.logining = false;
                                that.$alert("账号或密码错误!", "info", {
                                    confirmButtonText: "ok",
                                });
                            }
                        }, 1000);
                    } else {
                        console.log("登陆失败!");
                        return false;
                    }
                });
            },
        },
    };
</script>

<style scoped>
    .login-container {
        width: 100%;
        height: 100%;
        background: url("../assets/back.jpg");
        position: absolute;
        background-repeat: no-repeat;
        position: absolute;
        background-position: 100% 100%;
        background-size: cover;
    }
    
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    
    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
</style>