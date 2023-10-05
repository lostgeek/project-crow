// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: true,
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) =>
                // @ts-ignore
                config.plugins.push(vuetify())
            );
        },
        ['@nuxtjs/google-fonts', {
            families: {
                'Josefin+Sans': true,
                'Play': true,
            },
            preload: true,
        }],
    ],
    css: [
        // SCSS file in the project
        "vuetify/styles",
        "~/assets/style/main.scss",
        '@mdi/font/css/materialdesignicons.css',
    ],
    build: {
        transpile: ["vuetify"],
    },
    content: {
        documentDriven: true,
        contentHead: false,
    },
})
