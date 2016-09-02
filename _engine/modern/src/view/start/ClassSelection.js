Ext.define('HDB.view.start.ClassSelection', {
    extend: 'Ext.dataview.DataView',
    xtype: 'app-classselection',

    requires: [
        'HDB.store.CharacterClasses'
    ],

    controller: 'main',
    viewModel: 'main',

    shadow: true,
    padding: 20,
    scrollable: true,

    store: 'characterclasses',
    itemTpl: '{name} <img src="{images.block}" />',

    cls: 'characters',
    itemCls: 'character',
    overItemCls: 'over',
    selectedItemCls: 'selected',

    listeners: {
        select: function(view, record) {
            console.log(record);
        }
    }
});
