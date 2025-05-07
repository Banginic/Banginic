import NewsModel from "../models/news.model.js";
import asynMiddleware from "../middlewares/asyncMiddleware.js";

// CREATE NEWS: /api/v2/news/create
export const createNews = asynMiddleware(async (req, res) => {
  const { subject, body } = req.body;
  if ((!subject, body))
    return res
      .status(400)
      .json({ success: false, messsage: "Invalid subject or news body" });

  //   Delete existing news if available
  const existNews = await NewsModel.find({});
  if (existNews) {
    await NewsModel.findByIdAndDelete(existNews[0]._id);
  }
  let news = await NewsModel.create({
    subject,
    body,
  });
  await news.save();
  return res
    .status(201)
    .json({ success: true, message: "News created successfully", news });
});

// GET NEWS: /api/v2/news/list
export const getNews = asynMiddleware(async (req, res) => {
  const news = await NewsModel.find({});
  if (!news)
    return res.status.json({ success: true, message: "No News Available" });

  return res.status(200).json({ success: true, message: "All news", news });
});

// DELETE NEWS: /api/v2/news/delete/:newsId
export const deleteNews = asynMiddleware(async (req, res) => {
  const { newsId } = req.params;
  if (!newsId)
    return res
      .status(400)
      .json({ success: false, message: "Invalid news ID", news: null });

  const news = await NewsModel.findById(newsId);
  if (!news)
    return res
      .status(404)
      .json({
        success: false,
        message: "Invalid news ID or No News Available",
        news: null,
      });

  await NewsModel.findByIdAndDelete(newsId);
});
