<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NCard, NCarousel, NCheckbox, NCollapseTransition, NForm, NFormItem, NIcon, NInput } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { carouselInterval } from '@/constants/design'
import { icon } from '@/plugin'

const { PersonOutlineIcon, LockClosedOutlineIcon } = icon.ionicons5

const { t } = useI18n()

// 轮播图
const carouselImgList = ['one', 'two', 'three']

// 背景图
const bgList = ref(['bar_y', 'bar_x', 'line_gradient', 'line', 'funnel', 'heatmap', 'map', 'pie', 'radar'])

/**
 * 获取图片路径
 */
const getImageUrl = (name: string, folder: string) => {
  return new URL(`../../assets/images/${folder}/${name}.png`, import.meta.url).href
}
</script>

<template>
  <div class="go-login-container h-100vh overflow-hidden go-transition">
    <!-- 背景 -->
    <div class="go-login-container-bg fixed z-0 h-100vh w-100vw flex items-center justify-around">
      <!-- 占位 -->
      <aside class="w-30%" />
      <!-- 右侧轮播图片 -->
      <aside class="w-770px flex flex-wrap -mr-20px">
        <transition-group name="list-complete">
          <template v-for="item in bgList" :key="item">
            <div class="list-complete-item">
              <NCollapseTransition :appear="true" :show="true">
                <img
                  class="mr-20px mt-20px w-230px border-rounded-16px opacity-90"
                  :src="getImageUrl(item, 'chart/charts')"
                  alt="chart"
                />
              </NCollapseTransition>
            </div>
          </template>
        </transition-group>
      </aside>
    </div>
    <!-- Layout 头部 -->
    <LayoutHeader />

    <!-- 登录内容 -->
    <div class="h-100vh w-100vw flex items-center justify-around -mt-60px">
      <!-- 轮播图 -->
      <div class="mt-100px min-w-500px w-30%">
        <NCarousel autoplay dot-type="line" :interval="carouselInterval">
          <img
            v-for="(item, i) in carouselImgList"
            :key="i"
            class="mx-0 my-auto block h-60vh"
            :src="getImageUrl(item, 'login')"
          />
        </NCarousel>
      </div>
      <!-- 登录框 -->
      <div class="mx-0 my-160px flex flex-col">
        <div class="w-450px">
          <NCollapseTransition :appear="true" :show="true">
            <NCard class="go-login-card" title="login.desc">
              <div class="mb-20px h-210px go-flex-center pt-10px">
                <img class="" src="~@/assets/images/login/input.png" />
              </div>
              <NForm ref="formRef" size="large" label-placement="left">
                <NFormItem path="username">
                  <NInput type="text" maxlength="16" placeholder="global.form_account" @keydown.enter="() => {}">
                    <template #prefix>
                      <NIcon size="18">
                        <PersonOutlineIcon />
                      </NIcon>
                    </template>
                  </NInput>
                </NFormItem>
                <NFormItem path="password">
                  <NInput
                    type="password"
                    maxlength="16"
                    show-password-on="click"
                    placeholder="global.form_password"
                    @keydown.enter="() => {}"
                  >
                    <template #prefix>
                      <NIcon size="18">
                        <LockClosedOutlineIcon />
                      </NIcon>
                    </template>
                  </NInput>
                </NFormItem>
                <NFormItem>
                  <div class="flex justify-between">
                    <NCheckbox>{{ 'login.form_auto' }}</NCheckbox>
                  </div>
                </NFormItem>
                <NFormItem>
                  <NButton type="primary" size="large" :loading="false" block @click="() => {}">
                    {{ 'login.form_button' }}
                  </NButton>
                </NFormItem>
              </NForm>
            </NCard>
          </NCollapseTransition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.go-login-container {
  &-bg {
    background: url('@/assets/images/login/login-bg.png') no-repeat 0 -120px;
  }
}

.go-login-card {
  @extend .go-background-filter;
  @include fetch-bg-color('filter-color');
  box-shadow: 0 0 20px 5px rgba(40, 40, 40, 0.3);
}
</style>
