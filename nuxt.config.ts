// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    uno: true,
    preflight: true,
    shortcuts: {
      button: 'rounded-md font-sans flex font-medium bg-gray-900 text-lg w-full py-2 text-gray-50 underline-transparent items-center justify-center',
      'button-secondary': 'rounded-md font-sans flex font-medium text-lg w-full text-gray-900 underline-transparent items-center justify-center',
      input: 'rounded-md font-semibold bg-gray-900/10 border-2 border-gray-900/20 mt-2 p-2 placeholder-gray-900/30 transition-all ease-in-out text-gray-50 duration-300 focus:outline-none focus-ring-2 focus:ring-gray-50/60'
    }
  },
  devtools: { enabled: true }
})
