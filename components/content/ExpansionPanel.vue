<template>
    <v-expansion-panels 
        :class="mdAndUp ? 'w-75' : 'w-100'"
        color="primary">
        <v-expansion-panel :title="props.title">
            <v-expansion-panel-text>
                <ContentSlot :use="$slots.default" unwrap="p" />
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay();

const props = defineProps(['title']);
</script>