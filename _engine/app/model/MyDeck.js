Ext.define('HDB.model.MyDeck', {
    extend: 'Ext.data.TreeModel',

    fields: [{
        name: 'text',
        type: 'string',
        mapping: 'name'
    }]
});