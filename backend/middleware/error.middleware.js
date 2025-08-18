const errorHandler = (err, req, res, next) => {
  if (err.name === "Validation Error") {
    const message = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: message,
    });
  }
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: "duplicate field value entered",
    });
  }
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};

export default errorHandler;
