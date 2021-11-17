<!--  -->
<template>
  <div class="docker">
    <div class="docker__item" v-for="(item, index) in menuList" :key="index" :class="{'docker__item--active': index == 0}">
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">
        <router-link :to="item.to">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    const menuList = [{
      name: '首页',
      icon: '&#xe6f1;',
      to: { name: 'Home' }
    }, {
      name: '购物车',
      icon: '&#xe62f;',
      to: { name: 'CartList' }
    }, {
      name: '订单',
      icon: '&#xe612;',
      to: { name: 'Home' }
    }, {
      name: '我的',
      icon: '&#xe612;',
      to: { name: 'Home' }
    }]
    return { menuList }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/viriables.styl'
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
    font-size 1rem
    transform scale(50%, 50%)
    transform-origin center top
    a
      color $content-fontcolor
      text-decoration none
</style>
