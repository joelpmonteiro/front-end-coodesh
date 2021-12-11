import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/store.js'
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import VueSwal from 'vue-swal'


library.add(faRocket)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let router = new VueRouter({ routes });
Vue.use(VueRouter)
Vue.use(VueSwal)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
