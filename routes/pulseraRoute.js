const express = require('express');
const {getPulseras, getPulseraById, createPulsera, deletePulsera, updatePulsera} = require('../controllers/pulseraController')
const pulserasRoute = express.Router();

pulserasRoute.route('/pulseras').get(getPulseras);
pulserasRoute.route('/pulseras/:id').get(getPulseraById).put(updatePulsera).delete(deletePulsera)
pulserasRoute.route('/createAnillo').post(createPulsera)

module.exports = pulserasRoute;

