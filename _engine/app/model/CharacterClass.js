Ext.define('HDB.model.CharacterClass', {
    extend: 'Ext.data.Model',

    fields: [
    {
        name: 'name',
        type: 'string'
    },
    {
        name: 'images',
        type: 'auto',
        convert: function(v,rec){
          if(rec.name && typeof rec.name == "string") {
            var obj = {};
            obj.small = this.data.toLowerCase() + "-small.png";
            obj.big = this.data.toLowerCase() + "-big.png";
            obj.block = this.data.toLowerCase() + ".png";
          }
          return obj;          
        },
        depends: ['name']
    }]

});