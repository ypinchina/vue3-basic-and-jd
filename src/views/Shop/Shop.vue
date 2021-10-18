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
    <ShopInfo :item="item" />
  </div>
</template>

<script>
import ShopInfo from '@/components/Shop'
import { useRouter } from 'vue-router'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    const item = {
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1'
    }
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
