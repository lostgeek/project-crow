<template>
    <NrdbDecks :nrdb_ids="crow_1" />
</template>

<script setup>
const crow_1 = ref([
    {id: "da83b390-66b8-4f4b-810a-2b65d8834a13", title: "Corp 1"},
    {id: "ef7871d7-e785-40a4-8798-6269e59a094c", title: "Runner 1"},
    {id: "043e3bec-1c6e-4dc9-9dbb-ef0b9f50c9fb", title: "Corp 2"},
    {id: "2f412b02-ebf8-4cd7-a7d0-1b6ef4de1fd5", title: "Runner 2"},
    {id: "77caa2a2-8a11-4bf6-8356-c33165c39a61", title: "Corp 3"},
    {id: "fc0adb6b-4d84-46a9-ba71-7450958b8771", title: "Runner 3"},
    {id: "7f01874f-ade2-47ec-aed8-3ca75b45fb40", title: "Corp 4"},
    {id: "7ffcaea5-85f5-4aa3-9103-7b9dc4655768", title: "Runner 4"},
]);
</script>