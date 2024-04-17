<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  type FormRules,
  NButton,
  NCard,
  NCarousel,
  NCheckbox,
  NCollapseTransition,
  NForm,
  NFormItem,
  NIcon,
  NInput,
} from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { shuffle } from 'lodash'
import { carouselInterval } from '@/constants/design'
import { icon } from '@/plugin'
import { cryptoEncode, setLocalStorage } from '@/utils'
import { StorageEnum } from '@/types/enums/StorageEnum'

interface FormState {
  username: string
  password: string
}

const { PersonOutlineIcon, LockClosedOutlineIcon } = icon.ionicons5
const { t } = useI18n()

// 轮播图
const carouselImgList = ['one', 'two', 'three']
// 背景图
const bgList = ref(['bar_y', 'bar_x', 'line_gradient', 'line', 'funnel', 'heatmap', 'map', 'pie', 'radar'])

const formRef = ref<any>(null)
const loading = ref<boolean>(false)
const autoLogin = ref<boolean>(false)
const show = ref<boolean>(false)
const showBg = ref<boolean>(false)
// 定时器
const shuffleTiming = ref<any>()

const formInline = reactive<FormState>({
  username: 'admin',
  password: '123456',
})

const rules: FormRules = {
  username: {
    required: true,
    message: 'global.form_account',
    trigger: ['input', 'blur'],
  },
  password: {
    required: true,
    message: 'global.form_password',
    trigger: ['input', 'blur'],
  },
}

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 300)

  setTimeout(() => {
    showBg.value = true
  }, 100)

  shuffleBanners()
})

/**
 * 获取图片路径
 */
const getImageUrl = (name: string, folder: string) => {
  return new URL(`../../assets/images/${folder}/${name}.png`, import.meta.url).href
}

/**
 * 打乱轮播图
 */
const shuffleBanners = () => {
  shuffleTiming.value = setInterval(() => {
    bgList.value = shuffle(bgList.value)
  }, carouselInterval)
}

/**
 * 登录点击事件
 */
const handleLogin = async (e: Event) => {
  e.preventDefault()
  await formRef.value.validate(async (errors: any) => {
    loading.value = true
    if (!errors) {
      const { username, password } = formInline
      setLocalStorage(
        StorageEnum.GO_LOGIN_INFO_STORE,
        cryptoEncode(
          JSON.stringify({
            username,
            password,
          }),
        ),
      )
      // TODO: mock
      setTimeout(() => {
        window['$message'].success('login.login_success')
        loading.value = false
      }, 1000)
    } else {
      window['$message'].error('login.login_message')
      loading.value = false
    }
  })
}
</script>

<template>
  <div class="go-login-container h-100vh overflow-hidden go-transition">
    <!-- 背景 -->
    <div class="go-login-container-bg fixed z-0 h-100vh w-100vw flex items-center justify-around">
      <!-- 占位 -->
      <aside class="w-30% !hidden xl:!block" />
      <!-- 右侧轮播图片 -->
      <aside class="w-770px flex-wrap -mr-20px !hidden xl:!flex">
        <transition-group name="list-complete">
          <template v-for="item in bgList" :key="item">
            <div class="list-complete-item">
              <NCollapseTransition :appear="true" :show="showBg">
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
      <div class="mt-100px min-w-500px w-30% !hidden xl:!block">
        <NCarousel autoplay dot-type="line" :interval="Number(carouselInterval)">
          <img
            v-for="(item, i) in carouselImgList"
            :key="i"
            class="mx-0 my-auto block h-60vh"
            :src="getImageUrl(item, 'login')"
          />
        </NCarousel>
      </div>
      <!-- 登录框 -->
      <div class="mx-160px my-0 flex flex-col">
        <div class="w-450px">
          <NCollapseTransition :appear="true" :show="show">
            <NCard class="go-login-card" :title="t('login.desc')">
              <div class="mb-20px h-210px go-flex-center pt-10px">
                <img class="" src="~@/assets/images/login/input.png" />
              </div>
              <NForm ref="formRef" :model="formInline" size="large" label-placement="left" :rules="rules">
                <NFormItem path="username">
                  <NInput
                    v-model:value="formInline.username"
                    type="text"
                    maxlength="16"
                    placeholder="global.form_account"
                    @keydown.enter="handleLogin"
                  >
                    <template #prefix>
                      <NIcon size="18">
                        <PersonOutlineIcon />
                      </NIcon>
                    </template>
                  </NInput>
                </NFormItem>
                <NFormItem path="password">
                  <NInput
                    v-model:value="formInline.password"
                    type="password"
                    maxlength="16"
                    show-password-on="click"
                    placeholder="global.form_password"
                    @keydown.enter="handleLogin"
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
                    <NCheckbox v-model:checked="autoLogin">{{ t('login.form_auto') }}</NCheckbox>
                  </div>
                </NFormItem>
                <NFormItem>
                  <NButton type="primary" size="large" block :loading="loading" @click="handleLogin">
                    {{ t('login.form_button') }}
                  </NButton>
                </NFormItem>
              </NForm>
            </NCard>
          </NCollapseTransition>
        </div>
      </div>
    </div>

    <!-- TODO: Footer -->
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
