Ext.define('HDB.store.MyDecks', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'HDB.model.MyDeck'
    ],

    alias: 'store.mydecks',
    storeId: 'mydecks',

    model: 'HDB.model.MyDeck',
    root: {},
    constructor: function(){
        this.callParent(arguments);
        var root = this.getRoot(),
        i = 0,
        obj = {
                expanded: true,
                text: 'Mage-Default', 
                children: [{
                    text: 'Card 1',
                    leaf: true
                }]
        };
        root.appendChild(obj);
        Ext.getStore('mydecksoffline').load(function(recs){
            for(i; i<recs.length; i++){
                var treemodel = Ext.create('Ext.data.TreeModel',{
                    text: recs[i].getData().text
                });
                treemodel.set('leaf', false);
                treemodel.expand();
                root.appendChild(treemodel);
            }
        });
    }
});