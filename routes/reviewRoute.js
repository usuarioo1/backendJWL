const express = require('express');
const {getReview, postReview, deleteReview} = require('../controllers/reviewController');
const reviewRoute = express.Router();

reviewRoute.route('/reviews')
    .get(getReview)
    .post(postReview)

reviewRoute.route('/review/:id')
    .delete(deleteReview)

module.exports = reviewRoute;