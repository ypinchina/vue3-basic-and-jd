<!--  -->
<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link to="/shop" v-for="item in nearbyList"  :key="item._id">
      <Shop :item="item" :hasBorder="true" />
    </router-link>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { get } from '@/utils/request'
import Shop from '@/components/Shop'
export default {
  components: { Shop },
  setup () {
    const nearbyList = ref([])
    const getNearbyList = async () => {
      try {
        const result = await get('/api/shop/hot-list')
        if (!result?.errno && result?.data?.length) {
          nearbyList.value = result.data || []
        }
        // result.then(res => {
        //   console.log(res)
        // })
      } catch (e) {
        console.log(e)
      }
    }
    getNearbyList()
    return { nearbyList }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/viriables.styl'
.nearby
  &__title
    margin 1.6rem 0 0.2rem 0
    font-size 1.8rem
    font-weight normal
    color $content-fontcolor
  a
    text-decoration none
</style>
