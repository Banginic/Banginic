import app from "../index.js";
import mongoose from "mongoose";
import { MONGODB_URI, PORT, NODE_ENV } from "../config/env.js";

function connectToDB(){
  mongoose.connect(MONGODB_URI)
  .then(() =>{
    console.log('Connected to database...');
    
    app.listen(PORT, () =>{
        console.log(`App is running in ${NODE_ENV} mode at http://localhost:${PORT}`);
    })
  })
  .catch(() =>{
    console.error('Failed to connect to database');
  })
}
export default connectToDB;