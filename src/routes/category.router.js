const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken } = require('../middlewares/token.middleware');

const router = express.Router();

router.post('/', validateToken, categoryController.createUserController);

module.exports = router;