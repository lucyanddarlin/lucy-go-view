import { sxzz } from '@sxzz/eslint-config'

export default sxzz(
  [
    {
      rules: {
        'dot-notation': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-vars': 'off',
        'require-await': 'off',
      },
    },
  ],
  { unocss: true },
)
