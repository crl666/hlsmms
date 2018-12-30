import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//引入公共样式
import './assets/styles/public.css'

//引入axios
import axios from 'axios'
//把axios挂载在vue原型上
Vue.prototype.axios = axios;
//引入qs
import qs from 'qs'
//把qs挂载在vue原型上
Vue.prototype.qs = qs;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
