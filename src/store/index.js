import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    changeCartList: (state, payload) => {
      const { shopId, productId, product, num } = payload
      const { cartList } = state
      let shopInfo = cartList?.[shopId]
      let productInfo = shopInfo?.[productId]
      if (!shopInfo) {
        shopInfo = {}
      }
      if (!productInfo) {
        productInfo = product
        productInfo.count = 0
      }
      productInfo.count += num
      if (productInfo.count < 0) productInfo.count = 0
      shopInfo[productId] = productInfo
      cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
