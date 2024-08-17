const mongoose = require("mongoose")
const cardSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model("Card",cardSchema)