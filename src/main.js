// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

import MyList from './components/MyList'

var router = new VueRouter({
  routes: [
    { path: '/mylist', component: MyList }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
