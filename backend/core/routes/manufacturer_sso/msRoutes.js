const express = require('express');
const router = express.Router();
const vehicleData = require('../../models/vehicleData');

// service
const addvehiclesvs = require('../../services/manufacturer_svs/addvehiclesvs');
const searchvehiclesvs = require('../../services/manufacturer_svs/searchvehiclesvs');

router.post('/newVehicle', (req, res) => {
  const data = req.body;
  addvehiclesvs(data);
  res.status(201).json({
    message: 'Request Processed',
    created: data,
  });
});

router.post('/searchTag', searchvehiclesvs(), (req, res, next) => {});

module.exports = router;
