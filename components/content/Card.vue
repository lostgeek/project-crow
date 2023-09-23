<template>
    <SlotCard :code="code">{{ linkText() }}</SlotCard>
</template>

<script setup>
import { useFuse } from '@vueuse/integrations/useFuse'

const props = defineProps(['name', 'text', 'fullname']);
const cards = useState('cards');

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

const code = computed(function() {
    if(card.value) {
        return card.value.code;
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