Ext.define('HDB.store.MyDecks', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    model: 'HDB.model.MyDeck',

    storeId: 'mydecks',
    autoLoad: true,

    //sorters
    //filters

    proxy: {
        type: 'localstorage'
    }
});