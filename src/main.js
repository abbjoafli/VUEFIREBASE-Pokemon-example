import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import firebase from 'firebase/app'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/vuetify'
Vue.config.productionTip = false
let app = ''
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      render: h => h(App)
    }).$mount('#app')
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App),
//   created () {
//     console.log('Vue Root Instance Created - main.js')
//   }
// }).$mount('#app')
