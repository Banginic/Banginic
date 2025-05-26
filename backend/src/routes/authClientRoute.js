import { Router } from 'express'
import authorizeClient from '../middlewares/authrizeClient.middleware.js'
import getClient from '../controllers/getClient.controllers.js'

const authClientRoute = Router()

authClientRoute.get('/', authorizeClient, getClient )

export default authClientRoute