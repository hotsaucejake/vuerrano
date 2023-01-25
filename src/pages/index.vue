<route lang="json">
  {
    "path": "/index"
  }
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('index')

useHead({
  title: 'JotSauce',
})
</script>

<template>
  <!-- <NavbarLayout theme="fade"> -->
  <RouterView />
  <!-- </NavbarLayout> -->
</template>
