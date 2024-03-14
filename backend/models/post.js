const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    caption: { type: String, required: true },
    image: { type: String }, // You may adjust this field based on your requirements (e.g., store image URL or upload image file)
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }],
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
    }
},{timestamps:true});

// Add pre-save hook to update 'updatedAt' field
postSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Create Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
