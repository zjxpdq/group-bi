<template>
  <div class="deal tt-content">
    <Tabs type="card">
      <TabPane label="交易概况">
        <survey></survey>
      </TabPane>
      <TabPane label="交易构成">标签二的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
  import survey from './components/survey'
  export default {
    name: 'deal',
    data () {
      return {}
    },
    created () {
    },
    methods: {},
    components: {
      survey
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .deal {
  }
</style>
