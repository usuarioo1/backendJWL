const express = require('express');
const {getCadenas, getCadenasById, createCadenas, deleteCadena, updateCadenas} = require('../controllers/cadenasController')
const cadenasRoute = express.Router();

cadenasRoute.route('/cadenas').get(getCadenas);
cadenasRoute.route('/cadenas/:id').get(getCadenasById).put(updateCadenas).delete(deleteCadena);
cadenasRoute.route('/createCadena').post(createCadenas);

module.exports = cadenasRoute;
