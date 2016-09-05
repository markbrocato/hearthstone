Ext.define('HDB.view.mydeck.MyDeckModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.mydeck',

    requires: [
        'HDB.store.MyDecks'
    ],

    stores: {
        'mydecks': {
            type: 'mydecks',
                root: {
                expanded: true,
                name: 'My Decks',
                children: [{
                    name: 'Mage-Deck1',
                    children: [{
                        name: 'Card 1',
                        leaf: true
                    },{
                        name: 'CARD 2',
                        leaf: true           
                    }]
                }]
            }
        }
    }

});
