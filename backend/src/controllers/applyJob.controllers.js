import asynMiddleware from "../middlewares/asyncMiddleware.js";
import NewEmployee from "../models/newEmployee.model.js";
import cloudinary from "../config/cloudinary.js";

// CREATE APPLICATION: /api/v2/jobs/application/create/:jobId
export const createJobApplication = asynMiddleware(async (req, res) => {
  const { jobId } = req.params;
  const { fullName, emailAddress, phone, motivation } = req.body;

  const alreadyApplied = await NewEmployee.findOne({ fullName });
  if (alreadyApplied && alreadyApplied.job === jobId)
    return res
      .status(400)
      .json({ success: false, message: "You Have Already Applied" });

  //  Save cv and get URL from cloudinary
  const fileBuffer = req.file.buffer;
  const base64String = fileBuffer.toString("base64");
  const dataURI = `data:${req.file.mimetype};base64,${base64String}`;
  const cvUrl = await cloudinary.uploader.upload(dataURI, {
    folder: "Job applications",
  });
  if (!cvUrl)
    return res
      .status(500)
      .json({ success: false, message: "Unable to save cv to database" });
  const newJobApplication = await NewEmployee.create({
    fullName,
    emailAddress,
    phone,
    motivation,
    cvPath: cvUrl.secure_url,
    job: jobId,
  });
  await newJobApplication.save();
  return res
    .status(201)
    .json({ success: true, message: "Application successfull" });
});
