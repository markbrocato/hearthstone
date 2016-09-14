Ext.define('HDB.utils.PouchDbManager', {
    singleton: true,

    db : null,

    init: function(){
        console.log("Pouch DB")
    },

    setupDb: function(){
        var db = HDB.utils.PouchDbManager.db;
        db = new PouchDB('hdb');

        db.put({
            _id: 'images',
            items: [{
                "card1": "IMAGE"
            }, {
                "card2": "IMAGE"
            }]
        }).then(function (response) {
            // handle response
            console.log("ok");
            console.log(response);
        }).catch(function (err) {
            console.log(err);
        });
    },

    loadAll: function(){
        HDB.utils.PouchDbManager.db.get('images').then(function (doc) {
            // handle doc
            console.log(doc);
        }).catch(function (err) {
            console.log(err);
        });
    },

    removeDb: function(){
        var db = HDB.utils.PouchDbManager.db;
        db.destroy().then(function (response) {
            console.log("db removed");
        }).catch(function (err) {
            console.log(err);
        });
    }



});