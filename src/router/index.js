import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Shop from '@/pages/shop'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
