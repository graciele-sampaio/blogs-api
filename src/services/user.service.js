const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');

const createUserService = async ({ displayName, email, password, image }) => {
  const compareEmail = await User.findOne({ where: { email } });

  if (compareEmail) {
    return { type: 409, message: 'User already registered' };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const newToken = createToken(newUser);
  return { type: null, message: newToken };
};

const getAllUsersServices = async () => {
  const getAll = await User.findAll({ attributes: { exclude: ['password'] } });
  return getAll;
};

const getUserByIdServices = async (id) => {
  const getById = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!getById) return { type: 404, message: 'User does not exist' };
  return { type: null, message: getById };
};

module.exports = {
  createUserService,
  getAllUsersServices,
  getUserByIdServices,
};
