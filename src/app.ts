import { createApp as createClientApp } from 'vue'

import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import Vuerrano from './Vuerrano.vue'
import './styles'

import { createApi } from '/@src/composable/useApi'

export type VuerranoContext = Awaited<ReturnType<typeof createApp>>
export type VuerranoPlugin = (vuerrano: VuerranoContext) => void | Promise<void>

const plugins = import.meta.glob<{ default: VuerranoPlugin }>('./plugins/*.ts', {
  eager: true,
})

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VuerranoPlugin) {
  return plugin
}

export async function createApp() {
  const app = createClientApp(Vuerrano)
  const router = createRouter()
  const api = createApi()

  const head = createHead()
  app.use(head)

  const pinia = createPinia()
  app.use(pinia)

  const vuerrano = {
    app,
    api,
    router,
    head,
    pinia,
  }

  app.provide('vuerrano', vuerrano)

  for (const path in plugins) {
    try {
      const { default: plugin } = plugins[path]
      await plugin(vuerrano)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(vuerrano.router)

  return vuerrano
}
