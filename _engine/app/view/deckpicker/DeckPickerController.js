Ext.define('HDB.view.deckpicker.DeckPickerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deckpicker',


    initViewModel: function(){
        var title = this.getViewModel().get('classSelection');
        console.log(title);
        HDB.view.deckpicker.TabPanel.CLASS_SELECTION = title;
    },



    chooseCard: function(view, selection){
        var character = selection.getData();
        console.log(character);
    }
});
