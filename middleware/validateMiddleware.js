export const validate = (req, res, next) => {

  const errors = [];


  if (!req.body) {
    errors.push("Request body is required");
  }


  if (errors.length > 0) {

    return res.status(400).json({
      success: false,
      errors,
    });

  }


  next();

};