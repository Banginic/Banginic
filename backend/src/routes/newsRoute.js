import { Router } from 'express'
import isAdmin from '../middlewares/isAdmin.js'
import { createNews, getNews, deleteNews } from '../controllers/news.controllers.js'

const newsRouter =  Router()

newsRouter.post('/create', isAdmin, createNews )

newsRouter.get('/list', getNews )

newsRouter.delete('/delete/:newsId', isAdmin, deleteNews )


export default newsRouter;