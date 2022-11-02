const { userService } = require('../services');

const createUserController = async (req, res) => {
  const { type, message } = await userService.createUserService(req.body);

  if (type === 409) return res.status(409).json({ message });
 return res.status(201).json({ token: message });
};

const getAllUsersController = async (req, res) => {
  const allUsers = await userService.getAllUsersServices();

  return res.status(200).json(allUsers);
};

module.exports = {
  createUserController,
  getAllUsersController,
};
