import jwt from "jsonwebtoken";
import { JWT_SECRET, ADMIN_EMAIL } from "../config/env.js";
import UserModel from "../models/user.Model.js";

async function isAdmin(req, res, next) {
  console.log('Auth called');
  
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token missing or malformed" });
    }
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded)
      return res
        .status(403)
        .json({ success: false, message: "FORBIDDEN, Please login again" });
    const admin = await UserModel.findById(decoded.userId);

    if (admin.email !== ADMIN_EMAIL)
      return res.status(401).json({ success: false, message: "UNAUTHORIZED3" });
    console.log('Auth Passed');
    next();
  } catch (ex) {
    next(ex);
    console.log("ADMIN VALIDATAION ERROR:", ex.message);
  }
}

export default isAdmin;
