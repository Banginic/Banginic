import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  PORT,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  NODE_ENV,
  MONGODB_URI,
  JWT_SECRET,
} = process.env;
