<template>
  <div class="bg-stone-50 dark:bg-stone-800  flex flex-col h-full">
    <Header />
    <div class="prose dark:prose-invert flex-grow p-4 ">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
