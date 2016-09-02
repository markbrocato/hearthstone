Ext.define('HDB.store.Cards', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'HDB.utils.AppSettings'
    ],

    model: 'HDB.model.Card',

    storeId: 'cards',
    autoLoad: true,

    sorters:[{
        "property": "cost",
        "direction": "ASC"
    }],

    filters: [{
        "property" : "playerClass",
        "value": "Mage"
    },{
        filterFn: function(record){
            if(record.get("cost") >= 0){
                return true;
            }    
            return false;
        }
    }],

    constructor: function(){
        var me = this;
        me.doFetch(HDB.utils.AppSettings.CARD_SERVICE,
        function(data){
            me.setData(data);
        });
        me.callParent(arguments);
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


}, function(s){}
);