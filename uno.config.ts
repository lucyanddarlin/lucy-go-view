import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [transformerDirectives()],
  shortcuts: {
    'go-transition': 'transition duration-400',
    'go-transition-fast': 'transition duration-200',
    'go-flex-center': 'flex justify-center items-center text-center',
    'go-flex-items-center': 'flex items-center text-center',
    'go-absolute-center': 'absolute top-50% left-50% transform-translate-y-50% transform-translate-x-50%',
  },
})
