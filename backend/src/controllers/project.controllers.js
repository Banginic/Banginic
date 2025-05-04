import ProjectModel from "../models/project.model.js";
import asyncHandler from '../middlewares/asyncMiddleware.js'


// CREATE PROJECT /api/v2/projects/create
export const createProject = asyncHandler ( async (req, res ) =>{
  
})

// GET ALL PROJECTS /api/v2/projects/list
export const getProjects = asyncHandler ( async (req, res ) =>{
 return res.json({ success:false, message:'No Projects Available '})
})

// GET A PROJECT /api/v2/projects/:projectId
export const getProject = asyncHandler ( async (req, res ) =>{

})

// REMOVE A PROJECT /api/v2/projects/:projectId
export const deleteProject = asyncHandler ( async (req, res ) =>{

})

