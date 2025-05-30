import { Router } from "express";
import { getSitemap } from "../controllers/sitemap.controllers.js";

const sitemapRouter = Router();

sitemapRouter.get("/", getSitemap);

export default sitemapRouter;
