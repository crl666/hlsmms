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
            <h3>添加商品</h3>
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

              <el-form-item label="商品条形码" prop="barcode">
                <el-input type="text" v-model="ruleForm2.barcode" autocomplete="off"></el-input>&emsp;
                <el-button type="primary">生成条形码</el-button>
              </el-form-item>

              <el-form-item label="商品名称" prop="tradename">
                <el-input type="text" v-model="ruleForm2.tradename" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="商品售价" prop="price" class="inputw">
                <el-input type="text" v-model="ruleForm2.price" autocomplete="off"></el-input>&nbsp;
                <span>元</span>
              </el-form-item>

              <el-form-item label="市场价" prop="market" class="inputw">
                <el-input type="text" v-model="ruleForm2.market" autocomplete="off"></el-input>&nbsp;
                <span>元</span>
                <p>默认市场价为售价的1.2倍</p>
              </el-form-item>

              <el-form-item label="商品进价" prop="purchase" class="inputw">
                <el-input type="text" v-model="ruleForm2.purchase" autocomplete="off"></el-input>&nbsp;
                <span>元</span>
              </el-form-item>

              <el-form-item label="入库数量" prop="warehousing" class="inputw">
                <el-input type="text" v-model="ruleForm2.warehousing" autocomplete="off"></el-input>&nbsp;
                <p>计重商品单位为千克</p>
              </el-form-item>

              <el-form-item label="商品重量" prop="weight" class="inputw">
                <el-input type="text" v-model="ruleForm2.weight" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="商品单位" prop="commodityunit" class="inputw">
                <el-input type="text" v-model="ruleForm2.commodityunit" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="会员优惠" prop="state">
                <el-radio v-model="radio2" label="1">享受</el-radio>
                <el-radio v-model="radio2" label="2">不享受</el-radio>
              </el-form-item>

              <el-form-item label="状态" prop="state">
                <el-radio v-model="radio" label="1">启用</el-radio>
                <el-radio v-model="radio" label="2">禁用</el-radio>
              </el-form-item>

              <el-form-item label="商品简介" prop="state" class="inputw">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></el-input>
                <p>不超过200个汉字</p>
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
        //分类
        usergroup: "",
        //商品条形码
        barcode: "",
        //商品名称
        tradename: "",
        //商品售价
        price: "",
        //单选
        passCheck: "",
        state: ""
      },
      //验证规则
      rules2: {
        usergroup: [
          { required: true, trigger: "change", message: "请选择分类" }
        ],
        barcode: [
          { required: true, trigger: "blur", message: "请生成条形码" },
          {
            min: 1,
            message: "条形码生成错误",
            trigger: "blur"
          }
        ],
        tradename: [
          { required: true, trigger: "blur", message: "请填写商品名称" },
          {
            min: 2,

            message: "商品名称需大于2个字符",
            trigger: "blur"
          }
        ],
        price: [
          { required: true, trigger: "blur", message: "请填写商品售价" },
          {
            min: 1,
            message: "请填写正确的价格",
            trigger: "blur"
          }
        ],

        state: [{ required: false, trigger: "blur" }]
      },
      //单选框
      radio2: "1",
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
.inputw {
  width: 50%;
}
.inputw p,
.inputw span {
  margin: 0;
  color: #aaa;
}
</style>