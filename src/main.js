// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import toastrSetup from './setup/toastrSetup'

// bootstrap
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

// font-awesome
import 'font-awesome/css/font-awesome.min.css'

// bulma
import bulma from 'bulma'
Vue.use(bulma)

// VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

// setup
toastrSetup()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
