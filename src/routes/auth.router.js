const express = require('express');
const { authController } = require('../controllers');
const { validateDataLogin } = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/', validateDataLogin, authController.loginAuth);

module.exports = router;