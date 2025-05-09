import { Router } from 'express'
import upload from '../config/multer.js';
import { applyJob } from '../controllers/newEmployee.controllers.js'

const newEmployeeRouter = Router()

newEmployeeRouter.post('/:jobId', upload.single('cv'), applyJob )


export default newEmployeeRouter;