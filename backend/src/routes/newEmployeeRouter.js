import { Router } from 'express'
import isAdmin from '../middlewares/isAdmin.js';
import upload from '../config/multer.js';
import { createJobApplication, getJobApplications, getJobApplication, deleteJobApplications } from '../controllers/newEmployee.controllers.js'

const newEmployeeRouter = Router()

newEmployeeRouter.post('/create/:jobId', upload.single('cv'), createJobApplication )

newEmployeeRouter.get('/list', isAdmin, getJobApplications)

newEmployeeRouter.get('/single/:applicationId', isAdmin, getJobApplication)

newEmployeeRouter.delete('/delete/:applicationId', isAdmin, deleteJobApplications)


export default newEmployeeRouter;