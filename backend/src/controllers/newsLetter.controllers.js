import asynMiddleware from "../middlewares/asyncMiddleware.js";
import NewsLetterModel from "../models/NewsLetters.model.js";

// CREATE NEWS LETTER: '/api/v2/newsletter/sign-up'
export const createNewsLetter = asynMiddleware(async (req, res) => {
  const { emailAddress } = req.body;
  if (!emailAddress)
    return res.status(400).json({
      success: false,
      message: "Invalid or No Email address Provided",
    });
  const existSubscriber = await NewsLetterModel.findOne({ emailAddress });
  if (existSubscriber)
    return res.status(400).json({
      success: false,
      message: "Already Subscribed.",
    });
  const newsLetter = await NewsLetterModel.create({ emailAddress });
  await newsLetter.save();
  return res.status(201).json({
    success: true,
    message: "Subscribe successfully.",
  });
});

// GET ALL NEW LETTER: '/api/v2/newsletter/list
export const getNewsLetters = asynMiddleware(async (req, res) => {
  const newsLetters = await NewsLetterModel.find({});
  if (!newsLetters)
    return res.status(200).json({
      success: true,
      message: "No Newsletter subcribers available",
    });

  return res.status(200).json({
    success: true,
    message: "Newsletters",
    newsLetters,
  });
});
