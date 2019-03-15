import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-material/dist/vue-material.min.css'
import VueMaterial from 'vue-material'
import { MdField, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/theme/default-dark.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(MdField)
Vue.use(MdButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
