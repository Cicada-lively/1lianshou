<template>
  <div class="header bg-color">
    <div class="switchIcon">
      <a href="javascript:;" class="iconfont icon-fold_menu" :class="{active:isFoldMenu}" @click="$emit('total-menubar')"></a>
    </div>
    <h1 class="title">FF数字化计划交付平台</h1>
    <div class="header-right">
      <div class="search">
        <input type="text" placeholder="search"><i class="iconfont icon-search search-btn"></i>
      </div>
      <!-- <div class="user">
        <img src="/static/imgs/photo.png" alt=""><span class="user-name">Yangxiaobin</span><span class="iconfont icon-row-down-copy row-down"></span>
      </div> -->
      <div class="short-btn">
        <span class="iconfont icon-limi-news"></span><span class="iconfont icon-setting"></span><span class="iconfont icon-menu"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isFoldMenu: {
      type: Boolean,
      default: false
    },
    totalMenubar: {
      type: Function,
      default: function () {}
    }
  },
  data () {
    return {
      color1: {
        textColor: '#fff',
        titleColor: '#e67171',
        headerBgColor: '#f2f5f7'
      },
      color2: {
        textColor: '#F53',
        titleColor: '#F00D24',
        headerBgColor: '#f3f5f6'
      }
    }
  },
  computed: {

  },
  methods: {
    // toggleTheme () {
    // }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 头部样式
text-color = #F53
title-color = #F00D24
header-bg-color = #f3f5f6
.header 
  position absolute
  top 0
  width 100%
  height 62px
  line-height 62px
  background header-bg-color
  .switchIcon
    width 50px
    height 62px
    margin-left 10px
    float left
    a
      display block
      padding 0 16px
      color #333
      &.active
        transform rotateY(180deg)
  .title
    width 350px
    height 60px
    font-size 20px
    font-weight bold
    margin-left 15px
    letter-spacing 2px
    color #333
    float left
  .header-right
    float right 
    padding-right 15px
    .search
      width 200px
      position relative
      float left
      input
        width 180px
        height 30px
        line-height 30px
        font-size 13px
        padding 0 48px 0 8px
        border-radius 15px
        border 1px solid #ccc
      .search-btn
        position absolute
        top 0 
        right 35px
        width 20px
        height 20px
        z-index 5
    .user
      float left
      height 62px
      line-height 62px
      border-left 1px solid #ccc
      border-right 1px solid #ccc
      padding 0 15px
      img 
        width 32px
        height 32px
        float left
        display block
        margin-top 15px
      .user-name
        float left
        margin 0 15px
      .row-down
        z-index 6
        display inline-block
        width 10px
        height 10px
        float left
    .short-btn
      float left
      padding 0 10px
      span 
        margin-right 10px
        color #aaa
        font-size 20px
</style>
