const express = require('express');
const {
    loginRegister,
    editUser,
    deleteUser,
    getUser,
    loginUser,
    getProfile,
    getVerifyUser
} = require('../controllers/userController');
const { getToken, auth } = require('../middleware/auth'); // Importa el middleware

const userRouter = express.Router();

userRouter.route("/users").get(getUser);

userRouter.route("/users/:id").put(editUser).delete(deleteUser).get(getProfile);

userRouter.route("/login").post(loginUser);

userRouter.route("/register").post(loginRegister);

// Aplica el middleware de autenticación a la ruta de verificación de usuario
userRouter.route("/verifyUser").get(getToken, auth, getVerifyUser);

module.exports = userRouter;
