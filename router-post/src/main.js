// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App'
// import Post from '@/pages/Post.vue'
// import ELementUi from 'element-ui/lib/theme-chalk/index.css'

// Vue(ELementUi)
// Vue.use(VueRouter)
// Vue.config.productionTip = false

// const Home = {
//   template: '<div>home</div>'
// }

// const router = new VueRouter({
//   mode: 'history',//支持两种url形式 mode
//   base: __dirname,
//   routes: [
//     {
//       path: '/',
//       component: Home
//     },
//     {
//       path: '/post/:id',
//       component: Post
//     }
//   ]
// })
// /* eslint-disable no-new */
// new Vue({
//   router,
//   template: <App/>,
//   components: { App }
// }).$mount('#app')//mount挂载
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

