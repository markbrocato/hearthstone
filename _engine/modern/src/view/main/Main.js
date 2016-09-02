Ext.define('HDB.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',

    requires: [
        'HDB.view.main.MainController',
        'HDB.view.main.MainModel',

        'Ext.Menu',
        'Ext.TitleBar',

        'HDB.view.start.ClassSelection',
        'HDB.view.deckpicker.DeckPicker',
        'HDB.view.deckpicker.CardView'
    ],

    controller: 'main',
    viewModel: 'main',

    shadow: true,
    padding: 20,
    scrollable: true,

    navigationBar: false,
    items: [{
        xtype: 'titlebar',
        docked: 'top',
        title: 'Hearthstone Deck Builder', 
        items: [{
            iconCls: 'x-fa fa-navicon',
            align: 'left',
            handler: function(){
                Ext.Viewport.toggleMenu('left');
            }
        }]
    },{
        title: 'Class Selection',
        xtype: 'app-classselection'
    }]

});


