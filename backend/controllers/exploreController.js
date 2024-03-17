const Place = require('../models/place');

const ExploreController = {
  explore: async (req, res) => {
    try {
      const { latitude, longitude, radius } = req.query;
      const places = await Place.find({
        location: {
          $geoWithin: {
            $centerSphere: [[longitude, latitude], radius / 6378.1] // Radius in kilometers
          }
        }
      });

        return res.status(200).json(places);
    } 
    catch (error) {
        return res.status(500).json({ error: 'Failed to explore nearby places', details: error.message });
    }
  },

  viewPlace: async (req, res) => {
    try {
        const { placeId } = req.params;
        const place = await Place.findById(placeId);
        if (!place) {
            return res.status(404).json({ error: 'Place not found' });
        }

        return res.status(200).json(place);
    } 
    catch (error) {
        return res.status(500).json({ error: 'Failed to view place details', details: error.message });
    }
  }
};

module.exports = ExploreController;
