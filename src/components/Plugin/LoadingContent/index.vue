<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'

window['$loading'] = useLoadingBar()
window['$loading'].finish()
</script>

<!-- eslint-disable-next-line vue/valid-template-root -->
<template></template>
