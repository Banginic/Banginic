import mongoose from "mongoose";


const employeeSchema = mongoose.Schema({

    fullName:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true
    },
    position:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true
    },
    qualification:{
        type:String,
        minLength:3,
        maxLength:50,
        required:true
    },
    motivation:{
        type:String,
        minLength:3,
        maxLength:250,
        required:true
    },
    socialLinks:{
        type:Object,
        default:{}
    },
    photo:{
        type:String,
        minLength:3,
        maxLength:250,
        required:true
    },
    hiredDate: {
        type:Date,
        default: Date.now()
    }

}, { timesstamp: true, minimize:false })

const EmployeeModel = mongoose.model('Employee', employeeSchema)
export default EmployeeModel