const express = require('express');
const router = express.Router();
const ExploreController = require('../controllers/exploreController');

// Routes for explore operations
router.get('/explore', ExploreController.explore);
router.get('/explore/:placeId', ExploreController.viewPlace);

module.exports = router;
