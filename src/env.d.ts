/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  const component: ReturnType<typeof defineComponent>;
  export default component
}
declare module 'vue3-waterfall-plugin'
type JSONValue = null | boolean | string | number | JSONValue[] | Record<string, JSONValue>