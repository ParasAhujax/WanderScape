const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');

// Routes for profile operations
router.get('/:username', ProfileController.viewProfile);
router.put('/edit', ProfileController.editProfile);
router.post('/:username/follow', ProfileController.followUser);
router.post('/:username/unfollow', ProfileController.unfollowUser);

module.exports = router;
