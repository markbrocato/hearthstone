Ext.define('HDB.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function() {
        Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left',
            reveal: true
        });
    },

    //main menu
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
                        xtype: 'app-cardlistview'
                    });
                    Ext.Viewport.hideMenu(side);
                }                
            }]
        };
    }


});
