const mongoose = require('mongoose');

const vehicleDataSchema = new mongoose.Schema({
  rf_tag: {
    type: String,
    required: true,
    unique: true,
  },
  manufacturer: {
    type: String,
  },
  vehicleModel: {
    type: String,
  },
  yom: {
    type: String,
  },
  engineType: {
    type: String,
  },
  engineNumber: {
    type: String,
  },
  chassisNumber: {
    type: String,
  },
  RC: {
    type: String,
    default: 'UNREGISTERED',
  },
  regdOwner: {
    type: String,
    default: 'UNREGISTERED',
  },
  DL: {
    type: String,
    default: 'UNREGISTERED',
  },
  phone: {
    type: String,
    default: 'UNREGISTERED',
  },
  address: {
    type: String,
    default: 'UNREGISTERED',
  },
});

const model = mongoose.model('vehicleData', vehicleDataSchema);
module.exports = model;
