import TestimonyModel from "../models/testimony.model.js";
import UserModel from "../models/user.Model.js";
import asyncHandler from "../middlewares/asyncMiddleware.js";
import cloudinary from "../config/cloudinary.js";

// CREATE TESTIMONY api/v2/testimony/create
export const createTestimony = asyncHandler(async (req, res) => {

  
  const { clientName, projectName, emailAddress, message, rating } = req.body;
  const photo = req.body.photo || "";
  const existUser = await UserModel.findOne({ email: emailAddress });

  const existEmailAddress = await TestimonyModel.findOne({ emailAddress });
  const existProject = await TestimonyModel.findOne({ projectName });
  if (existEmailAddress || existProject)
    return res
      .status(400)
      .json({ success: false, message: "Sorry! testimony already exist." });

        //  Save photo and get URL from cloudinary
        const fileBuffer = req.file.buffer;
        const base64String = fileBuffer.toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${base64String}`;
        const photoUrl = await cloudinary.uploader.upload(dataURI, {
          folder:'testimonies'
        });

  const newTestimony = await TestimonyModel.create({
    clientName,
    projectName,
    emailAddress,
    message,
    rating,
    photo:photoUrl.secure_url || '',
    isVerified: existUser ? true : false,
  });
  await newTestimony.save();

  return res
    .status(201)
    .json({ success: true, message: "Thank you for your testimony" });
});

// GET ALL TESTIMONY api/v2/testimony/list
export const getTestimonies = asyncHandler(async (req, res) => {
  const testimonies = await TestimonyModel.find({});
  if (!testimonies)
    return res
      .status(404)
      .json({ success: false, message: "Oops sorry! No testimony found" });

  return res
    .status(200)
    .json({ success: true, message: "Success", testimonies });
});

// DELETE A TESTIMONY api/v2/testimony/delete/:testimonyId
export const deleteTestimony = asyncHandler(async (req, res) => {
  const { testimonyId } = req.params;
  if (!testimonyId)
    return res
      .status(400)
      .json({ success: false, message: "Please submit testimony ID" });

  const testimony = await TestimonyModel.findById(testimonyId);
  if (!testimony)
    return res
      .status(404)
      .json({ success: false, message: "No testimony found with this ID" });

  await TestimonyModel.findByIdAndDelete(testimonyId);
  return res.json({ success: true, message: "Testimony deleted successfully" });
});
