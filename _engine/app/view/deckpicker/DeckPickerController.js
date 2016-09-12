Ext.define('HDB.view.deckpicker.DeckPickerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deckpicker',

    initViewModel: function(){
        var title = this.getViewModel().get('classSelection');
        HDB.view.deckpicker.TabPanel.CLASS_SELECTION = title;
    },

    chooseCard: function(view, selection){
        console.log(selection);
        var vm = this.getViewModel(), //mainmodel
           character = selection.getData(),
           activeDeck = vm.get('activeListNode');

        vm.set('selectedCard', character);

        if(activeDeck){
            var vm = Ext.first('app-main').getViewModel(),
                cardsoffline = Ext.getStore('mycardsoffline'),
                store = vm.getStore('mydecks'),
                deck = store.getNodeById(activeDeck.id);

            if (deck && activeDeck.id !== "root") {
                character.leaf = true;
                character.desc = character.text;
                character.text = character.name;

                deck.appendChild(character);

                var c = Ext.create('HDB.model.Card', {
                    "text": character.text,
                    "cost": character.cost,
                    "health": character.health,
                    "attack": character.attack,
                    "img": character.img,
                    "desc": character.desc,
                    "playerClass": character.playerClass
                });
                console.log(c);
                cardsoffline.add(c);

                console.log("TODO: Now save also cards offline. Bug when you wrongly select one.");
                console.log("TODO: MyDecks needs to load the cards. this needs to be filted on playerClass");
            }
        }

    }
});
