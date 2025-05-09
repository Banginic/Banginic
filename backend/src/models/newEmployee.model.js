import mongoose from 'mongoose'

const NewEmployee = mongoose.model('Employee', new mongoose.Schema({
  fullName: String,
  emailAddress: String,
  phone: String,
  motivation: String,
  cvPath: String,
}));

export default NewEmployee