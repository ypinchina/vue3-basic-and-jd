<!--  -->
<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input"><input placeholder="请输入手机号" v-model="username" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__input"><input placeholder="请输入密码" v-model="password" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__input"><input placeholder="请确认输入密码" v-model="ensurement" class="wrapper__input__content" type="text"></div>
    <div class="wrapper__login-button" @click="register">注册</div>
    <div class="wrapper__login-link" @click="backLogin">已有账号？立即登录</div>
    <Toast :message="toastMessage" :isShow="toastFlag"></Toast>
  </div>
</template>

<script>
import Toast, { useToastEffect } from '@/components/Toast'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '@/utils/request'
const useRegisterEffect = (changeToastDate) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const register = async () => {
    if (!data.username || !data.password) {
      changeToastDate('账号或密码不能为空')
      return
    }
    if (data.password !== data.ensurement) {
      changeToastDate('密码和确认密码输入不一致')
      return
    }
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
        changeToastDate('注册成功')
      } else {
        changeToastDate('注册失败')
      }
    } catch (e) {
      changeToastDate('错误，' + e)
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { register, username, password, ensurement }
}
export default {
  setup () {
    const router = useRouter()
    const { toastMessage, toastFlag, changeToastDate } = useToastEffect()
    const { register, password, username, ensurement } = useRegisterEffect(changeToastDate)
    const backLogin = () => {
      // 点击登录按钮返回登录的方法
      router.push({ name: 'Login' })
    }
    return { register, backLogin, toastMessage, toastFlag, password, username, ensurement }
  },
  components: { Toast }
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
    background $btnBlueColor
    box-shadow 0 0.4rem 0.8rem 0 rgba(0,145,255,0.32)
    border-radius 0.4rem
    color $bgColor
    font-size 1.6rem
    text-align center
  &__login-link
    text-align center
    font-size 1.4rem
    color $content-notice-fontcolor
</style>
