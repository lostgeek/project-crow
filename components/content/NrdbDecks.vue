<template>
    <v-tabs
    v-model="tab"
    color="primary"
    align-tabs="left"
    >
        <v-tab v-for="deck in nrdb_ids" :value="deck.id">
            {{deck.title}}
        </v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item
        v-for="deck in nrdb_ids"
        :key="deck.id"
        :value="deck.id">
            <NrdbDeck :nrdb_id="deck.id" />
        </v-window-item>
    </v-window>

</template>

<script setup>
const props = defineProps(['nrdb_ids']);

const tab = ref(null);
</script>