<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider>
    <GoAppProvider>
      <I18n />
      <RouterView />
    </GoAppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
