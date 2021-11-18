<!--  -->
<template>
  <div class="order">
    <div class="order__price">实付金额 ￥<b>{{ calculations.sum }}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { cartEffect } from '../../effects/cartEffect'
const getProductListEffect = () => {
  const route = useRoute()
  const routeId = route.params.id
  const { calculations } = cartEffect(routeId)
  return { calculations }
}
export default {
  setup () {
    const { calculations } = getProductListEffect()
    return { calculations }
  }
}
</script>
<style scoped lang='stylus'>
@import '../../style/viriables.styl'
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
    background-color #4fb0f9
    color $bgColor
    text-align center
    font-size 1.4rem
</style>
