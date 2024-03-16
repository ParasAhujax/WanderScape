const User = require('../models/user');

const ProfileController = {
    viewProfile: async (req, res) => {
        try {
            const { username } = req.params;
            const user = await User.findOne({ username }).populate('followers', 'username').populate('following', 'username');
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const userData = {
                followers: user.followers,
                following: user.following
            } 
            return res.status(200).json(userData);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to fetch user profile', details: error.message });
        }
    },

    editProfile: async (req, res) => {
        try {
            const userId = req.user._id;

            if(req.body.email){
                const emailExists = await User.findOne({ email: req.body.email });
                if (emailExists) {
                    return res.status(200).json({error: 'Email already exists'});
                }
            }
            if(req.body.username){
                const usernameExists = await User.findOne({ username: req.body.username });
                if (usernameExists) {
                    return res.status(200).json({error: 'Username already exists'});
                }
            }

            const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.status(200).json(updatedUser);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to update user profile', details: error.message });
        }
    },

    followUser: async (req, res) => {
        try {
            const targetUserName  = req.params.username;
            const targetUser = await User.findOne({username: targetUserName});

            console.log(req.user);

            const userId = req.user._id;
            const user = await User.findById(userId);

            if (!user || !targetUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            if(user==targetUser) {
                return res.status(200).json({error: 'cannot follow yourself'});
            }
            if(user.following.indexOf(targetUser._id) != -1){
                return res.json({error: 'already following this user'})
            }

            user.following.push(targetUser._id);
            targetUser.followers.push(user._id);

            await user.save();
            await targetUser.save();

            return res.status(200).json({ message: 'User followed successfully' });
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to follow user', details: error.message });
        }
    },

    unfollowUser: async (req, res) => {
        try {
            const targetUserName  = req.params.username;

            const userId = req.user._id;
            const user = await User.findById(userId);

            const targetUser = await User.findOne({username: targetUserName});
            
            if (!user || !targetUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            if(user==targetUser) {
                return res.status(200).json({error: 'cannot unfollow yourself'});
            }
            if(user.following.indexOf(targetUser._id) == -1){
                return res.json({error: 'you are not following this user'})
            }

            user.following.pull(targetUser._id);
            targetUser.followers.pull(user._id);

            await user.save();
            await targetUser.save();
            
            return res.status(200).json({ message: 'User unfollowed successfully' });
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to unfollow user', details: error.message });
        }
    }
};

module.exports = ProfileController;
