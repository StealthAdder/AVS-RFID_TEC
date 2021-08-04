const speedLimitRef = require('../../../api/models/speedLimitRef');
const searchlocationsvs = () => {
  return async (req, res, next) => {
    // console.log(req.body.location.toUpperCase());

    try {
      let result = await speedLimitRef.findOne({
        zipcode: req.body.location.toUpperCase(),
      });
      if (result === null) {
        result = await speedLimitRef.findOne({
          location: req.body.location.toUpperCase(),
        });
        if (result === null) {
          result = 'Not found';
        }
      }
      console.log(result);
      res.send({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = searchlocationsvs;
