Ext.define('HDB.view.start.ClassSelectionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.classselection',


    makeSelection: function(view, selection){
        var character;
        if(typeof selection == "string"){
            character = selection;

            var v = Ext.first('app-main');
            v.pop();

            this.getViewModel().set('classSelection', character);
            HDB.view.deckpicker.TabPanel.CLASS_SELECTION = character;

            var store = Ext.getStore('cards');
            store.clearFilter();
            store.addFilter([{
                "property" : "playerClass",
                "value": character
            },{
                filterFn: function(record){
                    if(record.get("cost") >= 0){
                        return true;
                    }    
                    return false;
                }
            }]);

            v.push({
                title: 'Choose Cards',
                xtype: 'app-deckpicker',
                store: Ext.getStore('cards')
            });

        } else {
            character = selection.getData().name;
            view.fireEvent('routechange', character);
        }
    }
});
