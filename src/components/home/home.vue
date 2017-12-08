<template>
  <div class="home">
    <vSelect></vSelect>
    <!-- <calendar></calendar> -->
    <!-- <steps></steps> -->
    <div class="jobtip">
      <div class="tip-title">
        <h2>工作头条</h2><a href="#" class="btn finish">完成</a><a href="#" class="btn nofinish">未完成</a>
      </div>
      <div class="tiplist">
        <dl class="tip">
          <dt><span><i class="iconfont icon-shandian"></i></span></dt>
          <dd><span class="title">Issue Po</span><span class="desc">100pcs PO has Issue</span></dd>
        </dl>
        <dl class="tip">
          <dt><span><i class="iconfont icon-shandian"></i></span></dt>
          <dd><span class="title">ONS</span><span class="desc">ONS 减少1800pcs</span></dd>
        </dl>
        <dl class="tip">
          <dt><span><i class="iconfont icon-shandian"></i></span></dt>
          <dd><span class="title">急单</span><span class="desc">急单pull 1400pcs</span></dd>
        </dl>
        <!-- <dl class="tip">
          <dt><span></span></dt>
          <dd><span class="title">Issue Po</span><span class="desc">100pcs PO has Issue</span></dd>
        </dl>
        <dl class="tip">
          <dt><span></span></dt>
          <dd><span class="title">Issue Po</span><span class="desc">100pcs PO has Issue</span></dd>
        </dl> -->
      </div>
    </div>
    <div class="rili">
      <!--<calendar></calendar>-->
    </div>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
            </el-col>
        </el-row>
    </section>
  </div>
</template>
<script>
import vSelect from '@/components/public/select'
import Calendar from '@/components/public/calendar'
import echarts from 'echarts'
// import Steps from '@/components/public/steps'

export default {
  data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null
            }
        },

        methods: {
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                this.chartColumn.setOption({
                  title: { text: 'Column Chart' },
                  tooltip: {},
                  xAxis: {
                      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                  },
                  yAxis: {},
                  series: [{
                      name: '销量',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },
            drawBarChart() {
                this.chartBar = echarts.init(document.getElementById('chartBar'));
                this.chartBar.setOption({
                    title: {
                        text: 'Bar Chart',
                        subtext: '数据来自网络'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['2011年', '2012年']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230]
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807]
                        }
                    ]
                });
            },
            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    title: {
                        text: 'Line Chart'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                });
            },
            drawPieChart() {
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: 'Pie Chart',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 335, name: '直接访问' },
                                { value: 310, name: '邮件营销' },
                                { value: 234, name: '联盟广告' },
                                { value: 135, name: '视频广告' },
                                { value: 1548, name: '搜索引擎' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawColumnChart()
                this.drawBarChart()
                this.drawLineChart()
                this.drawPieChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        },
  components: {
    vSelect,
    Calendar
    // Steps
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  width 100%
  height 100%
  padding 10px
.jobtip
  width 600px
  height 262px
  background #fbfbfb
  float left
  margin-right 25px
  border-radius 8px
  // border 1px #ccc solid
  .tip-title
    height 40px
    line-height 40px
    padding 0 10px
    border-bottom 1px #eee solid
    h2
      width 100px
      float left
      font-size 14px 
    .btn
      width 80px
      height 26px
      line-height 26px
      text-align center
      color #fff
      display block
      float left
      margin 8px 15px 0 0
      border-radius 4px
      &.finish
        background #28292a
      &.nofinish
        background #eee
        color #333
  .tiplist
    overflow auto
    height 222px
  .tip
    height 50px
    padding 5px 10px
    margin-bottom 5px
    dt
      width 30px
      margin-right 10px
      float left
      span 
        width 30px
        height 30px
        text-align center
        vertical-align bottom
        color #fff
        display inline-block
        border-radius 50%
        margin-top 5px
        background #b4c61a
        position relative
        i 
          display block
          font-size 20px
          position absolute
          top 5px
          left 5px
    dd
      width 500px
      height 40px
      float left
      span
        display block
        width 500px
        height 20px
        line-height 20px
        &.title
          font-size 14px
          color #111
        &.desc
          font-size 12px
          color #ddd
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
.rili
  width 400px
  height 262px
  background #ccc
  float left
</style>
