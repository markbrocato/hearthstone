Ext.define('HDB.model.MyDeck', {
    extend: 'Ext.data.Model',

     config: {
         fields: [{
             name: 'text',
             type: 'string'
             , mapping: 'name'
         }]
     }
});