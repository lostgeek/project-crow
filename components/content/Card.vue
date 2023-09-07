<template>
    <a class="nrdbCard">{{linkText()}}
    <v-overlay
        activator="parent"
        location-strategy="connected"
        :scrim="false">
        <v-card
            :width="smAndUp ? '50%' : '100%'"
            :min-width="smAndUp ? 500 : '100%'"
            max-width="100%"
            color="secondary">
            <v-progress-circular
                v-if="Object.keys(card).length == 0"
                class="mx-auto"
                color="primary"
                indeterminate
                />
            <v-row
                class="pa-2" no-gutters
                v-if="Object.keys(card).length > 0">
                <v-col cols="7" class="pa-0 ma-0">
                    <v-card-title>
                        {{card.title}}
                    </v-card-title>
                    <v-card-subtitle>
                        <p class="mb-0"><b class="text-capitalize">{{card.type_code}}</b><b v-if="card.keywords">:</b> {{card.keywords}}</p>
                    </v-card-subtitle>
                    <v-card-text class="text-justify">
                        {{card.text}}
                    </v-card-text>
                </v-col>
                <v-col class="pa-0 ma-0 align-center">
                    <v-img
                        class="rounded-lg h-100"
                        max-height="300"
                        height="300"
                        :src="imageUrl" />
                </v-col>
            </v-row>
        </v-card>
    </v-overlay>
    </a>
</template>

<script setup>
import { useFuse } from '@vueuse/integrations/useFuse'
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay();

const props = defineProps(['name', 'text', 'fullname']);
const nrdbData = useState('nrdbData');
const cards = computed(function() {
    if(nrdbData.value) {
        return nrdbData.value.data;
    } else {
        return null;
    }
});

const titles = computed(function() {
    if (cards.value) {
        return cards.value.map((c) => c.stripped_title);
    } else {
        return null;
    }
});

const { results } = useFuse(props.name, titles);
const card = computed(function() {
    if(results.value.length > 0) {
        return cards.value[results.value[0].refIndex];
    } else {
        return {};
    }
});

const imageUrl = computed(function() {
    if(nrdbData.value) {
        return nrdbData.value.imageUrlTemplate.replace('{code}', card.value.code);
    } else {
        return "";
    }
});

function linkText() {
    if(props.text) {
        return props.text;
    } else {
        if(props.fullname && card.value.title) {
            return card.value.title;
        } else {
            return props.name;
        }
    }
}
</script>

<style lang="scss">
.nrdbCard {
    color: rgb(var(--v-theme-secondary));
    cursor: pointer;
}
</style>