Ext.define('HDB.view.mydeck.MyDeckController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mydeck',

    addNewDeck: function(btn){
        var w = Ext.Msg.prompt('Name your deck', 'Give your card deck a name:', function(b, name){
            if(name){

                 var vm = Ext.first('app-main').getViewModel(),
                 character = vm.get('classSelection'),
                 store = Ext.getStore('mydecksoffline');

                 console.log(character);

                 store.add({
                     "text": character + "-" + name,
                     "playClass": character //AFTER THIS CHANGE IT GOT BROKEN
                 });
          
            }
        });
    },

    removeDeck: function(list, rec){
        var store = Ext.getStore('mydecksoffline');

        var w = Ext.Msg.confirm('Confirm', 'Are you sure you want to remove this deck?', function(b){
            if(b == "yes"){
                store.remove(rec);
            }
        });
    },

    chooseDeck: function(list,i,t,rec){
        var parent = list.getParent()
            text = rec.getData('playClass').text,
            v = Ext.first('app-main'),
            vm = v.getViewModel(),
            character = text.split('-')[0],
            backbtn = Ext.first('#listbackbtn');

        if(character){

            var storeO = Ext.getStore('mycardsoffline');
            storeO.clearFilter();
            storeO.addFilter([{
                "property" : "playClass",
                "value": character
            },{
                filterFn: function(record){
                    if(record.get("cost") >= 0){
                        return true;
                    }    
                    return false;
                }
            }]);

            parent.getLayout().setAnimation({
                type: 'slide',
                direction: 'right'
            });
            parent.setActiveItem(1);

            backbtn.show();
        }

    }

});