import asynMiddleware from "../middlewares/asyncMiddleware.js";
import bcrypt from "bcrypt";
import UserModel from "../models/user.Model.js";
import { NODE_ENV } from "../config/env.js";

// CREATE USER: /api/auth/sign-up
export const signUp = asynMiddleware(async (req, res) => {
  const { fullName, email, phone, password } = req.body;
 


  const existUser = await UserModel.findOne({ email, phone });
  if (existUser)
    return res.json({
      success: false,
      statusCode: 400,
      message: "Account Already Exist",
    });

  const hashedPassword = await bcrypt.hash(password, 10);
  let user = await UserModel.create({
    fullName,
    email,
    phone,
    password: hashedPassword,
  });

  await user.save();
  const token = user.generateToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: NODE_ENV === "production" ? "none" : "strict",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
  const { password: pass, ...rest } = user._doc;
  return res.json({
    success: true,
    statusCode: 201,
    message: ` Account Created Successfully`,
    token,
    user: rest,
  });
});

// LOGIN USER: /api/auth/sign-in
export const signIn = asynMiddleware(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user)
    return res.json({
      success: false,
      statusCode: 400,
      message: "Invalid Email or Password",
    });
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword ) return res.json({ success: false, statusCode: 400, message: 'Invalid Email or Password'})
    
        const token = user.generateToken();
        res.cookie("token", token, {
          httpOnly: true,
          secure: NODE_ENV === "production",
          sameSite: NODE_ENV === "production" ? "none" : "strict",
          maxAge: 1 * 24 * 60 * 60 * 1000,
        });
        const { password: pass, ...rest } = user._doc;
        return res.json({
          success: true,
          statusCode: 200,
          message: ` Login successful`,
          token,
          user: rest,
        });
});

// CHECK AUTH: /api/auth/me
export const authAdmin = asynMiddleware( async (req, res ) => {
 const { admin } = req
 return res.status(200).json({ success:true, message: 'All good!', admin})
})
