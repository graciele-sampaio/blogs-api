const { verifyToken } = require('./verifyToken.middleware');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  const auth = authorization;

  if (!auth) return res.status(401).json({ message: 'Token not found' });
  
  const tokenIsValid = verifyToken(auth);

  if (tokenIsValid.type === 401) return res.status(401).json({ message: tokenIsValid.message });

  req.user = tokenIsValid;

  next();
};

module.exports = { validateToken };