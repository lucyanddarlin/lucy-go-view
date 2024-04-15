<script setup lang="ts">
import { useThemeStore } from '@/stores/modules/themeStore'
import type { AppThemeColorType } from '@/stores/modules/themeStore/type'

const { color } = defineProps<{
  color: AppThemeColorType
}>()

const { setAppColor } = useThemeStore()
</script>

<template>
  <div class="color-list-item" span="12 1000:6 1400:4 1800:4 2200:2" @click="setAppColor(color)">
    <NSpace>
      <div class="h-40px w-8px border-rounded-2px" :style="{ backgroundColor: color.hex }" />
      <NSpace vertical>
        <NSpace>
          <span :style="{ color: color.hex }">{{ color.name }}</span>
          <span class="text-8px">{{ color.pinyin.toUpperCase() }}</span>
        </NSpace>
        <NText>
          {{ color.hex }}
          <NDivider vertical />
          {{ `rgb(${color.RGB[0]}, ${color.RGB[1]}, ${color.RGB[2]})` }}
        </NText>
      </NSpace>
    </NSpace>
  </div>
</template>

<style lang="scss" scoped>
.color-list-item {
  @apply relative mb-10px mr-10px min-w-300px flex cursor-pointer border-1px border-transparent border-rounded-5px border-solid px-20px py-10px go-transition-fast;
  &:hover {
    @include hover-border-color('background-color5');
  }
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    border-radius: 5px;
    @extend .go-background-filter-shallow;
    backdrop-filter: none;
  }
}
</style>
