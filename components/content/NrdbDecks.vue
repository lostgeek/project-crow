<template>
    <v-tabs
        v-model="tab"
        color="primary"
        align-tabs="left"
        >
        <v-tab v-for="deck in nrdb_ids" :key="deck.id" :value="deck.id">
            {{deck.title}}
        </v-tab>
    </v-tabs>
    <v-window 
        class="deckTab"
        v-model="tab">
        <v-window-item
            color="primary"
            v-for="deck in nrdb_ids"
            :key="deck.id"
            :value="deck.id">
            <NrdbDeck :nrdb_id="deck.nrdb_id">
                <template #description>
                    <slot :name="deck.id" />
                </template>
            </NrdbDeck>
        </v-window-item>
    </v-window>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay();
const props = defineProps(['nrdb_ids']);

const tab = ref(null);

const decks = props.nrdb_ids
    .map(({nrdb_id}) => nrdb_id)
    .forEach((nrdb_id) => useNrdbDeck(nrdb_id));
</script>

<style lang="scss" scoped>
.deckTab {
    width: fit-content;
}
</style>