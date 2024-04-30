const express = require('express');
const {getAmuleto, getAmuletoById, createAmuleto, updateAmuleto, deleteAmuleto} = require('../controllers/amuletosController')
const amuletoRoute = express.Router();

amuletoRoute.route('/amuletos').get(getAmuleto);
amuletoRoute.route('amuletos/:id').get(getAmuletoById).put(updateAmuleto).delete(deleteAmuleto)
amuletoRoute.route('/createAmuleto').post(createAmuleto)

module.exports = amuletoRoute;

