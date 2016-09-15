Ext.define('HDB.controller.Global', {
    extend: 'Ext.app.Controller',

	listen: {
         component: {
             '*': {
                 routechange: 'updateRoute'
             }
         }
    },

    routes: {
        '!class/:id' : {
            action     : 'onClassChoice',
            conditions : {
                ':id' : '([%a-zA-Z0-9\\-\\_\\s,]+)'
            }
        }
    },

    updateRoute: function(character){
        if(character) {
    	    var hash = '!class/' + character;
    	    this.redirectTo(hash);
        }
    },
    onClassChoice: function(choice){
        var view = Ext.first('app-classselection');
        var character = choice;

        view.getController().makeSelection(view, character);
    }
});
