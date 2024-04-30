const express = require('express');
const {getNinoEla, getNinoById, createNinoEla, updateNinoEla, deleteNinoEla} = require('../controllers/ninosElaController')
const ninosRoute = express.Router();

ninosRoute.route('/ninos').get(getNinoEla);
ninosRoute.route('ninos/:id').get(getNinoById).put(updateNinoEla).delete(deleteNinoEla);
ninosRoute.route('/createNino').post(createNinoEla)

module.exports = ninosRoute;

