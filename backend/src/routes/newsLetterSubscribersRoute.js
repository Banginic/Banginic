import { Router } from "express";
import {
  createNewsletter,
  deleteNewsletter,
  getNewsletters,
} from "../controllers/newsletterSubscribers.controllers.js";
import isAdmin from "../middlewares/isAdmin.js";

const newsLetterSubscribersRouter = Router();

newsLetterSubscribersRouter.post("/create", createNewsletter);

newsLetterSubscribersRouter.get("/list", isAdmin, getNewsletters);

newsLetterSubscribersRouter.delete(
  "/delete/:newsLetterId",
  isAdmin,
  deleteNewsletter
);

export default newsLetterSubscribersRouter;
