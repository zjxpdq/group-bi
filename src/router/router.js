import Main from '@/components/main/main.vue'

/**
 * _: 只有一级菜单 component: Main 的 name 前面必须带上 _ 然后 children 的那么值为 不带 _ 的
 * hideInMenu: (false) 设置为 true 在左侧菜单不会显示
 * */
export default [
  {
    path: '/',
    name: '_home',
    meta: {
      title: '整体看板',
      icon: 'md-home'
    },
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '整体看板'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/sell',
    name: 'sell',
    meta: {
      title: '销售分析',
      icon: 'ios-podium'
    },
    component: Main,
    children: [
      {
        path: 'daily',
        name: 'daily',
        meta: {
          title: '运营日报'
        },
        component: () => import('@/views/sell/daily/daily.vue')
      },
      {
        path: 'monthly',
        name: 'monthly',
        meta: {
          title: '运营月报'
        },
        component: () => import('@/views/sell/monthly/monthly.vue')
      }
    ]
  },
  {
    path: '/staff',
    name: 'staff',
    meta: {
      title: '生意参谋',
      icon: 'ios-person-add'
    },
    component: Main,
    children: [
      {
        path: 'warRoom',
        name: 'warRoom',
        meta: {
          title: '作战室'
        },
        component: () => import('@/views/staff/war-room/war-room.vue')
      },
      {
        path: 'flow',
        name: 'flow',
        meta: {
          title: '流量'
        },
        component: () => import('@/views/staff/flow/flow.vue')
      },
      {
        path: 'commodity',
        name: 'commodity',
        meta: {
          title: '商品'
        },
        component: () => import('@/views/staff/commodity/commodity.vue')
      },
      {
        path: 'deal',
        name: 'deal',
        meta: {
          title: '交易'
        },
        component: () => import('@/views/staff/deal/deal.vue')
      },
      {
        path: 'substance',
        name: 'substance',
        meta: {
          title: '内容'
        },
        component: () => import('@/views/staff/substance/substance.vue')
      },
      {
        path: 'serve',
        name: 'serve',
        meta: {
          title: '服务'
        },
        component: () => import('@/views/staff/serve/serve.vue')
      },
      {
        path: 'market',
        name: 'market',
        meta: {
          title: '营销'
        },
        component: () => import('@/views/staff/market/market.vue')
      }
    ]
  }
  // {
  //   path: '/plan',
  //   name: 'plan',
  //   meta: {
  //     title: '计划分析',
  //     icon: 'ios-podium'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'history',
  //       name: 'history',
  //       meta: {
  //         title: '历史库存'
  //       },
  //       component: () => import('@/views/plan/history/history.vue')
  //     },
  //     {
  //       path: 'order',
  //       name: 'order',
  //       meta: {
  //         title: '订单分析'
  //       },
  //       component: () => import('@/views/plan/order/order.vue')
  //     },
  //           {
  //       path: 'turnover',
  //       name: 'turnover',
  //       meta: {
  //         title: '订单周转'
  //       },
  //       component: () => import('@/views/plan/turnover/turnover.vue')
  //     },
  //           {
  //       path: 'mars',
  //       name: 'mars',
  //       meta: {
  //         title: '玛氏下单'
  //       },
  //       component: () => import('@/views/plan/mars/mars.vue')
  //     },
  //           {
  //       path: 'data',
  //       name: 'data',
  //       meta: {
  //         title: '基础数据'
  //       },
  //       component: () => import('@/views/plan/data/data.vue')
  //     }
  //   ]
  // }
]
