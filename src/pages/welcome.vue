<route lang="json">
  {
    "path": "/"
  }
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

// import { useDarkmode } from '/@src/stores/darkmode'

// type TabId = 'elements' | 'components' | 'forms' | 'plugins'
// const activeTab = ref<TabId>('elements')
// const darkmode = useDarkmode()

useHead({
  title: 'JotSauce',
})
</script>

<template>
  <div>hello welcome</div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
</style>
