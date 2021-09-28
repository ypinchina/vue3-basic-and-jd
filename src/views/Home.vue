<template>
  <div class="home">
    <div class="wrapper">
      <StaticPart />
      <NearBy />
    </div>
    <Docker />
  </div>
</template>

<script>
import StaticPart from './StaticPart.vue'
import Docker from './Docker.vue'
import NearBy from './Nearby.vue'
export default {
  name: 'Home',
  components: {
    StaticPart, Docker, NearBy
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  position absolute
  bottom 4.9rem
  left 0
  right 0
  top 0
  padding 0 1.8rem
  overflow-y auto
</style>
