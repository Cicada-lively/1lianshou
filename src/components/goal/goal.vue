<template>
  <div class="goal-box">
    <v-select></v-select>
    <!-- <calendar></calendar> -->
  </div>
</template>
<script>
import VSelect from '@/components/public/select'
import Calendar from '@/components/public/calendar'
export default {
  components: {
    VSelect,
    Calendar
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
// .goal-box
//   min-width 1100px
  // background #ccc
</style>

