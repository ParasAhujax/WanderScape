const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');
const User = require('../models/user')

// Routes for message operations
router.get('/sendMessage/:targetUserId', async(req, res) => {
    const currUser = req.user._id;
    const otherUser = req.params.targetUserId;

    res.json({
        currUser:currUser,
        otherUser:otherUser,
    })   
})
router.get('/messages/:targetUserId', MessageController.getMessages); 
router.delete('/messages/:targetUserId/deleteChat',MessageController.deleteChat);

module.exports = router;
