import { Router } from 'express'
import isAdmin from '../middlewares/isAdmin'

const newsRouter =  Router()

newsRouter.post('/create', isAdmin, createNews )

newsRouter.get('/list', isAdmin, getNews )

newsRouter.delete('/delete/newsId', isAdmin, deleteNews )


export default newsRouter;