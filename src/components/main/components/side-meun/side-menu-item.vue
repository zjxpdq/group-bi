<template>
  <Menu
    theme="dark"
    :active-name="menuActiveStetus.activeName"
    :open-names="menuActiveStetus.openNames"
    width="auto"
    @on-select="getRouter"
  >
    <template v-for="item of menuList">
      <MenuItem v-if="item.children.length <= 1" :name="item.children[0].name" :key="item.name">
        <!--          <img :src="item.meta.icon" :alt="item.meta.title" :key="item.name + '1'">-->
        <Icon :type="item.meta.icon" :key="item.name + '1'"/>
        <span :key="item.name + '2'">{{item.meta.title}}</span>
      </MenuItem>
      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
        <template slot="title">
          <!--            <img :src="item.meta.icon" :alt="item.meta.title">-->
          <Icon :type="item.meta.icon"/>
          <span>{{item.meta.title}}</span>
        </template>
        <MenuItem v-for="child of item.children" :key="child.name" :name="child.name">
          <span>{{child.meta.title}}</span>
        </MenuItem>
      </Submenu>

    </template>
  </Menu>
</template>

<script>
  export default {
    name: 'side-menu-item',
    data () {
      return {}
    },
    props: {
      menuList: {
        type: Array,
        default () {
          return []
        }
      },
      menuActiveStetus: {
        type: Object,
        default () {
          return {}
        }
      },
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    created () {
    },
    methods: {
      getRouter (v) {
        this.$emit('on-route', v)
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="scss">
  .side-menu-item {
    .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
      color: #fff;
    }
  }
</style>
