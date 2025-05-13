import asynMiddleware from "../middlewares/asyncMiddleware.js";
import NewEmployee from "../models/newEmployee.model.js";
import Job from "../models/job.model.js";
import cloudinary from "../config/cloudinary.js";

// POST APPLICATION -> /api/v2/jobs/applications/create/:jobId
export const createJobApplication = asynMiddleware(async (req, res) => {
  const { jobId } = req.params;
  const { fullName, emailAddress, phone, motivation } = req.body;

  const alreadyApplied = await NewEmployee.findOne({ fullName });
  if (!jobId)
    return res
      .status(400)
      .json({ success: true, message: "Please provide Job ID" });

  const job = await Job.findById(jobId);
  if (!job)
    return res
      .status(404)
      .json({ success: false, message: "No Job Available or Expired" });

  if (alreadyApplied && alreadyApplied.jobId.toString() === jobId)
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
    job: job.title,
    jobId: jobId,
  });
  await newJobApplication.save();
  return res
    .status(201)
    .json({ success: true, message: "Application successfull" });
});

// GET ALL APPLICATIONS -> /api/v2/jobs/applications/list
export const getJobApplications = asynMiddleware(async (req, res) => {
  const jobs = await NewEmployee.find({});

  if (!jobs)
    return res
      .status(200)
      .json({ success: true, message: "No Job Applications Available" });

  return res.status(200).json({ success: true, message: "All Applicatons" });
});

// GET A SINGLE APPLICATION -> /api/v2/jobs/applications/single/:applicationId
export const getJobApplication = asynMiddleware(async (req, res) => {
  const { applicationId } = req.params;

  if (!applicationId)
    return res
      .status(400)
      .json({ success: true, message: "Please provide Application ID" });

  const application = await NewEmployee.findById(applicationId).json({
    success: true,
    message: "Please provide Application ID",
  });
  if (!application)
    return res.status(404).json({
      success: false,
      message: "Invalid Application ID or No Application ",
    });
  return res
    .status(200)
    .json({ success: true, message: "Application Availble", application });
});

// DELETE A SINGLE APPLICATION -> /api/v2/jobs/applications/delete/:applicationId
export const deleteJobApplications = asynMiddleware(async (req, res) => {
  const { applicationId } = req.params;

  if (!applicationId)
    return res
      .status(400)
      .json({ success: true, message: "Please provide Application ID" });

  const application = await NewEmployee.findById(applicationId).json({
    success: true,
    message: "Please provide Application ID",
  });
  if (!application)
    return res.status(404).json({
      success: false,
      message: "Invalid Application ID or No Application ",
    });
  await NewEmployee.findByIdAndDelete(applicationId);
  return res
    .status(202)
    .json({ success: true, message: "Application Deleted successfully" });
});
