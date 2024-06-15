const express = require('express');
const {loginRegister, editUser, deleteUser, getUser, loginUser, getProfile, getVerifyUser} = require('../controllers/userController')

const userRouter = express.Router();

userRouter.route("/users").get( getUser);

userRouter.route("/users/:id").put(editUser).delete(deleteUser).get(getProfile);

userRouter.route("/login").post(loginRegister);

userRouter.route('verifyUser').get(getVerifyUser)

module.exports = userRouter;



