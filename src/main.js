import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/sass/reset.sass'
import '@/assets/font/iconfont.css'
import {Avatar,Icon} from 'element-ui'

Vue.use(Avatar)
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
