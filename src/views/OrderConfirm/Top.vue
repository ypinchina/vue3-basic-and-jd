<!--  -->
<template>
  <div class="top">
    <div class="top__bgcolor"></div>
    <div class="top__header">
      <span class="iconfont top__header__back" @click="back">&#xe6db;</span>
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
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const back = () => {
      router.back()
    }
    return { back }
  }
}
</script>
<style scoped lang='stylus'>
@import '../../style/viriables.styl'
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
</style>
