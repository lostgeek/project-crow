<template>
    <v-tabs
        :class="smAndUp ? 'w-75' : 'w-100'"
        v-model="tab"
        color="primary"
        align-tabs="left"
        >
        <v-tab v-for="deck in nrdb_ids" :key="deck.id" :value="deck.id">
            {{deck.title}}
        </v-tab>
    </v-tabs>
    <v-window 
        :class="smAndUp ? 'w-75' : 'w-100'"
        v-model="tab">
        <v-window-item
            color="primary"
            v-for="deck in nrdb_ids"
            :key="deck.id"
            :value="deck.id">
            <NrdbDeck :nrdb_id="deck.id" />
        </v-window-item>
    </v-window>

</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay();
const props = defineProps(['nrdb_ids']);

const tab = ref(null);
</script>