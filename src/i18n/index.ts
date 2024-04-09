import { createI18n } from 'vue-i18n'
import { StorageEnum } from '@/types/enums/StorageEnum'
import { getLocalStorage } from '@/utils'
import { LocaleEnum } from '@/types/enums/StyleEnum'
import { locale } from '@/constants/design'
import zh from './zh'
import en from './en'
import type { LangListType, LangStateType } from '@/stores/modules/localeStore'

// 当前语言
const localeStorage: LangStateType = getLocalStorage(StorageEnum.GO_LOCALE_STORE)

// 语言数组
export const langList: LangListType[] = [
  {
    label: '中文',
    key: LocaleEnum.ZH,
  },
  {
    label: 'English',
    key: LocaleEnum.EN,
  },
]

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localeStorage?.locale || locale,
  fallbackLocale: localeStorage?.locale || locale,
  messages: {
    [LocaleEnum.ZH]: zh,
    [LocaleEnum.EN]: en,
  },
})

export default i18n
