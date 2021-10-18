<template>
  <div class="top-container">
    <div class="position">
      <span class="iconfont position__icon">&#xe630;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont bell__icon">&#xe619;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe6a4;</span>
      <span class="search__font">山姆会员商店</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
    </div>
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png" alt="">
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png" alt="">
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png" alt="">
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png" alt="">
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png" alt="">
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" alt="">
        <p class="icons__item__desc">烘焙蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png" alt="">
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" alt="">
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png" alt="">
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus" scoped>
@import '../../style/viriables.styl'
@import '../../style/mixins.styl'
.top-container
  .search
    line-height 3.2rem
    color $search-fontcolor
    margin-bottom 1.4rem
    background-color $search-bgColor
    border-radius 1.6rem
    .iconfont
      padding 0 0.6rem 0 0.8rem
    &__font
      font-size 1.4rem
  .gap
    background-color $content-bgColor
    height 1rem
    margin 0 -1.8rem
  .icons
    display flex
    flex-wrap wrap
    margin-top 1.4rem
    &__item
      width 20%
      &__desc
        text-align center
        margin 0.6rem 0 1.6rem
      &__img
        width 4rem
        height 4rem
        display block
        margin 0 auto
  .banner
    height 0
    padding-bottom 25.4%
    overflow hidden
    &__img
      width 100%
  .position
    padding 1.6rem 2.4rem 1.6rem 0
    color $content-fontcolor
    font-size 1.6rem
    line-height 2.2rem
    position relative
    ellipsis()
    .bell__icon
      font-size 2rem
      position absolute
      top: 1.8rem
      right 0
    .position__icon
      font-size 2rem
      top: 0.1rem
      position relative
</style>
