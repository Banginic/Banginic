import asynMiddleware from "../middlewares/asyncMiddleware.js";
import NewsLetterModel from "../models/newsletter.model.js";

// CREATE NEWSLETTER: /api/v2/newsletters/create
export const createNewsLetter = asynMiddleware(async (req, res) => {
  console.log(req.body);
  
  const { subject, body } = req.body;
  if (!subject || !body)
    return res
      .status(400)
      .json({ success: false, message: "All field are requird." });

  const newsletter = await NewsLetterModel.create({ subject, body });
  await newsletter.save();

  return res
    .status(201)
    .json({ success: true, message: "News letter created successfully." });
});

// GET ALL NEWSLETTER: /api/v2/newsletters/cr
export const getNewsLetters = asynMiddleware(async (req, res) => {
  const newsletters = await NewsLetterModel.find({});
  if (!newsletters)
    return res
      .status(404)
      .json({ success: false, message: "No Newsletter Available" });
  return res
    .status(200)
    .json({ success: true, message: "success", newsletters} );
});

// DELETE NEWSLETTER: /api/v2/newsletters/delete/:id
export const deleteNewsLetter = asynMiddleware(async (req, res) => {
  const { newsletterId } = req.params;
  if (!newsletterId)
    return res
      .status(400)
      .json({ success: false, message: "Newsleter ID requird." });

  const newsLetter = await NewsLetterModel.findById(newsletterId);
  if (!newsLetter)
    return res.status(404).json({
      success: false,
      message: "Invalid newsletter ID or no no newsletter.",
    });

  await NewsLetterModel.findByIdAndDelete(newsletterId);

  return res
    .status(203)
    .json({ success: false, message: "Newsletter deleted successfully." });
});
