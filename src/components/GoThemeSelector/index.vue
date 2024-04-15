<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/modules/themeStore'
import { icon } from '@/plugin'
import { setHtmlTheme } from '@/utils/style'

const { MoonIcon, SunnyIcon } = icon.ionicons5

const { isDarkTheme } = storeToRefs(useThemeStore())
</script>

<template>
  <NButton quaternary title="主题" @click="setHtmlTheme()">
    <NIcon size="20" :depth="1">
      <MoonIcon v-if="isDarkTheme" />
      <SunnyIcon v-else />
    </NIcon>
  </NButton>
</template>
