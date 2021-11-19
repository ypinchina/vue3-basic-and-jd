<!--  -->
<template>
    <div class="wrapper">
      <div class="title">我的订单</div>
      <div class="orders">
        <div class="order" v-for="(item, index) in list" :key="index">
          <div class="order__title">
            {{ item.shopName }}
            <div class="order__status">{{ item.isCanceled ? '已确认' : '已取消' }}</div>
          </div>
          <div class="order__content">
            <div class="order__content__imgs">
              <template v-for="(innerItem, innerIndex) in item.products" :key="innerIndex">
                <img :src="innerItem.product.img" v-if="innerIndex <= 3" alt="" class="order__content__img">
              </template>
            </div>
            <div class="order__content__info">
              <div class="order__content__info__price">￥ {{ item.totalSum }}</div>
              <div class="order__content__info__count">共 {{ item.totalCount }} 件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Docker :currentIndex="2" />
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Docker from '../../components/Docker.vue'
import { get } from '../../utils/request'
const getOrderEffect = () => {
  const orderData = reactive({ list: [] })
  const getOrder = async () => {
    const result = await get('/api/order')
    if (!result?.errno && result?.data?.length) {
      const tempList = result.data || []
      tempList.forEach(item => {
        item.totalCount = 0
        item.totalSum = 0
        item.products.forEach(itemInner => {
          item.totalSum = itemInner.product.price * itemInner.orderSales + item.totalSum
          item.totalCount = item.totalCount + itemInner.orderSales
        })
      })
      orderData.list = tempList
    }
  }
  getOrder()

  const { list } = toRefs(orderData)
  console.log(list)
  return { list }
}
export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const { list } = getOrderEffect()
    return { list }
  }
}
</script>
<style scoped lang='stylus'>
@import '../../style/viriables.styl'
.wrapper
  position absolute
  bottom 4.9rem
  left 0
  right 0
  top 0
  overflow-y auto
  background-color $content-bgOrder
.title
  line-height 4.4rem
  background-color $bgColor
  font-size 1.6rem
  color $content-fontcolor
  text-align center
// .orders
.order
  margin 1.6rem 1.8rem
  padding 1.6rem
  background-color $bgColor
  &__title
    margin-bottom 1.6rem
    line-height 2.2rem
    font-size 1.6rem
    color $content-fontcolor
  &__status
    float right
    font-size 1.4rem
    color $line-fontColor
  &__content
    display flex
    &__imgs
      flex 1
    &__img
      width 4rem
      height 4rem
      margin-right 1.4rem
    &__info
      width 7rem
      &__price
        margin-bottom .4rem
        line-height 2rem
        font-size 1.4rem
        color $heightLine-fontColor
        text-align right
      &__count
        line-height 1.4rem
        font-size 1.2rem
        color $content-fontcolor
        text-align right
</style>
