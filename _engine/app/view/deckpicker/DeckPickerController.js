Ext.define('HDB.view.deckpicker.DeckPickerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deckpicker',

    initViewModel: function(){
        var title = this.getViewModel().get('classSelection');
        HDB.view.deckpicker.TabPanel.CLASS_SELECTION = title;
    },

    chooseCard: function(view, selection){
        var vm = this.getViewModel(), //mainmodel
           character = selection.getData(),
           activeDeck = vm.get('activeListNode');

        vm.set('selectedCard', character);

        if(activeDeck){
            var s = vm.getStore('mydecks'),
            store = Ext.first('app-main').getViewModel().getStore('mydecks'),
            deck = store.getNodeById(activeDeck.id);

            if (deck && activeDeck.id !== "root") {
                character.leaf = true;
                character.desc = character.text;
                character.text = character.name;

                deck.appendChild(character);
            }
        }

    }
});
