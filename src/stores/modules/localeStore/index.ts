import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { getLocalStorage, reloadRoutePage, setLocalStorage } from '@/utils'
import { StorageEnum } from '@/types/enums/StorageEnum'
import { locale as lo } from '@/constants/design'
import { useSettingStore } from '../settingStore'
import type { LocaleEnum } from '@/types/enums/StyleEnum'
import type { DropdownMixedOption } from 'naive-ui/es/dropdown/src/interface'

export interface LocaleStateType {
  // 当前语言
  locale: LocaleEnum
}

export interface LocaleListType {
  label: string
  key: LocaleEnum
}

export const useLocaleStore = defineStore('useLocaleStore', () => {
  const { isChangeLocaleReload } = useSettingStore()

  const localeObj = reactive<LocaleStateType>(getLocalStorage(StorageEnum.GO_LOCALE_STORE) || { locale: lo })

  const locale = computed<LocaleEnum>(() => {
    return localeObj.locale
  })

  /**
   * 切换多语言
   * @param nextLocale
   */
  function setLocale(nextLocale: LocaleEnum) {
    if (locale.value === nextLocale) return

    localeObj.locale = nextLocale

    setLocalStorage(StorageEnum.GO_LOCALE_STORE, localeObj)

    if (isChangeLocaleReload) {
      reloadRoutePage()
    }
  }

  return {
    locale,
    setLocale,
  }
})
