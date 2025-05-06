import multer from 'multer'

// INCASE to store file statically
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{   
        cb(null, multer.memoryStorage())
    }, 
    filename: (req, file, cb ) => {
        console.log('file:', file);
        cb(null, file.fieldname + '-' + file.originalname.split(' ')[0] + '.png')
    }
})

const upload = multer({storage: multer.memoryStorage()})

export default upload