import { FRONTEND_URL } from "../config/env.js";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import ProjectModel from "../models/project.model.js";

export const getSitemap = asyncMiddleware(async (req, res) => {
  const projects = await ProjectModel.find();
  const staticRoutes = [
    "",
    "about-us",
    "services",
    "works",
    "career",
    "login",
    "contact-us",
  ];
  const staticUrls = staticRoutes
    .map(
      (path) => `
      <url>
        <loc>${FRONTEND_URL}/${path}</loc>
      </url>
    `
    )
    .join("\n");

  const projectUrls = projects
    .map(
      (project) => `
      <url>
        <loc>${baseUrl}/projects/${project._id}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${projectUrls}
    </urlset>`;

     res.header('Content-Type', 'application/xml');
    res.send(sitemap);
});
