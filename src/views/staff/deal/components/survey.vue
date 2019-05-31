<template>
  <div class="survey">
    <div class="top">
      <div class="staff-title">
        <h4>交易总览</h4>
        <div class="seek-box">
          <DatePicker
            type="daterange"
            placement="bottom-end"
            placeholder="Select date"
            :options="options"
            style="width: 200px"></DatePicker>
          <Select v-model="model1" size="small" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="top-content">
        <div class="left">
          <div class="no1">
            <span>
              <p>访客数</p>
              <p>406,121</p>
            </span>
          </div>
          <div class="no2">
            <span>
              <p>访客数</p>
              <p>406,121</p>
            </span>
          </div>
          <div class="no3">
            <span>
              <p>访客数</p>
              <p>406,121</p>
            </span>
          </div>
        </div>
        <div class="right">

        </div>
      </div>
      <div class="top-fl">
        <div class="fl-left">
          <span class="top-fl-img"></span>
          <div class="text">
            <h4>交易波动解读</h4>
            <p>不错哦！支付买家数增加3,541个，客单价增加0.53元，拉升全店支付</p>
            <p>金额上涨20.39%，到宝贝效果看看哪些宝贝贡献最大吧。</p>
            <p>了解更多交易数据， 查看交易构成。</p>
          </div>
        </div>
        <div class="fl-right">
          <div class="text">
            <h4>交易波动解读</h4>
            <p>不错哦！支付买家数增加3,541个，客单价增加0.53元，拉升全店支付</p>
            <p>金额上涨20.39%，到宝贝效果看看哪些宝贝贡献最大吧。</p>
            <p>了解更多交易数据， 查看交易构成。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="staff-title">
        <h4>交易趋势</h4>
        <div class="seek-box">
          <DatePicker
            type="daterange"
            placement="bottom-end"
            placeholder="Select date"
            :options="options"
            style="width: 200px"></DatePicker>
          <Select v-model="model1" size="small" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="content">
        <div class="content-seek">
          <RadioGroup v-model="disabledGroup">
            <Radio label="不比较"></Radio>
            <Radio label="同行对比"></Radio>
          </RadioGroup>
          <Select v-model="model1" style="width:200px; margin-left: 20px;">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>

        </div>
        <map-line :lineStyle="{height: '400px', width: '100%'}" :lineData="lineData"></map-line>
      </div>
    </div>
  </div>
</template>

<script>
  import mapLine from '@/components/echarts/mapLine'

  export default {
    name: 'survey',
    data () {
      return {
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
        lineData: {
          xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        },
        disabledGroup: ''
      }
    },
    created () {
    },
    methods: {},
    components: {
      mapLine
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .survey {
    .staff-title {
      justify-content: space-between;
    }

    .top {

      .top-content {
        padding: 20px;
        position: relative;

        .left {

          div {
            height: 68px;
            margin-right: 290px;
            display: flex;
            align-items: center;
            padding-left: 30px;
          }

          .no1 {
            background-color: #eefbfa;
            color: #5faead;
            border-bottom: 1px solid #e5e5e5;
          }

          .no2 {
            background-color: #f7fff1;
            color: #7f9c67;
            border-bottom: 1px solid #e5e5e5;
          }

          .no3 {
            background-color: #fffbf4;
            color: #bc853f;
          }
        }

        .right {
          position: absolute;
          top: 20px;
          right: 20px;
          height: 210px;
          width: 430px;
          background: url("https://cbu01.alicdn.com/cms/upload/other/tbsycm/tp.png") no-repeat;
        }
      }

      .top-fl {
        height: 98px;
        margin: 30px;
        display: flex;

        .fl-left {
          display: flex;
          align-items: center;
          border-left: 1px solid #f7f7f7;
          flex: 1;

          .top-fl-img {
            display: inline-block;
            width: 98px;
            height: 98px;
            background: url("https://img.alicdn.com/tps/i4/TB1nX5CGFXXXXbhXXXXxSGAJXXX-98-301.png") no-repeat 0;
          }

          .text {
            padding-left: 20px;
          }
        }

        .fl-right {
          display: flex;
          align-items: center;
          padding-left: 20px;
          flex: 1;
        }
      }
    }

    .bottom {
      .content {
        .content-seek {
          padding: 20px;
        }
      }
    }
  }
</style>
