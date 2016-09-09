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

    store: 'cards',
    itemTpl: '<img src="{img}" /><span class="cost">{cost}</span> <span class="title">{name}</span>',
    listeners: {
        select: 'chooseCard'
    }
});
