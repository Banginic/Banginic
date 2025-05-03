async function validateEmployee(req, res, next){
    try{

        if(!req.body.fullName) return res.status(400).json({ success: false, message:'Full Name is required'})
        if(!req.body.position) return res.status(400).json({ success: false, message:'Position is required'})
        if(!req.body.qualification) return res.status(400).json({ success: false, message:'Qualification is required'})
        if(!req.body.motivation) return res.status(400).json({ success: false, message:'Motivation message is required'})
        if(!req.body.socialLinks) return res.status(400).json({ success: false, message:'Social links are required'})
        if(!req.body.photo) return res.status(400).json({ success: false, message:'Photo is required'})
 
         const {fullName, position, qualification, motivation, socialLinks, photo } = req.body
         if(fullName.length < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Full name'})
         if(position < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Position'})
         if(socialLinks.length < 1) return res.status(400).json({ success:false, message: 'Please provide valid social links'})
         if(motivation.length < 15) return res.status(400).json({ success:false, message: 'Please provide a valid motivation'})
         if(photo.length < 10) return res.status(400).json({ success:false, message: 'Please provide a valid photo'})
         
         next()
     }
     catch(ex){
         next(ex)
         console.log(ex.message);
         
     }
}

export default validateEmployee