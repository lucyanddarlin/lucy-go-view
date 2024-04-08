import { StorageEnum } from '@/types/enums/StorageEnum'
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
