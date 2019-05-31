<template>
  <div class="user">
    <div class="user-name" v-if="!isMobile"><span>广州-技术</span></div>
    <div class="user-logo">
      <Dropdown trigger="click" placement="bottom-end">
        <a href="javascript:void(0)">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="">
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {}
    },
    props: {
      isMobile: {
        type: Boolean,
        default: false
      }
    },
    created () {
    },
    methods: {},
    components: {},
    computed: {}
  }
</script>

<style scoped lang="scss">
  .user {
    display: flex;
    align-items: center;

    .user-name {
      padding: 0 20px;
      color: #fff;
    }

    .user-logo {
      display: flex;
      align-items: center;

      .ivu-dropdown-rel {
        a {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            margin-right: 5px;
          }
        }
      }

    }
  }
</style>
