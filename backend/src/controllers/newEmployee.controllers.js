import asyncMiddleware from '../middlewares/asyncMiddleware.js'
import NewEmployee from '../models/newEmployee.model.js'


//APPLY FOR JOB: /apply/:jobId
export const applyJob = asyncMiddleware ( async ( req, res ) => {
    const { jobId } = req.params
    if(!jobId) return res.status(400).json({ success: false, message: 'No JOB ID PROVIDED'})
    

})