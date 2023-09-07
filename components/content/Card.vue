<template>
    <a class="nrdbCard">{{props.text}}
    <v-tooltip
        activator="parent"
        location="bottom"
        content-class="nrdbTooltip"
        >
        <v-card
            title="Title"
            subtitle="Subtitle"
            text="This is text"
            variant="outlined">
            
        </v-card>
    </v-tooltip>
    </a>
</template>

<script setup>
const props = defineProps(['name', 'text'])
</script>

<style lang="scss">
.nrdbCard {
    cursor: pointer;
}

.nrdbTooltip {
}
</style>