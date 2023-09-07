<template>
    <a class="nrdbCard">{{props.text ? props.text : card.title}}
    <v-overlay
        activator="parent"
        location-strategy="connected"
        :scrim="false"
    >
        <v-card
            color="primary">
            <v-row>
                <v-col cols="8" class="pl-2 pt-2 ma-0">
                    <v-card-title>
                        {{card.title}}
                    </v-card-title>
                    <v-card-subtitle>
                        <b class="text-capitalize">{{card.type_code}}</b><b v-if="card.keywords">:</b> {{card.keywords}}
                    </v-card-subtitle>
                    <v-card-text>
                        {{card.text}}
                    </v-card-text>
                </v-col>
                <v-col cols="4" class="bg-red align-center pt-2 pr-2 ma-0">
                    <v-img
                        :src="imageUrl" />
                </v-col>
            </v-row>
        </v-card>
    </v-overlay>
    </a>
</template>

<script setup>
import { useFuse } from '@vueuse/integrations/useFuse'

const props = defineProps(['name', 'text']);
const nrdbData = useState('nrdbData');
const cards = ref(nrdbData.value.data);

const { results } = useFuse(props.name, cards.value.map((c) => c.title))
const card = ref(cards.value[results.value[0].refIndex]);
console.log("Card:", {... card.value})

const imageUrlTemplate = nrdbData.value.imageUrlTemplate;
const imageUrl = ref(imageUrlTemplate.replace('{code}', card.value.code));

</script>

<style lang="scss">
.nrdbCard {
    cursor: pointer;
}

.nrdbTooltip {
}
</style>