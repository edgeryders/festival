import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import vueSmoothScroll from "vue2-smooth-scroll"
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
