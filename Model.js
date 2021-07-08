const mongoose = require("mongoose")

const Schema = mongoose.Schema


const modelSchema = new Schema({
    name:{
        type:String,
        required:[true,'please add data'],
        unique:true,
        trim:true,
    },
    last:{
        type:String,
        required:[true,'please add data'],
        unique:true,
        trim:true,
    },
    volume:{
        type:String,
        required:[true,'please add data'],
        unique:true,
        trim:true,
    },
    sell:{
        type:String,
        required:[true,'please add data'],
        unique:true,
        trim:true,
    },
    buy:{
        type:String,
        required:[true,'please add data'],
        unique:true,
        trim:true,
    },
    base_unit:{
        type:String,
        required:[true,'please add data'],
        unique:true,
        trim:true,
    }
})



module.exports = mongoose.model('Model',modelSchema); 