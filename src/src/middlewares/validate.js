/**
 * Validation Middleware
 * Wraps Joi/Zod schema validation and returns
 * a clean 400 response with the first error message.
 */

module.exports = (schema) => (req, res, next) => {
  const options = {
    abortEarly: true,       // return only the first error
    allowUnknown: false,    // reject unknown fields
    stripUnknown: true      // remove fields not in schema
  };

  const { error, value } = schema.validate(req.body, options);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  req.body = value; // sanitized validated body  
  next();
};
