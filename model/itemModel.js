const mongoose = require('mongoose');


const itemModel = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Items',itemModel)