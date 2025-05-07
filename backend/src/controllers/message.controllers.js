import MessageModel from "../models/message.model.js";
import UserModel from "../models/user.Model.js";
import asyncHandler from "../middlewares/asyncMiddleware.js";

// CREATE MESSAGE: /api/v2/messages/create
export const createMessage = asyncHandler(async (req, res) => {
  const { fullName, emailAddress, phoneNumber, service, message } = req.body;
  
  const newMessage = await MessageModel.create({
    fullName,
    emailAddress,
    phoneNumber,
    service,
    message,
  });
  await newMessage.save();
  const existUser = await UserModel.findOne({ email: emailAddress });
  if (existUser) {
    await UserModel.findByIdAndUpdate(existUser._id, {
      $push: { messages: newMessage._id },
    });
  }
   console.log('ended');
   
  return res.status(201).json({
    success: true,
    message: "Message sent successfully",
    statusCode: 201,
  });
});

// GET ALL MESSAGES: /api/v2/messages/list
export const getMessages = asyncHandler(async (req, res) => {
  const messages = await MessageModel.find({});

  if(messages.length < 1) return res.status(200).json({ success: true, message: 'No message available', messages: null})
  return res
    .status(200)
    .json({
      success: false,
      statusCode: 200,
      message: "All messages",
      messages,
    });
});

// GET A MESSAGE: /api/v2/messages/:messageId
export const getMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  if (!messageId)
    return res
      .status(400)
      .json({ succss: false, message: "Invalid messageId" });
  const message = await MessageModel.findById(messageId);
  if (!message)
    return res
      .status(404)
      .json({ succss: false, message: "Message not found" });
  return res
    .status(200)
    .json({ success: true, message: "Single message", message });
});
// DELETE A MESSAGE: /api/v2/messages/:messageId
export const deleteMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  if (!messageId)
    return res
      .status(400)
      .json({ succss: false, message: "Invalid messageId" });
  const message = await MessageModel.findById(messageId);
  if (!message)
    return res
      .status(404)
      .json({ succss: false, message: "Message not found" });
  await MessageModel.findByIdAndDelete(messageId);
  return res
    .status(200)
    .json({ success: true, message: "Message deleted successfully" });
});
