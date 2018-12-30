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
            <h3>系统信息</h3>
          </div>
          <div class="text item">
            <el-alert title="商品总数 : 5 。 已经销售的总金额 : 890.00。 库存商品总价 : 1235.82" type="info" show-icon></el-alert>
            <el-alert title="导入数据" type="success" show-icon></el-alert>
            <!-- 一行两列 -->
            <el-row :gutter="36">
              <!-- 左侧 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="LtableData" stripe style="width: 100%">
                      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                      <el-table-column prop="salenum" label="销量"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
              <!-- 右侧 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货的商品</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="RtableData" stripe style="width: 100%">
                      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                      <el-table-column prop="repertory" label="库存"></el-table-column>
                      <el-table-column prop="operation" label="操作"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
    return {
      LtableData: [
        { goodsname: "海飞丝去屑洗发水", salenum: 8 },
        { goodsname: "茅台酒", salenum: 6 },
        { goodsname: "龙凤呈祥", salenum: 5 },
        { goodsname: "龙凤呈祥2", salenum: 2 }
      ],
      RtableData: [
        { goodsname: "我的优乐美", repertory: 0, operation: <el-button type="text">入库</el-button> }
      ]
    };
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>

<style>
</style>

