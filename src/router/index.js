import Vue from 'vue'
import VueRouter from 'vue-router'
import RootPage from '@/views/RootPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page1',
    component: RootPage
  },
  {
    path: '/flow1',
    name: 'flow1',
    component: () => import(/* webpackChunkName: "flow1" */ '@/views/flow1/FlowLayout.vue'),
    children: [
      {
        path: '',
        name: 'flow11',
        component: () => import(/* webpackChunkName: "flow1" */ '@/views/flow1/Page1.vue'),
      },
      {
        path: '/flow1/nodes',
        name: 'flow12',
        component: () => import(/* webpackChunkName: "flow1" */ '@/views/flow1/Page2.vue'),
      },
    ],
  },
  {
    path: '/flow2',
    name: 'flow2',
    component: () => import(/* webpackChunkName: "flow2" */ '@/views/flow2/FlowLayout.vue'),
    children: [
      {
        path: '',
        name: 'flow21',
        component: () => import(/* webpackChunkName: "flow2" */ '@/views/flow2/Page1.vue'),
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
