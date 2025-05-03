import { Router } from 'express'
import { createProject, getProject, getProjects, deleteProject } from '../controllers/project.controllers.js'

const projectRouter = Router()

projectRouter.post('/create', createProject)

projectRouter.get('/list', getProjects)

projectRouter.get('/:projectId', getProject)

projectRouter.delete('/delete/:projectId', deleteProject)



export default projectRouter