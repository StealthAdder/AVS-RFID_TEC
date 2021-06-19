const express = require('express');
const router = express.Router();

const trackvehiclesvs = require('../../services/userportal_svs/trackvehiclesvs');
const searchvehiclesvs = require('../../services/userportal_svs/searchvehiclesvs');
// service
router.post('/searchTag', searchvehiclesvs());
router.post('/verify', trackvehiclesvs());

module.exports = router;
