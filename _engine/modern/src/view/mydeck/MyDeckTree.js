/*Ext.define('HDB.view.mydeck.MyDeckTree', {
    extend: 'Ext.Container',
    xtype: 'app-mydecktree',

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


    displayField: 'text',
    useSimpleItems: false,
    title: 'My Decks',
    items: [
        {
            xtype: 'treelist',
            bind: {
                store: '{mydecks}',
            }
        },
        {
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
                    deck.appendChild({
                        text: 'Card',
                        leaf: true
                    });
                }

                if(root){
                    root.parentNode.appendChild({
                        text: 'Card',
                        leaf: true
                    });              
                }

            },
            text: 'New'
        }]
    }]

//fa-floppy-o 
});
*/