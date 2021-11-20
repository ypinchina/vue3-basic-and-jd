<!--  -->
<template>
  <div class="content">
    <div class="category">
      <div v-for="(item, index) in categoryList"
      :class="{'category__item--active': index == activeIndex, 'category__item': true }"
      :key="item.name" @click="selectSaleMenu(index)">
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in contentList" :key="item._id">
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
          <span class="product__number__minus" @click="changeProductInfo(item._id, item, -1, shopName)">-</span>
          <span class="product__number__count">{{ dealWithCountItem(item) }}</span>
          <span class="product__number__plus" @click="changeProductInfo(item._id, item, 1, shopName)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect, ref } from 'vue'
import { get } from '@/utils/request'
import { useRoute } from 'vue-router'
import { cartEffect } from '../../effects/cartEffect'
import { useStore } from 'vuex'
const categoryList = [{ name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }]
const tabEffect = () => {
  // 切换商铺下对应栏目的处理逻辑
  const activeIndex = ref(0)
  const selectSaleMenu = (index) => {
    activeIndex.value = index
  }
  return { selectSaleMenu, activeIndex }
}
const getDataListEffect = (activeIndex, routeId) => {
  // 获取商铺下对应栏目的商铺列表的处理逻辑

  const list = reactive({ contentList: [] })
  const getDataList = async () => {
    const result = await get(`/api/shop/${routeId}/products?tab=${activeIndex.value}`)
    if (!result?.errno && result?.data?.length) list.contentList = result.data
  }
  watchEffect(() => { getDataList() })
  return { getDataList, list }
}
const cartCommonEffect = () => {
  const route = useRoute()
  const store = useStore()
  const routeId = route.params.id
  const { changeProductNum, cartList } = cartEffect(routeId)
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  const changeProductInfo = (productId, product, num, shopName) => {
    changeProductNum(productId, product, num)
    changeShopName(routeId, shopName)
  }
  return { changeProductInfo, cartList, routeId }
}
export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const { selectSaleMenu, activeIndex } = tabEffect()
    const { changeProductInfo, cartList, routeId } = cartCommonEffect()
    const { getDataList, list } = getDataListEffect(activeIndex, routeId)
    const { contentList } = toRefs(list)
    const dealWithCountItem = (item) => {
      return cartList?.[routeId]?.productList?.[item._id]?.count || 0
    }
    return { categoryList, selectSaleMenu, activeIndex, contentList, getDataList, changeProductInfo, dealWithCountItem }
  }
}
</script>
<style scoped lang="stylus">
@import '../../style/viriables.styl'
@import '../../style/mixins.styl'
.content
  display flex
  position absolute
  left 0
  right 0
  top 15rem
  bottom 5rem
  .product
    flex 1
    overflow-y scroll
    &__item
      position relative
      display flex
      padding 1.2rem 0
      margin 0 1.6rem
      border-bottom .1rem solid $content-bgColor
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
        width 6.8rem
        height 6.8rem
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
  .category
    width 7.6rem
    height 100%
    overflow-y scroll
    background-color $search-bgColor
    &__item
      height 4rem
      line-height 4rem
      text-align center
      font-size 1.4rem
      color $content-fontcolor
      &--active
        background-color $bgColor
</style>
