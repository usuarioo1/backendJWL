const express = require('express');
const {getAnillo, getAnilloById, createAnillo, updateAnillo, deleteAnillo} = require('../controllers/AnillosController')
const anillosRoute = express.Router();

anillosRoute.route('/anillos').get(getAnillo);
anillosRoute.route('/anillos/:id').get(getAnilloById).put(updateAnillo).delete(deleteAnillo)
anillosRoute.route('/createAnillo').post(createAnillo)

module.exports = anillosRoute;

