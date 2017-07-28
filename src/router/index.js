import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Checkout from '@/components/checkout'
import Checkin from '@/components/checkin'
import editOrder from '@/components/editOrder'
import editRoom from '@/components/editRoom'
import manageOrder from '@/components/manageOrder'
import manageRoom from '@/components/manageRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/checkin',
      name: 'Checkin',
      component: Checkin
    },
    {
      path: '/editOrder',
      name: 'editOrder',
      component: editOrder
    },
    {
      path: '/editRoom',
      name: 'editRoom',
      component: editRoom
    },
    {
      path: '/manageOrder',
      name: 'manageOrder',
      component: manageOrder
    },
    {
      path: '/manageRoom',
      name: 'manageRoom',
      component: manageRoom
    }
  ]
})
