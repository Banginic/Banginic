import { Router } from 'express'
import { createTestimony, deleteTestimony, getTestimonies } from '../controllers/testimony.controllers.js';
import validateTesimony from '../middlewares/validateTestimony.js'
import isAdmin from '../middlewares/isAdmin.js'

const testimonyRouter = Router()

testimonyRouter.post('/create', validateTesimony,  createTestimony)

testimonyRouter.get('/list', getTestimonies)

testimonyRouter.delete('/delete/:testimonyId', isAdmin, deleteTestimony)



export default testimonyRouter;