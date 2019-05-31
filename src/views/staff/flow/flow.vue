<template>
  <div class="flow tt-content">
    <Tabs type="card" name="tab" value="b">
      <TabPane label="店铺来源" name="a" tab="tab">
        <store></store>
      </TabPane>
      <TabPane label="商品来源" name="b" tab="tab">
        <commodity></commodity>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import * as get from '@/api/v1'
  import store from './components/store'
  import commodity from './components/commodity'

  export default {
    name: 'flow',
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      git () {
        get.list.lists().then(res => {
          console.log(res)
        })
      },
      change () {
        console.log('a')
      }
    },
    components: {
      store,
      commodity
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .flow {

  }
</style>
