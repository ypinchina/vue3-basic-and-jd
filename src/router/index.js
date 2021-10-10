import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import Register from '../views/Login/Register.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  beforeEnter (to, from, next) {
    const isLogin = localStorage.isLogin
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/register',
  name: 'Register',
  component: Register
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
