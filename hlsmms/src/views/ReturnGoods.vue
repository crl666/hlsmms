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
            <h3>商品退货</h3>
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
            >
              <el-form-item label="订单号" prop="order">
                <el-input type="text" v-model="ruleForm2.order" autocomplete="off"></el-input>&emsp;<el-button type="primary" @click="submitForm('ruleForm2')">查询</el-button><el-button @click="resetForm('ruleForm2')">重置</el-button>
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
        order: ""
      },
      //验证规则
      rules2: {
        order: [
          //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息"
          { required: true, trigger: "blur", message: "请填写订单号" },
          //min: 6 最小长度   max: 18 最大长度
          {
            min: 6,
            max: 18,
            message: "订单号长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
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
          //alert('√ 表单验证成功!');
          //发起ajax请求去后端做数据库的验证
          alert('1')
        } else {
          //alert("× 表单验证失败!");
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
/* 修改表单默认宽度 */
.el-input{
    width: 30%;
}

</style>
