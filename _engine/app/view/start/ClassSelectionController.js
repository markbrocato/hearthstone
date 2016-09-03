Ext.define('HDB.view.start.ClassSelectionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.classselection',

    makeSelection: function(view, selection){
        var character = selection.getData().name;
        console.log(character);

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

        var v = Ext.first('app-main');
        v.pop();
        v.push({
            title: 'Choose Cards',
            xtype: 'app-deckpicker'
        });
    }
});
