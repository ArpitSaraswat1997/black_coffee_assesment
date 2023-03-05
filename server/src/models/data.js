const express =require("express")
const  mongoose  = require("mongoose")
const oilSchema = new mongoose.Schema({
    intensity:{
        type:Number,
        required:true,   
    },

    likelihood:{
        type:Number,
        required:true,   
    },

    relevance:{
        type:String,
        required:true,

    },
    
    country:{
        type:String,
        required:true
    },

    topic:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },

    sector:{
        type:String,
        required:true
    },
    end_year:{
        type:String

    },
    topic:{
        type:String
    },

    insight:{
       type:String
    },
    
pestle:{
    type:String

},


relevance:{
    type:Number
},
title:{
    type:String
},
start_year:{
    type:String
},
url:{
    type:String
},

impact:{
    type:String
},

added:{
    type:String
},

published:{
    type:String
}
    

    

    
})
// we arte creating new collection
const OilData =new mongoose.model("OilData",oilSchema)

module.exports =OilData
//Relevance
// 
// Country
// Topics
// Region
// City 
