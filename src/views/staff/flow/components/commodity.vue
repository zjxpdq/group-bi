<template>
  <div class="commodity">
    <div class="seek-box">
      <div class="time-box">统计时间：2019-05-20 11:11:11</div>
      <div class="input-box">
        <DatePicker
          type="daterange"
          placement="bottom-end"
          placeholder="Select date"
          :options="options"
          style="width: 200px"></DatePicker>
      </div>
    </div>
    <div class="seek-box">
      <div>
        <Select v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>推荐： </span>
      </div>
      <div class="input-box">
        <Select v-model="model1" size="small" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
    </div>
    <div class="content">
      <div class="staff-title">
        <h4>商品排行榜</h4>
      </div>

      <tt-table
        :titleList="titleList"
        :dataList="dataList"
        :loading="loading"
        :border="false"
      ></tt-table>

    </div>
  </div>
</template>

<script>
  import ttTable from '@/components/tt-table'

  export default {
    name: 'commodity',
    data () {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: '',
        options: {
          shortcuts: [
            {
              text: '1周',
              value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                return [start, end]
              }
            },
            {
              text: '1个月',
              value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                return [start, end]
              }
            },
            {
              text: '3个月',
              value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                return [start, end]
              }
            }
          ]
        },
        model2: '',
        titleList: [
          {
            title: '排名',
            key: 'name'
          },
          {
            title: '商品名称',
            key: 'age'
          },
          {
            title: '访客数',
            key: 'age'
          },
          {
            title: '支付买家数',
            key: 'age'
          },
          {
            title: '支付转化率',
            key: 'age'
          }
        ],
        dataList: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          }
        ],
        loading: false
      }
    },
    created () {
    },
    methods: {},
    components: {
      ttTable
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .commodity {
    .seek-box {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
</style>
