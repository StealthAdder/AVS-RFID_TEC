const express = require('express');
const router = express.Router();
const vehicleData = require('../../core/models/vehicleData');
const fineRef = require('../models/fineRef');
const moment = require('moment');
const violationMailer = require('../functions/violationMailer');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  21
);
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
    const vehicle = await vehicleData.findOne({ rf_tag: req.body.rf_tag });
    const fineData = await fineRef.findOne({
      violationType: 'Traffic Signal Violation',
    });
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    let violationData = {
      _id: nanoid(),
      violationType: 'Traffic Signal Violation',
      location: req.body.location,
      zipcode: req.body.zipcode,
      notes: 'Signal Jump was Detected',
      eventTime: date,
      fineAmount: fineData.fineAmount,
    };
    let query = { rf_tag: req.body.rf_tag };
    let violationEvent = {
      $push: {
        violation: violationData,
      },
    };
    let options = { new: true };
    const event = await vehicleData.updateOne(query, violationEvent, options);
    done(null, event);
    console.log(`Traffic violation recorded for ${req.body.rf_tag}`);
    await violationMailer(vehicle, violationData);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
