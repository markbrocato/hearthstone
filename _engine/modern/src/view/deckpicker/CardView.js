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
    store: 'cards',
    itemTpl: '<tpl if="img && cost"><div class="card"><img src="{img}" width="180px" /><span class="cost">{cost}</span> <span class="title">{name}</span></div></tpl>',
    listeners: {
        select: 'chooseCard'
    }
});
