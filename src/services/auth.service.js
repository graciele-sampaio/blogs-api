const jwt = require('../utils/jwt.util');

const { User } = require('../models');

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        return { type: 400, message: 'Invalid fields' };
    }

    const { password: _, ...userInfo } = user.dataValues;

    const token = jwt.createToken(userInfo);
    
    console.log(token);
    return { type: null, message: token };
};

const validateToken = (token) => {
    if (!token) {
        const e = new Error('Token obrigatório!');
        e.name = 'Token obrigatório';
        throw e;
    }

    const user = jwt.validateToken(token);

    return user;
};

module.exports = { validateLogin, validateToken };