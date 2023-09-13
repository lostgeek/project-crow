<template>
  <v-app>
    <v-app-bar flat
      class="elevation-2"
      :scroll-behavior="smAndDown ? 'hide' : 'elevate'"
      color="primary"
      image="/banner-optimized.svg"
      >
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer" />
        <div class="text-h5 d-flex flex-row" style="cursor: pointer" @click="$router.push('/')">
          <v-img src="/crow.svg" class="logo">
            <template #sources>
              <source srcset="/crow-dark.png" />
            </template>
          </v-img>
          Project CROW
        </div>

        <v-spacer />

        <v-btn
          class="hidden-sm-and-down"
          variant="text"
          :active="routeIsDecks()">
          Decklists<v-icon>mdi-menu-down</v-icon>
          <v-menu activator="parent">
            <v-list color="primary">
              <v-list-item
                v-for="(item, index) in decklists"
                :key="index"
                :value="index"
                :to="item.link"
                :title="item.title"
                :subtitle="item.subtitle"
                />
            </v-list>
          </v-menu>
        </v-btn>
        <v-btn
          class="hidden-sm-and-down"
          variant="text"
          to="/about">
          About
        </v-btn>

        <v-spacer class="hidden-sm-and-down" />

        <v-btn class="hidden-sm-and-down"
          icon @click="toggleDarkMode()">
          <v-icon>
            {{ theme.global.name == 'light' ? 'mdi-brightness-4' : 'mdi-brightness-6' }}
          </v-icon>
          <v-tooltip activator="parent" location="bottom">
            {{ theme.global.name == 'light' ? 'Dark Mode' : 'Light Mode' }}
          </v-tooltip>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      temporary>
      <v-list
        color="primary" nav>
        <v-list-subheader>Navigation</v-list-subheader>
        <v-list-item
          prepend-icon="mdi-home"
          to="/"
          title="Main" />
        <v-list-group value="Decklists">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file-document-multiple"
              title="Decklists" />
          </template>
          <v-list-item
            v-for="(item, index) in decklists"
            :key="index"
            :value="index"
            :to="item.link"
            :title="item.title"
            :subtitle="item.subtitle"
            />
        </v-list-group>
        <v-list-item
          prepend-icon="mdi-information"
          to="/about"
          title="About" />

        <v-list-subheader>Settings</v-list-subheader>
        <v-list-item
          :prepend-icon="theme.global.name == 'light' ? 'mdi-brightness-4' : 'mdi-brightness-6'"
          @click="toggleDarkMode()"
          :title="theme.global.name == 'light' ? 'Dark Mode' : 'Light Mode'" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme, useDisplay } from 'vuetify'
const theme = ref(useTheme())
const { smAndDown } = useDisplay();
const router = useRouter();
const drawer = ref(null);

function toggleDarkMode() {
    // console.log(theme);
    if(theme.value.global.name == 'light') {
        theme.value.global.name = 'dark';
    } else {
        theme.value.global.name = 'light';
    }
}
function routeIsDecks() {
  // console.log(router.currentRoute.value.fullPath.startsWith('/decks'));
  return router.currentRoute.value.fullPath.startsWith('/decks');
}
</script>

<script>
export default {
  data: () => ({
    decklists: [
      { link: '/decks/crow-1', title: 'CROW 1', subtitle:'Valencia vs CtM' },
      { link: '/decks/crow-2', title: 'CROW 2', subtitle:'Hayley vs Pālanā' },
      { link: '/decks/crow-3', title: 'CROW 3', subtitle:'3 different matchups' },
      { link: '/decks/crow-4', title: 'CROW 4', subtitle:'MaxX vs Precision Design' },
      { link: '/decks/crow-5', title: 'CROW 5', subtitle:'Arissana vs Ob' },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.logo {
  width: 2.5rem;
  margin-right: 1rem;
}
</style>