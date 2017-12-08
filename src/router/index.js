import Vue from 'vue'
import Router from 'vue-router'
import OrderCheck from '@/components/userOrder/orderCheck'
import Urgentmanage from '@/components/userOrder/urgentmanage'
import Home from '@/components/home/home'
import Goal from '@/components/goal/goal'
import ProductSchedul from '@/components/productSchedul/productSchedul'
import Requirements from '@/components/productSchedul/requirements'
import SupplyPlan from '@/components/supplyPlan/supplyPlan'
import Repertory from '@/components/repertory/repertory'
import BaseData from '@/components/baseData/baseData'
import ProductEndManage from '@/components/productEndManage/productEndManage'
import ProductManage from '@/components/productManage/productManage'
import ProductOrderManage from '@/components/productOrderManage/productOrderManage'
import LongTermSupply from '@/components/longTermSupply/longTermSupply'
import Me from '@/components/me/me'
import Changepwd from '@/components/me/changepwd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/productSchedul',
      component: ProductSchedul
    },
    {
      path: '/goal',
      component: Goal
    },
    {
      path: '/orderCheck',
      component: OrderCheck
    },
    {
      path: '/urgentmanage',
      component: Urgentmanage
    },
    {
      path: '/requirements',
      component: Requirements
    },
    {
      path: '/supplyPlan',
      component: SupplyPlan
    },
    {
      path: '/repertory',
      component: Repertory
    },
    {
      path: '/baseData',
      component: BaseData
    },
    {
      path: '/productEndManage',
      component: ProductEndManage
    },
    {
      path: '/productOrderManage',
      component: ProductOrderManage
    },
    {
      path: '/productManage',
      component: ProductManage
    },
    {
      path: '/longTermSupply',
      component: LongTermSupply
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/changepwd',
      component: Changepwd
    }
  ]
})
