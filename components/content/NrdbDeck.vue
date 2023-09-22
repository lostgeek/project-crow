<template>
    <v-card class="w-100" v-if="decklist">
        <v-card-title>
            <a class="deckTitle" :href="'https://netrunnerdb.com/en/decklist/'+nrdb_id">{{decklist.title}}</a>
        </v-card-title>
        <v-card-text>
            <ul class="types">
                <template v-for="type in card_types">
                    <li class="type" v-if="decklist.cards[type]">
                        <span class="d-flex align-baseline mb-1">
                            <v-icon color="primary" class="mr-2" :icon="icon[type]" />
                            <span class="text-capitalize font-weight-bold type-text">{{type}}</span>
                            <span class="ml-1 font-weight-light type-count">({{decklist.cards[type].count}})</span>
                            </span>
                        <ul class="cards">
                            <li v-for="entry in decklist.cards[type].cards">
                                {{entry.amount}}x <Card :name="entry.card.title" />
                            </li>
                        </ul>
                    </li>
                </template>
            </ul>
        </v-card-text>
    </v-card>
    <v-card class="w-100" v-if="!decklist">
        <v-progress-circular
            class="mx-auto"
            color="primary"
            indeterminate
            />
    </v-card>
</template>

<script setup>
const props = defineProps(['nrdb_id']);
const cards = useState('cards');

const { data, pending, error, refresh } = await useAsyncData(
  `https://netrunnerdb.com/api/2.0/public/decklist/${props.nrdb_id}`,
  () => $fetch(`https://netrunnerdb.com/api/2.0/public/decklist/${props.nrdb_id}`)
);
if (error.value) {
    console.log("Error while fetching NRDB: ", error.value)
}

function readCards(list) {
    return Object.entries(list).map( ([id, amount], _) => ({
        card: cards.value.find((el) => el.code === id),
        amount: amount
    }));
}

// From https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
function groupBy(list, keyGetter) {
    const map = new Object();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map[key];
         if (!collection) {
             map[key] = {cards: [item], count: item.amount};
         } else {
             map[key].cards.push(item);
             map[key].count += item.amount;
         }
    });
    return map;
}

function parseDecklist(list) {
    return groupBy(list, function (c) {
        var type = c.card.type_code;
        if (type === 'ice') {
            var subtypes = c.card.keywords.split(' - ');
            var matches = ['Barrier', 'Code Gate', 'Sentry'].filter(v => subtypes.includes(v));
            if(matches.length == 1) {
                return matches[0].toLowerCase();
            } else if(matches.length > 1) {
                return "multi";
            } else {
                return "other";
            }
        } else if (type === 'program') {
            var subtypes = c.card.keywords.split(' - ');
            if(subtypes[0] === 'Icebreaker') {
                return "icebreaker";
            } else {
                return "program";
            }
        } else {
            return type;
        }
    });
}

const decklist = computed(function() {
    if(data.value) {
        var cards = readCards({...data.value.data[0].cards});
        var list = parseDecklist(cards);
        return {
            title: data.value.data[0].name,
            cards: list,
            side: cards[0].card.side_code,
        };
    } else {
        return [];
    }
});

const corp_types = ["agenda", "asset", "operation", "upgrade", "barrier", "code gate", "sentry", "multi", "other"];
const runner_types = ["event", "hardware", "resource", "icebreaker", "program"];
const card_types = computed(function() {
    if(decklist.value) {
        if(decklist.value.side === 'corp') {
            return corp_types;
        } else {
            return runner_types;
        }
        return corp_types;
    } else {
        return [];
    }
});

const icon = {
    agenda: 'mdi-finance',
    asset: 'mdi-chart-pie',
    operation: 'mdi-lightning-bolt',
    upgrade: 'mdi-arrow-up-bold',
    barrier: 'mdi-shield',
    "code gate": 'mdi-shield',
    sentry: 'mdi-shield',
    multi: 'mdi-shield',
    other: 'mdi-shield',
    event: 'mdi-lightning-bolt',
    hardware: 'mdi-cog',
    resource: 'mdi-share-variant',
    icebreaker: 'mdi-memory',
    program: 'mdi-memory',
}
</script>

<style lang="scss" scoped>
li {
    list-style-type: none;
}
.deckTitle {
    color: rgb(var(--v-theme-primary-on-text));
}

.types {
    margin-left:0;
    column-count: 2;

    & .type-text {
        color: rgb(var(--v-theme-primary));
        font-size:120%;
    }
    & .type-count {
        font-size: 90%;
    }

    & .type {
        break-inside: avoid;
    }

    & .cards {
        margin-left: 0rem;
        margin-bottom: 1rem;
        break-inside: avoid;
    }
}

</style>