const authService = require('../services/auth.service');

const loginAuth = async (req, res) => {
    const { type, message } = await authService.validateLogin(req.body);
  
    if (type) return res.status(400).json({ message });
   
    res.status(200).json({ token: message });
  };

module.exports = { loginAuth };