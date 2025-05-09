import { Router } from 'express'
import isAdmin from '../middlewares/isAdmin.js'
import { createJob, getJobs, getJob, deleteJob } from '../controllers/job.controllers.js'

const jobRouter = Router()

jobRouter.post('/create', isAdmin, createJob)

jobRouter.get('/list', getJobs)

jobRouter.get('/single/:jobId', getJob)

jobRouter.delete('/delete/:jobId', isAdmin, deleteJob)






export default jobRouter