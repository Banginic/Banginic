import { Router} from 'express'
import { validateSignUp, validateSignIn } from '../middlewares/validate.middleware.js';
import { signUp, signIn, authAdmin } from '../controllers/auth.controllers.js';
import isAdmin from '../middlewares/isAdmin.js';


const authRouter = Router()

authRouter.post('/sign-up', validateSignUp, signUp)

authRouter.post('/sign-in', validateSignIn, signIn)

authRouter.get('/me', isAdmin, authAdmin)


export default authRouter;
