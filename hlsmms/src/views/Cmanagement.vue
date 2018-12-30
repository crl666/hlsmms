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
            <h3>账号管理</h3>
          </div>

          <el-select v-model="value4" clearable placeholder="-----选择分类-----">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>&nbsp;
          <span>关键字:</span>
          <el-input v-model="input" placeholder class="keyword"></el-input>
          <span>(商品名称,条形码)</span>
          <el-button type="primary">查询</el-button>

          <div class="text item">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="商品条形码">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.barcode }}</span>
                </template>
              </el-table-column>

              <el-table-column label="商品名称">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>

              <el-table-column label="所属分类">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.theclass }}</span>
                </template>
              </el-table-column>

              <el-table-column label="售价(元)">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.price }}</span>
                </template>
              </el-table-column>

              <el-table-column label="促销价(元)">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.promotion }}</span>
                </template>
              </el-table-column>

              <el-table-column label="市场价(元)">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.market }}</span>
                </template>
              </el-table-column>

              <el-table-column label="库存">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.stock }}</span>
                </template>
              </el-table-column>

              <el-table-column label="库存总额(元)">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.inventory }}</span>
                </template>
              </el-table-column>

              <el-table-column label="销售总额(元)">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.sale }}</span>
                </template>
              </el-table-column>

              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                    <i class="el-icon-edit"></i>
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >
                    <i class="el-icon-delete"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>

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
      //商品列表
      tableData: [
        {
          barcode: "6911989262549",
          name: "我的优乐美",
          theclass: "优乐美",
          price: "2.00",
          promotion: "未促销",
          market: "2.40",
          stock: "0(缺)",
          inventory: "0.00",
          sale: "0.00"
        },
        {
          barcode: "6911989752386",
          name: "霸王洗发露",
          theclass: "洗发露",
          price: "21.00",
          promotion: "未促销",
          market: "23.40",
          stock: "100",
          inventory: "2340",
          sale: "1170"
        },
        {
          barcode: "6911989782104",
          name: "康师傅牛肉面",
          theclass: "方便面",
          price: "3.50",
          promotion: "未促销",
          market: "5.00",
          stock: "1000",
          inventory: "5000",
          sale: "1000"
        }
      ],
      //下拉框
      options: [
        {
          value: "选项1",
          label: "食品"
        },
        {
          value: "选项2",
          label: "生活用品"
        }
      ],
      value4: "",
      input: ""
    };
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>

<style scoped>
.box-card span {
  color: #aaa;
  margin: 0 5px;
}
.keyword {
  width: 300px;
}
.item {
  border-top: 2px solid #ccc;
  margin: 20px 0;
}
.cell > span {
  margin: 0 !important;
}
/* 分页 */
</style>