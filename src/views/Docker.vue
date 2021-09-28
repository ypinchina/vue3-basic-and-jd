<!--  -->
<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f1;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe62f;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe612;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe641;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../style/viriables.styl'
.docker
  color $content-fontcolor
  width 100%
  position absolute
  left 0
  bottom 0
  height 4.9rem
  border-top 1px solid $content-bgColor
  display flex
  padding 0 1.8rem
  box-sizing border-box
  align-items  center
  &__item
    text-align center
    font-size 1.2rem
    flex 1
    &--active
      color #1fa4fc
    .iconfont
      margin 0.7rem 0 0.2rem
  &__title
    font-size 2rem
    transform scale(50%, 50%)
    transform-origin center top
</style>
