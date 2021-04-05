const mongoose = require('mongoose');

// Create a obj using mongoose.Schema
const speedLimitRefSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  speedlimit: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('speedLimitRef', speedLimitRefSchema);
