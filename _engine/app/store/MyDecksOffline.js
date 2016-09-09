Ext.define('HDB.store.MyDecksOffline', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    alias: 'store.mydecksoffline',
    storeId: 'mydecksoffline',

    autoLoad: true,
    autoSync: true,

    fields: [{
        name: "text",
        type: "string"
    }],

    proxy: {
        type: 'localstorage',
        id: 'mydeck'
    }
});