import Vue from 'vue'
import App from './App.vue'
import router from './router'
//全局组件
import TypeNav from './components/TypeNav'
import Carouse from './components/Carouse'
//引入store
import store from './store'
// 引入mock
import  './mock/mockServe'
//引入全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carouse.name,Carouse)
//引入swiper
import 'swiper/css/swiper.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
Vue.prototype.$bus=this
  },
  router,
  store
}).$mount('#app')
