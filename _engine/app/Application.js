/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('HDB.Application', {
    extend: 'Ext.app.Application',
    
    name: 'HDB',

    requires: [
        'HDB.utils.AppSettings',
        'HDB.utils.CardManager',
       // 'HDB.utils.PouchDbManager'
    ],

    stores: [
        'HDB.store.Cards',
        'HDB.store.CharacterClasses',
        'HDB.store.MyDecksOffline',
        'HDB.store.CardsOffline'
    ],
    
    controllers: [
        'HDB.controller.Global'
    ],

    launch: function () {
        // TODO - Launch the application
        //HDB.utils.PouchDbManager.init();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
