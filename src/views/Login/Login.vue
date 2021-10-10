<!--  -->
<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input"><input placeholder="请输入手机号" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__input"><input placeholder="请输入密码" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__login-button" @click="login">登录</div>
    <div class="wrapper__login-link">注册</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const login = () => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
    return { login }
  }
}
</script>
<style scoped lang="stylus">
@import '../../style/viriables.styl'
.wrapper
  position absolute
  top 50%
  left 0
  right 0
  transform  translateY(-50%)
  &__img
    width 6.6rem
    height 6.6rem
    margin 0 auto 4rem auto
    display block
  &__input
    background #f9f9f9
    height 4.8rem
    border 1px solid rgba(0,0,0,.1)
    border-radius 6px
    margin 0 4rem 1.6rem 4rem
    &__content
      width 100%
      border none
      outline none
      height 4.8rem
      background none
      padding 0 1.6rem
      font-size 1.6rem
      color $content-notice-fontcolor
      &::placeholder
        color $content-notice-fontcolor
  &__login-button
    margin 3.2rem 4rem 1.6rem 4rem
    line-height 4.8rem
    background #0091FF
    box-shadow 0 0.4rem 0.8rem 0 rgba(0,145,255,0.32)
    border-radius 0.4rem
    color #fff
    font-size 1.6rem
    text-align center
  &__login-link
    text-align center
    font-size 1.4rem
    color $content-notice-fontcolor
</style>
