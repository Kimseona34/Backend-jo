const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place_type: String,
  description: String,
  category: String,
  themes: [String],
  address: String,
  region: String,
  latitude: Number,
  longitude: Number,
  image_url: String,
  open_hours: String,
  fee_info: String
});

module.exports = mongoose.model('Place', placeSchema);