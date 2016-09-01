Ext.define('HDB.view.deckpicker.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-deckpickertabs',

    config: {
       smallscreen: false
    },

    padding: 20,
    tabBarPosition: 'bottom',
    items: [],

  
    updateSmallscreen: function(smallscreen){
        console.log(smallscreen);

        var me = this, items = [];


        if(smallscreen){
            //build smallscreen interface
            console.log("small screen");

            items = [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'component',
                        itemId: 'className',
                        flex: 1,
                        centered: true,
                        html: "Mage"
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-search',
                        handler: function(){
                            console.log("TODO SHOW DETAIL");
                        }
                    }
                ]
            },
            {
                title: 'Mage',
                xtype: 'app-cardview'
            }, {
                title: 'Regular',
                xtype: 'app-cardview' 
            }];


        } else {
            //build normal interface    
            items = [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-th',
                        handler: function(){
                            console.log("TODO SHOW DATAVIEW");
                        }
                    },
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-th-list',
                        handler: function(){
                            console.log("TODO SHOW LIST");
                        }
                    },
                    {
                        xtype: 'component',
                        itemId: 'className',
                        flex: 1,
                        centered: true,
                        html: "Mage"
                    }
                ]
            },
            {

                xtype: 'app-details',
                docked: 'right',
                width: 300
            },
            {
                title: 'Mage',
                xtype: 'app-cardview'
            }, {
                title: 'Regular',
                xtype: 'app-cardview' 
            }];

        }
        me.removeAll(true, true);
        me.setItems(items);

    }

});
