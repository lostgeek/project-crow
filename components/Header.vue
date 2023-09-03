<template>
  <v-app-bar app density="compact">
    <v-app-bar-title>Project CROW</v-app-bar-title>

    <v-btn v-for="link in links" :key="link" :text="link" variant="text"></v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup>
  const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
  ]
</script>