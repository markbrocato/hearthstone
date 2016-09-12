Ext.define('HDB.view.mydeck.MyDeckController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mydeck',

    addNewDeck: function(btn){
        var w = Ext.Msg.prompt('Name your deck', 'Give your card deck a name:', function(b, name){
            if(name){
                    var vm = Ext.first('app-main').getViewModel(),
                        character = vm.get('classSelection'),
                        s = vm.getStore('mydecks'),
                        root = s.getRoot();
                    
                    if(root){
                        var cardname = character + "-" + name;

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

    removeDeck: function(btn){
       var nestedlist = btn.up('nestedlist'),
       node = nestedlist.getLastNode();

        if(node.id !== "root"){
            var w = Ext.Msg.confirm('Confirm', 'Are you sure you want to remove this deck?', function(b){
                if(b == "yes"){
                    var offline = Ext.getStore('mydecksoffline'),
                    current = offline.find('text', node.getData().text);
                    offline.removeAt(current);
                    
                    nestedlist.goToNode(node.parentNode);
                    node.remove();
                }
            });
        }
    },

    removeCard: function(btn){
        console.log("TODO");
    },

    changeListNodes: function(nestedlist, item){
        if(item && item.getStore()){
            var activeNode = item.getStore().getNode(),
                vm = Ext.first('app-main').getViewModel(),
                nodeName = activeNode.getData().text;

            vm.set('activeListNode', activeNode);

            if(nodeName !== "Root"){
                
            }
        }
    }

});