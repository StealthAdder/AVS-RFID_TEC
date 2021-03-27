const express = require('express');
const router = express.Router();
const vehicleData = require('../../models/vehicleData');

// service
const addvehiclesvs = require('../../services/manufacturer_svs/addvehiclesvs');

router.post('/newVehicle', (req, res) => {
  const data = req.body;
  addvehiclesvs(data);
  res.status(201).json({
    message: 'Request Processed',
    created: data,
  });
});

module.exports = router;
