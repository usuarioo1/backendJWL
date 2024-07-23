const express = require('express');
const {getMadreNaturaleza, getMadreNaturalezaById, createMadreNaturaleza, deleteMadreNaturaleza, updateMadreNaturaleza} = require('../controllers/madreNaturalezaController')
const madreNaturalezaRoute = express.Router();

madreNaturalezaRoute.route('/madreNaturaleza').get(getMadreNaturaleza);
madreNaturalezaRoute.route('/madreNaturaleza/:id').get(getMadreNaturalezaById).put(updateMadreNaturaleza).delete(deleteMadreNaturaleza)
madreNaturalezaRoute.route('/createMadreNaturaleza').post(createMadreNaturaleza)

module.exports = madreNaturalezaRoute;

