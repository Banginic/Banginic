import ProjectModel from "../models/project.model.js";
import asyncHandler from "../middlewares/asyncMiddleware.js";
import cloudinary from "../config/cloudinary.js";

// CREATE PROJECT /api/v2/projects/create
export const createProject = asyncHandler(async (req, res) => {
  // Assumed body has been validated
  const { projectName, category, description, url, designer, story, approach } =
    req.body;
  const existProject = await ProjectModel.findOne({ projectName });
  if (existProject)
    return res.json({
      success: false,
      message: "Project already exist",
      statusCode: 400,
    });

  //  create an array of images and filter the undefined images
  const images = req.files.filter((image) => image !== undefined);

  //  map through all images and create a url with cloudinary
  // return the url of the images
  let imagesUrl = await Promise.all(
    images.map(async (item) => {
      const fileBuffer = item.buffer;
      const base64String = fileBuffer.toString("base64");
      const dataURI = `data:${item.mimetype};base64,${base64String}`;

      let result = await cloudinary.uploader.upload(dataURI, {
        resource_type: "image",
        folder: "projects"
      });
      return result.secure_url;
    })
  );
  //   Save to database;
  let project = new ProjectModel({
    projectName,
    category,
    description,
    url,
    designer,
    story,
    approach,
    photos: imagesUrl,
  });
  await project.save();

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Project uploaded successfully.",
  });
});

// GET ALL PROJECTS /api/v2/projects/list
export const getProjects = asyncHandler(async (req, res) => {
  const projects = await ProjectModel.find({});
  if (projects.length < 1) {
    return json({
      success: false,
      message: "No Projects available",
      statusCode: 404,

    });
  }
  return res.status(200).json({
    success: "true",
    message: "All Projects ",
    statusCode: 200,
    projects,
  });
});

// GET A PROJECT /api/v2/projects/:projectId
export const getProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  if (!projectId)
    return res.json({
      success: false,
      message: "Please provide project ID",
      statusCode: 400,
    });

  const validProjectId = await ProjectModel.findById(projectId);
  if (!validProjectId)
    return res.json({
      success: false,
      message: "Invalid project ID",
      statusCode: 400,
    });
  const project = await ProjectModel.findById(projectId);
  if (!project)
    return res.json({
      success: false,
      message: "Project not found",
      statusCode: 404,
    });
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Project Available",
    project,
  });
});

// REMOVE A PROJECT /api/v2/projects/:projectId
export const deleteProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  if (!projectId)
    return res.json({
      success: false,
      message: "Please provide project ID",
      statusCode: 400,
    });

  const validProjectId = await ProjectModel.findById(projectId);
  if (!validProjectId)
    return res.json({
      success: false,
      message: "Invalid project ID",
      statusCode: 400,
    });
  await ProjectModel.findByIdAndDelete(projectId);
  return res.status(203).json({
    success: true,
    statusCode: 203,
    message: "Project deleted successfully.",
  });
});
