const { userSchema } = require('../services/validations/schemas');

const validateDataNewUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateDataNewUser,
};