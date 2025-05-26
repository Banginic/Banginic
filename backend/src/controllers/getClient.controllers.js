import { JWT_SECRET } from "../config/env.js";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import jwt from "jsonwebtoken";

const getClient = asyncMiddleware(async (req, res) => {
  const user = req.body;
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });
 
  const { password: pass, ...rest  } = user._doc
  return res.status(200).json({
    success: true,
    message: "All good",
    statusCode: 200,
    token,
    user: rest,
  });
});

export default getClient;
