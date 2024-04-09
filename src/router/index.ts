import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { PageEnum } from '@/types/enums/PageEnum'
import modules from '@/router/modules'
import HomeView from '../views/HomeView.vue'
import { createRouterGuard } from './router-guard'
import { LoginRoute } from './base'
import type { App } from 'vue'

const RootRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    component: HomeView,
    meta: {
      title: 'Root',
    },
    children: [modules.projectRoutes],
  },
]

const routes: any[] = [LoginRoute, ...RootRoutes]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  strict: true,
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuard(router)
}

export default router
