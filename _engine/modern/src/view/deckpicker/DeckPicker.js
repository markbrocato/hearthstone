Ext.define('HDB.view.deckpicker.DeckPicker', {
    extend: 'Ext.Container',
    xtype: 'app-deckpicker',

    mixin: [
        'HDB.utils.Responsive'
    ],
    requires: [
        'Ext.tab.Panel',
        'HDB.view.deckpicker.TabPanel',
        'HDB.utils.Responsive'
    ],


    config: {
       smallscreen: false
    },


    shadow: true,
    scrollable: true,

    layout: 'fit',

    items: [{
        xtype: 'app-deckpickertabs',
        padding: 20,
        flex: 4,

        //I have to wrap it in a container, cause it doesn't look like the responsive mixin works on the class
        plugins: 'responsive',
        responsiveFormulas: {
            smallscreen: function (context) {
                return HDB.utils.Responsive.isSmallScreen(context);
            }
        },
        responsiveConfig: {
            landscape: {
                smallscreen: false
            },
            smallscreen: {
                smallscreen: true
            }
        }
    }]

});
