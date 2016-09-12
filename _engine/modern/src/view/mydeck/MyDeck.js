Ext.define('HDB.view.mydeck.MyDeck', {
    extend: 'Ext.NestedList',
    xtype: 'app-mydeck',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.MessageBox',
        'HDB.view.mydeck.MyDeckController'
    ],

    shadow: true,
    scrollable: true,

    controller: 'mydeck',

    items:[{
        xtype: 'toolbar',
        docked: 'bottom',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: 'addNewDeck',
            text: 'New'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-remove',
            handler: 'removeDeck',
            text: 'Remove Deck'           
        }]
    }],
    title: 'My Decks',
    displayField: 'text',
    listeners: {
        'listchange': 'changeListNodes'
    },
    bind: {
        store: '{mydecks}' //something odd with this store
    }
});
