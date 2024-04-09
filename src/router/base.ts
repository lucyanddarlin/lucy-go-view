import { PageEnum } from '@/types/enums/PageEnum'
import type { RouteRecordRaw } from 'vue-router'

export const LoginRoute: RouteRecordRaw = {
  path: PageEnum.BASE_LOGIN,
  name: PageEnum.BASE_LOGIN_NAME,
  component: () => import('@/views/Login/index.vue'),
}
