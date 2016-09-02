Ext.define('HDB.view.deckpicker.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-deckpickertabs',

    requires:[
        'HDB.view.mydeck.MyDeck',
        'HDB.view.mydeck.Stats',
        'HDB.view.deckpicker.CardView'
    ],

    config: {
       smallscreen: false
    },

    padding: 20,
    tabBarPosition: 'bottom',

    getInterface: function(smallscreen){
        var me = this, items = [];

        if(smallscreen){
            //build smallscreen interface
            items = [
            {
                xtype: 'toolbar',
                itemId: 'cardtoolbar',
                docked: 'top',
                items: [
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
                title: 'Mage',
                xtype: 'app-cardview'
            }, {
                title: 'Regular',
                xtype: 'app-cardview' 
            }, {
                title: 'Preview',
                xtype: 'app-details',
                //iconCls: 'x-fa fa-search'
            }];

        } else {
            //build normal interface  
            items = [
            {
                xtype: 'toolbar',
                itemId: 'cardtoolbar',
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

                xtype: 'container',
                itemId: 'sidebar',
                docked: 'right',
                width: 300,
                layout: 'vbox',
                items: [{
                    xtype: 'app-stats',
                    height: 200
                }, {
                    xtype: 'app-mydeck',
                    flex: 1
                }]
            },
            {
                title: 'Mage',
                xtype: 'app-cardview'
            }, {
                title: 'Regular',
                xtype: 'app-cardview' 
            }];

        }

        return items;
    },


    initialize: function(smallscreen){
        var me = this;
        var face = me.getInterface(this.getSmallscreen());

        me.add(face);
        me.callParent(arguments);
    },
    updateSmallscreen: function(smallscreen){
        console.log(smallscreen);
        var me = this;
        var sidebar = Ext.first('#sidebar');
        var topbar = Ext.first('#cardtoolbar');
        var face = me.getInterface(this.getSmallscreen());

        if(me.rendered){
            me.removeAll(); //remove all tabs
            if(sidebar) me.remove(sidebar); //remove the sidebar
            if(topbar) me.remove(topbar); //remove the topbar
            me.add(face); //draw new interface
        }
    }

});
