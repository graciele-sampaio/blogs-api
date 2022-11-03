const express = require('express');
const { userController } = require(
'../controllers',
);
const { validateDataNewUser } = require('../middlewares/newUser.middleware');
const { validateToken } = require('../middlewares/token.middleware');

const router = express.Router();

router.get('/', validateToken, userController.getAllUsersController);
router.get('/:id', validateToken, userController.getUserByIdController);
router.post('/', validateDataNewUser, userController.createUserController);

module.exports = router;