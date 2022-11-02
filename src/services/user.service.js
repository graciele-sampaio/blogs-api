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

module.exports = {
  createUserService,
};
