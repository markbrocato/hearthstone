Ext.define('HDB.view.mydeck.MyDeckController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mydeck',

    addNewDeck: function(btn){
        var w = Ext.Msg.prompt('Name your deck', 'Give your card deck a name:', function(b, name){
            if(name){
                    var vm = Ext.first('app-main').getViewModel(),
                        s = vm.getStore('mydecks'),
                        root = s.getRoot();
                    
                    if(root){
                        var cardname = "Mage" + "-" + name;

                        root.appendChild({
                            text: cardname,
                            leaf: false
                        });              
                    
                        //This deck has to be saved in mydecksoffline store
                        //this is a flat store.
                        s = Ext.getStore('mydecksoffline').add({
                            text: cardname
                        });    
                    }               

            }
        });
    },

    changeListNodes: function(nestedlist, item){
        if(item && item.getStore()){
            var activeNode = item.getStore().getNode();
            var vm = Ext.first('app-main').getViewModel();
            vm.set('activeListNode', activeNode);
        }
    }

});