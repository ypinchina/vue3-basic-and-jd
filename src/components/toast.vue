<!--  -->
<template>
  <div class="Toast" v-if="isShow">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
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
  const { toastFlag, toastMessage } = toRefs(toastData)
  return { toastFlag, toastMessage, changeToastDate }
}

export default {
  name: 'Toast',
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
.Toast
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  color #fff
  background-color rgba(0, 0, 0, .4)
  text-align center
  height 4rem
  line-height 4rem
  padding 0 2rem
  font-size 0.12rem
  border-radius 0.6rem
</style>
