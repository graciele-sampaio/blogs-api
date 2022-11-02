const jwt = require('../utils/jwt.util');

const { User } = require('../models');

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        return { type: 400, message: 'Invalid fields' };
    }

    const { password: _, ...userInfo } = user.dataValues;

    const token = jwt.createToken(userInfo);
    
    return { type: null, message: token };
};

module.exports = { validateLogin };