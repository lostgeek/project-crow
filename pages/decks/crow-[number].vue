<template>
    <NrdbDecks :nrdb_ids="crow_1" />
</template>

<script setup>
const crow_1 = ref([{id: "da83b390-66b8-4f4b-810a-2b65d8834a13", title: "Corp 1"},
{id: "043e3bec-1c6e-4dc9-9dbb-ef0b9f50c9fb", title: "Corp 2"},
{id: "77caa2a2-8a11-4bf6-8356-c33165c39a61", title: "Corp 3"},
{id: "7f01874f-ade2-47ec-aed8-3ca75b45fb40", title: "Corp 4"},
]);
</script>