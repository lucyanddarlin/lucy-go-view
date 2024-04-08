import { isObject } from 'lodash'

export function isString(v: any): v is string {
  return typeof v === 'string'
}

export function isNumber(v: any): v is number {
  return typeof v === 'number'
}

export function isBoolean(v: any): v is boolean {
  return typeof v === 'boolean'
}

export function isUndefined(v: any): v is undefined {
  return typeof v === 'undefined'
}

export function isNull(v: any): v is null {
  return v === null
}

export function isArray(v: any): v is [] {
  return Array.isArray(v)
}

export function toNumber(number: number | string, toFixedNumber = 2) {
  return isString(number) ? Number.parseFloat(Number.parseFloat(number).toFixed(toFixedNumber)) : number
}

export function toString(str: any) {
  return isNumber(str) ? `${str}` : isObject(str) ? JSON.stringify(str) : str
}
