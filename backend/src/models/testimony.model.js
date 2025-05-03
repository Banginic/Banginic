import mongoose from 'mongoose'

const testimonySchema = mongoose.Schema({
    clientName:{
        required:true,
        type:String,
        minLength:3,
        maxLength:25,
    },
    projectName:{
        required: true,
        type:String,
        minLength:5,
        maxLength:25,
        unique:true
    },
    emailAddress:{
        required: true,
        type:String,
        minLength:5,
        maxLength:25,
    },
    message:{
        required: true,
        type:String,
        minLength:5,
        maxLength:250,
    },
    rating:{
        required: true,
        type:Number,
        min:1,
        max:5,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    photo:{
        type:String,
        default:'',
        maxLength:250
    }
},{ timestamp: true})

const TestimonyModel = mongoose.model('Testimonie', testimonySchema)

export default TestimonyModel