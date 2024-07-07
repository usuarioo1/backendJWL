// routes/userRoutes.js
const express = require('express');
const routerAdmin = express.Router();
const { getToken, auth, adminAuth } = require('../middleware/auth');
const User = require('../models/userSchema'); // Asegúrate de tener el modelo User correctamente configurado

// Ruta para actualizar el campo isAdmin de un usuario
routerAdmin.put('/user/:id/admin', getToken, auth, adminAuth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        user.isAdmin = req.body.isAdmin;
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = routerAdmin;
