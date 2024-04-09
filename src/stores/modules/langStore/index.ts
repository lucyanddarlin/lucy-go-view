import type { LangEnum } from '@/types/enums/StyleEnum'

export interface LangStateType {
  // 当前语言
  lang: LangEnum
}

export interface LangListType {
  label: string
  key: LangEnum
}
