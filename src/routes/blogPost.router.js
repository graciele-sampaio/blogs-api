const express = require('express');
const { blogPostController } = require('../controllers');
const { validateToken } = require('../middlewares/token.middleware');

const router = express.Router();

router.get('/', validateToken, blogPostController.getAllBlogPostController);

module.exports = router;
