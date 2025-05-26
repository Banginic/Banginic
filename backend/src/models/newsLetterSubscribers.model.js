import mongoose from "mongoose";

const NewsLetterSubscribersModel = mongoose.model("NewsLetter subcriber", {
  emailAddress: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
export default NewsLetterSubscribersModel;
