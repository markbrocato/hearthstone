Ext.define('HDB.view.mydeck.MyDeck', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'app-mydeck',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'HDB.view.mydeck.MyDeckController',
        'HDB.view.mydeck.MyDeckModel'
    ],

    shadow: true,
    scrollable: true,

    controller: 'mydeck',
    viewModel: {
        type: 'mydeck' 
    },
    bind: {
        store: '{mydecks}'
    },

    displayField: 'text',
    title: 'My Decks',
    items: [{
        xtype: 'toolbar',
        docked: 'bottom',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: function(btn){
                console.log("TODO")
            },
            text: 'New'
        }]
    }]

//fa-floppy-o 
});
