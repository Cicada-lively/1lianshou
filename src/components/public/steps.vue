<template>
  <div class="steps-box">
    <el-steps direction="vertical" :active="1">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2" description="这是一段很长很这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字长很长的描述性文字"></el-step>
      <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.steps-box
  width 600px
  height 400px
  overflow hidden
  margin 0 auto
  background #eee
</style>
