<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
import { useLocale } from './hooks/use-locale'

// 全局语言
const { locale, dateLocale } = useLocale()
</script>

<template>
  <NConfigProvider :locale="locale" :date-locale="dateLocale">
    <GoAppProvider>
      <I18n />
      <RouterView />
    </GoAppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
