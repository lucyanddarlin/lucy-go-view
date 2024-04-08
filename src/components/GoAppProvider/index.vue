<script setup lang="ts">
import {
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
} from 'naive-ui'
</script>

<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <DialogContent />
      <LoadingContent />
      <NNotificationProvider>
        <NMessageProvider>
          <MessageContent />
          <slot />
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>
