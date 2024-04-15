<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
import { useLocale } from './hooks/use-locale'
import { useDarkTheme } from './hooks/use-dark-theme'
import { useThemeOverride } from './hooks/use-theme-override'

// 全局语言
const { locale, dateLocale } = useLocale()

// 主题
const darkTheme = useDarkTheme()
const themeOverrides = useThemeOverride()
</script>

<template>
  <NConfigProvider :theme="darkTheme" :locale="locale" :date-locale="dateLocale" :theme-overrides="themeOverrides">
    <GoAppProvider>
      <I18n />
      <RouterView />
    </GoAppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
