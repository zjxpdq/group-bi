<template>
  <div class="main">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="50" v-model="isCollapsed" v-show="!isMobile">
        <side-meun
          :menuList="getMeunList"
          :collapsed="isCollapsed"
          @on-route="putRoute"
          :menuActiveStetus="menuActiveStetus"
        >
          <div class="logo">
            <h2 v-show="!isCollapsed">淘通BI系统</h2>
            <img src="@/assets/images/common/TTgrout.png" alt="淘通BI系统" v-show="isCollapsed">
          </div>
        </side-meun>
      </Sider>
      <min-side-meun
        :isCollapsed="isCollapsed"
        v-if="isMobile"
        @putIsCollapsed="putIsCollapsed"
        :menuList="getMeunList"
        @get-route="putRoute"
      >
      </min-side-meun>
      <Layout>
        <Header class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            type="md-menu"
            size="30"></Icon>
          <header-bar :crumbList="getBreadCrumbList" :isMobile="isMobile"></header-bar>
        </Header>
        <Content>
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import sideMeun from './components/side-meun/side-meun'
  import headerBar from './components/header-bar/header-bar'
  import minSideMeun from './components/min-side-meun/min-side-meun'
  import {mapMutations, mapActions} from 'vuex'

  const {body} = document
  const WIDTH = 992
  export default {
    name: 'mains',
    data () {
      return {
        isCollapsed: false,
        isMobile: null, // 视口宽度（true）为视口小于992px
        menuActiveStetus: {}
      }
    },
    watch: {
      '$route' (newRoute) {
        this.setBreadCrumb(newRoute)
        this.getMeunActive(newRoute)
      }
    },
    created () {
      this.getMeunActive(this.$route)
    },
    methods: {
      ...mapMutations(['setBreadCrumb']),
      ...mapActions(['putMinWindows']),
      collapsedSider () {
        if (this.isMobile) {
          this.isCollapsed = true
        } else {
          this.$refs.side1.toggleCollapse()
        }
      },
      $_isMobile () {
        const rect = body.getBoundingClientRect()
        return rect.width - 1 < WIDTH
      },
      $_resizeHandler () {
        if (!document.hidden) {
          this.isMobile = this.$_isMobile()
          this.putMinWindows(this.isMobile)
          if (this.isMobile) {
            this.isCollapsed = !this.isMobile
          }
        }
      },
      putRoute (name) {
        this.$router.push({name: name})
      },
      getMeunActive (route) {
        let list = route.matched.map(item => item.name)
        let obj = {
          activeName: list[list.length - 1],
          openNames: []
        }
        if (list[0].indexOf('_') > -1) {
          obj.openNames = []
        } else {
          obj.openNames = [list[0]]
        }
        this.menuActiveStetus = obj
      },
      putIsCollapsed (v) {
        this.isCollapsed = v
      }
    },
    beforeMount () {
      window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.$_resizeHandler)
    },
    mounted () {
      this.isMobile = this.$_isMobile()
      this.putMinWindows(this.isMobile)
      if (this.isMobile) {
        this.isCollapsed = !this.isMobile
      }
      this.setBreadCrumb(this.$route)
    },
    computed: {
      getMeunList () {
        return this.$store.getters.menuList
      },
      getBreadCrumbList () {
        return this.$store.state.app.breadCrumbList
      },
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ]
      }
    },
    components: {
      sideMeun,
      headerBar,
      minSideMeun
    }
  }
</script>

<style scoped lang="scss">
  .main {
    height: 100%;

    .ivu-layout {
      height: 100%;
    }

    .menu-icon {
      transition: all .3s;
    }

    .ivu-layout-sider-children {
      .logo {
        height: 49px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3185db;

        img {
          border-radius: 50%;
        }

        h2 {
          font-size: 25px;
          white-space: nowrap;
        }
      }
    }

    .ivu-layout-header {
      line-height: normal;
    }

    .layout-header-bar {
      height: 49px;
      background: #399bff;
      padding: 0 20px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
      display: flex;
      align-items: center;

      .menu-icon {
        color: #000;
      }
    }

    .rotate-icon {
      transform: rotate(-90deg);
    }

    .ivu-layout-content {
      padding: 20px;
      background: #f6f8fa;
    }
  }
</style>
