import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Shop from '@/pages/shop'
import Course from '@/pages/course'
import Login from '@/components/login'
import Register from '@/components/register'

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
      component: Shop,
      // children:[
      //   { path:'/shop/course',component: Course }
      // ]
    },
    {
      path:'/course/:id',
      name: 'Course',
      component: Course
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name: 'Register',
      component: Register
    }
  ]
})
