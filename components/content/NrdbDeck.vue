<template>
    <span v-html="rawHtmlDescription"></span>
</template>

<script setup>
const props = defineProps(['nrdb_id']);

const {data, pending, error, refresh}  = await useFetch(`https://netrunnerdb.com/api/2.0/public/decklist/${props.nrdb_id}`);
if (error.value) {
  console.log("Error while fetching NRDB: ", error.value)
}

const rawHtmlDescription = computed(function() {
    if(data.value) {
        return data.value.data[0].description;
    } else {
        return "";
    }
});
</script>