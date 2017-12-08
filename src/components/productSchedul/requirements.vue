<template>
  <!-- <div class="requirements">
    <ul>
      <li>
        <input type="file"><button>上传</button>
      </li>
      <li>
        <input type="file"><button>上传</button>
      </li>
      <li>
        <input type="file"><button>上传</button>
      </li>
      <li>
        <input type="file"><button>上传</button>
      </li>
    </ul>
  </div> -->
    <div class="requirements">
      <div class="upload">
        <Upload
          :before-upload="handleUpload"
          action="">
        <Button type="ghost" icon="ios-cloud-upload-outline">TP-BTS 上传</Button>
        </Upload>
        <div v-if="file !== null">文件名: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : '点击上传' }}</Button></div>
      </div>
      <div class="upload">
        <Upload
          :before-upload="handleUpload"
          action="">
        <Button type="ghost" icon="ios-cloud-upload-outline">TCTS-GAB 上传</Button>
        </Upload>
        <div v-if="file !== null">文件名: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : '点击上传' }}</Button></div>
      </div>
      <div class="upload">
        <Upload
          :before-upload="handleUpload"
          action="">
        <Button type="ghost" icon="ios-cloud-upload-outline">TP-BTS 上传</Button>
        </Upload>
        <div v-if="file !== null">文件名: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : '点击上传' }}</Button></div>
      </div>
      <div class="upload">
        <Upload
          :before-upload="handleUpload"
          action="">
        <Button type="ghost" icon="ios-cloud-upload-outline">TC-TS 上传</Button>
        </Upload>
        <div v-if="file !== null">文件名: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : '点击上传' }}</Button></div>
      </div>
    </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      file: null,
      loadingStatus: false
    }
  },
  methods: {
    handleUpload (file) {
      this.file = file
      return false
    },
    upload () {
      this.loadingStatus = true
      setTimeout(() => {
        this.file = null
        this.loadingStatus = false
        this.$Message.success('上传成功')
      }, 1500)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .requirements
    width 100%
    height 100%
    display flex
    padding 20px
    justify-content center
    .upload
      flex 1

</style>
