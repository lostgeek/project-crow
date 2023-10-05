export const useNrdbDeck = (maybeRefOrGetter) => {
    const nrdb_id = toValue(maybeRefOrGetter);
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

    const { data:cachedData } = useNuxtData(nrdb_id);
    if (cachedData.value) {
        return cachedData;
    } else {
        const data = ref(null);
        
        const execute = async() => {
            const {data: fetchedData} = await useFetch(
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
                });
            data.value = fetchedData.value;
        };

        execute();

        return data;
    }
}