const { userService } = require('../services');

const createUserController = async (req, res) => {
  const { type, message } = await userService.createUserService(req.body);

  if (type === 409) return res.status(409).json({ message });
 return res.status(201).json({ token: message });
};

module.exports = {
  createUserController,
};
