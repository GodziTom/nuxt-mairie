// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/collectivites': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/collectivites/index').default>>>>
    }
    '/api/filters': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/filters/index').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}