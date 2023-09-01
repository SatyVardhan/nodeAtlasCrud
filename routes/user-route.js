const userRouter = require('express').Router();
const userServices = require('../services/user-service');
userRouter  .get('/', userServices.listUsers)
            .post('/', userServices.createUser)
            .put('/', userServices.updateUser)

module.exports = userRouter;