<template>
<div>
  <div class="top-container">
    <div class="position">
      <span class="iconfont position__icon">&#xe630;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont bell__icon">&#xe619;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe6a4;</span>
      <span class="search__font">山姆会员商店</span>
    </div>
  </div>
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
</div>
</template>

<style lang="stylus">
@import './style/viriables.styl'
@import './style/mixins.styl'
.top-container
  position absolute
  bottom 4.9rem
  left 0
  right 0
  top 0
  padding 0 1.8rem
  .search
    line-height 3.2rem
    color #b7b7b7
    background-color #f5f5f5
    border-radius 1.6rem
    .iconfont
      padding 0 0.6rem 0 0.8rem
    &__font
      font-size 1.4rem
  .position
    padding 1.6rem 2.4rem 1.6rem 0
    color $content-fontcolor
    font-size 1.6rem
    line-height 2.2rem
    position relative
    ellipsis()
    .bell__icon
      font-size 2rem
      position absolute
      top: 1.8rem
      right 0
    .position__icon
      font-size 2rem
      top: 0.1rem
      position relative
.docker
  color $content-fontcolor
  width 100%
  position absolute
  left 0
  bottom 0
  height 4.9rem
  border-top 1px solid #ccc
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
