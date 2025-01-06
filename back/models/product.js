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

let prod=mongoose.model('prod',prodSchema)
export default prod;
