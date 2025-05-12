import { Router } from 'express'
import { createNewsLetter, getNewsLetters } from '../controllers/newsLetter.controllers.js'
import isAdmin from '../middlewares/isAdmin.js'



const newsLetterRouter = Router();


newsLetterRouter.post('/create', createNewsLetter )

newsLetterRouter.get('/list', isAdmin, getNewsLetters)


export default (newsLetterRouter)