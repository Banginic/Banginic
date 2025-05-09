import { Router } from 'express'
import upload from '../config/multer.js';

const newEmployeeRouter = Router()

newEmployeeRouter.post('/apply/:jobId', upload.single('cv'), applyJob )


export default newEmployeeRouter;