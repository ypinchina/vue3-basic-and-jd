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
      display flex
      padding 1.2rem 0
      margin 0 1.6rem
      border-bottom .1rem solid #f1f1f1
      &__img
        width 6.8rem
        height 6.8rem
  .category
    width 7.6rem
    height 100%
    overflow-y scroll
    background-color #f5f5f5
    &__item
      height 4rem
      line-height 4rem
      text-align center
      font-size 14px
      color #333
      &--active
        background-color #fff
</style>
