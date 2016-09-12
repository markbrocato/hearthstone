Ext.define('HDB.store.CardsOffline', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    alias: 'store.mycardsoffline',
    storeId: 'mycardsoffline',

    autoLoad: true,
    autoSync: true,

    model: 'HDB.model.Card',

    proxy: {
        type: 'localstorage',
        id: 'mycards'
    }
});