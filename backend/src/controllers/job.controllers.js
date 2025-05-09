import Job from "../models/job.model.js";
import asynMiddleware from "../middlewares/asyncMiddleware.js";

// CREATE JOB: /api/v2/jobs/create
export const createJob = asynMiddleware(async (req, res) => {
  const { title, location, description, latestDate } = req.body;
  if (!title || !location || !description) {
    return res
      .status(400)
      .json({ success: false, message: "All input fields are required" });
  }
  const lastDate = latestDate ? latestDate : null;
  const job = await Job.create({
    title,
    location,
    description,
  });
  await job.save();
  return res
    .status(201)
    .json({ success: true, message: "Job created successfully" });
});

// GET ALL JOBS: /api/v2/jobs/list
export const getJobs = asynMiddleware(async (req, res) => {
  const jobs = await Job.find({});
  if (!jobs)
    return res
      .status(404)
      .json({ success: true, message: "No jobs Available" });
  
  
  return res.status(200).json({ success: true, message: "All jobs", jobs });
});

// GET SINGLE JOB: /api/v2/jobs/single/:jobId
export const getJob = asynMiddleware(async (req, res) => {
  const { jobId } = req.params;
  if (!jobId)
    return res
      .status(400)
      .json({ success: false, message: "Please provide a job ID" });

  const job = await Job.findById(jobId);
  if (!job)
    return res.status(404).json({ success: false, message: "INVALID JOB ID" });

  return res.status(200).json({ success: true, message: "Job availble", job });
});

// DELETE SINGLE   JOB: /api/v2/jobs/delete/:jobId
export const deleteJob = asynMiddleware(async (req, res) => {
  const { jobId } = req.params;
  if (!jobId)
    return res
      .status(400)
      .json({ success: false, message: "Please provide a job ID" });
  const job = await Job.findById(jobId);
  if (!job)
    return res.status(404).json({ success: false, message: "INVALID JOB ID" });
  await Job.findByIdAndDelete(jobId);

  return res
    .status(202)
    .json({ success: true, message: "Job deleted successfully" });
});
