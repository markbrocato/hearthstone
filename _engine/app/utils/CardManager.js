Ext.define('HDB.utils.CardManager', {
    singleton: true,


    createCardsStore: function(){
        this.doFetch(HDB.utils.AppSettings.CARD_SERVICE,
        function(data){
        
            //create store with data
            console.log(data);

        });
    },

    doFetch: function(url, callback){
        var me = this;
        Ext.Ajax.request({
            url: url,
            success: function(response){
                if(response){
                    var data  =Ext.JSON.decode(response.responseText),
                    tData = me.getTransformedData(data);
                    callback(tData);
                }
            },
            failure: function(err){
                //<debug>
                console.log(err);
                //</debug>
            }
        })
    },

    getTransformedData: function(response){
        var d = response.data,
            tData = [];

        for(key in d){
            tData = Ext.Array.merge(tData, d[key]);
        }

        return tData;
    }


});
