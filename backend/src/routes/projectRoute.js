import { Router } from 'express'
import { createProject, getProject, getProjects, deleteProject } from '../controllers/project.controllers.js'
import upload from '../config/multer.js'
import isAdmin from '../middlewares/isAdmin.js'

const projectRouter = Router()




projectRouter.post('/create', isAdmin, upload.array('images', 4) , createProject)

projectRouter.get('/list', getProjects)

projectRouter.get('/single/:projectId', getProject)

projectRouter.delete('/delete/:projectId', isAdmin, deleteProject)



export default projectRouter