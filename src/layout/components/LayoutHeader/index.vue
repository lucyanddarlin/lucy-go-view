<script setup lang="ts">
import { NLayoutHeader, NSpace } from 'naive-ui'
</script>

<template>
  <NLayoutHeader bordered class="go-layout-header">
    <header class="go-layout-header-box" :class="{ 'grid-cols-none': false }">
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
  &-box {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    height: 60px;
    padding: 0 20px 0 60px;
  }
  .header-item {
    @apply flex items-center;
  }
}
</style>
