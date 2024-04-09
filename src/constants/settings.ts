import { SettingStoreEnum, type SettingStoreType, ToolsStatusEnum } from '@/stores/modules/settingStore/type'

// 默认用户配置项
export const defaultSystemSetting: SettingStoreType = {
  [SettingStoreEnum.HIDE_PACKAGE_ONE_CATEGORY]: true,
  [SettingStoreEnum.CHANGE_LOCALE_RELOAD]: false,
  [SettingStoreEnum.ASIDE_ALL_COLLAPSED]: true,
  [SettingStoreEnum.CHART_MOVE_DISTANCE]: 5,
  [SettingStoreEnum.CHART_ALIGN_RANGE]: 10,
  [SettingStoreEnum.CHART_TOOLS_STATUS]: ToolsStatusEnum.ASIDE,
  [SettingStoreEnum.CHART_TOOLS_STATUS_HIDE]: false,
}
