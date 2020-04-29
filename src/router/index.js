import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Problem01 from '@/components/Problems/Problem01'
import Problem02 from '@/components/Problems/Problem02'
import Direction from '@/components/Direction'
import Cv from '@/components/Cv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/problem01',
      name: 'Problem01',
      component: Problem01
    },
    {
      path: '/problem02',
      name: 'Problem02',
      component: Problem02
    },
    {
      path: '/Direction',
      name: 'Direction',
      component: Direction
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv
    }
  ]
})
