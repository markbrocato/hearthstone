Ext.define('HDB.utils.AppSettings', {
    singleton: true,

    IS_MOCK: false,
    CARD_SERVICE : 'data/allCards.json',
    CLASS_SERVICE: 'data/classes.json'

    //CARD_SERVICE : 'data/cards',




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
