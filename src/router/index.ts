import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/link2',
      name: 'link2',
      component: HomeView
    },
    {
      path: '/link3',
      name: 'link3',
      component: HomeView
    },
    {
      path: '/link4',
      name: 'link4',
      component: HomeView
    }
  ]
})

export default router
