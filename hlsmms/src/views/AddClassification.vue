<template>
  <el-container id="home">
    <!--------------------------- 左侧 ---------------------------------->
    <LeftMenu></LeftMenu>
    <!--------------------------- 右侧 ---------------------------->
    <el-container id="mainContent">
      <!-- 顶部 -->
      <RightTop></RightTop>
      <!-- 中间 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加管理</h3>
          </div>
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
              <el-form-item label="所属分类" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="-----顶级分类-----">
                  <el-option label="食品" value="食品"></el-option>
                  <el-option label="生活用品" value="生活用品"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="分类名称" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="状态" prop="state">
                <el-radio v-model="radio" label="1">启用</el-radio>
                <el-radio v-model="radio" label="2">禁用</el-radio>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
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
          { required: true, trigger: "blur", message: "请填写分类名称" },
          {
            min: 2,
            max: 12,
            message: "分类名称长度在 2 到 12 个字符",
            trigger: "blur"
          }
        ],
        usergroup: [
          { required: true, trigger: "change", message: "请选择分类" }
        ],
        state: [{ required: false, trigger: "blur" }]
      },
      //单选框
      radio: "2"
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
        //true表示验证通过，false验证失败
        if (valid) {
          //发起ajax请求去后端做数据库的验证
          alert("√ 添加成功!");
        } else {
          alert("× 添加失败!");
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
.el-form-item > .el-form-item__label {
  width: 100px !important;
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
.el-radio__input.is-checked .el-radio__inner {
  border-color: skyblue;
  background: skyblue;
}
.el-radio__input.is-checked + .el-radio__label {
  color: skyblue;
}
</style>

