Ext.define('HDB.view.mydeck.MyDeck', {
    extend: 'Ext.NestedList',
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

    items:[{
        xtype: 'toolbar',
        docked: 'bottom',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: function(btn){

                //var records = btn.up('treelist').getSelection();
                //console.log(records);
                var s = Ext.getStore('mydecks');
                var deck = s.first().childNodes[0];
                var root = s.first();
                if (deck) {
                    deck.appendChild({ //this one doesn't work'
                        text: 'Card1',
                        leaf: true
                    });
                }

                if(root){
                    root.parentNode.appendChild({
                        text: 'Folder', //works
                        leaf: true
                    });              
                }

            },
            text: 'New'
        }]
    }],
    title: 'My Decks',
    displayField: 'text',
    bind: {
        store: '{mydecks}', //something odd with this store
    }
    /*store: { //it works with this store
        type: 'tree',
        model: 'HDB.model.MyDeck',
        defaultRootProperty: 'items',
        root: {
            text: 'Groceries',
            items: [{
                text: 'Drinks',
                items: [{
                    text: 'Water',
                    items: [{
                        text: 'Sparkling',
                        leaf: true
                    }, {
                        text: 'Still',
                        leaf: true
                    }]
                }, {
                    text: 'Coffee',
                    leaf: true
                }, {
                    text: 'Espresso',
                    leaf: true
                }, {
                    text: 'Redbull',
                    leaf: true
                }, {
                    text: 'Coke',
                    leaf: true
                }, {
                    text: 'Diet Coke',
                    leaf: true
                }]
            }, {
                text: 'Fruit',
                items: [{
                    text: 'Bananas',
                    leaf: true
                }, {
                    text: 'Lemon',
                    leaf: true
                }]
            }, {
                text: 'Snacks',
                items: [{
                    text: 'Nuts',
                    leaf: true
                }, {
                    text: 'Pretzels',
                    leaf: true
                }, {
                    text: 'Wasabi Peas',
                    leaf: true
                }]
            }]
        }
    }*/
});
