import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Output from '@/components/Output'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/outputs',
      component: Output
    }
  ]
})
