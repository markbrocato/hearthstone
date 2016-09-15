Ext.define('HDB.view.deckpicker.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-deckpickertabs',

    requires:[
        'HDB.view.mydeck.MyDeck',
        'HDB.view.mydeck.Stats',
        'HDB.view.deckpicker.CardView'
    ],

    statics: {
        CLASS_SELECTION: "TODO",
    },
    config: {
       smallscreen: false
    },

    reference: 'deckpickertabpanel',

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
                        bind: {
                            html: "{classSelection}"
                        }
                    }
                ]
            },
            {
                title: HDB.view.deckpicker.TabPanel.CLASS_SELECTION,
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
                        xtype: 'segmentedbutton',
                        listeners: {
                            toggle: 'toggleInterface'
                        },
                        items: [
                            {
                                xtype: 'button',
                                pressed: true,
                                itemId: 'dataviewbtn',
                                iconCls: 'x-fa fa-th'
                            },
                            {
                                xtype: 'button',
                                itemId: 'listbtn',
                                iconCls: 'x-fa fa-th-list'
                            }
                        ]
                    },

                    {
                        xtype: 'component',
                        itemId: 'className',
                        flex: 1,
                        centered: true,
                        bind: {
                            html: "{classSelection}"
                        }
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
                    xtype: 'container',
                    itemId: 'slider',
                    layout: 'card',
                    flex: 1,  
                    items: [{
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [{
                            xtype: 'button',
                            text: 'Back',
                            itemId: 'listbackbtn',
                            hidden: true,
                            handler: function(btn){
                                var backbtn = Ext.first('#listbackbtn');
                                var parent = btn.up('#slider');
                                backbtn.hide();
                                
                                //the animation doesnt work
                                parent.getLayout().setAnimation({
                                    type: 'slide',
                                    direction: 'left'
                                });
                                parent.setActiveItem(0);
                            }
                        }]
                    },
                    {
                        xtype: 'app-mydeck'
                    }, {
                        xtype: 'mycardsoffline'
                    }]
  
                }]
            },
            {
                title: HDB.view.deckpicker.TabPanel.CLASS_SELECTION,
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
