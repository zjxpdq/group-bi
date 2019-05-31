<template>
  <div class="order">
    <div class="tt-search-view">
      <DatePicker type="month" placeholder="Select month" style="width: 200px; margin-right: 5px;"></DatePicker>
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
      </div>
      <Button type="primary" icon="ios-search" style="margin-right: 5px;">查询</Button>
      <Button type="primary" icon="ios-download-outline">导出Excel</Button>
    </div>
    <div class="tt-content">
      <tt-table :titleList="columns1" :dataList="data1" :loading="Loading" :isPage="true"></tt-table>
    </div>
  </div>
</template>
<script>
  import ttTable from '@/components/tt-table/tt-table.vue'
  // import {getBgcGradual} from '@/utils/html-style'
  import axios from 'axios'
  export default {
    name: 'order',
    data () {
      return {
        columns1: [
          // {
          //   title: 'Name',
          //   width: 140,
          //   fixed: 'left',
          //   key: 'name'
          // },
          // {
          //   title: 'Age',
          //   width: 140,
          //   key: 'age',
          //   align: 'right',
          //   render: (h, params) => {
          //     return getBgcGradual(h, params.row.age + '%')
          //   }
          // },
          // {
          //   title: 'Address',
          //   width: 140,
          //   key: 'address'
          // },
        ],
        data1: [
          // {
          //   name: 'John Brown',
          //   age: 18,
          //   address: 'New York No. 1 Lake Park',
          //   date: '2016-10-03'
          // }
        ],
        Loading: false,
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          }
        ],
        model1: ''
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        // axios.get('http://localhost:9090/api/v1/bi/plan/historyinventory', {
        axios.get('http://tapi.taotonggroup.com/api/v1/bi/plan/orderanalysis', {
          params: {
            warehouse_arr: '德芙贝宁南通仓',
            begin_date: '2019-04-12 00:00:00',
            end_date: '2019-04-15 00:00:00'
          }
        }).then((res) => {
          // var title = ['渠道', '平台', '事业部/渠道', '负责人', '品牌', '店名', '任务指标', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '合计', 'YTD', 'RAF', '1st H', '2nd H', 'Q1', 'Q2', 'Q3', 'Q4']
          console.log(res)
          if (res.data.code === 200) {
            // this.columns1 = title
            var znTitle = res.data.data.title.zn
            console.log(znTitle)
            for (var i = 0; i < znTitle.length; i++) {
              var dic = {}
              dic.title = res.data.data.title.zn[i]
              dic.width = 100
              dic.key = znTitle[i]
              this.columns1.push(dic)
            }
            // for (var j = 0; j < title.length; j++) {
            //   var dic1 = {}
            //   dic1[title[j]] = title[j]
            //   console.log(dic1)
            //   this.data1.push(dic1)
            // }
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      ttTable
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .order {
    .tt-content {
      .tt-monthly-title {
        text-align: center;
        padding: 10px;
      }
    }
    .tt-search-view {
      .seek-box {
        width: 20%;
        max-width: 278px;
        float: left;
        padding-right: 5px;
      }
    }
  }
</style>
