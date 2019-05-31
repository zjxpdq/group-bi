<template>
  <div class="side-meun">
    <slot></slot>
    <side-menu-item
      :menuList="menuList"
      v-show="!collapsed"
      @on-route="getRouter"
      :menuActiveStetus="menuActiveStetus"
    ></side-menu-item>

    <ul v-show="collapsed" class="minMeun">
      <li v-for="(item, i) of menuList" :key="i">
        <Tooltip
          :content="item.meta.title"
          placement="right"
          v-if="item.children.length <= 1"
          :key="item.name"
        >
          <a @click="getRouter(item.children[0]['name'])">
            <Icon :type="item.meta.icon" size="25"/>
          </a>
        </Tooltip>

        <Dropdown
          placement="right-start"
          @on-click="getRouter"
          v-if="item.children.length > 1"
          :key="item.name"
          transfer-class-name="dropwn"
        >
          <a>
            <Icon :type="item.meta.icon" size="25"/>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="child of item.children" :name="child.name" :key="child.name">
              <span>{{child.meta.title}}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
  import sideMenuItem from './side-menu-item'

  export default {
    name: 'side-meun',
    props: {
      menuList: {
        type: Array,
        default () {
          return []
        }
      },
      collapsed: {
        type: Boolean,
        default: false
      },
      menuActiveStetus: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {}
    },
    created () {
    },
    methods: {
      getRouter (name) {
        this.$emit('on-route', name)
      }
    },
    components: {
      sideMenuItem
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .side-meun {
    ul.minMeun {
      width: 100%;

      li {
        height: 30px;
        margin: 10px 0;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 100%;
        }

        i {
          transition: all .3s;
          color: rgba(255, 255, 255, .7);

          &:hover {
            color: #fff;
          }
        }

        .dropwn {
          margin-left: 10px;
        }
      }
    }
  }
</style>
