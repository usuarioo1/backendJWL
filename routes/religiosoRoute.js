const express = require('express');
const {getReligioso, getReligiosoById, createReligioso, updateReligioso, deleteReligioso} = require('../controllers/religiosoController')
const religiosoRoute = express.Router();

religiosoRoute.route('/religioso').get(getReligioso);
religiosoRoute.route('/religioso/:id').get(getReligiosoById).put(updateReligioso).delete(deleteReligioso);
religiosoRoute.route('/createReligioso').post(createReligioso)

module.exports = religiosoRoute;

