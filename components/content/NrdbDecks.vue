<template>
    <v-tabs
        v-model="tab"
        color="primary"
        align-tabs="left"
        >
        <v-tab v-for="deck in nrdb_ids" :key="deck.id" :value="deck.id">
            {{deck.title}}
        </v-tab>
    </v-tabs>
    <v-window 
        class="deckTab"
        v-model="tab">
        <v-window-item
            color="primary"
            v-for="deck in nrdb_ids"
            :key="deck.id"
            :value="deck.id">
            <NrdbDeck :nrdb_id="deck.nrdb_id">
                <template #description>
                    <slot :name="deck.id" />
                </template>
            </NrdbDeck>
        </v-window-item>
    </v-window>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay();
const props = defineProps(['nrdb_ids']);

const tab = ref(null);

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

const promises = props.nrdb_ids.map(({nrdb_id}) => {
    return useFetch(
    `https://netrunnerdb.com/api/2.0/public/decklist/${nrdb_id}`, {
        key: nrdb_id,
        server: true,
        transform: ({data}) => {
            var cards = readCards({...data[0].cards});
            var list = parseDecklist(cards);
            return {
                title: data[0].name,
                cards: list,
                side: cards[0].card.side_code,
            };
        },
        default: () => null,
    })});
await Promise.all(promises);

const { data:decklist } = useNuxtData(props.nrdb_ids[0].nrdb_id);

console.log("Fetched from cache:", decklist.value);
</script>

<style lang="scss" scoped>
.deckTab {
    width: fit-content;
}
</style>