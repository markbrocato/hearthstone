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

    grouper: null,

    proxy: {
        type: 'localstorage',
        id: 'mycards'
    },

    transformData: function(){
        var records = this.getData(), i = 0;   
        for(i; i<records.items.length; i++){
            console.log(records.items[i]);
            //that.data.cost

            //group on cost - can I use normal grouper on a store?
        }

    }
});