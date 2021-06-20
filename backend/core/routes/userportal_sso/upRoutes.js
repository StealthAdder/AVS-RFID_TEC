const express = require('express');
const router = express.Router();

const trackvehiclesvs = require('../../services/userportal_svs/trackvehiclesvs');
const searchvehiclesvs = require('../../services/userportal_svs/searchvehiclesvs');
const paymentprocesssvs = require('../../services/userportal_svs/paymentprocesssvs');
const tracksvs = require('../../services/userportal_svs/tracksvs');
// service
router.post('/searchTag', searchvehiclesvs());
router.post('/verify', trackvehiclesvs());
router.post('/payment', paymentprocesssvs());
router.post('/track', tracksvs());

module.exports = router;
