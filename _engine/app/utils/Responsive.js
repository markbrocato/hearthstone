Ext.define('HDB.utils.Responsive', {
    extend: 'Ext.Base',

    statics: {
        isSmallScreen: function(context){
            return (Ext.dom.Element.getOrientation() === "portrait" || Ext.os.deviceType ==="Phone" );
        }
    }
});