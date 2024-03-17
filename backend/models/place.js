const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Place schema
const placeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

// Add pre-save hook to update 'updatedAt' field
placeSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Index for geospatial queries
placeSchema.index({ location: '2dsphere' });

// Create Place model
const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
