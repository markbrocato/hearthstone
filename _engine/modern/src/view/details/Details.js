Ext.define('HDB.view.details.Details', {
    extend: 'Ext.Container',
    xtype: 'app-details',

    requires: [
        'Ext.TitleBar',
        'HDB.view.mydeck.MyDeck',
        'HDB.view.mydeck.Stats'
    ],

    config: {
       smallscreen: false
    },

    shadow: true,
    layout: 'vbox',

    items: [{
        xtype: 'app-stats',
        height: 200
    }, {
        xtype: 'app-mydeck',
        flex: 1
    }],

    updateSmallscreen: function(smallscreen){
        if(smallscreen){
            //build smallscreen interface
            console.log("small screen");
        } else {
            //build normal interface    
            console.log("normal screen");
        }

    }

});
