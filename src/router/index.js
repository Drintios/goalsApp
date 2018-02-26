import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Goal from '@/components/Goal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/goal',
      name: 'goal',
      component: Goal,
      children: [
        {
          path: '*',
          name: 'FilterGoal',
          component: Goal
        }
      ]
    }
  ]
})
