const addvehiclesvs = () => {
  return async (req, res, next) => {
    const data = req.body;
    const vehicleData = require('../../models/vehicleData');
    const vehicleInfo = {
      rf_tag: data.rf_tag,
      manufacturer: data.manufacturer,
      vehicleModel: data.model,
      engineType: data.type,
      yom: data.yom,
      engineNumber: data.engineNum,
      chassisNumber: data.chassisNum,
    };
    try {
      await vehicleData.create(vehicleInfo);
      res.status(201).json({
        msg: 'Data Processed',
      });
    } catch (err) {
      console.log(err);
      res.status(200).json({
        msg: 'Something went wrong',
      });
    }
    next();
  };
};

module.exports = addvehiclesvs;
