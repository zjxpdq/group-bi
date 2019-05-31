<template>
  <div class="analyze">
    <div class="analyze-top">
      <div  class="staff-title"><h4>当前进行中活动</h4></div>
      <div class="ana-content ana-con-top">
        <Row :gutter="14">
          <Col :xs="{span: '24'}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 8}" :xl="{span: 6}">
            <div class="row-list red-bgc">
              <div class="row-list-top">
                <span>2019天猫吃货节</span>
                <span>活动中</span>
              </div>
              <div class="row-list-bottom">
                <p><span>预热时间：</span><span>2019-05-13至2019-5-17</span></p>
                <p><span>活动时间：</span><span>2019-05-13至2019-5-17</span></p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="analyze-content">
      <div class="staff-title">
        <h4>当前进行中活动</h4>
        <Dropdown>
          <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div class="ana-content content-list">
        <div class="con-title">
          <ul>
            <li><i class="No1"></i><span>未开始</span></li>
            <li><i class="No2"></i><span>预热中</span></li>
            <li><i class="No3"></i><span>定金期</span></li>
            <li><i class="No4"></i><span>活动中</span></li>
            <li><i class="No5"></i><span>尾款期</span></li>
            <li><i class="No6"></i><span>已结束</span></li>
          </ul>
          <div class="con-year">
            <span><Icon type="ios-arrow-back"/></span>
            <span>2019</span>
            <span><Icon type="ios-arrow-forward"/></span>
          </div>
        </div>
        <div class="con-month-list">
          <Row class-name="month-list">
            <Col :xs="{span: '12'}" :sm="{span: 8}" :md="{span: 6}" :lg="{span: 4}" :xl="{span: 4}">
              <div class="content">
                <div class="title">
                  <span>1月</span>
                </div>
                <ul>
                  <li class="bdl2 No1">
                    <i class="mark-left No6"></i>
                    <i class="mark-right No6">跨</i>
                    <Poptip trigger="hover" placement="top" :transfer="true">
                      <span>天猫新年大特惠第三波</span>
                      <div class="api" slot="content">
                        <p>天猫新年大特惠</p>
                        <p>活动类型：天猫</p>
                        <p>活动时间：2019-01-24~2019-01-26</p>
                      </div>
                    </Poptip>
                  </li>
                  <li class="bdl2 No2">
                    <Poptip trigger="hover" placement="top" :transfer="true">
                      <span>天猫新年</span>
                      <div class="api" slot="content">
                        <p>天猫新年大特惠</p>
                        <p>活动类型：天猫</p>
                        <p>活动时间：2019-01-24~2019-01-26</p>
                      </div>
                    </Poptip>
                  </li>
                  <li class="bdl2 No3">
                    <Poptip trigger="hover" placement="top" :transfer="true">
                      <span>天猫新年大特惠第三波</span>
                      <div class="api" slot="content">
                        <p>天猫新年大特惠</p>
                        <p>活动类型：天猫</p>
                        <p>活动时间：2019-01-24~2019-01-26</p>
                      </div>
                    </Poptip>
                  </li>
                  <li class="bdl2 No4">
                    <Poptip trigger="hover" placement="top" :transfer="true">
                      <span>天猫新年大特惠第三波</span>
                      <div class="api" slot="content">
                        <p>天猫新年大特惠</p>
                        <p>活动类型：天猫</p>
                        <p>活动时间：2019-01-24~2019-01-26</p>
                      </div>
                    </Poptip>
                  </li>
                  <li class="bdl2 No5">
                    <Poptip trigger="hover" placement="top" :transfer="true">
                      <span>天猫新年大特惠第三波</span>
                      <div class="api" slot="content">
                        <p>天猫新年大特惠</p>
                        <p>活动类型：天猫</p>
                        <p>活动时间：2019-01-24~2019-01-26</p>
                      </div>
                    </Poptip>
                  </li>
                  <li class="bdl2 No6">
                    <Poptip trigger="hover" placement="top" :transfer="true">
                      <span>天猫新年大特惠第三波</span>
                      <div class="api" slot="content">
                        <p>天猫新年大特惠</p>
                        <p>活动类型：天猫</p>
                        <p>活动时间：2019-01-24~2019-01-26</p>
                      </div>
                    </Poptip>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="analyze-bottom">
      <div  class="staff-title"><h4>活动列表</h4></div>
      <div class="btm-list ana-content">
        <div class="search-box">
          <div>
            <div class="sea-list">
              <span>活动类型：</span>
              <RadioGroup>
                <Radio label="所有活动"></Radio>
                <Radio label="淘宝"></Radio>
                <Radio label="天猫"></Radio>
                <Radio label="聚划算"></Radio>
                <Radio label="自定义"></Radio>
              </RadioGroup>
            </div>
            <div class="sea-list">
              <span>活动状态：</span>
              <RadioGroup>
                <Radio label="所有"></Radio>
                <Radio label="未开始"></Radio>
                <Radio label="预热中"></Radio>
                <Radio label="进行中"></Radio>
                <Radio label="定金期"></Radio>
                <Radio label="尾款期"></Radio>
                <Radio label="已结束"></Radio>
                <Radio label="已失效"></Radio>
              </RadioGroup>
            </div>
            <div class="sea-list">
              <span>活动时间：</span>
              <RadioGroup>
                <Radio label="所有"></Radio>
                <Radio label="最近30天"></Radio>
                <Radio label="最近半年"></Radio>
                <Radio label="最近一年"></Radio>
              </RadioGroup>
            </div>
            <div class="sea-list">
              <span>活动季节：</span>
              <RadioGroup>
                <Radio label="所有"></Radio>
                <Radio label="春季（3-5）"></Radio>
                <Radio label="夏季（6-8）"></Radio>
                <Radio label="秋季（9-11）"></Radio>
                <Radio label="冬季（12-2）"></Radio>
              </RadioGroup>
            </div>
            <div class="sea-list">
              <span>活动周期：</span>
              <RadioGroup>
                <Radio label="所有"></Radio>
                <Radio label="短（1天）"></Radio>
                <Radio label="中（<30天）"></Radio>
                <Radio label="长（>30天）"></Radio>
              </RadioGroup>
            </div>
          </div>
          <div class="input-box">
            <Input v-model="value" prefix="ios-search" placeholder="请输入活动名称" style="max-width: 200px"/>
          </div>
        </div>
        <tt-table
          :titleList="titleList"
          :dataList="dataList"
          :loading="loading"
          :isPage="true"></tt-table>
      </div>
    </div>
  </div>
</template>

<script>
  import ttTable from '@/components/tt-table/tt-table.vue'

  export default {
    name: 'analyze',
    data () {
      return {
        value: '',
        titleList: [
          {
            title: '排名',
            key: 'a'
          },
          {
            title: '活动名称',
            render: (h, params) => {
              // console.log(params.row.name)
              let colors = {
                '1': '#D0D0D0',
                '2': '#FFC52C',
                '3': '#FF8F30',
                '4': '#F23030',
                '5': '#EA2979',
                '6': '#2062E6'
              }

              return h('div', {
                style: {
                  width: '100%'
                }
              }, [
                h('span', {
                  style: {
                    padding: '1px 3px',
                    marginRight: '3px',
                    color: '#fff',
                    backgroundColor: colors['6']
                  }
                }, '进行中'),
                h('span', params.row.name)
              ])
            }
          },
          {
            title: '活动类型'
          },
          {
            title: '预热期'
          },
          {
            title: '活动期'
          },
          {
            title: '累计支付金额'
          },
          {
            title: '累计引流访客数'
          }
        ],
        dataList: [
          {
            a: '1',
            name: '开始开始开始',
            type: '淘宝'
          },
                    {
            a: '1',
            name: '开始开始开始',
            type: '淘宝'
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
  .analyze {
    .ana-content {
      padding: 20px;
    }

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

    .analyze-top {
      .row-list {
        width: 100%;
        height: 110px;
        color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 20px;

        .row-list-top {
          width: 100%;

          span {
            &:nth-child(1) {
              font-size: 14px;
              font-weight: bold;
              float: left;
            }

            &:nth-child(2) {
              float: right;
              display: inline-block;
              background: rgba(255, 255, 255, .6);
              color: #F52548;
              padding-left: 5px;
              padding-right: 5px;
            }
          }
        }

        .row-list-bottom {
          p {
            span {
              line-height: 1.5;

              &:nth-child(1) {
                font-size: 10px;
                opacity: .6;
                margin-right: 10px;
              }
            }
          }
        }
      }

      .red-bgc {
        background-image: linear-gradient(to right, #FF6A6A, #F71D3F);
      }
    }

    .analyze-content {
      .staff-title {
        justify-content: space-between;
      }

      .content-list {

        .con-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          ul {
            width: 50%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            li {
              display: flex;
              align-items: center;

              i {
                display: inline-block;
                width: 10px;
                height: 10px;
                margin-right: 5px;
              }

              float: left;
            }
          }

          .con-year {
            font-size: 36px;

            span {
              cursor: pointer;

              &:nth-child(2) {
                cursor: default;
              }
            }

            i {
              margin-bottom: 5px;
            }
          }
        }

        .con-month-list {

          .ivu-row.month-list {
            margin-bottom: 10px;

            .ivu-col {
              border: 1px solid #ECF0F6;
              border-collapse: collapse;

              .title {
                height: 50px;
                font-size: 16px;
                line-height: 50px;
                padding-left: 20px;
                border-bottom: 1px solid #ECF0F6;
              }

              ul {
                padding-bottom: 20px;

                li {
                  margin-top: 4px;
                  height: 30px;
                  position: relative;

                  .ivu-poptip {
                    width: 100%;
                  }

                  span {
                    display: inline-block;
                    line-height: 30px;
                    padding-left: 5px;
                    width: 96%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }

                  i {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    position: absolute;

                    &.mark-left {
                      left: 0;
                      top: 0;
                      border-radius: 0px 0px 16px 0px;
                    }

                    &.mark-right {
                      top: 0;
                      right: 0;
                      font-size: 8px;
                      color: #fff;
                      border-radius: 0px 0px 0px 16px;
                    }
                  }


                  &.bdl2 {
                    border-left: 2px solid;
                  }

                  &.No1 {
                    background-color: rgba(208, 208, 208, .1);
                    border-color: #D0D0D0;
                  }

                  &.No2 {
                    background-color: rgba(255, 197, 44, .1);
                    border-color: #FFC52C;
                  }

                  &.No3 {
                    background-color: rgba(255, 143, 48, .1);
                    border-color: #FF8F30;
                  }

                  &.No4 {
                    background-color: rgba(242, 48, 48, .1);
                    border-color: #F23030;
                  }

                  &.No5 {
                    background-color: rgba(234, 41, 121, .1);
                    border-color: #EA2979;
                  }

                  &.No6 {
                    background-color: rgba(32, 98, 230, .1);
                    border-color: #2062E6;
                  }
                }
              }
            }
          }
        }
      }
    }

    .analyze-bottom {
      .btm-list {
        .search-box {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 10px;

          .sea-list {
            margin-bottom: 10px;

            span {
              color: #999999;
              margin-right: 10px;
            }

            .ivu-radio-wrapper {
              width: 7em;
            }
          }
        }
      }
    }
  }
</style>
