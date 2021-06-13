const mongoose = require('mongoose');

const fineRefSchema = new mongoose.Schema({
  violationType: {
    type: String,
  },
  fineAmount: {
    type: String,
  },
});

const model = mongoose.model('fineRef', fineRefSchema);

module.exports = model;
