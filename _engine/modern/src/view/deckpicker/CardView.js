Ext.define('HDB.view.deckpicker.CardView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'app-cardview',

    controller: 'deckpicker',
    viewModel: {
        type: 'main'
    },
    shadow: true,
    padding: 20,
    scrollable: true,

    cls: 'cards',
    itemCls: 'card',

    store: 'cards',
    itemTpl: '<img src="{img}" width="180px" /><span class="cost">{cost}</span> <span class="title">{name}</span>',
    listeners: {
        select: 'chooseCard'
    }
});
