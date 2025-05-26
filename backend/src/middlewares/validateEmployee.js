async function validateEmployee(req, res, next){
  console.log(req.body);
  console.log(req.file);
  
    
    try{
        if(!req.body.fullName) return res.status(400).json({ success: false, message:'Full Name is required'})
        if(!req.body.position) return res.status(400).json({ success: false, message:'Position is required'})
        if(!req.body.qualification) return res.status(400).json({ success: false, message:'Qualification is required'})
        if(!req.body.motivation) return res.status(400).json({ success: false, message:'Motivation message is required'})
        if(!req.body.socialLinks) return res.status(400).json({ success: false, message:'Social links are required'})
        if(!req.file) return res.status(400).json({ success: false, message:'Photo is required'})
 
         const {fullName, position, qualification, motivation, socialLinks, photo } = req.body
         if(fullName.length < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Full name'})
         if(position < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Position'})
         
         next()
     }
     catch(ex){
         next(ex)
         console.log(ex.message);
         
     }
}

export default validateEmployee