import {defineNuxtConfig} from "@nuxt/bridge";

export default defineNuxtConfig({
  ssr:true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'My Nuxt Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is an awesome description of my Nuxt app',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  bridge: {
    vite: true,
    nitro: true
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: []
});