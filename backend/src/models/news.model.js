import mongoose from 'mongoose'

const newsSchema = mongoose.Schema({
    subject:{
        type:String,
        required:true,
        maxLength:15
    },
    body:{
        type:String,
        required:true,
        maxLength:80
    }
}, {timestamps: true, minimize: false})

const NewsModel = mongoose.model('New', newsSchema)

export default NewsModel;