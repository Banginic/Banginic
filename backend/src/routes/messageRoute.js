import { Router } from 'express'
import { createMessage, deleteMessage, getMessage, getMessages } from '../controllers/message.controllers.js';
import validateMessage from '../middlewares/validateMessage.js';
import isAdmin from '../middlewares/isAdmin.js';

const messageRouter = Router()

messageRouter.post('/create', validateMessage, createMessage)

messageRouter.post('/:messageId',isAdmin, getMessage)

messageRouter.get('/list',isAdmin, getMessages)

messageRouter.delete('/delete/:messageId',isAdmin, deleteMessage)



export default messageRouter;