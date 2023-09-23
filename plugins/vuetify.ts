import { createVuetify } from "vuetify";
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.amber.darken2,
                    primarytext: colors.amber.darken3,
                    secondary: colors.blueGrey.darken2,
                    secondarytext: colors.blueGrey.darken3,
                    secondarybg: colors.blueGrey.lighten5,
                    link: colors.amber.base,
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.amber.lighten1,
                    primarytext: colors.amber.lighten1,
                    secondary: colors.blueGrey.lighten1,
                    secondarytext: colors.blueGrey.lighten2,
                    secondarybg: colors.blueGrey.darken4,
                    link: colors.amber.darken2,
                    background: '#212121',
                },
            },
        },
    },
    display: {
        mobileBreakpoint: 'sm',
    },
    icons: {
        defaultSet: 'mdi',
    },
  });

  app.vueApp.use(vuetify);
});