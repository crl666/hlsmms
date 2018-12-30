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
            <h3>分类管理</h3>
          </div>
          <div class="text item">
            <el-table :data="tableData" style="width: 100%">

              <el-table-column label="分类名称">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                    <i class="el-icon-edit"></i> 编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >
                    <i class="el-icon-delete"></i> 删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
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
      tableData: [
        {
          date: "舒肤佳",
        },
        {
          date: "海飞丝",
        },
        {
          date: "霸王洗发露",
        },
        {
          date: "食品",
        },
        {
          date: "优乐美",
        },
        {
          date: "烟酒",
        },
        {
          date: "茅台",
        },
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

<style scoped>
.cell > span {
  margin: 0 !important;
}
</style>