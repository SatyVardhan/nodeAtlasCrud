const userRouter = require('express').Router();
const userServices = require('../services/user-service');
userRouter  .get('/', userServices.listUsers)
            .post('/', userServices.createUser)
            .post('/login', userServices.loginUser)

module.exports = userRouter;