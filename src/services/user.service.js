const { User } = require('../models');

const createUserService = async ({ displayName, email, password, image }) => {
  const compareEmail = await User.findOne({ where: { email } });

  if (compareEmail) {
    return { type: 409, message: 'User already registered' };
  }

  const newUser = await User.create({ displayName, email, password, image });
  console.log('service', newUser);
  return { type: null, message: newUser };
};

module.exports = {
  createUserService,
};
