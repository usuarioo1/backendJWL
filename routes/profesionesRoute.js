const express = require('express');
const {getProfeisones, getProfesionById, createProfesion, updateProfesion, deleteProfesion} = require('../controllers/profesionesController')
const profesionesRoute = express.Router();

profesionesRoute.route('/profesiones').get(getProfeisones);
profesionesRoute.route('/profesiones/:id').get(getProfesionById).put(updateProfesion).delete(deleteProfesion);
profesionesRoute.route('/createProfesion').post(createProfesion);

module.exports = profesionesRoute;
