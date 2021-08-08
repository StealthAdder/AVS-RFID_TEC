const speedviolationCheck = async (req, arry) => {
  const speedLimitRef = require('../models/speedLimitRef');
  const vehicleData = require('../../core/models/vehicleData');
  const fineRef = require('../models/fineRef');
  const moment = require('moment');
  const violationMailer = require('./violationMailer');
  const { customAlphabet } = require('nanoid');
  const nanoid = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    21
  );
  var objStartTime = new Date(arry[1]);

  var objStopTime = new Date(arry[0]);
  var timeDifference = objStopTime.getTime() - objStartTime.getTime();
  var differenceDate = new Date(timeDifference);
  var diffHours = differenceDate.getUTCHours();
  var diffMinutes = differenceDate.getUTCMinutes();
  var diffSeconds = differenceDate.getUTCSeconds();
  var readableDifference = diffHours + ':' + diffMinutes + ':' + diffSeconds;
  // console.log(readableDifference)

  // consider the case
  // distance b/w RFID posts is 100m
  // speed time for the hebbal is 45km/h
  // so the another less then 8 second is a speed violation.
  // Get Speed Limit value by querying in DB. Create a collection with different speed limits set for diff location.

  // test
  // console.log(`From the req->${req.body.rf_tag}`)

  const result = await speedLimitRef.findOne({ location: req.body.location });
  // we have time and distance now calculate the speed

  const time = diffSeconds + 60 * diffMinutes;
  console.log(`Time elasped ${time}s`);
  const distance = 100;
  const speedLimit = result.speedlimit;
  console.log(`SpeedLimit for ${req.body.location} -> ${speedLimit}`);
  // formulae
  const speed = Math.floor((distance / time) * 3.6);
  console.log(`Speed Calculated -> ${speed}Km/h`);

  if (speed > speedLimit) {
    // get vehicle information
    try {
      const vehicle = await vehicleData.findOne({ rf_tag: req.body.rf_tag });
      const fineData = await fineRef.findOne({
        violationType: 'Speeding Violation',
      });
      // console.log(vehicle);
      // console.log(fineData);

      try {
        var date = moment().format('MMMM Do YYYY, h:mm:ss a');
        let query = { rf_tag: req.body.rf_tag };
        let violationData = {
          _id: nanoid(),
          violationType: 'Speeding Violation',
          location: req.body.location,
          zipcode: req.body.zipcode,
          notes: speed + 'Km/h Speed Recorded',
          eventTime: date,
          fineAmount: fineData.fineAmount,
        };
        let violationEvent = {
          $push: {
            violation: violationData,
          },
        };
        let options = { new: true };
        const event = await vehicleData.updateOne(
          query,
          violationEvent,
          options
        );
        console.log(`Violation Ticket generated for ${req.body.rf_tag}`);
        await violationMailer(vehicle, violationData);
      } catch (err) {
        console.error(err);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = speedviolationCheck;
