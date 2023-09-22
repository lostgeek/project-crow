<template>
    <v-sheet
        :width="smAndUp ? '400' : '100%'"
        >
    <v-expansion-panels
        color="primary">
        <v-expansion-panel title="Table of contents">
            <v-expansion-panel-text>
                <ul v-if="toc && toc.links">
                    <li v-for="link in toc.links" :key="link.text">
                        <a :href="`#${link.id}`">
                        {{ link.text }}
                        </a>
                    </li>
                </ul>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-sheet>
</template>

<script setup>
const { page, toc } = useContent()

import { useDisplay } from 'vuetify'
const { smAndUp } = useDisplay();
</script>