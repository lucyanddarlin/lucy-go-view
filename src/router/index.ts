import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { createRouterGuard } from './router-guard'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫

  createRouterGuard(router)
}

export default router
