<template>
  <div id="loginbox">
        <!-- 登录的外框 -->
        <el-card class="box-card" id="login">
            <div slot="header" class="clearfix">
                <h2>用户登录</h2>
            </div>
            <div class="text item">
                <!-- 登录的表单 -->
                <el-form
                    :model="ruleForm2"
                    status-icon
                    :rules="rules2"
                    ref="ruleForm2"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="账号" prop="username">
                        <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
  </div>
</template>

<script>
    // 暴露一个模块： 登录组件
    export default {
        data() {
            //返回的数据
            return {
                //数据对象
                ruleForm2: {
                    pass: "",
                    username: ""
                },
                //验证规则
                rules2: {
                    username: [
                        { required: true, trigger: "blur", message: "账号必须填写" },
                        //min: 6 最小长度   max: 18 最大长度
                        {
                            min: 6,
                            max: 18,
                            message: "用户名长度在 6 到 12 个字符",
                            trigger: "blur"
                        }
                    ],
                    pass: [
                        { required: true, trigger: "blur", message: "密码必须填写" },
                        {
                            min: 6,
                            max: 12,
                            message: "密码长度在 6 到 18 个字符",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        methods: {
            //提交表单的方法
            submitForm(formName) {
                //调用组件的验证方法提交表单是验证
                this.$refs[formName].validate(valid => {
                    //true表示验证通过，false验证失败
                    if (valid) {
                        //发起ajax请求去后端做数据库的验证
                        this.$router.push('/');
                    } else {
                        alert("× 登陆失败!");
                        return false;
                    }
                });
            },
            //重置表单的方法
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>

<style>
    #loginbox {
        background-image: url(../assets/images/loginbackground.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size:100% 100%
    }
    #login {
        width: 500px;
        height: 300px;
        /* 让盒子水平和垂直绝对居中 */
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .el-card__header {
        padding: 0 20px !important;
    }
    .el-card__header h2{
        color: skyblue;
    }
    .el-form-item__label {
        text-align: center !important;
        color: #aaa !important;
        width: 55px !important;
    }
    .el-form-item__content{
        margin-left: 75px !important;
    }
    .el-button--primary {
        background-color: skyblue !important;
        border-color: skyblue !important;
    }
    .el-form-item__label{
        padding: 0 !important;
    }
    .el-form-item {
        margin-bottom: 28px !important;
    }
</style>



