import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/app.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
