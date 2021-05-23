const express = require('express');
const router = express.Router();
const trafficViolation = require('../models/trafficViolation');
const vehicleData = require('../../core/models/vehicleData');

// JSON Middle
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.status(200);
  res.json({
    message: 'Api v0.0.2 rftraffic Route Active and Listening',
  });
});

// @desc route for rfdata feed
// @route POST /api/rftraffic
router.post('/', async (req, res, done) => {
  try {
    const vehicle = await vehicleData.find({ rf_tag: req.body.rf_tag });
    var date = new Date();
    const newEvent = {
      rf_tag: req.body.rf_tag,
      regdOwner: vehicle[0].regdOwner,
      vehicleModel: vehicle[0].manufacturer + ' ' + vehicle[0].vehicleModel,
      location: req.body.location,
      zipcode: req.body.zipcode,
      rfd_id: req.body.rfd_id,
      eventTime: date,
    };
    try {
      let event = await trafficViolation.create(newEvent);
      done(null, event);
      console.log(`Traffic violation recorded for ${req.body.rf_tag}`);
      res.status(201).json({
        message: 'Event Recorded',
        createdEntry: event,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
