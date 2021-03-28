const searchvehiclesvs = () => {
  return async (req, res, next) => {
    const vehicleData = require('../../models/vehicleData');
    const tag = req.body.rf_tag;
    const searchResult = await vehicleData.findOne({ rf_tag: tag });
    if (searchResult === null) {
      res.status(200).json({
        err: 'Not Found! X_X',
      });
    } else {
      res.status(200).json({
        searchResult: searchResult,
      });
    }
    next();
  };
};

module.exports = searchvehiclesvs;
