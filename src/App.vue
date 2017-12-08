<template>
  <div id="app">
    <div class="container">
      <!-- 左侧内容去 -->
      <div class="aside" :style="{flex: isFoldMenu ? '0 0 80px' : '0 0 218px', textAlign: isFoldMenu ? 'center' : ''}">
        <div class="role">
          <h2>PRC <span v-show="!isFoldMenu">.SC</span></h2>
          <div class="photoWrap" v-show="!isFoldMenu">
            <div class="photo">
              <img src="../static/imgs/FF.png" alt="">
            </div>
            <div class="name">YangXiaobin</div>
          </div>
        </div>
        <div class="menuBox">
         <menuBar :is-fold-menu="isFoldMenu"></menuBar>
        </div>
      </div>
      <!-- 右侧内容去 -->
      <div class="main">
        <!-- 头部内容区 -->
          <app-header :is-fold-menu="isFoldMenu" @total-menubar="changeMenubar"></app-header>
        <!-- 主要内容展示区部分 -->
        <div class="content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/menubar/menubar'
import OrderCheck from '@/components/userOrder/orderCheck'
import AppHeader from '@/components/header/header'
// import Home from '@/components/home/home'
// import ProductSchedul from '@/components/productSchedul/productSchedul'

export default {
  data () {
    return {
      isFoldMenu: false
    }
  },
  components: {
    MenuBar,
    OrderCheck,
    AppHeader
    // Home,
    // ProductSchedul
  },
  methods: {
    changeMenubar () {
      this.isFoldMenu = !this.isFoldMenu
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
bg-color = #252627
  #app
    width 100%
    height 100%
    min-width 1200px
    overflow auto
    .container
      display flex
      min-height 100%
// 左侧内容样式开始
      .aside
        flex 0 0 218px
        color #fff
        background bg-color
        .role
          padding-bottom 10px
          h2
            line-height 62px
            height 62px
            padding 0 16px
            background #323232
            font-size 20px
            font-weight bold
            white-space nowrap
            span 
              font-size 14px
              letter-spacing 2px
        .photoWrap
          // height 130px
          // padding 20px 60px
          text-align center
          .photo
            width 61px
            height 61px
            margin 10px auto
            padding 3px
            border-radius 65px
            background #fff
            img 
              display block
              width 55px
              height 55px
          .name
            font-size 14px
            height 25px
            line-height 25px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
// 右侧内容样式开始
      .main
        padding-top 60px 
        flex 1
        position relative
          
// 主要内容展示样式
        .content
          width 100%
          height 800px
</style>
