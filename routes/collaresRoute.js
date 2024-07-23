const express = require('express');
const {getCollares, getCollarById, createCollar, deleteCollar, updateCollar} = require('../controllers/collaresController')
const collaresRoute = express.Router();

collaresRoute.route('/collares').get(getCollares);
collaresRoute.route('/collares/:id').get(getCollarById).put(updateCollar).delete(deleteCollar)
collaresRoute.route('/createCollares').post(createCollar)

module.exports = collaresRoute;

