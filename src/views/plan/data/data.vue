<template>
  <div class="data">
    <div class="tt-search-view">
<!--       <DatePicker type="month" placeholder="Select month" style="width: 200px; margin-right: 5px;"></DatePicker>
      <div class="seek-box">
        <Select v-model="model1">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="seek-box">
        <Select v-model="model1">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="seek-box">
        <Select v-model="model1">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div> -->
      <!-- <Button type="primary" icon="ios-search" style="margin-right: 5px;">查询</Button> -->
      <!-- <Button type="primary" icon="ios-download-outline">导出Excel</Button> -->
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    </div>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            :data="uploadData"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;"
            >
            <!-- <div style="width: 58px;height:58px;line-height: 58px;"> -->
                <!-- <Icon type="camera" size="20"></Icon> -->
            <Button  type="primary" icon="ios-cloud-upload-outline" style="margin-right: 5px">Upload files</Button>
    <!--       <div class="tt-search-view">
            <Button type="primary" icon="ios-search" style="margin-right: 5px;">查询</Button>
            <Button type="primary" icon="ios-download-outline">导出Excel</Button>
          </div> -->
            <!-- </div> -->
        </Upload>
        <div class="ivu-upload ivu-upload-drag"  style="margin-right: 5px;float: left;"   >
          <Button type="primary" icon="ios-cloud-upload-outline" @click="downmoban">模板下载</Button>
        </div>
<!--         <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div> -->
        <!-- <Button type="primary" icon="ios-cloud-upload-outline" @click="downmoban">downmoban</Button> -->
    </Modal>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                defaultList: [
                    // {
                    //   'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    //   'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    // },
                    // {
                    //   'name': 'bc7521e033abdd1e92222d733590f104',
                    //   'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    // }
                ],
                imgName: '',
                visible: false,
                uploadList: [],
                modal1: false,
                uploadData: {},
                action_url: ''
                // loadingStatus: false
            }
        },
        mounted () {
        // this.getList()
        },
        created () {
          // this.action_url = process.env.BASE_API + '/oc/api/v1/file/';
          console.log(process.env.BASE_API)
          this.action_url = 'http://localhost:9090/api/v1/file/upload'
          // this.getList()
        },
        methods: {
            handleView (name) {
                this.imgName = name
                this.visible = true
            },
            handleRemove (file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
            },
            handleSuccess (res, file) {
                // 因为上传过程为实例，这里模拟添加 url
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
                file.name = '7eb99afb9d5f317c912f08b5212fd69a'
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                })
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                })
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    })
                }
                return check
            },
            ok () {
                this.$Message.info('Clicked ok')
            },
            cancel () {
                this.$Message.info('Clicked cancel')
            },
            // 下载模板
            downmoban () {
              console.log('val')
            }
            // handleUpload (file) {
            //     this.file = file
            //     return false
            // },
            // upload () {
            //     this.loadingStatus = true
            //     setTimeout(() => {
            //         this.file = null
            //         this.loadingStatus = false
            //         this.$Message.success('Success')
            //     }, 1500)
            // }
        }
    }
</script>
