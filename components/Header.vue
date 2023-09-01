<template>
    <div class="header h-12
      bg-orange-600 text-zinc-50 dark:bg-orange-700 dark:text-zinc-100 flex-grow-0
        flex flex-row justify-between items-center pl-4 pr-4">
        <div class="font-medium text-2xl">
            Project CROW
        </div>
        <nav class="font-medium text-l gap-x-4 flex flex-row">
            <NuxtLink to="/">Home</NuxtLink>
            <div class="dropdown">
                <a>Decklists</a>
                <div class="dropdown-content flex flex-col gap-y-4 justify-around pl-2 pt-2 pb-2">
                    <NuxtLink to="/decks/crow-1">CROW 1</NuxtLink>
                    <NuxtLink to="/decks/crow-2">CROW 2</NuxtLink>
                    <NuxtLink to="/decks/crow-3">CROW 3</NuxtLink>
                    <NuxtLink to="/decks/crow-4">CROW 4</NuxtLink>
                    <NuxtLink to="/decks/crow-5">CROW 5</NuxtLink>
                </div>
            </div>
            <NuxtLink to="/about">About</NuxtLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .dropdown {
        & .dropdown-content {
            @apply bg-yellow-600;
            position: absolute;
            right: 0;
            top: 3rem;
            min-width: 20rem;

            & * {
                display:block;
            }
        }

        & .dropdown-content {
            visibility: collapse;
            opacity: 0;
            transition: visibility 0s linear 800ms, opacity 500ms;
        }
        &:hover .dropdown-content, .dropdown-content:hover {
            visibility: visible;
            opacity: 1;
            transition: visibility 0s linear 0ms, opacity 0ms;
        }
    }
</style>