<!--  -->
<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input"><input placeholder="请输入手机号" v-model="username" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__input"><input placeholder="请输入密码" v-model="password" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__login-button" @click="login">登录</div>
    <div class="wrapper__login-link" @click="backRegister">注册</div>
    <Toast :message="toastMessage" :isShow="toastFlag"></Toast>
  </div>
</template>

<script>
import Toast, { useToastEffect } from '@/components/Toast'
import { post } from '@/utils/request'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
const useLoginEffect = (changeToastDate) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const login = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        changeToastDate('登录失败')
      }
    } catch (e) {
      changeToastDate('错误，' + e)
    }
  }
  const { username, password } = toRefs(data)
  return { login, username, password }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const backRegister = () => {
    router.push({ name: 'Register' })
  }
  return { backRegister }
}
export default {
  components: { Toast },
  setup () {
    const { toastMessage, toastFlag, changeToastDate } = useToastEffect()
    const { login, username, password } = useLoginEffect(changeToastDate)
    const { backRegister } = useRegisterEffect()
    return { login, backRegister, username, password, toastMessage, toastFlag }
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
