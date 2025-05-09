import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        maxLength:50,
        required: true
    },
    postedDate:{
        type:Date,
        default:Date.now()
    },
    latestDate:{
        type:Date,
        default: () => {
            const date = new Date();
            date.setMonth(date.getMonth() + 2)
            return date
        }

    },
    location:{
        type:String,
        maxLength: 50,
        requird: true
    },
    description:{
        type:String,
        maxLength: 500
    }

}, { timestamp: true, minimize:false})

const Job = mongoose.model('Job', jobSchema)

export default Job