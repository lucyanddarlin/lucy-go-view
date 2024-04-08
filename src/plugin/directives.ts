import VueLazyLoad from 'vue3-lazyload'
import { getErrorImg } from '@/utils'
import type { App } from 'vue'

/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives(app: App) {
  app.use(VueLazyLoad, {
    error: getErrorImg(),
  })
}
