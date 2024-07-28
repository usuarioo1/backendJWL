const express = require('express');
const { getColgantesPiedrasNaturales, getColgantePiedraNaturalById, createColgantePiedraNatural, updateColgantePiedraNatural, deleteColgantePiedraNatural} = require('../controllers/colgantesPiedrasNaturalesController')
const colgantesPiedrasNaturalesRoute = express.Router();

colgantesPiedrasNaturalesRoute.route('/colgantes').get(getColgantesPiedrasNaturales);
colgantesPiedrasNaturalesRoute.route('/colgantePiedrasNaturales/:id').get(getColgantePiedraNaturalById).put(updateColgantePiedraNatural).delete(deleteColgantePiedraNatural)
colgantesPiedrasNaturalesRoute.route('/createColgantePiedrasNaturales').post(createColgantePiedraNatural)

module.exports = colgantesPiedrasNaturalesRoute;

