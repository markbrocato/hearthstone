var enableSW = true;
//<debug>
    //no server workers on localhost
    enableSW = true;
//</debug>

if(enableSW && 'serviceWorker' in navigator) {
    //a service worker should only register once.
    console.log("sw allowed");
    if(!navigator.serviceWorker.controller){
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }
} else if(enableSW && 'applicationCache' in window) {
    //let’s enable the old fashioned AppCache for iOS
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'load-appcache.html';
    document.body.appendChild(iframe);
}

/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'HDB',

    extend: 'HDB.Application',

    requires: [
        'HDB.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'HDB.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to HDB.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
