import { PageEnum } from '@/types/enums/PageEnum'
import type { RouteRecordRaw } from 'vue-router'

// 引入路径
const importPath = {
  [PageEnum.BASE_HOME_NAME]: () => import('@/views/HomeView.vue'),
}

export const projectRoutes: RouteRecordRaw = {
  path: PageEnum.BASE_HOME,
  name: PageEnum.BASE_HOME_NAME,
  component: importPath[PageEnum.BASE_HOME_NAME],
  meta: {
    title: '项目',
    icon: true,
  },
}
