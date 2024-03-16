const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  profilePicture: { type: String },
  followers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  
},{timestamps:true});

// Add pre-save hook to update 'updatedAt' field
userSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Create User model
const User = mongoose.model('user', userSchema);

module.exports = User;
