Ext.define('HDB.model.Card', {
    extend: 'Ext.data.Model',

    fields: [{
        "name" : "name",
        "type" : "string"
    }, {
        "name": "cost",
        "type": "int"
    }, {
        "name": "desc",
        "type": "string",
        "mapping": "text"    
    },
   {
        "name": "desc",
        "type": "string"    
    }, 
    {
        "name": "playClass",
        "type": "string"    
    },
    {
        "name": "attack",
        "type": "int"    
    },   
    {
        "name": "health",
        "type": "int"    
    },
    {
        "name": "img",
        "type": "string"    
    },        
    {
        "name": "image",
        "type": "string",
        "calculate": function(data) {
            if(data.img){
                return data.img.substring(5);
            }
        }   
    }],

    proxy: {
        type: 'memory'
    }
});