Ext.define('HDB.store.MyDecks', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'HDB.model.MyDeck',
        'Ext.data.proxy.LocalStorage'
    ],

    alias: 'store.mydecks',
    storeId: 'mydecks',

    //rootVisible: true,
    model: 'HDB.model.MyDeck',
    defaultRootProperty: 'children',
    proxy: {
        type: 'localstorage'
    }
});