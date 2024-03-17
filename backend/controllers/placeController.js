const Place = require('../models/place');

const placeController = {

  viewAllPlaces: async(req,res) => {
    try {
        const place = await Place.find();
        if (place.length==0) {
            return res.status(404).json({ error: 'No Place found' });
        }

        return res.status(200).json(place);
    } 
    catch (error) {
        return res.status(500).json({ error: 'Failed to view place details', details: error.message });
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
  },

  editPlace: async (req, res) => {
        try {
            const placeId = req.params.placeId;

            const updatedPlace = await User.findByIdAndUpdate(placeId, req.body, { new: true });
            if (!updatedPlace) {
                return res.status(404).json({ error: 'Post not found' });
            }

            return res.status(200).json(updatedPlace);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to update user profile', details: error.message });
        }
   },
   deletePlace: async (req, res) => {
        try {
            const placeId = req.params.placeId;

            const updatedPlace = await User.findByIdAndDelete(placeId);
            if (!updatedPlace) {
                return res.status(404).json({ error: 'Post not found' });
            }

            return res.status(200).json(updatedPlace);
        } 
        catch (error) {
            return res.status(500).json({ error: 'Failed to update user profile', details: error.message });
        }
   }
}
module.exports = placeController;
