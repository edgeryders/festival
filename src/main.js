import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VuePlyr from 'vue-plyr'
import vueSmoothScroll from "vue2-smooth-scroll"

Vue.use(VuePlyr)
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
