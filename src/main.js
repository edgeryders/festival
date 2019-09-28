import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import i18n from '@/plugins/i18n'
import VuePlyr from 'vue-plyr'
import vueSmoothScroll from "vue2-smooth-scroll"
import VueScrollTo from "vue-scrollto"
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
Vue.use(VueFullpage)
Vue.use(VuePlyr)
Vue.use(vueSmoothScroll)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
