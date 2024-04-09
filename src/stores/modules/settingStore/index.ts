import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { getLocalStorage, setLocalStorage } from '@/utils'
import { StorageEnum } from '@/types/enums/StorageEnum'
import { defaultSystemSetting } from '@/constants/settings'
import { SettingStoreEnum, type SettingStoreType } from './SettingStore'

export const useSettingStore = defineStore('useSettingStore', () => {
  const settingObj = reactive<SettingStoreType>(
    getLocalStorage(StorageEnum.GO_SYSTEM_SETTING_STORE) || defaultSystemSetting,
  )

  const isPackageOenCategoryHide = computed(() => settingObj[SettingStoreEnum.HIDE_PACKAGE_ONE_CATEGORY])
  const isChangeLocaleReload = computed(() => settingObj[SettingStoreEnum.CHANGE_LOCALE_RELOAD])
  const isAsideAllCollapsed = computed(() => settingObj[SettingStoreEnum.ASIDE_ALL_COLLAPSED])
  const chartMoveDistance = computed(() => settingObj[SettingStoreEnum.CHART_MOVE_DISTANCE])
  const chartAlignRange = computed(() => settingObj[SettingStoreEnum.CHART_ALIGN_RANGE])
  const chartToolsStatus = computed(() => settingObj[SettingStoreEnum.CHART_TOOLS_STATUS])
  const isChartToolHide = computed(() => settingObj[SettingStoreEnum.CHART_TOOLS_STATUS_HIDE])

  /**
   * 更改设置
   * @param key
   * @param value
   */
  function setSettingItem<T extends keyof SettingStoreType, K extends SettingStoreType[T]>(key: T, value: K): void {
    settingObj[key] = value
    setLocalStorage(StorageEnum.GO_SYSTEM_SETTING_STORE, settingObj)
  }

  return {
    isPackageOenCategoryHide,
    isChangeLocaleReload,
    isAsideAllCollapsed,
    chartMoveDistance,
    chartAlignRange,
    chartToolsStatus,
    isChartToolHide,
    setSettingItem,
  }
})
