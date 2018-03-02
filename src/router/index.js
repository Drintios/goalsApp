import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Goal from '@/components/Goal'
import NewGoal from '@/components/NewGoal'

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
    },
    {
      path: '/new-goal',
      name: 'new-goal',
      component: NewGoal
    }
  ]
})
