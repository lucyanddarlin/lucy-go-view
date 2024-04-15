import { darkTheme } from 'naive-ui'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/modules/themeStore'

// 返回是否是暗黑主题
export const useDarkTheme = () => {
  const { isDarkTheme } = storeToRefs(useThemeStore())

  return computed(() => (isDarkTheme.value ? darkTheme : undefined))
}
