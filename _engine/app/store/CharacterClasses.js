Ext.define('HDB.store.CharacterClasses', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'HDB.utils.AppSettings',
        'Ext.util.Filter'
    ],

    model: 'HDB.model.CharacterClass',

    storeId: 'characterclasses',
    autoLoad: true,

    filters:[{
        filterFn: function(record){
            if(record.data !== "Dream") return true;
            return false;
        }
    }],

    proxy: {
        type: 'ajax',
        url: HDB.utils.AppSettings.CLASS_SERVICE,
        reader: {
            type: 'json',
            rootProperty: 'classes'
        }
    }
});