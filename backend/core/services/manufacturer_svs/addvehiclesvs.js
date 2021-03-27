const addvehiclesvs = async (data) => {
  // console.log(data);
  // DataModel
  const vehicleData = require('../../models/vehicleData');
  const vehicleInfo = {
    rf_tag: data.rf_tag,
    manufacturer: data.manufacturer,
    vehicleModel: data.model,
    yom: data.yom,
    engineNumber: data.engineNum,
    chassisNumber: data.chassisNum,
  };
  try {
    await vehicleData.create(vehicleInfo);
  } catch (err) {
    console.log(err);
  }
};

module.exports = addvehiclesvs;
