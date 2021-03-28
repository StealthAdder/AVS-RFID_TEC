const express = require('express');
const router = express.Router();
const vehicleData = require('../../models/vehicleData');

// service
const addvehiclesvs = require('../../services/manufacturer_svs/addvehiclesvs');
const searchvehiclesvs = require('../../services/manufacturer_svs/searchvehiclesvs');

router.post('/newVehicle', addvehiclesvs());

router.post('/searchTag', searchvehiclesvs());

module.exports = router;
