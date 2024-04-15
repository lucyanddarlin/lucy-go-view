<script setup lang="ts">
import { NA, NButton, NDivider, NH3, NIcon, NModal, NSpace, NText } from 'naive-ui'
import { ref, watch } from 'vue'
import { toRefs, useScroll } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { icon } from '@/plugin'
import { useThemeStore } from '@/stores/modules/themeStore'
import themeColorLogo from '@/assets/images/exception/theme-color.png'
import allColorList from '@/constants/color/designColor.json'
import { loadAsyncComponent } from '@/utils/components'

let splitNumber = 50

const ColorList = loadAsyncComponent(() => import('./components/ColorList.vue'))

const { ColorWandIcon, CloseIcon } = icon.ionicons5

const { appThemeColor, appThemeDetail } = storeToRefs(useThemeStore())
const modalVisible = ref<boolean>(false)
const contentLeftRef = ref<HTMLElement | null>(null)
const colorList = ref(allColorList.slice(0, splitNumber))

const { arrivedState } = useScroll(contentLeftRef, {
  offset: { bottom: 200 },
})
const { bottom } = toRefs(arrivedState)

watch(
  () => bottom.value,
  (newData: boolean) => {
    if (newData && splitNumber <= allColorList.length) {
      splitNumber += 50
      colorList.value = allColorList.slice(0, splitNumber)
    }
  },
)
</script>

<template>
  <!-- Button -->
  <NButton quaternary title="颜色" @click="modalVisible = true">
    <NIcon>
      <ColorWandIcon />
    </NIcon>
  </NButton>
  <!-- Modal -->
  <NModal v-model:show="modalVisible">
    <div
      class="go-theme-select-container relative h-85vh min-w-1000px w-90% flex flex-col overflow-hidden border-rounded-15px px-25px py-20px"
    >
      <!-- Title -->
      <NSpace justify="space-between">
        <NH3 class="m-0">主题色选择</NH3>
        <NIcon size="20" class="cursor-pointer" @click="modalVisible = false">
          <CloseIcon />
        </NIcon>
      </NSpace>
      <NDivider />
      <!-- Content -->
      <div ref="contentLeftRef" class="model-content flex-1 overflow-auto">
        <!-- Left -->
        <div>
          <ColorList :color-list="colorList" />
        </div>
        <!-- Right -->
        <div class="absolute right-50px top-0 h-full w-300px flex items-center justify-end">
          <div class="mr-40px flex flex-col items-center">
            <NText v-if="appThemeDetail" class="color-name">{{ appThemeDetail.name }}</NText>
            <NText v-else class="color-name">中国色</NText>
            <NText v-if="appThemeDetail?.pinyin" class="text-center text-16px font-serif">
              {{ appThemeDetail.pinyin.toUpperCase() }}
            </NText>
            <div
              v-if="appThemeDetail"
              class="select-color mt-20px h-20px w-100px border-rounded-3px"
              :style="{ backgroundColor: appThemeColor }"
            />
          </div>
          <img :src="themeColorLogo" />
        </div>
      </div>
      <!-- Footer -->
      <div class="z-1 text-end">
        中国色列表来源:
        <NA href="http://zhongguose.com" target="_blank">http://zhongguose.com</NA>
      </div>
    </div>
  </NModal>
</template>

<style lang="scss" scoped>
$height: 85vh;

.go-theme-select-container {
  @extend .go-background-filter;
  @include hover-border-color('background-color5');
  .model-content {
    height: calc(#{$height} - 40px - 48px - 36px);
    .color-name {
      @apply font-serif text-80px color-white my-0 mx-auto block w-110px text-center;
      background-position: center top;
      background-repeat: no-repeat;
    }
    .select-color {
      background-image: url('@/assets/images/exception/texture.png');
    }
  }
}
</style>
