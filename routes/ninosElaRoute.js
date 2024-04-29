const express = require('express');
const {getNinoEla, getNinoById} = require('../controllers/ninosElaController')
const ninosRoute = express.Router();

ninosRoute.route('/ninos').get(getNinoEla);
ninosRoute.route('ninos/:id').get(getNinoEla);

module.exports = ninosRoute;

