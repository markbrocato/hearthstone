Ext.define('HDB.utils.AppSettings', {
    singleton: true,

    IS_MOCK: false,
    //<debug>
    IS_MOCK: true,
    //</debug>

    CARD_SERVICE : '../data/allCards.json',
    //CARD_SERVICE : '../data/cards',
    CLASS_SERVICE: '../data/classes.json'

}, function(){
    if(location.search.match(/\btestmode\b/)){
        //this.IS_MOCK = true;
    }
    if(this.IS_MOCK){
        //TODO
    }

    if(Ext.platformTags.webview || Ext.platformTags.cordova){
        //TODO
    }
});
