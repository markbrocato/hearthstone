Ext.define('HDB.view.deckpicker.CardListView', {
    extend: 'Ext.List',
    xtype: 'app-cardlistview',

    controller: 'deckpicker',

    shadow: true,
    scrollable: true,
    store: 'cards',
    itemTpl: '<span class="cost">{cost}</span> <span class="title">{name}</span>',

    listeners: {
        select: 'chooseCard'
    }

});
