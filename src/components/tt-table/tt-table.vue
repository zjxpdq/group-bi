<template>
  <div :class="['tt-table', className || 'tt-table-blue']">
    <Table
      :border="border"
      :columns="titleList"
      :data="getDataList"
      :loading="loading"
      size="small"
      stripe
      :max-height="maxHeight"
    ></Table>
    <div class="tt-page-box" v-if="isPage">
      <Page
        :total="dataList.length"
        show-total
        show-elevator
        show-sizer
        @on-change="onChange"
        @on-page-size-change="onPageSizeChange"
        size="small"
        :transfer="true"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tt-table',
    data () {
      return {
        page: 1,
        pagesize: 10
      }
    },
    props: {
      titleList: {
        type: Array,
        default () {
          return []
        }
      },
      dataList: {
        type: Array,
        default () {
          return []
        }
      },
      loading: {
        type: Boolean,
        default: true
      },
      isPage: {
        type: Boolean,
        default: false
      },
      className: {
        type: String,
        default: ''
      },
      border: {
        type: Boolean,
        default: true
      },
      maxHeight: {
        type: String,
        default: '560'
      }
    },
    created () {
    },
    methods: {
      onChange (v) {
        this.page = v
      },
      onPageSizeChange (v) {
        this.pagesize = v
      }
    },
    components: {},
    computed: {
      getDataList () {
        if (this.isPage) {
          return this.dataList.slice((this.page - 1) * this.pagesize, this.page * this.pagesize)
        } else {
          return this.dataList
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tt-table {
    .tt-page-box {
      margin-top: 20px;
    }
  }
</style>
