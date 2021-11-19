import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
export const cartEffect = (routeId) => {
  // 对购物车添加商品或减少商品的逻辑
  const store = useStore()
  const { cartList } = store.state
  const changeProductNum = (productId, product, num) => {
    // 点击商品的 + 号按钮的方法
    store.commit('changeCartList', { shopId: routeId, productId, product, num })
  }
  const calculations = computed(() => {
    const shopInfo = cartList[routeId]?.productList
    const calcuResult = { total: 0, sum: 0, allCheck: true }
    if (shopInfo) {
      for (const i in shopInfo) {
        const product = shopInfo[i]
        calcuResult.total += product.count
        if (product.check) {
          calcuResult.sum += product.count * product.price
        }
        if (!product.check && product.count > 0) {
          calcuResult.allCheck = false
        }
      }
    }
    calcuResult.sum = calcuResult.sum.toFixed(2)
    return calcuResult
  })
  const cartShopName = computed(() => {
    const shopName = cartList[routeId]?.shopName || ''
    return shopName
  })
  const cartMenuProductList = computed(() => {
    const productList = cartList[routeId]?.productList || {}
    const filter = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        filter[i] = product
      }
    }
    return filter
  })
  return { changeProductNum, calculations, cartShopName, cartMenuProductList, cartList }
}
