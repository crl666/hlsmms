import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入登陆组件
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/useradd',
      // 添加用户
      //懒加载
      component: () => import('./views/UserAdd.vue')
    },
    {
      path: '/userlist',
      // 用户列表
      //懒加载
      component: () => import('./views/UserList.vue')
    },
    {
      path: '/userpwdedit',
      // 修改密码账号
      //懒加载
      component: () => import('./views/UserPwdEdit.vue')
    },
    {
      path: '/addclassification',
      // 添加管理
      //懒加载
      component: () => import('./views/AddClassification.vue')
    },
    {
      path: '/returngoods',
      // 商品退货
      //懒加载
      component: () => import('./views/ReturnGoods.vue')
    },
    {
      path: '/addmerchandise',
      // 添加商品
      //懒加载
      component: () => import('./views/AddMerchandise.vue')
    },
    {
      path: '/administration',
      // 分类管理
      //懒加载
      component: () => import('./views/Administration.vue')
    },
    {
      path: '/cmanagement',
      // 商品管理
      //懒加载
      component: () => import('./views/Cmanagement.vue')
    },
  ]
})
