const express = require('express');
const { createUserController, getAllUsersController } = require('../controllers/user.controller');
const { validateDataNewUser } = require('../middlewares/newUser.middleware');
const { validateToken } = require('../middlewares/token.middleware');

const router = express.Router();

router.get('/', validateToken, getAllUsersController);
router.post('/', validateDataNewUser, createUserController);

module.exports = router;