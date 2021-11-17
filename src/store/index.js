import { createStore } from 'vuex'
const saveCartListToVuex = (cartList) => {
  localStorage.setItem('cartList', JSON.stringify(cartList))
}
export default createStore({
  state: {
    cartList: JSON.parse(localStorage.getItem('cartList')) || {}
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
      saveCartListToVuex(cartList)
    },
    changeItemSelet: (state, payload) => {
      const { shopId, productId } = payload
      const { cartList } = state
      const productInfo = cartList[shopId].productList[productId]
      productInfo.check = !productInfo.check
      saveCartListToVuex(cartList)
    },
    cleanCartProducts: (state, payload) => {
      const { cartList } = state
      const { shopId } = payload
      cartList[shopId] = {
        shopName: '', productList: {}
      }
      saveCartListToVuex(cartList)
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
      saveCartListToVuex(cartList)
    },
    changeShopName: (state, payload) => {
      const { cartList } = state
      const { shopId, shopName } = payload
      const shopInfo = cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      cartList[shopId] = shopInfo
      saveCartListToVuex(cartList)
    }
  },
  actions: {
  },
  modules: {
  }
})
