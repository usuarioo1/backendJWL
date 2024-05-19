const express = require('express');
const {createCart} = require("../controllers/cart");
const runaRoute = express.Router();


runaRoute.route('/cart').post(createCart)

module.exports = runaRoute;
