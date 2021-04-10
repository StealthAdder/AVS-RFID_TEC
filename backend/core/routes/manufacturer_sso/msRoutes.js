const express = require('express');
const router = express.Router();
const vehicleData = require('../../models/vehicleData');

// service
const addvehiclesvs = require('../../services/manufacturer_svs/addvehiclesvs');
const searchvehiclesvs = require('../../services/manufacturer_svs/searchvehiclesvs');
const updateinfosvs = require('../../services/manufacturer_svs/updateinfosvs');
const login = require('../../services/manufacturer_svs/login');
const checkAuth = require('../../middleware/check-auth');

router.post('/login', login());

router.post('/newVehicle', checkAuth, addvehiclesvs());

router.post('/searchTag', searchvehiclesvs());

router.patch('/updateInfo/:id', updateinfosvs());

module.exports = router;
