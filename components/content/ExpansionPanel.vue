<template>
    <v-expansion-panels 
        :class="mdAndUp ? 'w-75' : 'w-100'"
        color="primary">
        <v-expansion-panel :title="props.title">
            <v-expansion-panel-text class="text-justify">
                <ContentSlot :use="$slots.default" />
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay();

const props = defineProps(['title']);
</script>