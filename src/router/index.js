import Vue from 'vue'
import Router from 'vue-router'

import page1 from '@/components/page1'
import Output from '@/components/Output'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: page1
    },
    {
      path: '/outputs',
      component: Output
    }
  ]
})
