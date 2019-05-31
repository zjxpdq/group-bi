<template>
  <div class="contrast">
    <div  class="staff-title"><h4>活动对比</h4></div>
    <div class="contrast">
      <div class="contrast-seek">
        <div class="seek-box">
          <Select v-model="model1">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <span class="vs">VS</span>
        <div class="seek-box">
          <Select v-model="model1">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <span class="vs">VS</span>
        <div class="seek-box">
          <Select v-model="model1">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
    </div>
    <div class="contrast-content">
      <div class="none-content">
        <div class="img-box"></div>
        <p>先选择活动才能对比哦！</p>
      </div>

      <div class="survey">
        <div  class="staff-title"><h4>概况对比</h4></div>
        <tt-table
          :titleList="surveyTitle"
          :dataList="surveyList"
          :loading="loading"
          :className="'true'"
        ></tt-table>
      </div>

      <div class="flow">
        <div  class="staff-title"><h4>引流对比</h4></div>

        <div class="seek-box">
          <div>
            <div class="seek-btn">
              <span>预热期</span>
              <CheckboxGroup v-model="fruit">
                <Checkbox label="预热访客数"></Checkbox>
                <Checkbox label="预热加购人数"></Checkbox>
                <Checkbox label="预热收藏人数"></Checkbox>
              </CheckboxGroup>
            </div>
            <div class="seek-btn">
              <span>活动期</span>
              <CheckboxGroup v-model="fruit">
                <Checkbox label="访客数"></Checkbox>
                <Checkbox label="支付金额"></Checkbox>
                <Checkbox label="支付转化率"></Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <span>已选 1/3<Button type="text"><a>重置</a></Button></span>
        </div>

        <tt-table
          :titleList="flowTitle"
          :dataList="flowList"
          :loading="loading"
          :isPage="true"
          :className="'tit'"
        ></tt-table>
      </div>

      <div class="commodity">
        <div  class="staff-title"><h4>商品对比</h4></div>
        <div class="commodity-box">
          <div class="seek-box">
            <RadioGroup>
              <Radio label="支付金额（占比）"></Radio>
              <Radio label="支付买家数"></Radio>
              <Radio label="支付件数（占比）"></Radio>
              <Radio label="客单价"></Radio>
              <Radio label="支付转化率"></Radio>
              <Radio label="访客数"></Radio>
              <Radio label="预热加购人数"></Radio>
              <Radio label="预热加购件数"></Radio>
              <Radio label="预热收藏人数"></Radio>
              <Radio label="预热收藏次数"></Radio>
              <Radio label="预热访客数"></Radio>
            </RadioGroup>
          </div>
          <div class="box-content">
            <div class="title"><span class="No6">活动1</span></div>
            <tt-table
              :titleList="commodityTitle1"
              :dataList="commodityList1"
              :loading="loading"
              :className="'true'"
            ></tt-table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ttTable from '@/components/tt-table/tt-table.vue'

  export default {
    name: 'contrast',
    data () {
      return {
        surveyTitle: [
          {
            title: ' ',
            key: 'title'
          },
          {
            title: '活动1'
          },
          {
            title: '活动1'
          },
          {
            title: '活动1'
          }
        ],
        surveyList: [
          {
            title: '预热时间'
          },
          {},
          {
            title: '活动时间'
          }
        ],
        loading: false,
        flowTitle: [
          {
            title: '二级来源',
            key: 'title'
          },
          {
            title: '活动1',
            key: 'age',
            renderHeader: (h, params) => {
              return h('span', [
                h('p', {
                  style: {
                    textAlign: 'content',
                    fontSize: '8px',
                    color: '#999'
                  }
                }, '活动1'),
                h('strong', '支付金额')
              ])
            },
            sortable: true
          }
        ],
        flowList: [
          {
            title: '直接访问',
            age: 'ad'
          },
          {
            title: '直接访问'
          }
        ],
        fruit: [],
        commodityTitle1: [
          {
            title: ' ',
            key: 'title',
            render: (h, params) => {
              return h('div', {
                domProps: {
                  innerHTML: '<a href="http://www.baidu.com" target="_blank">' + params.row.title + '</a>'
                }
              })
            }
          },
          {
            title: '支付件数（占比）',
            key: 'age',
            align: 'right'
          }
        ],
        commodityList1: [
          {
            title: '123',
            age: '1990%'
          }
        ],
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
        model1: ''
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
  .contrast {
    .No1 {
      background-color: #D0D0D0;
    }

    .No2 {
      background-color: #FFC52C;
    }

    .No3 {
      background-color: #FF8F30;
    }

    .No4 {
      background-color: #F23030;
    }

    .No5 {
      background-color: #EA2979;
    }

    .No6 {
      background-color: #2062E6;
    }

    .ivu-tabs {
      color: #333;
    }

    .contrast {
      .contrast-seek {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span.vs {
          border-radius: 50%;
          background: #CECECE;
          display: inline-block;
          width: 20px;
          height: 20px;
          color: #fff;
          text-align: center;
          line-height: 20px;
        }

        .seek-box {
          width: 26%;
          max-width: 278px;
        }
      }
    }

    .contrast-content {
      border: 1px solid #f0f0f0;
      padding: 10px;

      .none-content {
        height: 200px;
        margin: 30px 0;

        .img-box {
          margin: 0 auto 10px;
          width: 145px;
          height: 159px;
          background: url(https://img.alicdn.com/tps/TB1CG0ZMpXXXXbyXpXXXXXXXXXX-427-159.png) -131px 0 no-repeat;
        }

        p {
          text-align: center;
        }

      }

      .tt-table {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;

      }

      .flow {
        .seek-box {
          padding: 20px 20px 0 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .seek-btn {
            margin-bottom: 10px;

            span {
              color: #999;
            }

            .ivu-checkbox-wrapper {
              width: 10em;
            }
          }
        }
      }

      .commodity {
        margin-top: 20px;

        .commodity-box {
          padding: 20px;

          .seek-box {
            margin-bottom: 20px;

            .ivu-radio-wrapper {
              width: 10em;
            }
          }

          .box-content {
            .title {
              margin-bottom: 10px;

              span {
                padding: 1px 2px;
                color: #fff;
              }
            }

            .tt-table {
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>
