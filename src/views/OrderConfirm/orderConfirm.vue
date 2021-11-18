<!--  -->
<template>
  <div class="wrapper">
    <Top />
    <Products />
    <Order />
  </div>
</template>

<script>
import Top from './Top.vue'
import Order from './Order.vue'
import Products from './Products.vue'
export default {
  name: 'OrderConfirm',
  components: { Order, Products, Top }
}
</script>
<style scoped lang='stylus'>
.wrapper
  background-color #fafafa
  position absolute
  display flex
  flex-direction column
  bottom 0
  left 0
  top 0
  right 0
</style>
