const rf_v = (arry) => {
    // console.log(arry)
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
}


module.exports = rf_v