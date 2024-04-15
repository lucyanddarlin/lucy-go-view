<script setup lang="ts">
import { NLayoutHeader, NSpace } from 'naive-ui'
</script>

<template>
  <NLayoutHeader bordered class="go-layout-header">
    <header class="grid grid-cols-3" :class="{ 'grid-cols-none': false }">
      <!-- left -->
      <div class="header-item justify-start">
        <NSpace>
          <slot name="left" />
        </NSpace>
      </div>
      <!-- center -->
      <div class="header-item justify-center">
        <NSpace>
          <slot name="center" />
        </NSpace>
      </div>
      <!-- right -->
      <div class="header-item justify-end">
        <NSpace>
          <slot name="right" />
          <GoLocaleSelector />
          <GoThemeColorSelector />
          <GoThemeSelector />
        </NSpace>
      </div>
    </header>
  </NLayoutHeader>
</template>

<style lang="scss" scoped>
.go-layout-header {
  .header-item {
    @apply h-60px min-w-520px flex items-center pr-20px pl-60px;
  }
}
</style>
