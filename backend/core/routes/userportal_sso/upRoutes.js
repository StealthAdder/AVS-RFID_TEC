const express = require('express');
const router = express.Router();
const vehicleData = require('../../models/vehicleData');
const searchvehiclesvs = require('../../services/userportal_svs/searchvehiclesvs');
// service
router.post('/searchTag', searchvehiclesvs());

module.exports = router;
