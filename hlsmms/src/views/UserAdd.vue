<template>
  <el-container id="home">
    <!--------------------------- 左侧 ---------------------------------->
    <LeftMenu></LeftMenu>
    <!--------------------------- 右侧 ---------------------------------->
    <el-container id="mainContent">
      <!-- 顶部 -->
      <RightTop></RightTop>
      <!-- 中间 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加用户</h3>
          </div>
          <!-- 表单 -->
          <div class="text item">
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              label-position="top"
            >
              <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="确认密码" prop="passCheck">
                <el-input type="password" v-model="ruleForm2.passCheck" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="选择用户组" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
      <RightBottom></RightBottom>
    </el-container>
  </el-container>
</template>

<script>
//引入导航组建
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/righttop";
import RightBottom from "../components/rightbottom";

export default {
  data() {
    //自定义验证2次密码是否一致
    var validatePassword = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    //返回的数据
    return {
      //数据对象
      ruleForm2: {
        pass: "",
        username: "",
        passCheck: "",
        usergroup: ""
      },
      //验证规则
      rules2: {
        username: [
          //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息"
          { required: true, trigger: "blur", message: "请填写用户名" },
          //min: 6 最小长度   max: 18 最大长度
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        pass: [
          { required: true, trigger: "blur", message: "请填写密码" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        passCheck: [
          { required: true, trigger: "blur", message: "两次密码必须相同" },
          {
            min: 6,
            max: 12,
            message: "确认密码长度在 6 到 12 个字符",
            trigger: "blur"
          },
          //调用自定义的验证方法验证两次密码是否一致
          { validator: validatePassword, trigger: "blur" }
        ],
        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
        ]
      }
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    //提交表单的方法
    submitForm(formName) {
      //调用组件的验证方法提交表单是验证
      this.$refs[formName].validate(valid => {
        //valid参数表示验证的结果，true表示验证通过，false验证失败
        if (valid) {
          //发起ajax请求去后端做数据库添加用户
          console.log(this.ruleForm2);
          this.axios
            .post(
              "http://172.16.4.211:9090/user/useradd",
              this.qs.stringify(this.ruleForm2)
            )
            .then(result => {
              console.log("服务器成功返回的结果", result);
              if (result.data.isOk) {
                //添加成功
                this.$message({
                  message: result.data.msg,
                  type: "success"
                });
                setTimeout(() => {
                  this.$router.push("/userlist");
                }, 500);
              } else {
                //添加失败
                this.$message.error(result.data.msg);
              }
            })
            .catch(err => {
              console.error("服务器错误返回的信息", err);
            });
        } else {
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
.el-form-item__label {
  width: 82px !important;
  text-align: left !important;
}
.el-form-item__content {
  margin-left: 10px !important;
}

/* 修改表单默认宽度 */
.el-input {
  width: 30%;
}
/* 下拉框修改100% */
.el-input--suffix {
  width: 100%;
}
</style>