/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('HDB.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'HDB.store.MyDecks',
        'HDB.store.MyDecksOffline'
    ],

    data: {
        classSelection: 'Mage',
        activeListNode: null

        //,selectedCard: null
    },

    stores: {
        'mydecks': {
            type: 'mydecks'
        }
    }
});
