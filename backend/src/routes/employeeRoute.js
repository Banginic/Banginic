import { Router } from 'express'
import { createEmployee, getEmployees, getEmployee, deleteEmployee } from '../controllers/employee.controllers.js';
import isAdmin from '../middlewares/isAdmin.js'
import validateEmployee from '../middlewares/validateEmployee.js'
import upload from '../config/multer.js';

const employeeRouter = Router()

employeeRouter.post('/create', upload.single('photo'), isAdmin, validateEmployee, createEmployee)

employeeRouter.get('/list', isAdmin, getEmployees)

employeeRouter.get('/single/:employeeId', isAdmin, getEmployee)

employeeRouter.delete('/delete/:employeeId', isAdmin, deleteEmployee)


export default employeeRouter;