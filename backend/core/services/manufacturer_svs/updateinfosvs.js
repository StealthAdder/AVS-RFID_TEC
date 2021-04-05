const updateinfosvs = () => {
  return async (req, res, next) => {
    const vehicleData = require('../../models/vehicleData');
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await vehicleData.findByIdAndUpdate(id, updates, options);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
    next();
  };
};

module.exports = updateinfosvs;
