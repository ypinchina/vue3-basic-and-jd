<!--  -->
<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__bgcolor"></div>
      <div class="top__header">
        <span class="iconfont top__header__back">&#xe6db;</span>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <div class="top__receiver__info__name">易(先生)</div>
          <div class="top__receiver__info__name">13811111111</div>
        </div>
        <span class="iconfont top__receiver__icon">&#xe6db;</span>
      </div>
    </div>
    <div class="products">
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
                <span class="product__item__yen">&yen;</span>{{ item.price * item.count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const getProductListEffect = () => {
  const store = useStore()
  const route = useRoute()
  const routeId = route.params.id
  const { cartList } = store.state
  const cartMenuProductList = computed(() => {
    const productList = cartList[routeId]?.productList || []
    return productList
  })
  const cartShopName = computed(() => {
    const shopName = cartList[routeId]?.shopName || ''
    return shopName
  })
  return { cartMenuProductList, cartShopName }
}

export default {
  name: 'OrderConfirm',
  setup () {
    const { cartMenuProductList, cartShopName } = getProductListEffect()
    return { cartMenuProductList, cartShopName }
  }
}
</script>
<style scoped lang='stylus'>
@import '../../style/mixins.styl'
@import '../../style/viriables.styl'
.wrapper
  background-color #fafafa
  position absolute
  bottom 0
  left 0
  top 0
  right 0
  .top
    height 19.6rem
    position relative
    background-size 100% 15.9rem
    background-repeat no-repeat
    background-image  linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%)
    &__receiver
      position absolute
      left 1.8rem
      right 1.8rem
      bottom 0
      height 11.1rem
      background-color $bgColor
      border-radius 4px
      &__icon
        transform rotate(180deg)
        position absolute
        right 1.6rem
        top 5rem
        color $medium-fontColor
        font-size 1.6rem
      &__title
        line-height 2.2rem
        padding 1.6rem 0 1.4rem 1.6rem
        font-size 1.6rem
        color $content-fontcolor
      &__address
        line-height 2rem
        padding 0 .4rem 0 1.6rem
        font-size 1.4rem
        color $content-fontcolor
      &__info
        padding .6rem 0 0 1.6rem
        &__name
          line-height 1.8rem
          font-size 1.2rem
          color $medium-fontColor
          margin-right .6rem
          display inline-block
    &__header
      position relative
      padding-top 2.6rem
      line-height 2.4rem
      color $bgColor
      text-align center
      font-size 1.6rem
      &__back
        position absolute
        left 1.8rem
        font-size 2.2rem
  .products
    margin 1.6rem 1.8rem 5.5rem 1.8rem
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
            color #000
          &__yen
            font-size 1.2rem
          &__title
            margin 0
            font-size 1.4rem
            line-height 1.6rem
            color $content-fontcolor
            ellipsis()
</style>
