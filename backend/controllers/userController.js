// const User = require('../models/user');

// const UserController = {
//     getAllUsers: async (req, res) => {
//         try {
//             const user = await User.find();
//             if (user.length==0) {
//             return res.status(404).json({ error: 'No Users found' });
//             }
//             return res.status(200).json(user);
//         } 
//         catch (error) {
//             return res.status(500).json({ error: 'Failed to fetch user', details: error.message });
//         }
//     },
    
//     getUser: async (req, res) => {
//         try {
//             const { userId } = req.params;
//             const user = await User.findById(userId);
//             if (!user) {
//                 return res.status(404).json({ error: 'User not found' });
//             }
//             return res.status(200).json(user);
//         } 
//         catch (error) {
//             return res.status(500).json({ error: 'Failed to fetch user', details: error.message });
//         }
//     },

//     updateUser: async (req, res) => {
//         try {
//             const { userId } = req.params;
//             const updatedUser = await User.findOneAndUpdate(
//                 {_id:userId},
//                 {$set:req.body}, 
//                 // { new: true }   updatedAt didnt change when
//             );
//             await updatedUser.save();

//             if (!updatedUser) {
//                 return res.status(404).json({ error: 'User not found' });
//             }
            
//             return res.status(200).json(updatedUser);
//         } 
//         catch (error) {
//             return res.status(500).json({ error: 'Failed to update user', details: error.message });
//         }
//     },

//     deleteUser: async (req, res) => {
//         try {
//             const  userId  = req.user._id1;
//             const deletedUser = await User.findByIdAndDelete(userId);
//             if (!deletedUser) {
//                 return res.status(404).json({ error: 'User not found' });
//             }
//             return res.status(200).json({ message: 'User deleted successfully' });
//         } 
//         catch (error) {
//             return res.status(500).json({ error: 'Failed to delete user', details: error.message });
//         }
//     }
// };

// module.exports = UserController;
