import { useStore } from 'vuex'
export const cartEffect = (routeId) => {
  // 对购物车添加商品或减少商品的逻辑
  const store = useStore()
  const changeProductNum = (productId, product, num) => {
    // 点击商品的 + 号按钮的方法
    store.commit('changeCartList', { shopId: routeId, productId, product, num })
  }
  return { changeProductNum }
}
