
const mongoose = require('mongoose');

const MarketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add other relevant fields here
});

module.exports = mongoose.model('Market', MarketSchema);
