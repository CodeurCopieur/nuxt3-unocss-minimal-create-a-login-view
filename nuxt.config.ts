// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    uno: true,
    preflight: true,
    shortcuts: {
      button: 'rounded-md font-sans flex font-medium bg-gray-900 text-lg w-full py-2 text-gray-50 underline-transparent items-center justify-center',
      'button-secondary': 'rounded-md font-sans flex font-medium text-lg w-full text-gray-900 underline-transparent items-center justify-center'
    }
  },
  devtools: { enabled: true }
})
