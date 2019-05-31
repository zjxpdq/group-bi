<template>
  <div class="index">
    <map-line :lineStyle="{height: '400px', width: '100%'}" :lineData="newData"></map-line>

    <Tabs value="name1" @on-click="onClick">
      <TabPane label="标签一" name="name1">
        <Table border :columns="columns1" :data="data1"></Table>
      </TabPane>
      <TabPane label="标签二" name="name2">
        <Table border :columns="columns2" :data="data2"></Table>
      </TabPane>
      <TabPane label="标签三" name="name3">
        <Table border :columns="columns3" :data="data3"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import mapLine from '@/components/echarts/mapLine'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        columns2: [
          {
            title: 'Name1',
            key: 'name'
          }
        ],
        data2: [
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
        lineData: {
          xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        },
        lineData1: {
          xAxis: ['33', '22', '11', '55', '77', '67', '77'],
          series: [{
            data: [1213, 123, 1, 12, 455, 212, 112],
            type: 'line',
            smooth: true
          }]
        },
        lineData2: {
          xAxis: ['1', '2', '3', '4', '5', '6', '7'],
          series: [{
            data: [12, 1, 18, 22, 55, 11, 112],
            type: 'line',
            smooth: true
          }]
        }
      }
    },
    created () {
      this.newData = this.lineData
    },
    methods: {
      onClick (v) {
        switch (v) {
          case 'name1':
            this.newData = this.lineData
            break
          case 'name2':
            this.newData = this.lineData1
            break
          case 'name3':
            this.newData = this.lineData2
            break
        }
      }
    },
    components: {
      mapLine
    }
  }
</script>

<style scoped lang="scss">
  .index {
    height: 100px;
    width: 100%;
  }
</style>
