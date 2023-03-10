const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router.js');
const categoryRouter = require('./category.router');
const blogPostRouter = require('./blogPost.router');

const routers = express.Router();

routers.use('/login', authRouter);

routers.use('/user', userRouter);

routers.use('/categories', categoryRouter);

routers.use('/post', blogPostRouter);

module.exports = routers;