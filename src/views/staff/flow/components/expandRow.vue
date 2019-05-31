<template>
  <div class="expandRow">
    <Table :columns="titleList" :data="dataList" :show-header="false"></Table>
  </div>
</template>

<script>
  export default {
    name: 'expandRow',
    data () {
      return {
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
      }
    },
    created () {
    },
    methods: {},
    components: {},
    computed: {}
  }
</script>

<style scoped lang="scss">
  .expandRow {
    td.ivu-table-expanded-cell {
      padding: 10px 10px 10px 50px;
    }
  }
</style>
