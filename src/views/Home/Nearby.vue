<!--  -->
<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag" v-for="(i, index) in item.tags" :key="index">{{ i }}</span>
        </div>
        <p class="nearby__content__heightline">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const nearbyList = [{
      id: 0,
      title: '沃尔玛',
      tags: ['月售1万+', '起送￥0', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }, {
      id: 1,
      title: '沃尔玛',
      tags: ['月售1万+', '起送￥0', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }, {
      id: 2,
      title: '沃尔玛',
      tags: ['月售1万+', '起送￥0', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }, {
      id: 3,
      title: '沃尔玛',
      tags: ['月售1万+', '起送￥0', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }, {
      id: 4,
      title: '沃尔玛',
      tags: ['月售1万+', '起送￥0', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }]
    return { nearbyList }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/viriables.styl'
.nearby
  &__content
    flex 1
    padding-bottom 1.2rem
    border-bottom 1px solid $content-bgColor
    &__title
      line-height 2.2rem
      font-size 1.6rem
      color $content-fontcolor
    &__tags
      line-height 1.8rem
      font-size 1.3rem
      color $content-fontcolor
      margin-top .8rem
    &__tag
        margin-right 1.6rem
    &__heightline
      color #e93b3b
      line-height 1.8rem
      font-size 1.3rem
      margin 0.8rem 0 0 0
  &__title
    margin 1.6rem 0 0.2rem 0
    font-size 1.8rem
    font-weight normal
    color $content-fontcolor
  &__item
    display flex
    padding-top 1.2rem
    &__img
      width 5.6rem
      height 5.6rem
      margin-right 1.6rem
</style>
