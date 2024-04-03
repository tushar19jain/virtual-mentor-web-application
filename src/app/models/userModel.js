import mongoose, { Schema } from "mongoose"

const userScema = new Schema({
    role:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true        
    },
    email:{
        type:String,
        required:true        
    },
    password:{
        type:String,
        required:true        
    },
    highestQualification:{
        type:String,
        required:true,
        default:" "        
    },
    currentOrganization:{
        type:String,
        required:true,
        default:" "            
    },
    yearOfExp:{
        type:Number,
        required:true ,
        default:0       
    },
    following:{
        type:Number,
        required:true,
        default:0
    },
    headline:{
        type:String,
        required:true,
        default:" "            
    },
})

export const userModel = mongoose.models.users || mongoose.model("users",userScema)