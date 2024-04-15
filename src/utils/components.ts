import { type AsyncComponentLoader, defineAsyncComponent } from 'vue'
import GoLoading from '@/components/GoLoading/index.vue'

export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) => {
  return defineAsyncComponent({
    loader,
    loadingComponent: GoLoading,
    delay: 20,
  })
}
