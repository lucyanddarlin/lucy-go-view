import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useThemeStore } from '@/stores/modules/themeStore'
import { alpha, lighten } from '@/utils/style'
import { borderRadius } from '@/constants/design'
import type { GlobalThemeOverrides } from 'naive-ui'

export const useThemeOverride = () => {
  const { isDarkTheme, appThemeColor } = storeToRefs(useThemeStore())

  const themeOverride = computed<GlobalThemeOverrides>(() => {
    // 通用
    const common: GlobalThemeOverrides['common'] = {
      primaryColor: appThemeColor.value,
      primaryColorHover: lighten(alpha(appThemeColor.value), 0.1),
      primaryColorPressed: lighten(alpha(appThemeColor.value), 0.1),
      primaryColorSuppl: appThemeColor.value,
      borderRadius,
    }

    const lightTheme: GlobalThemeOverrides = {
      common,
    }

    const darkTheme: GlobalThemeOverrides = {
      common,
      LoadingBar: {
        colorLoading: appThemeColor.value,
      },
    }

    return isDarkTheme.value ? darkTheme : lightTheme
  })

  return themeOverride
}
