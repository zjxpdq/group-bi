<template>
  <div class="tt-content war-room">
    <Tabs type="card" value="name1">
      <TabPane label="活动分析">
        <analyze></analyze>
      </TabPane>
      <TabPane label="活动对比" name="name1">
        <contrast></contrast>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import analyze from './components/analyze'
  import contrast from './components/contrast'

  export default {
    name: 'war-room',
    data () {
      return {}
    },
    created () {
    },
    methods: {},
    components: {
      analyze, contrast
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .war-room {
    margin-top: 0;
    padding: 10px;
  }
</style>
