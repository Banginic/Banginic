import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    fullName:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true
    },
    emailAddress:{
        type:String,
        minLength:8,
        maxLength:25,
        required:true,
        unique: false
    },
    phoneNumber:{
        type:String,
        minLength:9,
        maxLength:15,
    },
    service:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true
    },
    message:{
        type:String,
        minLength:5,
        maxLength:250,
        required:true
    },
},{ timestamps: true } )

const MessageModel = mongoose.model('Message', messageSchema)

export default MessageModel