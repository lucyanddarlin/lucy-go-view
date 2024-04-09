import { createI18n } from 'vue-i18n'
import { StorageEnum } from '@/types/enums/StorageEnum'
import { getLocalStorage } from '@/utils'
import { LangEnum } from '@/types/enums/StyleEnum'
import { lang } from '@/constants/design'
import zh from './zh'
import en from './en'
import type { LangListType, LangStateType } from '@/stores/modules/langStore'

// 当前语言
const langStorage: LangStateType = getLocalStorage(StorageEnum.GO_LANG_STORE)

// 语言数组
export const langList: LangListType[] = [
  {
    label: '中文',
    key: LangEnum.ZH,
  },
  {
    label: 'English',
    key: LangEnum.EN,
  },
]

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: langStorage.lang || lang,
  fallbackLocale: langStorage.lang || lang,
  messages: {
    [LangEnum.ZH]: zh,
    [LangEnum.EN]: en,
  },
})

export default i18n
