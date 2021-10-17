<!--  -->
<template>
    <div class="shop">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
        class="shop__img" />
      <div class="shop__content" :class="{'shop__content--hasBorder': hasBorder ? true : false }">
        <div class="shop__content__title">{{ item.name }}</div>
        <div class="shop__content__tags">
          <span class="shop__content__tag">月售: {{ item.sales }}</span>
          <span class="shop__content__tag">起送: {{ item.expressLimit }} 元</span>
          <span class="shop__content__tag">基础运费: {{ item.expressPrice }} 元</span>
        </div>
        <p class="shop__content__heightline">
          {{ item.slogan }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['item', 'hasBorder']
}
</script>
<style lang="stylus" scoped>
@import '../style/viriables.styl'
.shop
  display flex
  padding-top 1.2rem
  &__img
    width 5.6rem
    height 5.6rem
    margin-right 1.6rem
  &__content
    flex 1
    padding-bottom 1.2rem
    &--hasBorder
      border-bottom 1px solid $content-bgColor
    &__title
      line-height 2.2rem
      font-size 1.6rem
      color $content-fontcolor
    &__tags
      line-height 1.8rem
      font-size 1.3rem
      color $content-fontcolor
      margin-top .8rem
    &__tag
        margin-right 1.6rem
    &__heightline
      color #e93b3b
      line-height 1.8rem
      font-size 1.3rem
      margin 0.8rem 0 0 0
</style>
