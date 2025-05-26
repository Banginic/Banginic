import { Router } from "express";
import isAdmin from "../middlewares/isAdmin.js";
import {
  createNewsLetter,
  getNewsLetters,
  deleteNewsLetter,
} from "../controllers/newsLetter.controllers.js";

const newsletterRouter = Router();

newsletterRouter.post("/create", isAdmin, createNewsLetter);

newsletterRouter.get("/list", isAdmin, getNewsLetters);

newsletterRouter.delete("/delete/:newsletterId", isAdmin, deleteNewsLetter);

export default newsletterRouter;
