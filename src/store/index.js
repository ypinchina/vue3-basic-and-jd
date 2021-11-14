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
      if (num > 0) {
        productInfo.check = true
      }
      if (productInfo.count < 0) productInfo.count = 0
      shopInfo[productId] = productInfo
      cartList[shopId] = shopInfo
    },
    changeItemSelet: (state, payload) => {
      const { shopId, productId } = payload
      const { cartList } = state
      const productInfo = cartList[shopId][productId]
      productInfo.check = !productInfo.check
    }
  },
  actions: {
  },
  modules: {
  }
})
