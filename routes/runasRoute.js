const express = require('express');
const {getRunas, getRunaById, createRuna, updateRuna, deleteRuna} = require('../controllers/runasController')
const runaRoute = express.Router();

runaRoute.route('/runas').get(getRunas);
runaRoute.route('/runas/:id').get(getRunaById).put(updateRuna).delete(deleteRuna);
runaRoute.route('/createRuna').post(createRuna)

module.exports = runaRoute;
