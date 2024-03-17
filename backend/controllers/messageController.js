const Message = require('../models/message');

const MessageController = {
    getMessages: async (req, res) => {
        try {
            const targetUserId = req.params.targetUserId;
            const userId = req.user._id; 

            const messages = await Message.find({ $and: [{ sender: userId }, { recipient: targetUserId }] });
            return res.status(200).json(messages);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to fetch messages', details: error.message });
        }
    },
    deleteChat: async (req, res) => {
        try {
            const targetUserId = req.params.targetUserId;
            const userId = req.user._id; 

            const messages = await Message.deleteMany({ $and: [{ sender: userId }, { recipient: targetUserId }] });
            return res.status(200).json(messages);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to fetch messages', details: error.message });
        }
    }
};

module.exports = MessageController;
