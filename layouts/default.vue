<template>
  <v-app>
    <v-app-bar flat
      :scroll-behavior="smAndDown ? 'hide' : 'elevate'"
      color="primary">
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
        <div style="cursor: pointer" @click="$router.push('/')">Project CROW</div>
        <v-spacer />

        <div class="hidden-sm-and-down">
        <v-btn variant="text" :active="routeIsDecks()">
          Decklists<v-icon>mdi-menu-down</v-icon>
          <v-menu activator="parent">
            <v-list color="primary">
              <v-list-item
                v-for="(item, index) in decklists"
                :key="index"
                :value="index"
                :to="item.link">
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-btn variant="text" to="/about">About</v-btn>
        </div>

        <v-spacer />
          <v-btn icon @click="toggleDarkMode()">
            <v-icon>
              {{ theme.global.name == 'light' ? 'mdi-brightness-4' : 'mdi-brightness-6' }}
            </v-icon>
            <v-tooltip activator="parent" location="bottom">
              {{ theme.global.name == 'light' ? 'Dark Mode' : 'Light Mode' }}
            </v-tooltip>
          </v-btn>
      </v-container>
    </v-app-bar>

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

function toggleDarkMode() {
    console.log(theme);
    if(theme.value.global.name == 'light') {
        theme.value.global.name = 'dark';
    } else {
        theme.value.global.name = 'light';
    }
}
function routeIsDecks() {
  console.log(router.currentRoute.value.fullPath.startsWith('/decks'));
  return router.currentRoute.value.fullPath.startsWith('/decks');
}
</script>

<script>
export default {
  data: () => ({
    decklists: [
      { link: '/decks/crow-1', title: 'CROW 1 - Valencia vs CtM' },
      { link: '/decks/crow-2', title: 'CROW 2 - Hayley vs Pālanā' },
      { link: '/decks/crow-3', title: 'CROW 3 - 3 different matchups' },
      { link: '/decks/crow-4', title: 'CROW 4 - MaxX vs Precision Design' },
      { link: '/decks/crow-5', title: 'CROW 5 - Arissana vs Ob' },
    ],
  }),
}
</script>
