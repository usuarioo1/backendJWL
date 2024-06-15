const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'nombre no ingresado',
        trim: true,
        lowercase: true,
        minLength: 4,
    },
    mail: {
        type: String,
        trim: true,
        required: true,
        match: [
            /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
        ],
    },
    password: {
        type: String,
        required: true,
        match: [
            /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
        ],
    },
    salt: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.methods.encriptarPassword = function (password) {
    this.salt = crypto.randomBytes(10).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 10, 'sha512').toString('hex');
};

userSchema.methods.validarPassword = function (password) {
    const encriptar = crypto.pbkdf2Sync(password, this.salt, 10000, 10, 'sha512').toString('hex');
    return encriptar === this.password;
};

userSchema.methods.generadorDeToken = function () {
    const payload = {
        id: this._id,
        name: this.name,
        isAdmin: this.isAdmin,
    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '15m' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
