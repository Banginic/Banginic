import mongoose from "mongoose";

const NewsLetterModel = mongoose.model(
  "NewsLetter subcriber",
  {
    emailAddress: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true, minimize: false }
);
export default NewsLetterModel;
