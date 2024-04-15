<script setup lang="ts">
import { NButton, NDropdown, NIcon } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { icon } from '@/plugin'
import { useLocaleStore } from '@/stores/modules/localeStore'
import { localeList } from '@/i18n/index'
import type { LocaleEnum } from '@/types/enums/StyleEnum'
import type { DropdownMixedOption } from 'naive-ui/es/dropdown/src/interface'

const { LanguageIcon } = icon.ionicons5
const { locale } = useI18n()
const { setLocale } = useLocaleStore()

const localeOptions = computed<DropdownMixedOption[]>(() =>
  localeList.map((localeItem) => {
    return { ...localeItem, disabled: locale.value === localeItem.key }
  }),
)

/**
 * 切换选中的语言
 */
const handleChangeLocale = (nextLocale: LocaleEnum) => {
  locale.value = nextLocale
  setLocale(nextLocale)
}
</script>

<template>
  <NDropdown trigger="hover" show-arrow :options="localeOptions as DropdownMixedOption[]" @select="handleChangeLocale">
    <NButton quaternary>
      <NIcon size="20" :depth="1">
        <LanguageIcon />
      </NIcon>
    </NButton>
  </NDropdown>
</template>
