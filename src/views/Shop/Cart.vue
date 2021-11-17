<!--  -->
<template>
  <div class="mask" v-if="cartShowFlag && calculations.total > 0" @click="showOrHideCart" />
  <div class="cart">
    <div class="product" v-if="cartShowFlag && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all">
          <span class="product__header__icon iconfont"
          v-html="calculations.allCheck ? '&#xe652;' : '&#xe664;'"
          @click="changeSelectAll()"></span>
          全选
        </div>
        <div class="product__header__clear" @click="cleanCartProducts">
          <span class="product__header__clear__text">清空购物车</span>
        </div>
      </div>
      <template  v-for="item in cartMenuProductList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <span class="product__item__checkIcon iconfont"
          v-html="item.check ? '&#xe652;' : '&#xe664;'" @click="changeItemSelet(item._id)"></span>
          <img :src="item.imgUrl" class="product__item__img" alt="">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__sales">月售：{{ item.sales }} 件</p>
            <div class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </div>
          </div>
          <div class="product__number">
            <span class="product__number__minus" @click="changeProductNum(item._id, item, -1)">-</span>
            <span class="product__number__count">{{ item.count || 0 }}</span>
            <span class="product__number__plus" @click="changeProductNum(item._id, item, 1)">+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon" @click="showOrHideCart">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="check__icon__img" alt="">
        <span class="check__icon__tag">{{ calculations.total }}</span>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;{{ calculations.sum }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{path: '/orderConfirm/' + routeId }">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { cartEffect } from './cartEffect'
const toggleCartShow = () => {
  const cartShowFlag = ref(false)
  const showOrHideCart = () => {
    cartShowFlag.value = !cartShowFlag.value
  }
  return { showOrHideCart, cartShowFlag }
}
const computedResultEffect = () => {
  // 计算购物车数量和总价的逻辑处理
  const store = useStore()
  const route = useRoute()
  const { cartList } = store.state
  const routeId = route.params.id
  const { changeProductNum } = cartEffect(routeId)
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
  const cartMenuProductList = computed(() => {
    const productList = cartList[routeId]?.productList || []
    return productList
  })
  const changeItemSelet = (productId) => {
    store.commit('changeItemSelet', { shopId: routeId, productId })
  }
  const cleanCartProducts = () => {
    store.commit('cleanCartProducts', { shopId: routeId })
  }
  const changeSelectAll = () => {
    store.commit('changeSelectAll', { shopId: routeId })
  }

  return { cartMenuProductList, routeId, changeProductNum, changeItemSelet, cleanCartProducts, calculations, changeSelectAll }
}

export default {
  name: 'Cart',
  setup () {
    const { showOrHideCart, cartShowFlag } = toggleCartShow()
    const { calculations, cartMenuProductList, routeId, changeProductNum, changeItemSelet, cleanCartProducts, changeSelectAll } = computedResultEffect()
    return { calculations, cartMenuProductList, routeId, cartShowFlag, changeProductNum, showOrHideCart, changeItemSelet, cleanCartProducts, changeSelectAll }
  }
}
</script>
<style scoped lang="stylus">
@import '../../style/viriables.styl'
@import '../../style/mixins.styl'
.mask
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 1
  background rgba(0, 0, 0, .5)
.cart
  position absolute
  background-color $bgColor
  bottom 0
  left 0
  right 0
  z-index 2
  .product
    flex 1
    overflow-y scroll
    &__header
      display flex
      height 5.2rem
      line-height 5.2rem
      border-bottom 1px solid $content-bgColor
      font-size 1.4rem
      color $content-fontcolor
      &__all
        width 6.4rem
        margin-left 1.8rem
      &__icon
        color $btnBlueColor
        font-size 2rem
        vertical-align middle
      &__clear
        flex 1
        margin-right 1.6rem
        text-align right
        &__text
          display inline-block
    &__item
      position relative
      display flex
      padding 1.2rem 0
      margin 0 1.6rem
      border-bottom .1rem solid $content-bgColor
      &__checkIcon
        margin-right 1.6rem
        font-size 2rem
        color $btnBlueColor
        line-height 5rem
      &__detail
        overflow hidden
      .product__number
        position absolute
        right 0
        bottom 1.2rem
        &__count
          margin 0 1rem
          vertical-align super
        &__plus,&__minus
          width 2rem
          height 2rem
          font-size 2rem
          text-align center
          line-height 2rem
          display inline-block
          border-radius 50%
        &__minus
          border 1px solid $medium-fontColor
          color $medium-fontColor
        &__plus
          background-color $btnBlueColor
          color $bgColor
      &__yen
        font-size 1.2rem
      &__origin
        color $line-fontColor
        line-height 2rem
        text-decoration line-through
        font-size 1.2rem
        margin-left .6rem
      &__img
        width 4.6rem
        height 4.6rem
        margin-right 1.6rem
      &__price
        margin 0
        font-size 1.4rem
        line-height 2rem
        color $heightLine-fontColor
      &__yen
        font-size 1.2rem
      &__sales
        margin 0.6rem 0
        font-size 1.2rem
        color $content-fontcolor
      &__title
        margin 0
        font-size 1.4rem
        line-height 1.6rem
        color $content-fontcolor
        ellipsis()
.check
  box-sizing border-box
  border-top 0.1rem solid $content-bgColor
  height 5rem
  line-height 5rem
  display flex
  &__icon
    width 8.4rem
    position relative
    &__tag
      display inline-block
      position absolute
      background-color $heightLine-fontColor
      height 2rem
      width 2rem
      line-height 2rem
      transform scale(50%)
      border-radius 50%
      text-align center
      color $bgColor
      top 0.8rem
      right 1.8rem
      font-size 1.4rem
    &__img
      display block
      width 2.8rem
      height 2.6rem
      margin 1.2rem auto
  &__btn
    width 9.8rem
    background-color #4fb0f9
    text-align center
    font-size 1.4rem
    a
      color $bgColor
      text-decoration none
  &__info
    flex 1
    color $content-fontcolor
    font-size 1.2rem
    &__price
      color $heightLine-fontColor
      font-size 1.8rem
</style>
