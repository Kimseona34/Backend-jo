const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controller');

router.get('/related-places', tourController.getRelatedPlaces);

module.exports = router;
