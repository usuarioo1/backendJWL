const express = require('express');
const {
    loginRegister,
    editUser,
    deleteUser,
    getUser,
    loginUser,
    getProfile,
    getVerifyUser,
    updateAdminStatus // Nuevo controlador para actualizar el estado de admin
} = require('../controllers/userController');
const { getToken, auth, adminAuth } = require('../middleware/auth'); // Importa el middleware

const userRouter = express.Router();

userRouter.route("/users").get(getUser);

userRouter.route("/users/:id").put(editUser).delete(deleteUser).get(getProfile);

userRouter.route("/login").post(loginUser);

userRouter.route("/register").post(loginRegister);

// Aplica el middleware de autenticación a la ruta de verificación de usuario
userRouter.route("/verifyUser").get(getToken, auth, getVerifyUser);

// Nueva ruta para actualizar el estado de admin de un usuario
userRouter.route("/users/:id/admin").put(getToken, auth, adminAuth, updateAdminStatus);

module.exports = userRouter;

