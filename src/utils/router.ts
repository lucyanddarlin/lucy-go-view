import { exposedDialogEnvProps } from 'naive-ui/es/dialog/src/DialogEnvironment'
import { StorageEnum } from '@/types/enums/StorageEnum'
import router from '@/router'
import { PageEnum } from '@/types/enums/PageEnum'
import { getLocalStorage } from './storage'
import { isEmpty } from './common'
import { cryptoDecode } from './crypto'

/**
 * 判断是否登录
 */
export const loginCheck = (): boolean => {
  try {
    const info = getLocalStorage(StorageEnum.GO_LOGIN_INFO_STORE)

    if (isEmpty(info)) return false

    const decodeInfo = cryptoDecode(info)

    if (isEmpty(decodeInfo)) return false

    return true
  } catch {
    return false
  }
}

/**
 * 根据名称跳转路由
 * @param pageName
 * @param isReplace
 * @param windowOpen
 */
export const routeToPageByName = (pageName: string, isReplace?: boolean, windowOpen?: boolean) => {
  if (windowOpen) {
    const path = fetchPathByName(pageName, 'href')
    openNewTabWindow(path)
    return
  }
  if (isReplace) {
    router.replace({ name: pageName })
    return
  }
  router.push({ name: pageName })
}

/**
 * 根据路由名称获取路由信息
 * @param pageName
 * @param key
 */
export const fetchPathByName = (pageName: string, key?: string) => {
  try {
    const pathData = router.resolve({
      name: pageName,
    })
    return key ? (pathData as any)[key] : pathData
  } catch (error) {
    window['$message'].warning(`查询路由信息失败, 请联系管理员: ${JSON.stringify(error)}`)
  }
}

/**
 * 新开页面
 * @param url
 */
export const openNewTabWindow = (url: string) => {
  return window.open(url, '_blank')
}

export const reloadRoutePage = () => {
  routeToPageByName(PageEnum.RELOAD_NAME)
}
