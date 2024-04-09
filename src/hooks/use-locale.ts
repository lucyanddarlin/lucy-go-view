import { dateEnUS, dateZhCN, enUS, zhCN } from 'naive-ui'
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/modules/localeStore'
import { LocaleEnum } from '@/types/enums/StyleEnum'

// 语言切换
export const useLocale = () => {
  const { locale: lo } = useLocaleStore()

  const localeObj = computed(() => {
    return lo === LocaleEnum.ZH
      ? {
          locale: zhCN,
          dateLocale: dateZhCN,
        }
      : {
          locale: enUS,
          dateLocale: dateEnUS,
        }
  })

  return localeObj.value
}
