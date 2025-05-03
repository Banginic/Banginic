import jwt from 'jsonwebtoken'
import { JWT_SECRET }  from '../config/env.js'
import { jwtPrivateKey } from '../../../../Projects/vidly/config/env.js'

export function auth(req, res, next){
    const token = req.header('token')
    if(!token ) return res.status(401).send('Access denaied. No token provided!')
        try{
    const decoded = jwt.verify(token, jwtPrivateKey);
    req.user = decoded;
    next()
     }
     catch(err){
        res.status(400).send('Invalid token!')
     }
}                                                                                                                                                                         