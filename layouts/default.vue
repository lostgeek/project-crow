<template>
  <v-app>
    <v-app-bar flat
      color="primary">
      <v-container class="d-flex align-center">
        <v-avatar
          class="me-4 "
          color="secondary"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>
        <v-icon @click="toggleDarkMode()">{{ theme.global.name == 'light' ? 'mdi-brightness-4' : 'mdi-brightness-6' }}</v-icon>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                ></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = ref(useTheme())

function toggleDarkMode() {
    console.log(theme);
    if(theme.value.global.name == 'light') {
        theme.value.global.name = 'dark';
    } else {
        theme.value.global.name = 'light';
    }
}
</script>

<script>
export default {
    data: () => ({
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
    })
}
</script>
