Ext.define('HDB.store.MyDecks', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    alias: 'store.mydecks',
    storeId: 'mydecks',

    model: 'HDB.model.MyDeck',
    rootVisible: true,
    defaultRootProperty: 'items',

    //TODO What's wrong with this?'
    root: {
        "text": "Decks",
        "items": [{
            "text": "Mage-Deck1",
            "items": [{
                "text": "Card1",
                "leaf": true
            }, {
                "text": "Card2",
                "leaf": true           
            }, {
                "text": "Card3",
                "leaf": true                  
            }]
        }]
    },


    /*groupers: [{
        'direction': 'ASC',
        'property': 'cost'
    }],*/

    //proxy: {
    //    type: 'localstorage'
   // }
});