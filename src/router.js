import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Hem',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/homeuser',
      name: 'Min sida',
      component: () => import('./views/HomeUser.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/index.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/login?to=${to.path}') //OM du måste logga in och inte är inloggad
  // else if (!requiresAuth && currentUser) next('/login') //OM du inte måste logga in och är inloggad 
  else next() //Annars
})
export default router
