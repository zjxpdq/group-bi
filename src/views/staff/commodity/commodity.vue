<template>
  <div class="commodity">
    <div class="content">
      <h2>商品360</h2>
      <Input prefix="ios-search" placeholder="请输入商品标题、商品ID、商品URL、货号"></Input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'commodity',
    data () {
      return {}
    },
    created () {
    },
    methods: {},
    components: {},
    computed: {}
  }
</script>

<style scoped lang="scss">
  .commodity {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;

    .content {
      h2 {
        text-align: center;
        margin-bottom: 20px;
      }

      width: 50%;
    }
  }
</style>
