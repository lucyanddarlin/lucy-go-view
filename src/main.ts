import { createApp } from 'vue'
import { addCollection } from 'iconify-icon'
import uimIcons from '@iconify/json/json/uim.json'
import lineMdIcons from '@iconify/json/json/line-md.json'
import wiIcons from '@iconify/json/json/wi.json'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import App from './App.vue'
import router, { setupRouter } from './router'

// 引入全局样式
import '@/styles/pages/index.scss'
// 引入动画
import 'animate.css/animate.min.css'
import { GoAppProvider } from './components/GoAppProvider'
import { setupNaive } from './plugin/naive'
import { setupDirectives } from './plugin/directives'
import { setupStore } from './stores'

// 注册图标
addCollection(uimIcons)
addCollection(lineMdIcons)
addCollection(wiIcons)

async function AppInit() {
  const goAppProvider = createApp(GoAppProvider)
  const app = createApp(App)

  // 注册全局常用的 naive-ui 组件
  setupNaive(app)

  // 注册全局自定义指令
  setupDirectives(app)

  // 注册全局自定义组件

  // 挂载状态管理
  setupStore(app)

  // 解决路由守卫, axios 中可以使用 Dialog, Message 等全局组件
  goAppProvider.mount('#appProvider', true)

  // 挂载路由
  setupRouter(app)

  // 路由准备就绪后挂载 App 实例
  await router.isReady()

  // Store 准备就绪后处理主题色

  // 挂载到页面
  app.mount('#app', true)

  // 挂载到 windows
  window['$vue'] = app
}

await AppInit()
