<template>
    <NuxtLink
        v-if="!isCard(href)"
        :href="href"
        :target="target"
        :rel="rel"
        >
        <slot />
        <v-icon 
            class="ms-1"
            style="vertical-align: baseline;"
            v-if="externalLink(href)"
            size="x-small"
            >
            mdi-open-in-new
        </v-icon>
    </NuxtLink>
    <SlotCard v-if="isCard(href)" :code="getCode(href)">
        <slot />
    </SlotCard>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: undefined,
        required: false
    },
    rel: {
        type: String,
        default: undefined,
        required: false
    }
})

const codeRE = new RegExp(/\/en\/card\/(\d{5})/);

function isCard(href:String) {
    return href.startsWith('/en/card/');
}

function getCode(href:String) {
    var m = href.match(codeRE);
    if(m) {
        return m[1];
    } else {
        return null;
    }
}

function externalLink(href:String) {
    if(href.startsWith('/')){
        return false;
    } else {
        return true;
    }
}
</script>