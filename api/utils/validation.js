module.exports = function validateBody(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Data invalid',
        errors: error.details.map((err) => err.message),
      });
    }

    req.body = value;
    next();
  }
};
