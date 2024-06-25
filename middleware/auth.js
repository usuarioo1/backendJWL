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

module.exports = { getToken, auth };
