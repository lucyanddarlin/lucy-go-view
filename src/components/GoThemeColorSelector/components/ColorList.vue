<script setup lang="ts">
import appColorRecommendList from '@/constants/color/designColorRecommend.json'
import type { AppThemeColorType } from '@/stores/modules/themeStore/type'
import type { PropType } from 'vue'

const { colorList } = defineProps<{
  colorList: PropType<AppThemeColorType[]>
}>()
</script>

<template>
  <div class="color-list mr-200px flex flex-wrap">
    <!-- Recommend color list -->
    <ColorListItem v-for="(color, index) in appColorRecommendList" :key="index" :color="color" />
    <NDivider />
    <!-- All color list -->
    <div class="color-list-item"></div>
    <ColorListItem v-for="(color, index) in colorList" :key="index" :color="color" />
  </div>
</template>

<style lang="scss" scoped>
.color-list {
}
</style>
