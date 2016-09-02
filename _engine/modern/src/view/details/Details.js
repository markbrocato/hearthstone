Ext.define('HDB.view.details.Details', {
    extend: 'Ext.Container',
    xtype: 'app-details',

    requires: [
        'Ext.TitleBar',
        'HDB.view.mydeck.MyDeck',
        'HDB.view.mydeck.Stats'
    ],

    shadow: true,
    layout: 'vbox',

    items: [{
        xtype: 'app-stats',
        height: 200
    }, {
        xtype: 'app-mydeck',
        flex: 1
    }]
});
