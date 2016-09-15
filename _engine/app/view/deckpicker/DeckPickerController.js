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
           cardsoffline = Ext.getStore('mycardsoffline');

        vm.set('selectedCard', character);

        var c = Ext.create('HDB.model.Card', {
            "name": character.name,
            "cost": character.cost,
            "health": character.health,
            "attack": character.attack,
            "img": character.img,
            "desc": character.text,
            "playClass": character.playerClass
        });
        cardsoffline.add(c);

        console.log("TODO: IT SHOULD BE POSSIBLE TO HAVE MULTIPLE DECKS OR A CHAR. Need to do something with deck id");
        console.log("CREATE D3 widget");
        console.log("MULTIPLE SAME CARDS TO ONE DECK");
            

    }
});
