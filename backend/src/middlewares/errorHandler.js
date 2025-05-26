function errorHandler(err, req, res, next) {
  console.log(err);
  
  if (err.code === 11000) {
    console.log("Duplicate key error: ", err.keyValue);
    const message = Object.values(err.keyValue)
    return res
      .status(400)
      .json({ success: false, message: `${message[0]} already exist` });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.log(err.code);

  return res.status(statusCode).json({ success: false, message, statusCode });
}

export default errorHandler;
