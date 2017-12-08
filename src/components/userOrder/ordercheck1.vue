<template>
  <div class="orderCheck">
    <div class="order-search">
      <span class="label">关键字搜索：</span>
      <select name="" >
        <option value="">so</option>
        <option value="">销售凭证</option>
        <option value="">销售凭证</option>
        <option value="">交货单号</option>
        <option value="">Account</option>
        <option value="">销售凭证</option>
        <option value="">INSIDE SALSE</option>
      </select>
        <input type="text" class="value-input" placeholder="请输入值。。"><input type="button" class="btn" value="搜索">
    </div>
    <div class="check-box">
      <span>筛选项：</span>
      <ul class="checkUl">
        <li>
          <span class="type">产品</span>
          <input type="checkbox" name="products" id="note"><label for="note">笔记本</label>
          <input type="checkbox" name="products" id=""><label for="">选件</label>
          <input type="checkbox" name="products" id=""><label for="products">工作站</label>
          <input type="checkbox" name="products" id=""><label for="products">台式机</label>
          <input type="checkbox" name="products" id=""><label for="products">显示器</label>
        </li>
        <li>
          <span class="type">业务线</span>
          <input type="checkbox" name="serviceLine" id="KAB"><label for="KAB">KAB</label>
          <input type="checkbox" name="serviceLine" id="GAB"><label for="GAB">GAB</label>
          <input type="checkbox" name="serviceLine" id="T MODEL"><label for="T MODEL">T MODEL</label>
        </li>
        <li>
          <span class="type">产品组</span>
          <input type="checkbox" name="channel" id=""><label for="">23</label>
          <input type="checkbox" name="channel" id=""><label for="">45</label>
          <input type="checkbox" name="channel" id=""><label for="">65</label>
          <input type="checkbox" name="channel" id=""><label for="">76</label>
          <input type="checkbox" name="channel" id=""><label for="">87</label>
        </li>
        <li>
          <span class="type">分销渠道</span>
          <input type="checkbox" name="channel" id=""><label for="">11</label>
          <input type="checkbox" name="channel" id=""><label for="">21</label>
          <input type="checkbox" name="channel" id=""><label for="">41</label>
          <input type="checkbox" name="channel" id=""><label for="">61</label>
        </li>
        <li>
          <span class="type">订单原因</span>
          <input type="checkbox" name="" id="reason"><label for="reason">ZF0</label>
          <input type="checkbox" name="" id="reason"><label for="reason">GPS</label>
          <input type="checkbox" name="" id="reason"><label for="reason">EPP</label>
          <input type="checkbox" name="" id="reason"><label for="reason">XXX</label>
        </li>
        <li>
          <span class="type">状态</span>
          <input type="checkbox" name="" id="status"><label for="status">未产出</label>
          <input type="checkbox" name="" id="status"><label for="status">未数签</label>
          <input type="checkbox" name="" id="status"><label for="status">未勾单</label>
          <input type="checkbox" name="" id="status"><label for="status">未过账</label>
          <input type="checkbox" name="" id="status"><label for="status">未过资</label>
          <input type="checkbox" name="" id="status"><label for="status">有库存未确认</label>
          <input type="checkbox" name="" id="status"><label for="status">已确认未过资</label>
        </li>
        <li>
          <span class="type">异常</span>
          <input type="checkbox" name="" id="exception"><label for="exception">PSD</label>
          <input type="checkbox" name="" id="exception"><label for="exception">Aged</label>
          <input type="checkbox" name="" id="exception"><label for="exception">NPI</label>
          <input type="checkbox" name="" id="exception"><label for="exception">EOL</label>
          <input type="checkbox" name="" id="exception"><label for="exception">Quality</label>
        </li>
        <li>
          <span class="orderDate">客户订单创建日期</span>
          <select name="" >
            <option value="">销售凭证</option>
            <option value="">销售凭证</option>
            <option value="">交货单号</option>
            <option value="">Account</option>
            <option value="">销售凭证</option>
            <option value="">INSIDE SALSE</option>
          </select>
          <span class="orderTo">To</span>
          <select name="" >
            <option value="">销售凭证</option>
            <option value="">销售凭证</option>
            <option value="">交货单号</option>
            <option value="">Account</option>
            <option value="">销售凭证</option>
            <option value="">INSIDE SALSE</option>
          </select>
        </li>
      </ul>
    </div>
    <div class="choiceUl">
        <span>可选项目：</span>
        <ul>
          <li><input type="checkbox" name="programs" id=""><label for="">BTO PO</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">采购订单编号</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">物料描述</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">销售单据类型</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">采购订单编号</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">物料描述</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">销售单据类型</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">采购订单编号</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">物料描述</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">销售单据类型</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">采购订单编号</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">物料描述</label></li>
          <li><input type="checkbox" name="programs" id=""><label for="">销售单据类型</label></li>
        </ul>
    </div>
    <div class="control">
      <span>操作：</span>
      <input type="button" value="加急">
      <input type="button" value="取消加急">
      <input type="button" value="请求改单">
      <input type="button" value="申请offspec">
      <input type="button" value="取消offspec">
    </div>
    <table border= "1" class="list">
      <tr>
        <td>急单标识</td>
        <td>急单原因</td>
        <td>销售凭证</td>
        <td>急单标识</td>
        <td>制造商零</td>
        <td>分销渠道</td>
        <td>急单标识</td>
        <td>急单标识</td>
        <td>订单原因</td>
        <td>急单标识</td>
        <td>以销售</td>
        <td>急单标识</td>
        <td>急单标识</td>
        <td>订单原因</td>
        <td>急单标识</td>
        <td>以销售单位表</td>
        <td>急单标识</td>
      </tr>
      <tr>
        <td>急单标识</td>
        <td>双十一</td>
        <td>0150950756</td>
        <td>等待产出</td>
        <td>11月2日</td>
        <td>急单标识</td>
        <td>部门</td>
        <td>急单标识</td>
        <td>急单标识</td>
        <td>急单标识</td>
        <td>0150950756</td>
        <td>急单标识</td>
        <td>0150950756</td>
        <td>订单原因</td>
        <td>0150950756</td>
        <td>以销</td>
        <td>急单标识</td>
      </tr>
      <tr>
        <td>急单标识</td>
        <td>双十一</td>
        <td>0150950756</td>
        <td>等待产出</td>
        <td>11月2日</td>
        <td>急单标识</td>
        <td>部门</td>
        <td>急单标识</td>
        <td>急单标识</td>
        <td>急单标识</td>
        <td>0150950756</td>
        <td>急单标识</td>
        <td>0150950756</td>
        <td>订单原因</td>
        <td>0150950756</td>
        <td>以销</td>
        <td>急单标识</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selects: {
        product: ['笔记本', '选件', '工作站', '台式机', '显示器'],
        serviceLine: ['KAB', 'GAB', 'T MODEL']
      }

    }
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.orderCheck
  width 100%
  height 100%
  padding 20px
  .order-search
    width 100%
    height auto
    overflow hidden
    .label
      width 100px
      height 32px
      line-height 32px
      display inline-block
      font-size 14px
      text-align left
      float left
    select
      font-size 14px
      width 250px
      height 32px
      line-height 32px
      float left
    .value-input
      width 250px
      height 32px
      border 1px solid #aaa
      margin 0 30px
      padding 5px
      float left
    .btn 
      width 120px 
      height 32px
      background #b0b3b4
      color #fff
      float left
      border-radius 4px
      &:hover
        background #969696
  .check-box
    width 100%
    min-height 100px
    overflow hidden
    margin 20px 0
    span 
      width 80px
      height 32px
      line-height 32px
      font-size 14px
      float left
      display inline-block
    .checkUl
      float left
      li
        width 100%
        height 32px 
        line-height 32px
        margin-right 15px
        input
          margin 0 5px 0 5px
          height 32px 
          float left
          line-height 32px
          background none
        label
          height 32px
          width 80px
          float left
        select 
          width 150px
          height 32px
          float left
        .orderDate
          width 150px
          height 32px 
          line-height 32px
          float left
          padding-right 5px
        .orderTo
          width 60px
          height 32px 
          line-height 32px
          text-align center 
          float left
  .choiceUl
    height auto
    overflow hidden
    span 
      width 100px
      height 32px
      line-height 32px
      font-size 14px
      display inline-block
      float left
    ul
      float left
      width 1000px
    li
      float left
      margin-right 20px
      input 
        float left
        height 32px
        line-height 32px
        margin-right 5px
      label
        float left
        height 32px
        line-height 32px
  .control
    width 100%
    height 32px
    margin 10px 0
    span 
      width 80px
      height 32px
      line-height 32px
      font-size 14px
      float left
    input 
      width 120px 
      height 32px 
      color #fff
      background #b0b3b4
      margin 0 20px
      float left
      border-radius 4px
      &:hover
        background #969696
  .list
    width 100%
    height auto
    border-color #A79398
    border-collapse collapse
    // tr,td
    //   // border 1px #ccc solid
    //   border-spacing 0
    tr 
      text-align center
      padding 5px 10px
    td
      min-width 50px
      // height 32px
      vertical-align middle
      line-height 16px
      padding 5px

</style>
