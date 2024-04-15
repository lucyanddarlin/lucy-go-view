import type { ThemeEnum } from '@/types/enums/StyleEnum'

export interface AppThemeColorType {
  CMYK: number[]
  RGB: number[]
  hex: string
  name: string
  pinyin: string
}

export interface ThemeStateType {
  isDarkTheme: boolean
  themeName: ThemeEnum
  appTheme: string
  appThemeDetail: AppThemeColorType | null
}
