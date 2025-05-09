

import mongoose from "mongoose";

const NewEmployee = mongoose.model(
  "New employee",
  new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
      maxLength: 50,
    },
    emailAddress: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxLength: 15,
    },
    motivation: {
      type:String,
      maxLength:500,
      required: true
    },
    cvPath: {
      type:String,
      default: ''
    },
    job:{
      type:String,
      required: true,
    },
    jobId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true
    }
  }, { timestamps: true, minimize: false})
);

export default NewEmployee;
