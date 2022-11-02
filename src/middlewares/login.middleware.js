const Joi = require('joi');

const validateDataLogin = (req, res, next) => {
  const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
  });

  const { error } = loginSchema.validate(req.body);

  if (error) {
     return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validateDataLogin,
};