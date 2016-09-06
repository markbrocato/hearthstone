Ext.define('HDB.view.mydeck.MyDeckModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.mydeck',

    requires: [
        'HDB.store.MyDecks',
        'HDB.model.MyDeck'
    ],

    stores: {
        'mydecks': {
            type: 'mydecks',
            root: {
                expanded: true,
                text: 'My Decks',
                children: [{
                    text: 'Mage-Deck1',
                    children: [{
                        text: 'Card 1',
                        leaf: true
                    },{
                        text: 'CARD 2',
                        leaf: true           
                    }]
                }]
            }
        }
    }

});
