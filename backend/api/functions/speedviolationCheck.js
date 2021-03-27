const speedviolationCheck = async (req, arry) => {
  const speedLimitRef = require('../models/speedLimitRef');
  const speedViolation = require('../models/speedViolation');
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
    var date = new Date();
    const violationEvent = {
      rf_tag: req.body.rf_tag,
      location: req.body.location,
      speedRecorded: speed + 'Km/h',
      eventTime: date,
    };

    try {
      const event = await speedViolation.create(violationEvent);
      console.log(`Violation Ticket generated for ${req.body.rf_tag}`);
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = speedviolationCheck;
