const User = require('../models/userSchema');
const crypto = require('crypto');

const loginRegister = async (req, res) => {
    try {
        if (!req.body) {
            throw new Error('Cuerpo de la solicitud vacío');
        }

        const { mail, password } = req.body;

        if (!mail || !password) {
            throw new Error('Correo y contraseña son requeridos');
        }

        const useMail = await User.findOne({ mail });
        if (useMail) {
            throw new Error('Este correo está en uso');
        }

        const newUser = new User({ mail, password });
        newUser.encriptarPassword(password);
        await newUser.save();

        res.status(200).json({
            success: true,
            message: "Usuario creado",
            info: newUser,
            token: newUser.generadorDeToken()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor", error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Esta es tu lista de usuarios",
            success: true,
            info: users,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const getInfouser = await User.findById(id).select('-password -salt');
        res.json({
            success: true,
            info: getInfouser
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const contain = req.body;
        const updateUser = await User.findByIdAndUpdate(id, contain, { new: true });
        res.json({ success: true, message: "Usuario actualizado", info: updateUser });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al editar usuario");
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const delUser = await User.findByIdAndDelete(id);
        res.json({ success: true, message: "Usuario eliminado", info: delUser });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar usuario");
    }
};

const loginUser = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await User.findOne({ mail });

        if (!user) {
            throw new Error("Usuario no existe");
        }

        const verificarPassword = user.validarPassword(password);
        if (!verificarPassword) {
            throw new Error('Email o contraseña inválidos, verifique por favor');
        }

        res.json({
            success: true,
            message: "Ingreso con éxito",
            token: user.generadorDeToken()
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getVerifyUser = async (req, res) => {
    try {
        const { id } = req.auth;
        const getInfouser = await User.findById(id).select('-password -salt');
        res.json({
            success: true,
            info: getInfouser
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { loginRegister, getUser, editUser, deleteUser, loginUser, getProfile, getVerifyUser };
