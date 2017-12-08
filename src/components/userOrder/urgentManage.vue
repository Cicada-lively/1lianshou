<template>
  <div class="urgentmanage">
    <!-- <vSelect></vSelect> -->
    <el-button type="primary" size="medium">新建急单</el-button>
    <el-button type="primary" size="medium">导出Excel</el-button>
    <div class="search">
      <p class="title">急单查询条件</p>
      <ul class="conditions">
        <li>
          <label for="">起始日期:</label><input type="text">
        </li>
        <li>
          <label for="">终止日期:</label><input type="text">
        </li>
        <li>
          <label for="">急单编号:</label><input type="text">
        </li>
        <li>
          <label for="">需求者:</label><input type="text">
        </li>
        <li>
          <label for="">满足需求:</label><input type="text">
        </li>
        <li>
          <label for="">加急工厂:</label><input type="text">
        </li>
        <li>
          <label for="">起始日期:</label><input type="text">
        </li>
        <li>
          <label for="">起始日期:</label><input type="text">
        </li>
        <li>
          <label for="">起始日期:</label><input type="text">
        </li>
        <li>
          <label for="">终止日期:</label><input type="text">
        </li>
        <li>
          <label for="">急单编号:</label><input type="text">
        </li>
        <li>
          <label for="">需求者:</label><input type="text">
        </li>
        <li>
          <label for="">满足需求:</label><input type="text">
        </li>
        <li>
          <label for="">加急工厂:</label><input type="text">
        </li>
        <li>
          <label for="">起始日期:</label><input type="text">
        </li>
      </ul>
    </div>
      <div class="list">
        <p class="title">急单查询结果列表</p>
        <table border="1">
          <tr>
            <th>急单编号</th>
            <th>急单来源</th>
            <th>当前状态</th>
            <th>交付日期</th>
            <th>当前负责人</th>
            <th>加急日期</th>
            <th>需求日期gap</th>
            <th>客户分类</th>
            <th>客户名称</th>
            <th>需求者</th>
            <th>加急机型</th>
            <th>加急数量</th>
            <th>需求日期</th>
            <th>加急原因</th>
            <th>工厂订单PO</th>
            <th>工厂订单ITEM</th>
            <th>客户订单SO</th>
            <th>订单日期</th>
            <th>当前INV</th>
            <th>满足RSD已提Qty</th>
            <th>满足RSD未提Qty（INV）</th>
            <th>订单日期</th>
            <th>当前INV</th>
            <th>满足RSD已提Qty</th>
            <th>满足RSD未提Qty（INV）</th>
          </tr>
          <tr>
            <td>A000001</td>
            <td>可视化</td>
            <td>未生产</td>
            <td>11月12日</td>
            <td>OE:Hanna</td>
            <td>加急日期</td>
            <td>需求日期gap</td>
            <td>客户分类</td>
            <td>客户名称</td>
            <td>需求者</td>
            <td>10MLS04H0</td>
            <td>加急数量</td>
            <td>需求日期</td>
            <td>周年庆</td>
            <td>工厂订单PO</td>
            <td>工厂订单ITEM</td>
            <td>客户订单SO</td>
            <td>订单日期</td>
            <td>当前INV</td>
            <td>满足RSD已提Qty</td>
            <td>订单日期</td>
            <td>当前INV</td>
            <td>满足RSD已提Qty</td>
            <td>满足RSD未提Qty（INV）</td>
            <td>满足RSD未提Qty（INV）</td>
          </tr>
          <tr>
            <td>A000001</td>
            <td>可视化</td>
            <td>待入库</td>
            <td>交付日期</td>
            <td>OE:Hanna</td>
            <td>加急日期</td>
            <td>需求日期gap</td>
            <td>客户分类</td>
            <td>客户名称</td>
            <td>需求者</td>
            <td>10MLS04H1C</td>
            <td>324</td>
            <td>需求日期</td>
            <td>周年庆</td>
            <td>工厂订单PO</td>
            <td>工厂订单ITEM</td>
            <td>客户订单SO</td>
            <td>订单日期</td>
            <td>当前INV</td>
            <td>满足RSD已提Qty</td>
            <td>满足RSD未提Qty（INV）</td>
            <td>订单日期</td>
            <td>当前INV</td>
            <td>满足RSD已提Qty</td>
            <td>满足RSD未提Qty（INV）</td>
          </tr>
        </table>
      </div>

  </div>
</template>
<script>
// import VSelect from '@/components/public/select'
export default {
  components: {
    // VSelect
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
title-color = #CE1234
.urgentmanage
  padding 20px
  width 100%
  height 100%
  box-sizing border-box
  .search,.conditions
    height auto
    overflow hidden
    .title
      height 40px
      line-height 40px
      font-size 14px
      font-weight bold
      color title-color
    .conditions
      margin-left 20px
      width 900px
    li  
      float left
      margin 0 15px 15px 0
      height 25px
      label
        width 60px
        height 25px
        line-height 25px
        float left
      input 
        height 25px
        line-height 25px
        float left
        width 70px
        border 1px solid #ccc
        padding 3px
  .list
    .title
      height 40px
      line-height 40px
      font-size 14px
      font-weight bold
      color title-color
    table
      border-color #A79398
      border-collapse collapse
      th
        width 80px
        font-weight normal
      tr 
        width 80px
        height 32px
      td
        width 80px
        padding 3px 5px
        line-height 16px
        text-align center 
</style>
