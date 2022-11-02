const express = require('express');
const authController = require('../controllers/auth.controller');
const { validateBody } = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/', validateBody, authController.loginAuth);

module.exports = router;