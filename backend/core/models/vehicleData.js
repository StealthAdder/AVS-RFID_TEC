const mongoose = require('mongoose');

const violationDetailSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    violationType: {
      type: String,
    },
    eventTime: {
      type: String,
    },
    location: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    fineAmount: {
      type: Number,
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      default: 'UNPAID',
    },
  },
  { minimize: false }
);

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
  email: {
    type: String,
    default: 'UNREGISTERED',
  },
  address: {
    type: String,
    default: 'UNREGISTERED',
  },
  violation: [violationDetailSchema],
});

const model = mongoose.model('vehicleData', vehicleDataSchema);
module.exports = model;
