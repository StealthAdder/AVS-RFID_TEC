const speedviolationCheck = async (location, arry) => {

    var objStartTime = null;
    var objStopTime  = null;

    objStartTime = new Date(arry[1])

    objStopTime = new Date(arry[0])
    var timeDifference = (objStopTime.getTime() - objStartTime.getTime());
    var differenceDate = new Date(timeDifference);
    var diffHours = differenceDate.getUTCHours();
    var diffMinutes = differenceDate.getUTCMinutes();
    var diffSeconds = differenceDate.getUTCSeconds();
    var readableDifference = diffHours + ':' + diffMinutes + ':' + diffSeconds;
    console.log(readableDifference)

    // consider the case
    // distance b/w RFID posts is 100m
    // speed time for the hebbal is 45km/h
    // so the another less then 8 second is a speed violation.
    // Get Speed Limit value by querying in DB. Create a collection with different speed limits set for diff location.
    const speedLimitRef = require('../models/speedLimitRef')

    const result = await speedLimitRef.findOne({location: location})
    // we have time and distance now calculate the speed
    const time = diffSeconds
    // console.log(diffSeconds)
    const distance = 100
    const speedLimit = result.speedlimit
    console.log(`SpeedLimti -> ${speedLimit}`)
    // formulae
    const speed = Math.floor((distance/time) * 3.6)
    console.log(`Speed Calculated -> ${speed}Km/h`)

    if (speed > speedLimit) {
        console.log(`Violation Ticket generated`)
    }
}

module.exports = speedviolationCheck