<!--  -->
<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6a4;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" v-show="item.imgUrl" />
    <Content />
  </div>
</template>

<script>
import ShopInfo from '@/components/Shop'
import Content from './Content'
import { get } from '@/utils/request'
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 获取商店店铺详情信息的逻辑处理
const useShopInfoEffect = () => {
  const data = reactive({
    item: {}
  })
  const route = useRoute()
  const getShopInfo = async () => {
    const result = await get('/api/shop/' + route.params.id)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { getShopInfo, item }
}
// 返回到首页的点击逻辑
const useBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'Shop',
  components: { ShopInfo, Content },
  setup () {
    const { handleBackClick } = useBackEffect()
    const { getShopInfo, item } = useShopInfoEffect()
    getShopInfo()
    return { item, handleBackClick }
  }
}
</script>
<style scoped lang="stylus">
@import '../../style/viriables.styl'
.wrapper
  padding 0 1.8rem
  .search
    margin 1.4rem auto 0.4rem
    display flex
    line-height 3.2rem
    &__back
      font-size 2.6rem
      width 3rem
      color #b6b6b6
    &__content
      flex 1
      line-height 3.2rem
      display flex
      border-radius 1.6rem
      background-color $search-bgColor
      overflow hidden
      &__icon
        width 4.4rem
        text-align center
      &__input
        height 3.2rem
        line-height 3.2rem
        width 100%
        display inline-block
        border none
        background-color $search-bgColor
        outline none
        padding-right 2rem
        color $search-fontcolor
        font-size 1.4rem
        &::placeholder
          color $search-fontcolor
</style>
