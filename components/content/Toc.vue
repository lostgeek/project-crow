<template>
    <v-sheet
        :width="smAndUp ? '400' : '100%'"
        >
    <v-expansion-panels
        color="primary">
        <v-expansion-panel title="Table of contents">
            <v-expansion-panel-text>
                <ul v-if="toc && toc.links">
                    <li v-for="link in toc.links" :key="link.id">
                        <a :href="`#${link.id}`">
                        {{ link.text }}
                        </a>
                        <ul v-if="link.children">
                            <li v-for="link in link.children" :key="link.id">
                                <a :href="`#${link.id}`">
                                {{ link.text }}
                                </a>
                            </li>
                        </ul>
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

<style lang="scss" scoped>
ul {
    margin-left: 0rem;
    margin-bottom: 0rem;

    & ul {
        margin-left: 1.5rem;
    }
    
    & li:not(:last-child) ul {
        margin-bottom: .5rem;
    }
}

li {
    list-style-type: none;
}
</style>