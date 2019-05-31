<template>
  <div class="store">
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
    <div class="store-content">
      <div class="seek">
        <Select v-model="model2" size="small" style="width:100px">
          <Option value="1">PC端</Option>
          <Option value="item">无线端</Option>
        </Select>
      </div>
      <Tabs type="line" name="tab-a1" value="a1-a">
        <TabPane label="构成" name="a1-a" tab="tab-a1">
          <div class="staff-title">
            <h4>流量来源构成</h4>
          </div>
          <div class="content">
            <div class="seek-box">
              <div>
                <CheckboxGroup v-model="fruit">
                  <Checkbox label="访客数"></Checkbox>
                  <Checkbox label="下单转化率"></Checkbox>
                  <Checkbox label="下单转化率"></Checkbox>
                  <Checkbox label="新访客数"></Checkbox>
                  <Checkbox label="关注店铺人数"></Checkbox>
                  <Checkbox label="商品收藏人数"></Checkbox>
                  <Checkbox label="加购人数"></Checkbox>
                  <Checkbox label="下单金额"></Checkbox>
                  <Checkbox label="支付金额"></Checkbox>
                  <Checkbox label="支付买家数"></Checkbox>
                  <Checkbox label="支付转化率"></Checkbox>
                  <Checkbox label="客单价"></Checkbox>
                  <Checkbox label="UV价值"></Checkbox>
                  <Checkbox label="直接支付买家数"></Checkbox>
                  <Checkbox label="收藏商品-支付买家数"></Checkbox>
                  <Checkbox label="粉丝支付买家数"></Checkbox>
                  <Checkbox label="加购商品-支付买家数"></Checkbox>
                </CheckboxGroup>
              </div>
              <div>
                <span>选择1/5 </span>
                <Button type="text" size="small">重置</Button>
              </div>
            </div>
            <tt-table
              :titleList="titleList"
              :dataList="dataList"
              :loading="loading"
              :border="false"
            ></tt-table>
          </div>
        </TabPane>
        <TabPane label="同行" name="a1-d" tab="tab-a1">
          <div class="staff-title">
            <h4>流量来源构成</h4>
          </div>
          <div class="content">
            <div class="seek-box">
              <div>
                <CheckboxGroup v-model="fruit">
                  <Checkbox label="访客数"></Checkbox>
                  <Checkbox label="下单买家数"></Checkbox>
                  <Checkbox label="下单转化率"></Checkbox>
                  <Checkbox label="下单金额"></Checkbox>
                  <Checkbox label="支付转化率"></Checkbox>
                  <Checkbox label="支付买家数"></Checkbox>
                  <Checkbox label="支付金额"></Checkbox>
                </CheckboxGroup>
              </div>
              <div>
                <span>选择1/5 </span>
                <Button type="text" size="small">重置</Button>
              </div>
            </div>
            <tt-table
              :titleList="titleList"
              :dataList="dataList"
              :loading="loading"
              :border="false"
            ></tt-table>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import ttTable from '@/components/tt-table/tt-table.vue'
  import expandRow from './expandRow'

  export default {
    name: 'store',
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
        titleList: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              let titleList = [
                {
                  width: 50
                },
                {
                  title: '手淘搜索',
                  key: 'name'
                }
              ]
              let dataList = [
                {
                  name: '手淘搜索'
                }
              ]
              return h(expandRow, {
                props: {
                  titleList: titleList,
                  dataList: dataList
                }
              })
            }
          },
          {
            title: '数据来源',
            key: 'name'
          },
          {
            title: '年龄',
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
        loading: false,
        fruit: []
      }
    },
    created () {
    },
    methods: {},
    components: {
      ttTable,
      expandRow
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .store {
    .seek-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .store-content {
      margin-top: 20px;
      border-top: 1px solid #dcdee2;
      position: relative;

      .seek {
        position: absolute;
        right: 0;
        height: 37px;
        display: flex;
        align-items: center;
        z-index: 2;
      }

      .content {
        .seek-box {
          padding: 20px;
        }
      }
    }

    height: 500px;
  }
</style>
