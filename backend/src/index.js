import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { JWT_SECRET } from './config/env.js'
import  authRouter  from './routes/authRout.js'
import connectToDB from './config/connectToDB.js'
import errorHandler from './middlewares/errorHandler.js'
import messageRouter from './routes/messageRoute.js'
import employeeRouter from './routes/employeeRoute.js'
import testimonyRouter from './routes/testimonyRoute.js'
import projectRouter from './routes/projectRoute.js'
import newsRouter from './routes/newsRoute.js'
import jobRouter from './routes/JobRoute.js'
import newEmployeeRouter from './routes/newEmployeeRouter.js'

if(!JWT_SECRET){
    console.log('FATAL, NO JWT SECRET');
    console.log('Please provide a JWT PRIVATE KEY in the .env.( development | production).local');
}
process.on('uncaughtException', (ex) =>{
    console.log('UNCAUGHT EXCEPTION DETECTED');
    console.log(ex.message, ex);
    process.exit(1)
})

const app = express()

// Middlewares
app.use(cors(['http://localhost:5173', 'http://localhost:5174']))
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))
app.use('/public', express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded('true'))

// Route
app.use('/api/auth', authRouter)
app.use('/api/v2/messages', messageRouter)
app.use('/api/v2/employees', employeeRouter)
app.use('/api/v2/projects', projectRouter)
app.use('/api/v2/testimony', testimonyRouter)
app.use('/api/v2/news', newsRouter)
app.use('/api/v2/jobs', jobRouter)
app.use('/api/v2/jobs/applications', newEmployeeRouter)

// Error handler
app.use(errorHandler)

// config
connectToDB()
export default app
