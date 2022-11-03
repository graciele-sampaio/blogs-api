const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken } = require('../middlewares/token.middleware');

const router = express.Router();

router.get('/', validateToken, categoryController.getAllCategoriesController);
router.post('/', validateToken, categoryController.createCategoryController);

module.exports = router;