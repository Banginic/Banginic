import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.js'
import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    fullName:{
        required: true,
        type:String,
        minLength:3,
        maxLength:15
    },
    email:{
        required: true,
        type:String,
        unique: true,
        minLength:6,
        maxLength:20
    },
    phone:{
        type:String,
        unique: true,
        minLength:8,
        maxLength:15,
        unique: true
    },
    password:{
        required: true,
        type:String,
        minLength:8,
        maxLength:250
    },
    messages:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Message'
        }
    ]
        
    
}, { timestamps: true, minimize: false})
authSchema.methods.generateToken = function(){
    return jwt.sign({ userId: this._id}, JWT_SECRET, { expiresIn: '1d'})
}
 const UserModel = mongoose.model('User', authSchema)

 export default UserModel