// https://nuxt.com/docs/api/configuration/nuxt-config

import colors from 'vuetify/lib/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@invictus.codes/nuxt-vuetify',
    '@vueuse/nuxt',
  ],
  vuetify: {
    vuetifyOptions: {
      display: {
        mobileBreakpoint: 'sm',
      },
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: colors.amber.darken2,
              secondary: colors.blueGrey.darken2,
              link: colors.amber.base,
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: colors.amber.lighten1,
              secondary: colors.blueGrey.lighten1,
              link: colors.amber.darken2,
              background: '#212121',
            },
          },
        },
      },
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
      useVuetifyLabs: true,
    }
  },
  content: {
    contentHead: false,
  },
  css: [
    // SCSS file in the project
    "~/assets/style/main.scss",
    '@mdi/font/css/materialdesignicons.css',
  ],
})
