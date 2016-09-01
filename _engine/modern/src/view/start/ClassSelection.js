Ext.define('HDB.view.start.ClassSelection', {
    extend: 'Ext.Container',
    xtype: 'app-classselection',

    requires: [
        'Ext.TitleBar'
    ],

    controller: 'main',
    viewModel: 'main',

    shadow: true,
    padding: 20,
    scrollable: true,

    html: "CLASS SELECTION"

});
