<template>
  <div class="header-bar">
    <div class="bar-left">
      <Breadcrumb>
        <BreadcrumbItem
          v-for="(item, i) of getCrumbList"
          :key="item.name"
          :to="i === 0 || i === (getCrumbList.length - 1) ? '' : item"
        >
          <Icon :type="item.meta.icon" v-if="item.meta.icon"></Icon>
          <span>{{item.meta.title}}</span>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="bar-right">
      <fullscreen v-model="isFullscreen" v-if="!isMobile"></fullscreen>
      <user :isMobile="isMobile"></user>
    </div>
  </div>
</template>

<script>
  import fullscreen from './fullscreen'
  import user from './user'

  export default {
    name: 'header-bar',
    data () {
      return {
        isFullscreen: false
      }
    },
    props: {
      crumbList: {
        type: Array,
        default () {
          return []
        }
      },
      isMobile: {
        type: Boolean,
        default: false
      }
    },
    watch: {},
    created () {
    },
    methods: {},
    components: {
      fullscreen,
      user
    },
    computed: {
      getCrumbList () {
        let list = this.crumbList
        if (list[0]) {
          if (list[0]['name'].indexOf('_') > -1) {
            return [list[1]]
          } else {
            return list
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-bar {
    width: 100%;

    .bar-left {
      padding-left: 20px;
      height: 40px;
      float: left;
      display: flex;
      align-items: center;

      .ivu-breadcrumb {
        span {
          color: #fff;
        }
      }
    }

    .bar-right {
      float: right;
      display: flex;
      align-items: center;
    }
  }
</style>
