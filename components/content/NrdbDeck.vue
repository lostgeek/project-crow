<template>
    <v-card color="secondarybg" v-if="decklist">
        <v-card-title>
            {{decklist.title}}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-1 ml-4">
            <Card class="identityTitle" :name="decklist.cards['identity'].cards[0].card.title" />
        </v-card-subtitle>
        <v-card-text class="decklistText">
            <ul class="types flex-grow-1 flex-shrink-0">
                <template v-for="type in card_types">
                    <li class="type" v-if="decklist.cards[type]">
                        <span class="d-flex align-baseline mb-1">
                            <v-icon color="primary" class="mr-2" :icon="icon[type]" />
                            <span class="text-capitalize font-weight-bold typeText">{{type}}</span>
                            <span class="ml-1 font-weight-light typeCount">({{decklist.cards[type].count}})</span>
                            </span>
                        <ul class="cards">
                            <li v-for="entry in decklist.cards[type].cards">
                                {{entry.amount}}x <Card :name="entry.card.title" />
                            </li>
                        </ul>
                    </li>
                </template>
            </ul>
            <div class="buttons flex-shrink-1 pa-0">
                <img
                    class="rounded-lg align-self-center"
                    width="150"
                    :src="cardImageUrl(decklist.cards['identity'].cards[0].card)" />
                <v-btn
                    color="primary"
                    prepend-icon="mdi-open-in-new"
                    text="View on NRDB"
                    :href="'https://netrunnerdb.com/en/decklist/'+nrdb_id"
                    />
                <v-btn 
                    color="primary"
                    prepend-icon="mdi-open-in-app"
                    >
                    Export to jinteki.net
                    <v-dialog
                        v-model="jnetDialog"
                        activator="parent"
                        width="auto">
                        <v-card>
                            <v-card-title>Export deck</v-card-title>
                            <v-card-text>
                                Copy and paste this into jinteki.net
                                <v-textarea
                                    class="jnetDecklist mt-4"
                                    name="jnetDecklist"
                                    variant="filled"
                                    rows="20"
                                    :model-value="jnetDecklist(decklist)"
                                />
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-btn>
            </div>
            <div class="text-body-1">
                <slot name="description" />
            </div>
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
            var subtypes;
            if(c.card.keywords) {
                subtypes = c.card.keywords.split(' - ');
            } else {
                subtypes = [];
            }
            var matches = ['Barrier', 'Code Gate', 'Sentry'].filter(v => subtypes.includes(v));
            if(matches.length == 1) {
                return matches[0].toLowerCase();
            } else if(matches.length > 1) {
                return "multi";
            } else {
                return "other";
            }
        } else if (type === 'program') {
            if(c.card.keywords) {
                subtypes = c.card.keywords.split(' - ');
            } else {
                subtypes = [];
            }
            if(subtypes.length > 0 && subtypes[0] === 'Icebreaker') {
                return "icebreaker";
            } else {
                return "program";
            }
        } else {
            return type;
        }
    });
}

const { data:decklist } = useNuxtData(props.nrdb_id);

console.log("Fetched from cache:", decklist.value);

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

const imageUrlTemplate = useState('imageUrlTemplate');

function cardImageUrl(card) {
    return imageUrlTemplate.value.replace('{code}', card.code);
}

const jnetDialog = ref(false);

function jnetDecklist(decklist) {
    var lines = [];
    card_types.value.forEach( (type) => {
        if(decklist.cards[type]) {
            decklist.cards[type].cards.forEach( (entry) => {
                lines.push(entry.amount + ' ' + entry.card.stripped_title);
            });
        }
    });
    return lines.join('\n');
}
</script>

<style lang="scss" scoped>
li {
    list-style-type: none;
}
.types {
    margin-left: 1rem;
    margin-bottom: 0;
    column-count: 2;
    column-gap: 1rem;

    & .typeText {
        color: rgb(var(--v-theme-primary));
        font-size:120%;
    }
    & .typeCount {
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
.identityTitle {
    color: rgb(var(--v-theme-on-secondarybg));
}

.decklistText {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

<style lang="scss">
.jnetDecklist textarea {
    font-size: 80%!important;
}
</style>