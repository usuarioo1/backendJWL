// middleware/auth.js;
const { expressjwt } = require('express-jwt');
require('dotenv').config();

const getToken = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        const [type, token] = authorization.split(' ');
        if (type === 'Bearer') {
            req.token = token;
            next();
        } else {
            res.status(401).send('Token no válido');
        }
    } else {
        res.status(401).send('No se proporcionó un token');
    }
};

const auth = expressjwt({
    secret: process.env.SECRET,
    algorithms: ['HS256'],
    getToken: req => req.token
});

const adminAuth = (req, res, next) => {
    const { user } = req;
    if (user && user.isAdmin) {
        next();
    } else {
        res.status(403).send('Acceso denegado. Solo administradores.');
    }
};

module.exports = { getToken, auth, adminAuth };

