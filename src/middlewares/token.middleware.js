const { verifyToken } = require('../utils/jwt.util');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  const auth = authorization;

  if (!auth) return res.status(401).json({ message: 'Token not found' });
  
  const user = verifyToken(auth);

  if (auth.type === 401) return res.status(401).json({ message: user.message });

  req.user = user.validateToken;

  next();
};

module.exports = { validateToken };