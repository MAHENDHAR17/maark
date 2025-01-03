import mongoose from "mongoose"


const prodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("prod",prodSchema)