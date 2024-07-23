const express = require('express');
const { getCabala, getCabalaById, createCabala, updateCabala, deleteCabala} = require('../controllers/cabalaController')
const cabalaRoute = express.Router();

cabalaRoute.route('/cabala').get(getCabala);
cabalaRoute.route('/cabala/:id').get(getCabalaById).put(updateCabala).delete(deleteCabala)
cabalaRoute.route('/createCabala').post(createCabala)

module.exports = cabalaRoute;

