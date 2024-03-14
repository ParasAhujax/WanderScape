const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// Routes for post CRUD operations
router.post('/posts', PostController.createPost);
router.get('/posts/:postId', PostController.getPost);
router.put('/posts/:postId', PostController.updatePost);
router.delete('/posts/:postId', PostController.deletePost);

module.exports = router;
