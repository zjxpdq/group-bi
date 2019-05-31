<template>
  <div class="monthly">
    <div class="tt-search-view">
      <DatePicker type="month" placeholder="请选择年月" style="width: 100px; margin-right: 5px;"></DatePicker>
      <Button type="primary" icon="ios-search" style="margin-right: 5px;">查询</Button>
      <Button type="primary" icon="ios-download-outline">导出Excel</Button>
    </div>
    <div class="tt-content">
      <div class="tt-monthly-title">
        <h2>淘通运营月报</h2>
      </div>
      <Tabs :value="TabsValue" type="card" @on-click="offTabs" :animated="false">
        <TabPane label="汇总" name="name1">

        </TabPane>
        <TabPane label="TT-data" name="name2">
          <ExtraLongTable
            :tableHeight="560"
            :tdHeight="40"
            :loadNum="20"
            ref="currentRowTable"
            :columns="dataTitle"
            :tableList="dataList"
          />
        </TabPane>
        <TabPane label="KRIS-data" name="name3">
          <!--          <h2>BY店铺状态</h2>-->
          <!--          <Table border :columns="columns3" :data="data3"></Table>-->
          <!--          <h2>BY事业部</h2>-->
          <!--          <Table border :columns="columns3" :data="data3"></Table>-->
          <!--          <h2>BY事业部-现有项目</h2>-->
          <!--          <Table border :columns="columns3" :data="data3"></Table>-->
          <!--          <h2>BY项目</h2>-->
          <!--          <Table border :columns="columns3" :data="data3"></Table>-->
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import ttTable from '@/components/tt-table/tt-table.vue'
  // import {getBgcGradual} from '@/utils/html-style'
  import * as sell from '@/api/v1/sell'
  import ExtraLongTable from '@/components/ele-table/ele-table'
  // import bigTable from '@/components/big-table'

  export default {
    name: 'monthly',
    data () {
      return {
        collectTitle: [],
        collect: [],
        collectTitle1: [],
        collect1: [],
        ttDataTitle: [
          {
            title: 'Name1',
            key: 'name'
          }
        ],
        ttDataList: [
          {
            name: 'John Brown1',
            age: 18,
            address: 'New York No. 1 Lake Park1',
            date: '2016-10-03'
          }
        ],
        columns3: [
          {
            title: 'Name1',
            key: 'name'
          },
          {
            title: 'Name1',
            key: 'name'
          }
        ],
        data3: [
          {
            name: 'John Brown1',
            age: 18,
            address: 'New York No. 1 Lake Park1',
            date: '2016-10-03'
          },
          {
            name: 'John Brown1',
            age: 18,
            address: 'New York No. 1 Lake Park1',
            date: '2016-10-03'
          }
        ],
        newData: {},
        loading: true,
        TabsValue: 'name1',
        dataTitle: [],
        dataList: []
      }
    },
    mounted () {
    },
    created () {
      this.Loading = true
      this.getList()
    },
    methods: {
      getList () {
        sell.getList.getList({
          params: {
            total_month: '201905'
          }
        }).then((res) => {
          if (res.code === 200) {
            let list = res.data
            console.log(list)
            let ttList = list['TT-data']
            let ttTitleList = ttList['columns']
            this.dataTitle = ttTitleList.map(item => {
              return {
                title: item,
                key: item,
                width: 100
              }
            })
            this.dataList = ttList['data']
            // this.collectTitle = Object.freeze(this.dataTitle)
            // this.collect = Object.freeze(this.dataList)
            // this.collectTitle1 = Object.freeze(this.dataTitle)
            // this.collect1 = Object.freeze(this.dataList)
            this.itemCount = this.dataList.length
            this.offTabs({name: 'name1'})

            // console.log(list)
            // let columns = list[0]['columns']
            // let titleArr = []
            // for (let i in columns) {
            //   titleArr.push({
            //     title: columns[i],
            //     key: i
            //   })
            // }
            // this.collectTitle = titleArr
            // this.collect = list[0]['jsonlist']
            //
            // let ttData = list[1]['columns']
            // let ttDataTitle = []
            // for (let i in ttData) {
            //   ttDataTitle.push({
            //     title: ttData[i],
            //     key: i
            //   })
            // }
            // this.ttDataTitle = ttDataTitle
            // this.ttDataList = list[1]['jsonlist']
            // console.log('a')
          }
          this.Loading = false
        }).catch((err) => {
          console.log(err)
        })
      },
      handleReachBottom (v) {
        console.log(v)
      },
      offTabs (v) {
        this.loading = true
        switch (v['name']) {
          case 'name1':

            this.$nextTick(() => {
              this.loading = false
            })
            break
          case 'name2':

            this.$nextTick(() => {
              this.loading = false
            })
            break
        }
      }
    },
    components: {
      ttTable,
      ExtraLongTable
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .monthly {
    .tt-search-view {
      margin-bottom: 20px;
    }

    .tt-content {
      .tt-monthly-title {
        text-align: center;
        padding: 10px;
      }
    }

    .my-table {
      overflow: hidden;
      min-height: 560px;
      height: 100%;
    }

    .demo-table-expand {
      font-size: 0;
    }

    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
</style>
