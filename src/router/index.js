import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/Layout'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import("@/components/HelloWorld")
        }
      ]
    },
    {
      path: '/login',
      name: "login",
      component: () => import("@/views/login/Login")
    }
  ]
})
