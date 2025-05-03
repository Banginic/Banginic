import { Router } from 'express'
import { createEmployee, getEmployees, deleteEmployee } from '../controllers/employee.controllers.js';
import isAdmin from '../middlewares/isAdmin.js'
import validateEmployee from '../middlewares/validateEmployee.js'

const employeeRouter = Router()

employeeRouter.post('/create', isAdmin, validateEmployee, createEmployee)

employeeRouter.post('/list', isAdmin, getEmployees)

employeeRouter.delete('/delete/:employeeId', isAdmin, deleteEmployee)


export default employeeRouter;