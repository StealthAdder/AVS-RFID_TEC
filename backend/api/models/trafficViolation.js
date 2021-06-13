const mongoose = require('mongoose');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  21
);

const trafficViolationSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    default: () => nanoid(),
  },
  violationType: {
    type: String,
    default: 'Traffic Signal Violation',
    required: true,
  },
  rf_tag: {
    type: String,
    required: true,
  },
  regdOwner: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  rfd_id: {
    type: String,
    required: true,
  },
  eventTime: {
    type: Date,
    required: true,
  },
  fineAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Open',
    required: true,
  },
});

const model = mongoose.model('trafficViolation', trafficViolationSchema);
module.exports = model;
