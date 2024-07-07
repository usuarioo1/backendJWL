const express = require('express');

const { getDataForm, getDataFormById, createDataForm } = require('../controllers/dataformController');
const dataFormRoute = express.Router();

dataFormRoute.route('/dataform')
    .get(getDataForm)
    .post(createDataForm);

dataFormRoute.route('/dataform/:id')
    .get(getDataFormById);

module.exports = dataFormRoute;
