import asynMiddleware from "../middlewares/asyncMiddleware.js";
import NewsLetterSubscribersModel from "../models/newsLetterSubscribers.model.js";

// CREATE NEWS LETTER: '/api/v2/newsletter/create'
export const createNewsletter = asynMiddleware(async (req, res) => {
  
  const { emailAddress } = req.body;
  if (!emailAddress)
    return res.status(400).json({
      success: false,
      message: "Invalid or No Email address Provided",
    });
  const existSubscriber = await NewsLetterSubscribersModel.findOne({ emailAddress });
  if (existSubscriber)
    return res.json({ statusCode: 400,
      success: false,
      message: "Already Subscribed.",
    });
  const newsLetter = await NewsLetterSubscribersModel.create({ emailAddress });
  await newsLetter.save();
  return res.status(201).json({
    success: true,
    message: "Subscribe successfully.",
  });
});

// GET ALL NEW LETTER: '/api/v2/newsletter/list
export const getNewsletters = asynMiddleware(async (req, res) => {
  const newsLetters = await NewsLetterSubscribersModel.find({});
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
// GET ALL NEW LETTER: '/api/v2/newsletter/list
export const deleteNewsletter = asynMiddleware(async (req, res) => {
  const { newsLetterId } = req.params

  if (!newsLetterId)
    return res.status(400).json({
  success: false,
  message: "Invalid Newsletter ID",
});

const newsLetter = await NewsLetterSubscribersModel.findByIdAndDelete(newsLetterId);
  return res.status(203).json({
    success: true,
    message: "Newsletter deleted successfully.",
    
  });
});
