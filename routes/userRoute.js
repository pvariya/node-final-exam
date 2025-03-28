const express = require('express');
const { signUp, signIn, logOut } = require('../controller/userController');
const userRouter = express.Router()
userRouter.post('/register', signUp)
userRouter.post("/login", signIn)
userRouter.post("/logout", logOut)
module.exports = userRouter;