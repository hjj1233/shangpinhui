import Vue from 'vue'
import App from './App.vue'

import router from './router'
//全局组件
import TypeNav from './components/TypeNav'
//引入store
import store from './store'
//测试
// import {reqCtogryList} from './api'

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false
// reqCtogryList()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
