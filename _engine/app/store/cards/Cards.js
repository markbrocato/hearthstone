Ext.define('HDB.store.cards.Cards', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'HDB.utils.AppSettings'
    ],

    model: 'HDB.model.Card',

    storeId: 'cards',
    autoLoad: true,

    /*
    sorters:[{
        "property": "cost",
        "direction": "ASC"
    }],

    filters: [{
        "property" : "playerClass",
        "value": "Mage"
    }],
    */

    /*filters:[{
        filterFn: function(record){
            if(record.data !== "Dream") return true;
            return false;
        }
    }],*/

  schema: {}

}, function(model){

    //we have to do it this way, because HDB namespace
    //could not be available while reading this class
    //in the memory.
    //model.prototype.schema.setNamespace('HDB.store.cards');
    /*model.prototype.schema.setProxy({
        type: 'ajax',
        url: HDB.utils.AppSettings.CARD_SERVICE + "{entityName}.json",
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    });*/
}
);