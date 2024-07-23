const express = require('express');
const {getArosPiedraNatural, getAroPiedraNaturalById, createAroPiedraNatual, deleteAroPiedraNatural, updateAroPiedraNatural} = require('../controllers/arosPiedrasNaturalesController')
const arosPiedraNaturalRoute = express.Router();

arosPiedraNaturalRoute.route('/arosPiedraNatural').get(getArosPiedraNatural);
arosPiedraNaturalRoute.route('/arosPiedraNatural/:id').get(getAroPiedraNaturalById).put(updateAroPiedraNatural).delete(deleteAroPiedraNatural)
arosPiedraNaturalRoute.route('/createAroPiedraNatural').post(createAroPiedraNatual)

module.exports = arosPiedraNaturalRoute;

