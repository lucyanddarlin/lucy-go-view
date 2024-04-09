import { PageEnum } from '@/types/enums/PageEnum'
import { loginCheck } from '@/utils/router'
import type { Router } from 'vue-router'

export function createRouterGuard(router: Router) {
  // 前置
  router.beforeEach(async (to, _form, next) => {
    if (!window.route) {
      window.route = { params: {} }
    }
    Object.assign(window.route.params, to.query)

    const loading = window['$loading']
    loading && loading.start()

    const isErrorPage = router.getRoutes().findIndex((item) => item.name === to.name)

    if (isErrorPage === -1) {
      next({ name: PageEnum.ERROR_PAGE_NAME_403 })
    }

    if (!loginCheck()) {
      if (to.name === PageEnum.BASE_LOGIN_NAME) {
        next()
      }
      next({ name: PageEnum.BASE_LOGIN_NAME })
    }

    next()
  })

  // 后置
  router.afterEach((to) => {
    const loading = window['$loading']
    document.title = (to?.meta?.title as string) || document.title
    loading && loading.finish()
  })

  // 错误
  router.onError((error) => {
    console.error('路由错误', error)
  })
}
