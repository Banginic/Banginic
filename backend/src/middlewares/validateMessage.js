function validateMessage(req, res, next) {
    try{

       if(!req.body.fullName) return res.status(400).json({ success: false, message:'Full Name is required'})
       if(!req.body.emailAddress) return res.status(400).json({ success: false, message:'Email address is required'})
       if(!req.body.phoneNumber) return res.status(400).json({ success: false, message:'Phone number is required'})
       if(!req.body.service) return res.status(400).json({ success: false, message:'Service is required'})
       if(!req.body.message) return res.status(400).json({ success: false, message:'Message is required'})

        const {fullName, emailAddress, phoneNumber, service, message } = req.body
        if(fullName.length < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Full name'})
        if(emailAddress < 6) return res.status(400).json({ success:false, message: 'Please provide a valid Email address'})
        if(phoneNumber.length < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Phone number'})
        if(service.length < 3) return res.status(400).json({ success:false, message: 'Please provide a valid Service'})
        if(message.length < 10) return res.status(400).json({ success:false, message: 'Please provide a valid Message'})
        
        next()
    }
    catch(ex){
        next(ex)
        console.log(ex.message);
        
    }
    
}

export default validateMessage