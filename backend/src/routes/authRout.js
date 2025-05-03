import { Router} from 'express'
import { validateSignUp, validateSignIn } from '../middlewares/validate.middleware.js';
import { signUp, signIn } from '../controllers/auth.controllers.js';


const authRouter = Router()

authRouter.post('/sign-up', validateSignUp, signUp)

authRouter.post('/sign-in', validateSignIn, signIn)


export default authRouter;
