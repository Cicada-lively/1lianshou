<template>
  <div class="select-box">
    <ul>
      <li>
        <span>业务模式：</span>
        <select name="businessModel" id="">
          <option value="">R Model</option>
          <option value="">All</option>
          <option value="">T Model</option>
        </select>
      </li>
      <li>
        <span>产品类型：</span>
        <select name="productType" id="">
          <option value="">笔记本</option>
          <option value="">台式机</option>
          <option value="">选件</option>
          <option value="">工作站</option>
        </select>
      </li>
      <li>
        <span>分销渠道：</span>
        <select name="channelOfDistribution" id="">
          <option value="">11</option>
          <option value="">21</option>
          <option value="">33</option>
          <option value="">12</option>
          <option value="">41</option>
        </select>
      </li>
      <li>
        <span>产品分类：</span>
        <select name="productCategory" id="">
          <option value="">All</option>
          <option value="">Box</option>
          <option value="">AIO</option>
          <option value="">Edge</option>
        </select>
      </li>
      <li>
        <span>客户类型：</span>
        <select name="clientType" id="">
          <option value="">All</option>
          <option value="">GAB</option>
          <option value="">KAB</option>
        </select>
      </li>
      <li>
        <span>工厂：</span>
        <select name="factory" id="">
          <option value="">All</option>
          <option value="">LCFC</option>
          <option value="">LIPC</option>
        </select>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.select-box
  // width 1100px
  height auto
  overflow hidden
  padding 20px 15px
  box-sizing border-box
  ul,li
    height 28px
    float left
    span 
      float left
      display inline-block
      min-width 30px
      padding 0 8px
      height 28px
      line-height 28px
    select 
      float left
      display inline-block
      font-size 12px
      width 80px
      margin-top 4px
      height 20px 
      border-radius 4px
      margin-right 10px
</style>
