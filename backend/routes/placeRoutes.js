const express = require('express');
const router = express.Router();
const PlaceController = require('../controllers/placeController');

// Routes for explore operations
router.get('/', PlaceController.viewAllPlaces);
router.get('/:placeId', PlaceController.viewPlace);
router.put('/:placeId', PlaceController.editPlace)
router.delete('/:placeId', PlaceController.deletePlace);

module.exports = router;
