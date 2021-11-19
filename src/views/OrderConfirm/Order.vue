<!--  -->
<template>
  <div class="order">
    <div class="order__price">实付金额 ￥<b>{{ calculations.sum }}</b></div>
    <div class="order__btn" @click="showOrderMask">提交订单</div>
  </div>
  <div class="mask" v-show="isShowMask">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn mask__content__btn--first" @click="orderSend(true)">取消订单</div>
        <div class="mask__content__btn mask__content__btn--last" @click="orderSend">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { post } from '../../utils/request'
import { cartEffect } from '../../effects/cartEffect'
const getProductListEffect = () => {
  const route = useRoute()
  const routeId = route.params.id
  const { calculations, cartShopName, cartMenuProductList } = cartEffect(routeId)
  return { calculations, cartShopName, routeId, cartMenuProductList }
}
const orderConfirmBtnEffect = (cartShopName, routeId, cartMenuProductList, isShowMask) => {
  const router = useRouter()
  const store = useStore()
  const orderSend = async (isCanceled = false) => {
    const products = []
    for (const i in cartMenuProductList.value) {
      const product = cartMenuProductList.value[i]
      products.push({
        id: parseInt(product._id, 10),
        num: product.count
      })
    }
    const result = await post('/api/order', {
      addressId: 1,
      shopName: cartShopName.value,
      shopId: parseInt(routeId, 10),
      isCanceled,
      products
    })
    if (result?.errno === 0) {
      // 成功返回首页
      isShowMask.value = false
      store.commit('cleanProductList', routeId)
      router.push({ name: 'Home' })
    } else {
      // 失败给toast提示
    }
  }
  return { orderSend }
}
export default {
  setup () {
    const isShowMask = ref(false)
    const showOrderMask = () => {
      isShowMask.value = true
    }
    const { calculations, cartShopName, routeId, cartMenuProductList } = getProductListEffect()
    const { orderSend } = orderConfirmBtnEffect(cartShopName, routeId, cartMenuProductList, isShowMask)
    return { calculations, orderSend, isShowMask, showOrderMask }
  }
}
</script>
<style scoped lang='stylus'>
@import '../../style/viriables.styl'
.mask
  z-index 1
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background rgba(0, 0, 0, .5)
  &__content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 30rem
    height 16rem
    background-color $bgColor
    border-radius .4rem
    text-align center
    &__title
      font-size 1.8rem
      margin 2.4rem 0 0 0
      line-height 2.6rem
      color $content-fontcolor
    &__desc
      margin .8rem 0 0 0
      font-size 1.4rem
      color $medium-fontColor
    &__btns
      display flex
      margin 2.4rem 5.8rem
    &__btn
      flex 1
      width 8rem
      line-height 3.2rem
      border-radius 1.6rem
      font-size 1.4rem
      &--last
        background-color $order-blue
        color $bgColor
      &--first
        margin-right 2.4rem
        border 1px solid $order-blue
        color $order-blue
.order
  display flex
  height 4.9rem
  line-height 4.9rem
  background-color $bgColor
  &__price
    flex 1
    text-indent 2.4rem
    font-size 1.4rem
    color $content-fontcolor
  &__btn
    width 9.8rem
    background-color $order-blue
    color $bgColor
    text-align center
    font-size 1.4rem
</style>
