declare module '*.md' {
  import type { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module 'simplebar-vue'
declare module '@vueform/multiselect'
declare module '@vueform/slider'
declare module 'simple-datatables'
