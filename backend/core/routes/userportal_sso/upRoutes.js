const express = require('express');
const router = express.Router();

const trackvehiclesvs = require('../../services/userportal_svs/trackvehiclesvs');
const searchvehiclesvs = require('../../services/userportal_svs/searchvehiclesvs');
const paymentprocesssvs = require('../../services/userportal_svs/paymentprocesssvs');
// service
router.post('/searchTag', searchvehiclesvs());
router.post('/verify', trackvehiclesvs());
router.post('/payment', paymentprocesssvs());

module.exports = router;
