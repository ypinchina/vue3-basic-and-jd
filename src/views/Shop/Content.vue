<!--  -->
<template>
  <div class="content">
    <div class="category">
      <div class="category__item" v-for="(item, index) in categoryList" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="product">
      <div class="product__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="product__item__img" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g/份</h4>
          <p class="product__item__sales">月售10件</p>
          <div class="product__item__price">
            <span class="product__item__yen">&yen;</span>33.6
            <span class="product__item__origin">&yen;66.6</span>
          </div>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          <span class="product__number__count">0</span>
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  setup () {
    const categoryList = [
      '全部商品', '秒杀', '新鲜水果', '休闲食品', '时令蔬菜', '肉蛋家禽'
    ]
    return { categoryList }
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
        &__plus,&__minus
          width 2rem
          height 2rem
          font-size 2rem
          text-align center
          line-height 1.6rem
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
      font-size 14px
      color $content-fontcolor
      &--active
        background-color $bgColor
</style>
