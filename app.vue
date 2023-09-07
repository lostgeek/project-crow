<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
var title = "Project CROW";
var description = "A series of mini-campaigns aiming to provide an introductory experience for beginners, who have played System Gateway and System Update 2021 by Null Signal Games.";

useHead({
  title: title,
});
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: 'crow.png',
});

const {data, pending, error, refresh}  = await useFetch('https://netrunnerdb.com/api/2.0/public/cards');
if (error.value) {
  console.log("Error while fetching NRDB: ", error.value)
}
const nrdbData = useState('nrdbData', () => data);
</script>

<style lang="scss">
  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  .v-expansion-panels {
    margin-bottom: 1rem;
  }
</style>