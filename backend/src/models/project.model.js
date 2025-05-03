import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectName:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true,
        unique:true
    },
    description:{
        type:String,
        minLength:3,
        maxLength:250,
        required:true,
    },
    url:{
        type:String,
        minLength:3,
        maxLength:50,
        required:true,
    },
    category:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true,
        unique:true
    },
    client:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true,
    },
    designer:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true,
    },
    story:{
        type:String,
        minLength:3,
        maxLength:250,
        required:true,
    },
    approach:{
        type:String,
        minLength:3,
        maxLength:250,
        required:true,
    },
    photos:{
        type:Array,
        minLength:1,
        maxLength:4,
        required:true,
    },
}, { timestamp: true })

// use time stamp as the production date in the frontend

const ProjectModel = mongoose.model('Project', projectSchema)

export default ProjectModel