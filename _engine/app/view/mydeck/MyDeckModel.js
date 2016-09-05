Ext.define('HDB.view.mydeck.MyDeckModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.mydeck',

    requires: [
        'HDB.store.MyDecks'
    ],

    stores: {
        'mydecks': {
            type: 'mydecks',
            storeId: 'MyDecks'
        }
    }

});
