<template>
    <el-aside width="230px" id="leftnav">
      <!-- 左侧顶部标题 -->
      <div id="leftHead">
        <h1>华联超市管理系统</h1>
        <p>您好,crl666</p>
        <p><router-link to="/#/">管理首页</router-link> | <router-link to="/login">退出登录</router-link></p>
      </div>
      <!-- 左侧菜单 -->
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
      >
        <!-- 第1个菜单 -->
        <el-submenu index="1">
          <template slot="title">
            <span>分类管理</span>
          </template>
          <el-menu-item index="/administration"><router-link to="/administration">分类管理</router-link></el-menu-item>
          <el-menu-item index="/addclassification"><router-link to="/addclassification">添加分类</router-link></el-menu-item>
        </el-submenu>

        <!-- 第2个菜单 -->
        <el-submenu index="2">
          <template slot="title">
            <span>商品管理</span>
          </template>
          <el-menu-item index="/cmanagement"><router-link to="/cmanagement">商品管理</router-link></el-menu-item>
          <el-menu-item index="/addmerchandise"><router-link to="/addmerchandise">添加商品</router-link></el-menu-item>
        </el-submenu>

        <!-- 第3个菜单 -->
        <el-submenu index="3">
          <template slot="title">
            <span>进货管理</span>
          </template>
          <el-menu-item index="1-1">库存管理</el-menu-item>
          <el-menu-item index="1-2">添加库存</el-menu-item>
        </el-submenu>

        <!-- 第4个菜单 -->
        <el-submenu index="4">
          <template slot="title">
            <span>出货管理</span>
          </template>
          <el-menu-item index="1-1">销售列表</el-menu-item>
          <el-menu-item index="1-2">商品出库</el-menu-item>
          <el-menu-item index="/returngoods"><router-link to="/returngoods">商品退货</router-link></el-menu-item>
        </el-submenu>
        <!-- 第5个菜单 -->
        <el-submenu index="5">
          <template slot="title">
            <span>统计管理</span>
          </template>
          <el-menu-item index="1-1">销售统计</el-menu-item>
          <el-menu-item index="1-2">进货统计</el-menu-item>
        </el-submenu>

        <!-- 第6个菜单 -->
        <el-submenu index="6">
          <template slot="title">
            <span>账号管理</span>
          </template>
          <el-menu-item index="/userlist"><router-link to='/userlist'>账号管理</router-link></el-menu-item>
          <el-menu-item index="/useradd"><router-link to='/useradd'>添加账号</router-link></el-menu-item>
          <el-menu-item index="/userpwdedit"><router-link to='/userpwdedit'>修改密码</router-link></el-menu-item>
        </el-submenu>

        <!-- 第7个菜单 -->
        <el-submenu index="7">
          <template slot="title">
            <span>会员管理</span>
          </template>
          <el-menu-item index="1-1">账号管理</el-menu-item>
          <el-menu-item index="1-2">添加账号</el-menu-item>
        </el-submenu>
        
        <!-- 第8个菜单 -->
        <el-submenu index="8">
          <template slot="title">
            <span>系统管理</span>
          </template>
          <el-menu-item index="/"><router-link to="/">系统信息</router-link></el-menu-item>
          <el-menu-item index="1-2">系统配置</el-menu-item>
          <el-menu-item index="1-3">权限管理</el-menu-item>
          <el-menu-item index="1-4">添加管理组</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  data() {
    return {
      isOpened: true,
    };
  },
  //菜单展开和收起的方法
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>
