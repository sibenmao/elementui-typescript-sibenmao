import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '_dashboard',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    children: [
      {
        path: 'tone_page',
        name: 'tone_page',
        component: () => import('@/views/manager-test/test-one/index.vue')
      },
      {
        path: 'ttwo_page',
        name: 'ttwo_page',
        component: () => import('@/views/manager-test/test-two/index.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
