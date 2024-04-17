import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { defaultTheme } from '@/constants/design'
import { ThemeEnum } from '@/types/enums/StyleEnum'
import { getLocalStorage, setLocalStorage } from '@/utils'
import { StorageEnum } from '@/types/enums/StorageEnum'
import type { AppThemeColorType, ThemeStateType } from './type'

const { isDarkTheme: darkTheme, appTheme, appThemeDetail: themeDetail } = defaultTheme

export const useThemeStore = defineStore('useThemeStore', () => {
  const themeObj = reactive<ThemeStateType>(
    getLocalStorage(StorageEnum.GO_DESIGN_STORE) || {
      // 是否暗黑
      isDarkTheme: darkTheme,
      // 主题名称
      themeName: darkTheme ? ThemeEnum.DARK : ThemeEnum.LIGHT,
      // 主题色
      appTheme,
      appThemeDetail: themeDetail,
    },
  )

  const isDarkTheme = computed(() => themeObj.isDarkTheme)
  const themeName = computed(() => themeObj.themeName)
  const appThemeColor = computed(() => themeObj.appTheme)
  const appThemeDetail = computed(() => themeObj.appThemeDetail)

  /**
   * 切换主题
   */
  function setTheme(nextThemeName?: ThemeEnum) {
    if (nextThemeName) {
      themeObj.themeName = nextThemeName
      themeObj.isDarkTheme = nextThemeName === ThemeEnum.DARK ? true : false
    } else {
      themeObj.isDarkTheme = !themeObj.isDarkTheme
      themeObj.themeName = themeObj.isDarkTheme ? ThemeEnum.DARK : ThemeEnum.LIGHT
    }
    setLocalStorage(StorageEnum.GO_DESIGN_STORE, themeObj)
  }

  // 修改颜色
  function setAppColor(color: AppThemeColorType) {
    themeObj.appTheme = color.hex
    themeObj.appThemeDetail = color
    setLocalStorage(StorageEnum.GO_DESIGN_STORE, themeObj)
  }

  return {
    isDarkTheme,
    themeName,
    appThemeColor,
    appThemeDetail,
    setTheme,
    setAppColor,
  }
})
