const express = require('express');
const {getMadre, getMadreById, createMadre, updateMadre, deleteMadre} = require('../controllers/madresYninosController')
const madresRoute = express.Router();

madresRoute.route('/madres').get(getMadre);
madresRoute.route('madres/:id').get(getMadreById).put(updateMadre).delete(deleteMadre)
madresRoute.route('/createMadre').post(createMadre)

module.exports = madresRoute;

