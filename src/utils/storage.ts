import { JsonParse } from './common'

/**
 * 获取本地会话数据
 * @param key
 */
export const getLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key)

  try {
    return item ? JsonParse(item) : item
  } catch {
    return item
  }
}
