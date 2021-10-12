<!--  -->
<template>
  <div class="toast" v-if="isShow">{{ message }}</div>
</template>

<script>
import { reactive } from 'vue'
export const useToastEffect = () => {
  const toastData = reactive({
    toastFlag: false,
    toastMessage: ''
  })
  const changeToastDate = (message) => {
    toastData.toastFlag = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.toastFlag = false
      toastData.toastMessage = ''
    }, 3000)
  }
  return { toastData, changeToastDate }
}

export default {
  name: 'toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    isShow: {
      default: false,
      type: Boolean
    }
  }
}
</script>
<style scoped lang='stylus'>
.toast
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  color #fff
  background-color rgba(0, 0, 0, .4)
  text-align center
  height 4rem
  line-height 4rem
  width 6.5rem
  font-size 0.12rem
  border-radius 6px
</style>
