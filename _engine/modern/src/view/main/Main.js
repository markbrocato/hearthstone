Ext.define('HDB.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',

    requires: [
        'HDB.view.main.MainController',
        'HDB.view.main.MainModel',

        'Ext.Menu',
        'Ext.TitleBar',

        'HDB.view.start.ClassSelection',
        'HDB.view.deckpicker.DeckPicker'
    ],

    controller: 'main',
    viewModel: 'main',

    shadow: true,
    padding: 20,
    scrollable: true,

    navigationBar: false,
    items: [{
        xtype: 'titlebar',
        docked: 'top',
        title: 'Hearthstone Deck Builder', 
        items: [{
            iconCls: 'x-fa fa-navicon',
            align: 'left',
            handler: function(){
                Ext.Viewport.toggleMenu('left');
            }
        }]
    },{
        title: 'Class Selection',
        xtype: 'app-classselection'
    }],

    initialize: function() {
        Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left',
            reveal: true
        });
    },

    doDestroy: function() {
        Ext.Viewport.removeMenu('left');
        this.callParent();
    },

    getMenuCfg: function(side) {
        return {
            items: [{
                text: 'Deck Builder',
                iconCls: 'x-fa fa-gear',
                scope: this,
                handler: function(btn) {
                    var v = Ext.first('app-main');
                    v.pop();
                    v.push({
                        title: 'Class Selection',
                        xtype: 'app-classselection'
                    });
                    Ext.Viewport.hideMenu(side);
                }   
            }, {
                text: 'Deck Builder 2',
                iconCls: 'x-fa fa-pencil',
                handler: function(btn) {
                    var v = Ext.first('app-main');
                    v.pop();
                    v.push({
                        title: 'Choose Cards',
                        xtype: 'app-deckpicker'
                    });
                    Ext.Viewport.hideMenu(side);
                }   
            }, {
                text: 'Card Overview',
                iconCls: 'x-fa fa-pencil',
                handler: function(btn) {
                    var v = Ext.first('app-main');
                    v.pop();
                    v.push({
                        title: 'Card Overview',
                        xtype: 'list',
                        store: 'cards',
                        itemTpl: '{cost} - {name} ({playerClass})'
                    });
                    Ext.Viewport.hideMenu(side);
                }                
            }]
        };
    }
});


