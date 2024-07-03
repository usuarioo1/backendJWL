const express = require('express');
const { getBanner, postBanner, deleteBanner } = require('../controllers/bannerController');
const bannerRoute = express.Router();

bannerRoute.route('/banner')
    .get(getBanner)
    .post(postBanner);

bannerRoute.route('/banner/:id')
    .delete(deleteBanner);

module.exports = bannerRoute;
