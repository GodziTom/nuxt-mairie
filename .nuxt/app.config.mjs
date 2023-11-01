
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/tom/DEV/nuxt-mairie/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "014699aa-bb89-4911-a2f8-147fb9e574ac"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
