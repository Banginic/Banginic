import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { JWT_SECRET, FRONTEND_URL, ADMIN_URL } from "./config/env.js";
import authRouter from "./routes/authRout.js";
import connectToDB from "./config/connectToDB.js";
import messageRouter from "./routes/messageRoute.js";
import employeeRouter from "./routes/employeeRoute.js";
import testimonyRouter from "./routes/testimonyRoute.js";
import projectRouter from "./routes/projectRoute.js";
import newsRouter from "./routes/newsRoute.js";
import jobRouter from "./routes/JobRoute.js";
import newEmployeeRouter from "./routes/newEmployeeRouter.js";
import newsLetterSubscribersRouter from "./routes/newsLetterSubscribersRoute.js";
import newsletterRouter from "./routes/newsLetterRoute.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import authClientRoute from "./routes/authClientRoute.js";
import sitemapRouter from "./routes/sitemapRoute.js";

if (!JWT_SECRET) {
  console.log("FATAL, NO JWT SECRET");
  console.log(
    "Please provide a JWT PRIVATE KEY in the .env.( development | production).local"
  );
}
process.on("uncaughtException", (ex) => {
  console.log("UNCAUGHT EXCEPTION DETECTED");
  console.log(ex.message, ex);
  process.exit(1);
});

const app = express();
const allowedOrigins =[
      FRONTEND_URL,
      ADMIN_URL,
      "http://localhost:5173",
      "http://localhost:5174",
  ]
// Middlewares
app.use(cors({
  origin: allowedOrigins,
  credentials: true // If using cookies, sessions, or auth headers
}));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded('true'))

// Route
app.get("/", (req, res, next) => {
  res
    .status(200)
    .json({
      success: 200,
      message: "Donnot border Boss! I am fine",
      status: 200,
    });
});
app.use("/api/v2/client/me", authClientRoute);
app.use("/api/auth", authRouter);
app.use("/api/v2/messages", messageRouter);
app.use("/api/v2/employees", employeeRouter);
app.use("/api/v2/projects", projectRouter);
app.use("/api/v2/testimonials", testimonyRouter);
app.use("/api/v2/news", newsRouter);
app.use("/api/v2/jobs", jobRouter);
app.use("/api/v2/jobs/applications", newEmployeeRouter);
app.use("/api/v2/newsletters-subscription", newsLetterSubscribersRouter);
app.use("/api/v2/newsletters", newsletterRouter);
app.use('/sitemap.xml', sitemapRouter)

// Error handler
app.use(errorMiddleware);

// config
connectToDB();
export default app;
