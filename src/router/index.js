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
}, {
  path: '/shop/:id',
  name: 'Shop',
  component: () => import(/* webpackChunkName: "shop" */ '../views/Shop/Shop.vue')
}, {
  path: '/orderConfirm/:id',
  name: 'OrderConfirm',
  component: () => import(/* webpackChunkName: "OrderConfirm" */ '../views/OrderConfirm/orderConfirm.vue')
}, {
  path: '/cartList',
  name: 'CartList',
  component: () => import(/* webpackChunkName: "CartList" */ '../views/CartList/CartList.vue')
}, {
  path: '/orderList',
  name: 'OrderList',
  component: () => import(/* webpackChunkName: "OrderList" */ '../views/OrderList/OrderList.vue')
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
