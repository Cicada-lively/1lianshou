<template>
  <div>
    <ul class="menubar">
      <!-- <li v-for="(item,index) in menuArr" :key="index">
        <router-link :to="item.path" v-if="!item.children || item.children.length === 0"><i class="iconfont" :class="item.icon"></i><span v-show="!isFoldMenu">{{item.text}}</span></router-link>
        <template v-else>
          <a href="javascript:;"><i class="iconfont" :class="item.icon"></i><span v-show="!isFoldMenu">{{item.text}}</span></a>
          <ul class="subMenu">
            <li v-for="(subItem,i) in item.children" :key="i">
              <router-link :to="subItem.path">{{subItem.text}}</router-link>
            </li>
          </ul>
        </template>
      </li> -->
      <li v-for="(item,index) in menuArr" :key="index">
        <router-link :to="item.path"><i class="iconfont" :class="item.icon"></i><span v-show="!isFoldMenu">{{item.text}}</span></router-link>
        <ul class="subMenu">
          <li v-for="(subItem,i) in item.children" :key="i">
            <router-link :to="subItem.path">{{subItem.text}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    isFoldMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuArr: [
        {
          path: '/home',
          text: '首页',
          icon: 'icon-homebig'
        },
        {
          path: '/goal',
          text: '目标',
          icon: 'icon-mubiao',
          children: [
            {
              path: '/progressMonitoring',
              text: 'CA进度监控'
            },
            {
              path: '/objectiveToUpload',
              text: '目标上传'
            }
          ]
        },
        {
          path: '/longTermSupply',
          text: '中长期供需管理',
          icon: 'icon-gongxu'
        },
        {
          path: '/userOrder',
          text: '客户订单管理',
          icon: 'icon-kehu',
          children: [
            {
              path: '/orderCheck',
              text: '状态查询'
            },
            {
              path: '/urgentManage',
              text: '加急管理'
            }
          ]
        },
        {
          path: '/productSchedul',
          text: '排产管理',
          icon: 'icon-paichanguanli',
          children: [
            {
              path: '/requirements',
              text: '提交排产需求'
            },
            {
              path: '/productParams',
              text: '排产参数'
            },
            {
              path: '/issuePO',
              text: 'Issue PO'
            },
            {
              path: '/OrderModify',
              text: '订单修改'
            },
            {
              path: '/finalBuildSignal',
              text: 'Final Build Signal'
            },
            {
              path: 'opt',
              text: 'OPT排产管理'
            }
          ]
        },
        {
          path: '/productManage',
          text: '生产订单管理',
          icon: 'icon-productManage',
          children: [
            {
              path: '/psd',
              text: 'PSD汇总'
            },
            {
              path: '/psdDanger',
              text: 'PSD风险管理'
            },
            {
              path: '/ats',
              text: 'ATS'
            }
          ]
        },
        {
          path: '/supplyPlan',
          text: '供应计划',
          icon: 'icon-gyjh',
          children: [
            {
              path: '/psdSummary',
              text: 'PSD汇总'
            },
            {
              path: 'ons',
              text: 'ONS'
            },
            {
              path: 'option',
              text: 'Option'
            }
          ]
        },
        {
          path: '/repertory',
          text: '库存',
          icon: 'icon-kucun'
        },
        {
          path: '/productEndManage',
          text: '新品收尾管理',
          icon: 'icon-xinpinicon'
        },
        {
          path: '/baseData',
          text: '基础数据',
          icon: 'icon-jichushuju'
        },
        {
          path: '/me',
          text: '我的配置',
          icon: 'icon-set',
          children: [
            {
              path: '/changepwd',
              text: '密码修改'
            },
            {
              path: '/avator',
              text: '修改头像'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
text-color = #C1BCBC
bg-color = #252627
bg-active-color = #1b1b1b
.menubar
  height 100%
  li
    line-height 36px
    border-top 1px rgba(0, 0, 0, 0.2) solid
    border-bottom 1px rgba(0, 0, 0, 0.1) solid
    border-sizing border-box
    position relative
    &:active
      background-color bg-active-color
      a
        color #fff
    &:hover
      background-color bg-active-color
      a
        color #fff
      .subMenu
        display block
    a
      padding 0 10px
      color text-color
      display block
      height 36px
      font-size 0
      i
        vertical-align middle
        display inline-block
        padding 0 15px
        font-size 16px
      span
        display inline-block
        vertical-align middle
        width 150px
        font-size 14px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
    .subMenu
      position absolute
      left 100%
      font-size 14px
      top 0
      width 150px
      padding-left 5px
      display none
      z-index 9
      li
        background  bg-color
        &:first-child
          border-top-left-radius 6px
          border-top-right-radius 6px
        &:last-child
          border-bottom-left-radius 6px
          border-bottom-right-radius 6px
        &:hover
          background bg-active-color
          a
            color #fff
        a
          font-size 14px
          text-align left
          color text-color 
</style>
