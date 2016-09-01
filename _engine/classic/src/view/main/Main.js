/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('HDB.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'HDB.view.main.MainController',
        'HDB.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',

    html: "CLASSIC DISABLED"
});
