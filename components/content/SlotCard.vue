<template>
    <a class="nrdbCard"><slot /><v-overlay
        activator="parent"
        location-strategy="connected"
        :width="smAndUp ? '600' : '100%'"
        :scrim="false">
        <v-card
            class="w-100"
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
                <v-col class="pa-0 ma-0 align-center d-flex justify-center">
                    <img
                        class="rounded-lg"
                        :width="smAndUp ? 200 : 150"
                        :src="imageUrl" />
                </v-col>
            </v-row>
        </v-card>
    </v-overlay>
    </a>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay();

const props = defineProps(['code']);
const cards = useState('cards');
const imageUrlTemplate = useState('imageUrlTemplate');

const card = computed(function() {
    if(props.code) {
        return cards.value.find((c) => c.code == props.code);
    } else {
        return {};
    }
});

const imageUrl = computed(function() {
    if(cards.value) {
        return imageUrlTemplate.value.replace('{code}', card.value.code);
    } else {
        return "";
    }
});
</script>

<style lang="scss">
.nrdbCard {
    color: rgb(var(--v-theme-secondarytext));
    cursor: pointer;
}
</style>