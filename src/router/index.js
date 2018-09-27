import Vue from 'vue'
import Router from 'vue-router'
import TypeAhead from '@/components/TypeAhead'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TypeAhead',
      component: TypeAhead
    }
  ]
})
