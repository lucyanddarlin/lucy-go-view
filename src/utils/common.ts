import { isEmpty as Empty } from 'ramda'
import { excludeParseEventKeyList, excludeParseEventValueList } from '@/types/enums/EventEnum'
import Image_404 from '../assets/images/exception/image-404.png'

/**
 * 获取 404 图片
 */
export const getErrorImg = () => {
  return Image_404
}

export const evalFn = (fn: string) => {
  const Fun = Function // 一个变量指向Function，防止前端编译工具报错
  return new Fun(`return ${fn}`)()
}

/**
 * Json 反序列化, 支持函数和 undefined
 * @param data
 */
export const JsonParse = (data: string) => {
  return JSON.parse(data, (k, v) => {
    // 过滤函数字符串
    if (excludeParseEventKeyList.includes(k)) {
      return v
    }
    // 过滤函数表达式
    if (typeof v === 'string') {
      const someValue = excludeParseEventValueList.some((excludeValue) => v.indexOf(excludeValue) > 1)
      if (someValue) return someValue
    }

    // 函数函数值
    if (typeof v === 'string' && v.includes && (v.includes('function') || v.includes('=>'))) {
      return evalFn(`(function(){return ${v}})()`)
    } else if (typeof v === 'string' && v.includes && v.includes('return')) {
      const baseLeftIndex = v.indexOf('(')
      if (baseLeftIndex > -1) {
        const newFn = `function ${v.slice(Math.max(0, baseLeftIndex))}`
        return evalFn(`(function(){return ${newFn}})()`)
      }
    }

    return v
  })
}

/**
 * 判断是否为空
 * @param val
 */
export const isEmpty = (val: any): boolean => {
  return !val || Empty(val)
}
