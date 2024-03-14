const Post = require('../models/post');
const User = require('../models/user');

const PostController = {
  createPost: async (req, res) => {
        try {
            const userId = req.user._id;            
            const { caption, image, location } = req.body;
            // Check if user exists
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const newPost = new Post({
                user: userId,
                caption,
                image,
                location
            });
            
            await newPost.save();
            res.status(201).json({ message: 'Post created successfully', post: newPost });
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to create post', details: error.message });
        }
    },

    getPost: async (req, res) => {
        try {
            const { postId } = req.params;
            const post = await Post.findById(postId);

            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.status(200).json(post);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to fetch post', details: error.message });
        }
    },

    updatePost: async (req, res) => {
        try {
            const { postId } = req.params;
            const updatedPost = await Post.findByIdAndUpdate(
                postId, 
                req.body, 
                {new:true}
            );
            if (!updatedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }
            // await updatedPost.save();
            return res.status(200).json(updatedPost);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to update post', details: error.message });
        }
    },

    deletePost: async (req, res) => {
        try {
            const { postId } = req.params;
            const deletedPost = await Post.findByIdAndDelete(postId);
            if (!deletedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }
            return res.status(200).json({ message: 'Post deleted successfully' });
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to delete post', details: error.message });
        }
    }
};

module.exports = PostController;
