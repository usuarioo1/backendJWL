const express = require('express')

const {getDataForm, getDataFormById, createDataForm} = require('../controllers/dataformController')
const dataFormRoute = express.Router();

dataFormRoute.route('/dataform').get(getDataForm);
dataFormRoute.route('/dataform/:id').get(getDataFormById)
dataFormRoute.route('/createdataform').post(createDataForm)

module.exports = dataFormRoute;