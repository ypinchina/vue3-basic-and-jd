import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    changeCartList: (state, payload) => {
      const { shopId, productId, product, num } = payload
      const { cartList } = state
      const shopInfo = cartList[shopId] || { shopName: '', productList: {} }
      let productInfo = shopInfo?.productList[productId]
      if (!productInfo) {
        productInfo = product
        productInfo.count = 0
      }
      productInfo.count += num
      if (num > 0) {
        productInfo.check = true
      }
      if (productInfo.count < 0) productInfo.count = 0
      shopInfo.productList[productId] = productInfo
      cartList[shopId] = shopInfo
    },
    changeItemSelet: (state, payload) => {
      const { shopId, productId } = payload
      const { cartList } = state
      const productInfo = cartList[shopId].productList[productId]
      productInfo.check = !productInfo.check
    },
    cleanCartProducts: (state, payload) => {
      const { cartList } = state
      const { shopId } = payload
      cartList[shopId] = {
        shopName: '', productList: {}
      }
    },
    changeSelectAll: (state, payload) => {
      const { cartList } = state
      const { shopId } = payload
      const shopInfo = cartList[shopId].productList
      if (shopInfo) {
        for (const i in shopInfo) {
          shopInfo[i].check = true
        }
      }
    },
    changeShopName: (state, payload) => {
      const { cartList } = state
      const { shopId, shopName } = payload
      const shopInfo = cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
