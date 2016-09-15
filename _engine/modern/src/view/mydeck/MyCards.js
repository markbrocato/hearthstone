Ext.define('HDB.view.mydeck.MyCards', {
    extend: 'Ext.List',

    alias: 'widget.mycardsoffline',

    store: 'mycardsoffline',
    onItemDisclosure: true,
    itemTpl: "{cost} - {playClass} - {name}",
    itemCls: 'mycard',
    listeners: {
        disclose: 'removeCard'
    }
});