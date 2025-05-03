

export const validateSignUp =  async ( req, res, next ) =>{
    try{
        const { fullName, email, phone, password } = req.body
    if( !fullName)return res.status(400).json({ success:false, statusCode:400, message: 'Please provide a valid name'})
    else if( !email)return res.status(400).json({ success:false, statusCode:400, message: 'Please provide a valid email'})
    else if( !phone)return res.status(400).json({ success:false, statusCode:400, message: 'Please provide a valid phone'})
    else if( !password)return res.status(400).json({ success:false, statusCode:400, message: 'Please provide a valid password'})
    next()
    }
   catch(ex){
    next(ex)
   }
}

export const validateSignIn =  async ( req, res, next ) =>{
    try{
        const { email, password } = req.body
    if( !email)return res.status(400).json({ success:false, statusCode:400, message: 'Please provide a valid email'})
    else if( !password)return res.status(400).json({ success:false, statusCode:400, message: 'Please provide a valid password'})
    next()
    }
   catch(ex){
    next(ex)
   }
}
