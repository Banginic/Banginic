async function validateTestimony(req, res, next){
    console.log(req.body);
    try{

        if(!req.body.clientName) return res.status(400).json({ success: false, message:'Your name is required'})
        if(!req.body.projectName) return res.status(400).json({ success: false, message:'Project name is required'})
        if(!req.body.emailAddress) return res.status(400).json({ success: false, message:'Email address is required'})
        if(!req.body.message) return res.status(400).json({ success: false, message:'Message is required'})
        if(!req.body.rating) return res.status(400).json({ success: false, message:'Rating message is required'})
      
         const {clientName, projectName, emailAddress, message, rating } = req.body
         if(clientName.length < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Name'})
         if(projectName < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Project name'})
         if(emailAddress < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Email address'})
         if(message.length < 15) return res.status(400).json({ success:false, message: 'Please provide a valid testimony'})
         if(rating.length < 1) return res.status(400).json({ success:false, message: 'Please provide a valid rating'})
         
         next()
     }
     catch(ex){
         next(ex)
         console.log(ex.message);
         
     }
}

export default validateTestimony