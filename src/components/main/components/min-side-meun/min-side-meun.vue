<template>
  <div class="min-side-meun">
    <Drawer
      placement="left"
      :closable="false"
      v-model="collapsed"
      width="200"
      class-name="drawer-meun"
      @on-close="putIsCollapsed">
      <p slot="header">淘通BI系统</p>
      <side-menu-item :menuList="menuList" @on-route="getRouteName"></side-menu-item>
    </Drawer>
  </div>
</template>

<script>
  import sideMenuItem from '../side-meun/side-menu-item'

  export default {
    name: 'min-side-meun',
    data () {
      return {
        collapsed: null
      }
    },
    props: {
      isCollapsed: {
        type: Boolean,
        default: false
      },
      menuList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    watch: {
      'isCollapsed' (to) {
        this.collapsed = to
      }
    },
    created () {
    },
    methods: {
      putIsCollapsed () {
        this.$emit('putIsCollapsed', this.collapsed)
      },
      getRouteName (v) {
        this.collapsed = false
        this.putIsCollapsed()
        this.$emit('get-route', v)
      }
    },
    components: {
      sideMenuItem
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .min-side-meun {
  }
</style>
