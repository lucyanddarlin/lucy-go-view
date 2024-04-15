import { storeToRefs } from 'pinia'
import Color from 'color'
import { useThemeStore } from '@/stores/modules/themeStore'
import type { ThemeEnum } from '@/types/enums/StyleEnum'

/**
 * 修改主题色
 */
export const setHtmlTheme = (nextThemeName?: ThemeEnum) => {
  const e = window.document.documentElement
  const { themeName } = storeToRefs(useThemeStore())
  const { setTheme } = useThemeStore()

  setTheme(nextThemeName)

  if (nextThemeName) {
    e.dataset.theme = nextThemeName
    return
  } else {
    e.dataset.theme = themeName.value
  }
}

export const alpha = (color: string, alpha: number = 1): string => {
  return Color(color).alpha(alpha).toString()
}

export const fade = (color: string, fade: number): string => {
  return Color(color).fade(fade).toString()
}

export const lighten = (color: string, concentration: number): string => {
  return Color(color).lighten(concentration).toString()
}

export const darken = (color: string, concentration: number): string => {
  return Color(color).darken(concentration).toString()
}
