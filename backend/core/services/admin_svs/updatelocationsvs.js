const speedLimitRef = require('../../../api/models/speedLimitRef');
const updatelocationsvs = () => {
  return async (req, res, next) => {
    try {
      console.log(req.body.payload);
      // find by id and update
      let _id = req.body.payload._id;
      let location = req.body.payload.location;
      let speedlimit = req.body.payload.speedlimit;
      let zipcode = req.body.payload.zipcode;
      let query = {
        location,
        speedlimit,
        zipcode,
      };
      await speedLimitRef.findByIdAndUpdate(
        req.body.payload._id,
        query,
        (error, docs) => {
          if (error) {
            console.log(error);
            res.send({ msg: 'error', res: error });
          } else {
            res.send({ msg: 'okay', res: docs });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = updatelocationsvs;
