<!--  -->
<template>
  <div class="products">
    <div class="products__wrapper">
      <div class="products__title">{{ cartShopName }}</div>
      <div class="products__list">
        <div class="product__item" v-for="item in cartMenuProductList" :key="item._id">
          <img :src="item.imgUrl" class="product__item__img" alt="">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <div class="product__item__price">
              <span class="product__item__single">
                <span class="product__item__yen">&yen;</span>{{ item.price }} × {{ item.count }}
              </span>
              <span class="product__item__total">
                <span class="product__item__yen">&yen;</span>{{ (item.price * item.count).toFixed(2) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { cartEffect } from '../../effects/cartEffect'
const getProductListEffect = () => {
  const route = useRoute()
  const routeId = route.params.id
  const { cartMenuProductList, cartShopName } = cartEffect(routeId)
  return { cartMenuProductList, cartShopName }
}
export default {
  setup () {
    const { cartMenuProductList, cartShopName } = getProductListEffect()
    return { cartMenuProductList, cartShopName }
  }
}
</script>
<style scoped lang='stylus'>
@import '../../style/mixins.styl'
@import '../../style/viriables.styl'
.products
  margin 1.6rem 1.8rem 2rem 1.8rem
  flex 1
  overflow-y auto
  &__wrapper
    background-color $bgColor
  &__title
    padding 1.6rem 1.6rem 0 1.6rem
    font-size 1.6rem
    color $content-fontcolor
  &__list
    .product
      flex 1
      overflow-y scroll
      &__item
        position relative
        display flex
        padding 1.6rem
        &__detail
          flex 1
        &__yen
          font-size 1.2rem
        &__img
          width 4.6rem
          height 4.6rem
          margin-right 1.6rem
        &__price
          margin 0.6rem 0 0 0
          font-size 1.4rem
          line-height 2rem
          color $heightLine-fontColor
          display flex
        &__single
          display inline-block
        &__total
          flex 1
          text-align right
          display inline-block
          color $dark-fontColor
        &__yen
          font-size 1.2rem
        &__title
          margin 0
          font-size 1.4rem
          line-height 1.6rem
          color $content-fontcolor
          ellipsis()
</style>
