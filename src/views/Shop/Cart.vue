<!--  -->
<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="check__icon__img" alt="">
        <span class="check__icon__tag">1</span>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;19</span>
      </div>
      <div class="check__btn">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped lang="stylus">
@import '../../style/viriables.styl'
.cart
  position absolute
  background-color $bgColor
  bottom 0
  left 0
  right 0
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
      background-color #e93b3b
      height 2rem
      width 2rem
      line-height 2rem
      transform scale(50%)
      border-radius 50%
      text-align center
      color $bgColor
      top 0.8rem
      right 1.8rem
      font-size 1.2rem
    &__img
      display block
      width 2.8rem
      height 2.6rem
      margin 1.2rem auto
  &__btn
    width 9.8rem
    background-color #4fb0f9
    text-align center
    color #fff
    font-size 1.4rem
  &__info
    flex 1
    color $content-fontcolor
    font-size 1.2rem
    &__price
      color #e93b3b
      font-size 1.8rem
</style>
