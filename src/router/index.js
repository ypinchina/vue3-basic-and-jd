import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue'),
  beforeEnter (to, from, next) {
    const isLogin = localStorage.isLogin
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/register',
  name: 'Register',
  component: () => import(/* webpackChunkName: "register" */ '../views/Login/Register.vue')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const { name } = to
  isLogin || name === 'Login' || name === 'Register' ? next() : next({ name: 'Login' })
})
export default router
