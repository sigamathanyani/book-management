const  mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    shelf:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    ISBN:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    img:String,
    isAvailable:Boolean
})

module.exports = mongoose.model("Book",bookSchema);