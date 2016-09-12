Ext.define('HDB.view.deckpicker.CardListView', {
    extend: 'Ext.List',
    xtype: 'app-cardlistview',

    controller: 'deckpicker',
    viewModel: {
        type: 'main'
    },

    shadow: true,
    scrollable: true,
    store: 'cards',
    itemTpl: '<span class="cost">{cost}</span> <span class="title">{name}</span>',

    listeners: {
        itemtap: 'chooseCard'
    }

});
