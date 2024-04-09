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

/**
 * 存储本地会话数据
 * @param key
 * @param value
 */
export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('setItem Err', JSON.stringify(error))
  }
}
