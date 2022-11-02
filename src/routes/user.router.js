const express = require('express');
const { createUserController } = require('../controllers/user.controller');
const { validateDataNewUser } = require('../middlewares/newUser.middleware');

const router = express.Router();

router.post('/', validateDataNewUser, createUserController);

module.exports = router;